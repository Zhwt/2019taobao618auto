# 2019 淘宝天猫 618 自动领猫币

## 注意

### 这是个吃饭期间从手机上随手写出来的程序, 没有自适应, 没有优化, 没有打包成可执行程序, 但是有不少 bug. 代码中部分变量为了手机上编辑代码容易看从而命名成了中文, 还请大佬们轻拍

## 主要功能

程序会自动完成所有的"逛店铺"任务和"去浏览"任务

有时会出现误识别的情况, 一般在误识别或者误点击后会有一步确认的判断, 会停在当前页面退出脚本不会继续点击了, 所以可以在不用手机的时候开始运行脚本然后把手机屏幕翻过来不去看了, 一般过个 20 来分钟任务就完成了

## 已测试机型

荣耀 V9 (DUK-AL20)

荣耀 V10 (BKL-AL10)

HUAWEI Mate 10 (ALP-AL00)

## 准备环境

* [Auto.js](https://github.com/hyb1996/Auto.js) 3.0.0 Beta 版本及以上
* Auto.js 开启无障碍服务, 悬浮窗权限
* **无需** Root 权限或开发者模式

## 使用方法

1. 下载本项目的 `2019淘宝618全自动` 文件夹, 并放到手机 `内部存储` (`/sdcard/`) 目录下
2. Auto.js 创建新项目, 将 `main.js` 中的内容复制进去, 或者选择导入项目, 选择 `main.js` 
3. 打开淘宝, 进入合成猫的页面, 从 Auto.js 的悬浮窗中找到刚创建的脚本, 点击运行
4. 在没有 bug 的情况下程序运行完后淘宝会停留在合成猫页面领金币菜单打开的状态, 此时退出 Auto.js 即可, 下次使用直接从 3. 步开始即可

## 原理

通过 Auto.js 提供的找图函数, 分析各页面中的关键要素并进行点击, 并非通过直接点击绝对坐标实现

理论上是可以实现自适应, 但是在实际测试过程中发现由于不同分辨率的机器请求截图返回的截图尺寸不一样, 比较图片的函数有时会误识别

## LICENSE

本项目使用 MIT 协议. 由于使用本项目中代码, 或者测试代码运行导致的任何问题均与本人无关.

本项目仅用于技术交流及个人测试使用, 请勿将本项目用于商业用途.

