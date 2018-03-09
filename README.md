## 说明

这是目前最新(2017-08)可用的微信公众号订阅号/服务号后台（nodejs版本）

基于nodejs+koa框架搭建

目的在于尝试nodejs开发环境下搭建打通微信公众号的自建服务器服务功能。


## 计划

+ 实现用户关注公众号即时返回随机消息

+ 实现根据用户发送给公众号的消息类型进行对应的反馈
	+ 文本消息：自动回复复制的文本
	+ 图片消息：待定
	+ 视频消息：待定

+ 实现用户关注即存储用户ID，与第三方站点用户系统打通，设定用户的网站角色（如：关注即成为用户，关注即获得权限等）

+ 实现公众号资料自助查阅（通过发送关键字获取匹配的图文资料信息）

## 进度

[√] 用户关注则返回预定文本消息
[√] 用户发送文本消息则回复相同内容的文本消息
