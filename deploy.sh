#!/bin/bash
find dist -type f -exec curl --ftp-create-dirs -T {} -u $FTP_USER:$FTP_PASSWORD ftp://${IP_ADDRESS}/eu4calculator.com/{} -Q '-SITE CHMOD 644 /eu4calculator.com/{}' \;
