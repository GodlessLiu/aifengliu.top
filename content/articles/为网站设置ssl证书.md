---
title: '使用阿里云为网站设置ssl证书'
description: '使用阿里云为网站设置ssl证书'
duration: '5min'
date: '2023-10-12T10:35:00.723Z'
---

## 申请ssl证书
我是通过阿里云获得的[ssl](https://yundun.console.aliyun.com/?spm=0.2020520163.top-nav.29.62b1NmjpNmjp7e&p=cas#/certExtend/free/cn-hangzhou)证书,申请后下载nginx版本的pem、key文件。
## 在服务器终端下载nginx
`yum install nginx -y`
## 修改nginx配置
### 建一个存放文件密钥文件夹
将申请获得的文件放在，在`/usr/data/nginx/sect`文件夹下
### 修改nginx配置
[当我们访问http协议时，重定向到https下]{style="color: red"}
```nginx
# 强制重定向 
server { 
	listen 80; # 监听80端口 
	server_name halo.leader755.com; # 自己的域名 
	#把http的域名请求转成https 
	return 301 https://$host$request_uri; 
} 
server { 
	listen 443 ssl; 
	server_name halo.leader755.com; # 自己的域名 
	# 配置 ssl 
	ssl_certificate /usr/data/nginx/sect/halo.leader755.com.pem; 
	# pem文件的路径 
	ssl_certificate_key /usr/data/nginx/sect/halo.leader755.com.key; # key文件的路径 
	ssl_session_timeout 5m; 
	ssl_protocols TLSv1 TLSv1.1 TLSv1.2; 
	ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE; 
	ssl_prefer_server_ciphers on;
	client_max_body_size 1024m; 
	location / { 
		proxy_set_header HOST $host;
		proxy_set_header X-Forwarded-Proto $scheme; 
		proxy_set_header X-Real-IP $remote_addr; 
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; 
		proxy_pass http://xx.xxx.xxx.xx:8090/; # 这里改为自己服务器ip 
	} 
}
```