---
title: '初始化Centos8'
description: '我的初始化服务器的配置'
duration: '2min'
date: '2024-05-24T09:40:00.723Z'
---

```bash
# 安装docker
yum install docker
# 安装nvm  
sudo yum install curl
curl -o-  https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bash_profile
# 安装node18
nvm install 18
node --v
npm --v
# 安装pm2
npm i pm2 -g
# 安装nginx
yum install nginx
```