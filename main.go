package main

import (
	"embed"
	"errors"
	"fmt"
	"io/fs"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"os/exec"
	"runtime"
	"time"
	"xwetab/middleware"

	"github.com/gin-gonic/gin"
)

//go:embed wetab.crx
var wetabCrxFS embed.FS

func main() {
	embedGin("10446")
	// directGin()
	// ListEmbedFS(wetabCrxFS)

}

// 此接口目的：解决跨域请求返回403，
// 功能:在js，css文件中的url字符串前添加 'http://127.0.0.1:8080?url=' 字符串，
// 发送的Get请求，转发到到golang 程序，请求后再将响应返回，类请求代理服务器功能。
func HandlerRequest(c *gin.Context) {
	urlStr := c.DefaultQuery("url", "")
	if urlStr == "" {
		c.String(200, "url参数为空")
		return
	}
	urlStruct, _ := url.Parse(urlStr)
	client := http.DefaultClient
	req := http.Request{
		Method: "GET",
		URL:    urlStruct,
	}
	response, err := client.Do(&req)
	if err != nil {
		c.String(200, err.Error())
		return
	}
	defer response.Body.Close()
	contentType := "text/plain"
	for k, v := range response.Header {
		if len(v) > 0 {
			c.Writer.Header().Set(k, v[0])
			// fmt.Println(k, v[0])
			if k == "Content-Type" {
				contentType = v[0]
			}
		}

	}
	bodyByte, err := ioutil.ReadAll(response.Body)
	if err != nil {
		c.String(200, err.Error())
	}

	c.Data(200, contentType, bodyByte)

}

func directGin(port string) {
	g := gin.Default()

	g.StaticFS("/assets", http.Dir("./wetab.crx/assets"))
	g.StaticFS("/games", http.Dir("./wetab.crx/games"))
	g.StaticFS("/hitab", http.Dir("./wetab.crx/hitab"))
	g.StaticFS("/icons", http.Dir("./wetab.crx/icons"))
	g.StaticFS("/popup", http.Dir("./wetab.crx/popup"))

	g.StaticFile("/serviceworker.js", "./wetab.crx/serviceworker.js")
	g.StaticFile("/favicon.ico", "./wetab.crx/icons/favicon.ico")
	g.StaticFile("/", "./wetab.crx/hitab/golang.start.html")

	g.GET("/get", HandlerRequest)
	g.Run(fmt.Sprintf(":%s", port))

}

func embedGin(port string) {
	r := gin.Default()
	// 中间件解决了直接将wetab.crx 当做静态目录的根目录，只能读文件，无法列举目录内容，代替gin.StaticFS()实现的功能
	r.Use(middleware.Serve("/", middleware.EmbedFolder(wetabCrxFS, "wetab.crx")))
	r.GET("/", func(c *gin.Context) {
		data, err := wetabCrxFS.ReadFile("wetab.crx/hitab/golang.start.html")
		if err != nil {
			c.AbortWithError(http.StatusInternalServerError, err)
			return
		}
		c.Data(200, "text/html; chartset=utf-8", data)
	})
	r.GET("/get", HandlerRequest)
	// Ping the server to make sure the router is working.
	go func() {
		if err := pingServer(fmt.Sprintf("http://127.0.0.1:%s", port)); err != nil {
			log.Fatal("The router has no response, or it might took too long to start up.", err)
		}
		log.Println("The router has been deployed successfully.")
	}()
	r.Run(fmt.Sprintf(":%s", port))

}

func ListEmbedFS(subFS embed.FS) {
	// 在子文件系统中遍历文件和目录
	err := fs.WalkDir(subFS, ".", func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}

		fmt.Println(path)
		return nil
	})
	if err != nil {
		fmt.Println(err)
		return
	}
}

// 用默认浏览器打开网站
func openWebsite(url string) {
	var cmd *exec.Cmd
	switch runtime.GOOS {
	case "windows":
		cmd = exec.Command("cmd", "/c", "start", url)
	case "darwin": // macOS
		cmd = exec.Command("open", url)
	default: // Linux 和其他Unix-like系统
		cmd = exec.Command("xdg-open", url)
	}

	err := cmd.Start()
	if err != nil {
		log.Fatal(err)
	}
}

// pingServer 确保 http server是工作的.
func pingServer(url string) error {
	for i := 0; i < 5; i++ {
		resp, err := http.Get(url)
		if err == nil && resp.StatusCode == 200 {
			fmt.Printf("在浏览器中打开：%s\n", url)
			openWebsite(url)
			return nil
		}

		// 等待间隔
		fmt.Println("Waiting for the router, retry in 1 second.")
		time.Sleep(time.Second)
	}

	return errors.New("Cannot connect to the router.")
}
