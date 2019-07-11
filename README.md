# Todo-List
A modern web application for procrastinators to set up their to-do jobs~

Driven by Django + React


# 整体效果

列出所有的待办事项:

![p1](http://wx1.sinaimg.cn/large/8bcd582bly1g4vtxzg64yg21hc0u04qp.gif)  

增加一个待办事项(可设置优先级及 expire date):

![p2](http://wx1.sinaimg.cn/large/8bcd582bly1g4vtxzwzytg21hc0u0kjl.gif)  

编辑一个待办事项的具体内容:

![p3](http://wx2.sinaimg.cn/large/8bcd582bly1g4vtxzqh6hg21hc0u07wh.gif)  

标记一个待办事项为已完成:

![p4](http://wx3.sinaimg.cn/large/8bcd582bly1g4vtxzfbpgg21hc0u0kcd.gif)  

删除一个待办事项:

![p5](http://wx2.sinaimg.cn/large/8bcd582bly1g4vtxzipdfg21hc0u0h5q.gif)  

列表界面支持翻页:

![p6](http://wx2.sinaimg.cn/large/8bcd582bly1g4vtxz2nhhg21hc0u0n9v.gif)


# 技术栈

## 后端技术栈

1. Django  
2. Django REST Framework  
3. PostgreSQL  

## 前端技术栈

1. React  
2. axios


# 更新记录

## 2019.07.05 更新

搭建 Django 及 React 后台配置环境

## 2019.07.06 更新

建立 React 代码架构

## 2019.07.07 更新

通过 PostgreSQL 建立所需数据库模型并建立 ORM 模型

## 2019.07.08 更新

实现 GET 功能

## 2019.07.09 更新

实现 POST 及 DELETE 功能，解决 DRF 中数据序列化问题

## 2019.07.10 更新

实现 PUT 功能，包括修改task具体内容及标记一个待办事项为已完成

## 2019.07.11 更新

修改日期显示格式

## TODO

将服务部署到 AWS 上并成功运行

实现基于不同 schema 的排序功能(expire date, priority)

实现 task 的拖拽化（参考 trello, jira）


 
