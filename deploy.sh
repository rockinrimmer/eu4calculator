#!/bin/bash
ls -l
echo $FTP_USER
curl --ftp-create-dirs -T ./dist/* -u $FTP_USER:$FTP_PASSWORD ftp://$IP_ADDRESS/eu4calculator.com/
