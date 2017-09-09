#!/bin/bash
curl --ftp-create-dirs -T ./* -u $FTP_USER:$FTP_PASSWORD ftp://$IP_ADDRESS/eu4calculator.com/
