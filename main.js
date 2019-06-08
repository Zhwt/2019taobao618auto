if (!requestScreenCapture(false)) {
    toast("缺少必要权限，需要允许截图！");
    exit();
}

var count = 1;
var screen = null;
var pt = null;

let find领喵币 = () => {
    screen = captureScreen();
    sleep(120);
    return findImage(screen, images.read("/sdcard/2019淘宝618全自动/领喵币菜单按钮.jpg"));
}

let 逛店铺 = () => {
    do {
        screen = null;
        pt = null;
        sleep(800);
        toast("开始第" + count + "次领取");
        // 截取屏幕截图
        // screen = captureScreen();
        // sleep(120);
        // pt = findImage(screen, images.read("/sdcard/2019淘宝618全自动/领喵币菜单按钮.jpg"));
        pt = find领喵币();
        if (pt != null) {
            // 点击 领猫币
            click(pt.x + 120, pt.y + 98);
            sleep(1600);
            screen = captureScreen();
            sleep(120);
            pt = findImage(screen, images.read("/sdcard/2019淘宝618全自动/去逛店菜单按钮.jpg"), {
                threshold: 0.6
            });
            if (pt == null) {
                // 没找到逛店铺按钮
                toast("未找到逛店铺按钮，疑似找图出现问题，退出");
                exit();
            }
            // 点 去逛店铺
            click(pt.x + 70, pt.y + 10);
            sleep(3000);

            // 等待点领金币循环
            var can_retrive = false;
            while (!can_retrive) {
                screen = captureScreen();
                sleep(120);
                // 找 点击领猫币 按钮
                pt = findImage(screen, images.read("/sdcard/2019淘宝618全自动/点击得喵币按钮.jpg"));
                if (pt == null) {
                    // 没找到 点击领喵币 的按钮就找太勤快了
                    pt = findImage(screen, images.read("/sdcard/2019淘宝618全自动/太勤快了提示.jpg"));
                    if (pt == null) {
                        // 两种都没找到，就再等一会
                        sleep(1000);
                        continue;
                    } else {
                        // 太勤快了提示
                        toast("今天的逛店铺已经完成，退出");
                        back();
                        sleep(1500);
                        return;
                    }
                } else {
                    // 找到按钮
                    can_retrive = true;
                    // 点 领猫饼按钮 910 1102
                    click(pt.x + 60, pt.y + 28);
                    // 等 领取成功窗口
                    sleep(1200);
                    // 返回合成界面
                    back();
                    ++count;
                }
            }
        } else {
            toast("当前不处在合成猫页面，等待5秒");
            sleep(5000);
            continue;
        }
    } while (true);
}

let 自动浏览 = () => {
    do {
        screen = null;
        pt = null;
        pt = find领喵币();
        if (pt != null) {
            // 点击 领猫币
            click(pt.x + 120, pt.y + 98);
            sleep(1600);
            screen = captureScreen();
            sleep(120);
            pt = findImage(screen, images.read("/sdcard/2019淘宝618全自动/去浏览菜单按钮.jpg"), {
                threshold: 0.8
            });
            if (pt == null) {
                // 没找到逛店铺按钮
                toast("已经完成去浏览任务");
                return;
            }
            // 点 去逛店铺
            click(pt.x + 70, pt.y + 10);
            sleep(3000);
            // 三个分支，可能是浏览会场、直播视频、或者点三个东西
            screen = captureScreen();
            找猫提示 = findImage(screen, images.read("/sdcard/2019淘宝618全自动/找猫猫得猫币提示.jpg"));
            点3个商品按钮 = findImage(screen, images.read("/sdcard/2019淘宝618全自动/点3个商品按钮.jpg"), {
                threshold: 0.5
            });
            log("找猫提示" + 找猫提示);
            log("点3个商品按钮" + 点3个商品按钮);
            if (找猫提示 == null && 点3个商品按钮 == null) {
                let timer = 0;
                let 领猫币 = find领喵币();
                while (领猫币 == null && timer < 20) {
                    sleep(1000);
                    ++timer;
                    领猫币 = find领喵币();
                }
            } else if (找猫提示 != null) {
                // 
                log("看视频领猫币页面");
                sleep(15000);
                /*while (找猫提示 != null) {
                    // 还有找猫提示，说明没看完10秒
                    sleep(1000);
                    screen = captureScreen();
                    找猫提示 = findImage(screen, images.read("/sdcard/2019淘宝618全自动/找猫猫得猫币提示.jpg"));
                }*/
                log("领取完毕");
                back();
            } else if (点3个商品按钮 != null) {
                log("点按钮页面");
                // 自动转到商品页面
                click(点3个商品按钮.x + 20, 点3个商品按钮.y + 20);
                points = [{
                        x: 288,
                        y: 981
                    },
                    {
                        x: 759,
                        y: 981
                    },
                    {
                        x: 288,
                        y: 1442
                    },
                    {
                        x: 759,
                        y: 1442
                    }
                ];
                for (i = 0; i < points.length; ++i) {
                    sleep(1000);
                    click(points[i].x, points[i].y);
                    do {
                        sleep(1000);
                        screen = captureScreen();
                        客服按钮 = findImage(screen, images.read("/sdcard/2019淘宝618全自动/客服按钮.jpg"));
                        收藏按钮 = findImage(screen, images.read("/sdcard/2019淘宝618全自动/收藏按钮.jpg"));
                    } while (客服按钮 == null && 收藏按钮 == null);
                    back();
                }
                back();
                // 288,981 759,981 288,1442 759,1442

            } else {
                toast("未知页面，退出");
            }
        } else {
            toast("当前不处在合成猫页面，等待5秒");
            sleep(5000);
            continue;
        }
    }
    while (true);
}

events.observeToast();
events.onToast((toast) => {
    log("Toast内容: " + toast.getText() + " 包名: " + toast.getPackageName());
    if (toast.getText() != null) {
        log(toast.getText().indexOf("恭喜你获得"));
        if (toast.getText().indexOf("恭喜你获得") > -1) {
            back();
        }
    }
});

// 主循环
// 复位视图
swipe(492, 384, 492, 1384, 400);
toast("开始逛店铺");
逛店铺();
toast("开始自动浏览");
自动浏览();