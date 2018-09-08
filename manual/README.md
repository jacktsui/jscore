# 有道搜题录题助手手册
脚本版本: v0.612, by 徐。<br>

## 前言
如果你已经安装了 chrome油猴插件,直接点击:  
https://gitee.com/jacktsui/xusqa/raw/master/xusqa.user.js  
下一秒就可以使用本脚本  


如果没有安装油猴插件,请下载:  
[油猴离线安装包](https://gitee.com/jacktsui/xusqa/raw/master/manual/tm.zip)  
![iamge](manual/crxhelp.png)  
插件路径：刚下载的压缩包里就有，解压到哪里就去哪里找！  


3秒钟搞定,确认安装成功后,在chrome地址栏输入:  
chrome://extensions/  
打开chrome插件管理器，启用油猴插件  
然后点击：  
https://gitee.com/jacktsui/xusqa/raw/master/xusqa.user.js  
安装脚本  



## 目录  
[最近更新](#最近更新)  
[基本功能介绍](#基本功能介绍)  
[智能整理](#智能整理)  
[安装前准备](#安装前准备)  
[安装](#安装)  
[脚本自动更新](#脚本自动更新)  

**因脚本在持续更新，部分截图可能和最新版本有出入**

### 最近更新
- **`最近更新：2018.07.17 添加放大镜(书本大纸张时看不清)和框选文字(用于替代系统框选不准)功能。及其他系统优化`**    
![image](manual/qinput.png)
![image](manual/glass.png)
- **`最近更新：2018.07.10 添加框选截图功能。`**  
现在可以直接在录题界面截图了，不用使用外部工具来回切换了，题目的截图自动插入题目录入框，答案的截图直接插入解析录入框。配合QQ截图(ctrl+alt+a,qq截图后会自动复制到剪切板，在编辑框按ctr+v就可以粘贴，也很方便，但一占用了剪切板，二图小的时候截的图太小)食用效果更佳。  
![image](manual/snap.png)
- **`最近更新：2018.07.07 定位答案添加定位到“上次位置”`**。  
![image](manual/locateanswer.png)

### 未来计划
**未来计划: 重点维护一键智能整理功能,提高录题效率是脚本的终极目标**

### 基本功能介绍
本助手为油猴(Tampermonkey)脚本，主要功能有：
- 一键领取任务
- 增强任务广场，任务数量以角标显示
- 任务报告：汇总录入和审核情况
- 一键智能整理  
![image](manual/feature.png)
(功能图)

### 智能整理
实验性功能:  
可以自动排版,修复部分OCR识别错误,自动添加分隔符,换行,上下角标等等;整理前最好先把一些关键字符的识别错误进行修正,用好了可以提高不少效率.  
部分功能展示
- 英语  
![image](manual/english1.gif)  
![image](manual/english2.gif)

- 化学  
![image](manual/chemistry1.gif)

- 数学  
![image](manual/math1.gif)

### 安装前准备

  &nbsp; | 准备
---|---
<img src="manual/chrome-only-icon.jpg" width="80"> | **chrome 浏览器**<br> 建议使用官方推荐的 chrome 浏览器，下载地址：<br>https://www.google.cn/chrome/
<img src="manual/tampermoneky-only-icon.png" width="80"> |  **油猴 Tampermonkey 插件**<br> 本脚本需要提前安装 chrome 油猴插件，下载地址(需要翻墙)：<br>http://tampermonkey.net/

### 安装
安装方法：  

**首先确保已经正确安装了chrome油猴插件,不知道什么是油猴,或者不知道怎么安装油猴的,自行百度,或者联系作者寻求帮助。**

在 chrome 地址栏输入(可复制)下列地址，并回车：  
> https://gitee.com/jacktsui/xusqa/raw/master/xusqa.user.js  

会弹出以下界面，点安装，即完成脚本的安装。  
![image](manual/tampermoneky-install-1.png)  
**注意：点一次安装即可，安装完成，脚本会出现在油猴的已安装脚本列表里，  
如果不小心安装了 2 个以上，请手动删除，保留一个即可。**

### 脚本自动更新

脚本持续开发更新中,可以使用以下方法更新脚本
![image](manual/update.png)