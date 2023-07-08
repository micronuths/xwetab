rm -rf "$(pwd)/service.file/xwetab.service" /etc/systemd/system/xwetab.service
mkdir -p "$(pwd)/service.file"
echo "\
[Unit]
Description=xwetab
After=network.target
 
[Service]
Type=simple
WorkingDirectory=$(pwd)
ExecStart=$(pwd)/xwetab
Restart=on-failure
 
[Install]
WantedBy=multi-user.target\
" >> "$(pwd)/service.file/xwetab.service"

cp $(pwd)/service.file/xwetab.service /etc/systemd/system/
systemctl daemon-reload
systemctl enable xwetab.service