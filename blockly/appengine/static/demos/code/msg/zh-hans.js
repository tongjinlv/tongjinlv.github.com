var MSG = {
  title: "派狸 (v00.01.09)",
  blocks: "块",
  debug: "调试",
  code: "代码",
  fail: "失败",
  start: ":启动\r\n",
  reallyrun: "是否运行?",
  stop: "\r\n:停止",
  copyright:"Copyright © 雄孩子科技  pyly.trtos.com",
  likeTooltip: "保存为样本。",
  likeinputtitle:"新样本名字:",
  saveinputtitle:"保存文件名:",
  runTooltip: "于目标板运行工作区的程序。",
  badCode: "程序错误：\n%1",
  timeout: "超过最大执行行数。",
  trashTooltip: "放弃所有块。",
  catGpio:"输入/输出",
  catDriver:"驱动",
  catSensor:"传感器",
  catControl:"控制器",
  catIot:"物联网",
  catPwm:"脉冲输出",
  catAnalog:"模拟输入",
  catI2c:"I2C总线",
  catSpi:"SPI通信",
  catSerial:"串口",
  catFile:"文件",
  catSound:"声音",
  catTcpip:"网络通信",
  catTime:"时间",
  catLcd:"显示屏",
  catLcdBase:"基础",
  catLcdMiddle:"中级",
  catLcdHigh:"高级",
  catCamera:"视觉",
  catPrint:"打印",
  catLogic: "逻辑",
  catLoops: "循环",
  catMath: "数学",
  catText: "文本",
  catLists: "列表",
  catColour: "颜色",
  catVariables: "变量",
  catFunctions: "函数",
  listVariable: "列表",
  tempVariable: "温度计",
  textVariable: "文本",
  deletethiscontext:"删除 %1 所有 %2 个块吗？",
  httpRequestError: "请求存在问题。",
  linkAlert: "通过这个链接分享您的模块：\n\n%1",
  hashError: "对不起，没有任何已保存的程序对应'%1' 。",
  xmlError: "无法载入您保存的文件。您是否使用其他版本的Blockly创建该文件的？",
  badXml: "XML解析错误：\n%1\n\n选择“确定”以取消您对XML的修改，或选择“取消”以继续编辑XML。",
  catGpio_write_title:"写端口 %1 为 %2",
  catGpio_read_title:"读端口 %1",
  catGpio_mode_title:"设置端口 %1 为 %2",
  catGpio_value_high:"高",
  catGpio_value_low:"低",
  catGpio_mode_out:"输出",
  catGpio_mode_in:"输入",
  catGpio_led_title:"灯 %1 %2",
  catGPio_interrupt_title:"设置中断 %1 %2", 
  catGPio_keydown_title:"当按钮 %1 按下 %2 抬起%3",
  catPwm_period_ms_title:"设置 %1 脉冲周期 %2 毫秒",
  catPwm_cycle_title:"写入 %1 占空比 %2 /1",
  catPwm_enable_title:"设置 %1 %2 ",
  catPwm_value_enable:"允许",
  catPwm_value_disenable:"禁止",
  catSound_play_title:"播放 %1",
  catI2c_address_title:"创建设备 %1 地址 %2",
  catI2c_readreg_title:"读取 %1 寄存器 %2",
  catI2c_writereg_title:"写 %1 寄存器 %2 值 %3",
  catI2c_mpu6050_title:"陀螺仪 获取 %1",
  catSpi_readwrite_title:"读 %1 写 %2",
  catSerial_write_title:"发送 %1 内容 %2",
  catSerial_write_array_title:"发送 %1 数组 %2",
  catSerial_writeline_title:"发送 %1 一行 %2 ",
  catSerial_set_baudrate_title:"设置 %1 波特率 %2",
  catSerial_readstr_title:"读取 %1 字符串 %2 字节",
  catSerial_dataavailable_title:"获取 %1 缓冲数据长度 超时时间%2 ",
  catSerial_modbus_title:"读写 %1 波特率 %2 内容%3校验 %4",
  catSerial_modbus_checknull:"空",
  catSerial_modbus_checkcrc16:"循环冗余",
  catSound_piano_title:"钢琴 %1 节拍 %2",
  catSound_melody_title:"旋律 %1",
  catSound_effect_title:"音效 %1",
  catSound_dance_title:"舞蹈 %1", 
  catSound_playpath_title:"播放 路径 %1",
  catSound_record_title:"录音 时长 %1 秒",
  catSound_tts_title:"文本转语音 %1 应用密钥%2 加密密钥%3",
  catAnalog_read_int_title:"读取 %1 模拟量",
  catAnalog_read_float_title:"读取 %1 电压",
  catEthernet_ipaddress_title: "地址 %1 端口 %2",
  catEthernet_connect_title: "连接服务器 %1",
  catEthernet_send_title: "发送 %1 内容 %2",
  catEthernet_revice_title: "接收 %1 长度 %2",
  catPrint_to_title: "打印 %1 到 %2",
  catPrint_console_title: "控制台",
  catPrint_lcd_title: "屏幕",
  catPrint_net_title: "网络 %1",
  catPrint_file_title: "文件",
  catIot_send_title:"发送 %1 到 %2 标识 %3",
  catIot_get_title:"获取网络变量 %1",
  catIot_set_title:"设置网络变量 %1 为 %2",
  catIot_httpget_title:"获取内容 从链接 %1",
  catIot_httppost_title:"推送 数据 %1 到链接 %2",
  catLcd_writeline_title:"写字符 %1 到屏幕",
  catLcd_drawdot_title:"画点  坐标 (x%1y%2) 颜色:%3",
  catLcd_drawimage_title:"打印图像 %1 位置 (x%2y%3) ",
  catLcd_showicons_title:"显示图标 %1 位置 (x%2y%3) ",
  catLcd_showtrafficlight_title:"显示红绿灯 %1 位置 (x%2y%3)",
  catLcd_drawrect_title:"画矩形 左上角 (x1%1y1%2)右下角 (x2%3y2%4)颜色%5",
  catLcd_drawline_title:"画线 起点 (x1%1y1%2)终点 (x2%3y2%4)颜色%5",
  catLcd_drawrectfill_title:"填充矩形 左上角 (x1%1y1%2)右下角 (x2%3y2%4)颜色%5",
  catLcd_drawtriangle_title:"画三角形 点A(x1%1y1%2)点B(x2%3y2%4)点C(x3%5y3%6) 颜色%7",
  catLcd_filltriangle_title:"填充三角形 点A(x1%1y1%2)点B(x2%3y2%4)点C(x3%5y3%6) 颜色%7",
  catLcd_drawcircle_title:"画圆 坐标 (x%1y%2)半径%3颜色%4",
  catLcd_drawcirclefill_title:"填充圆 坐标 (x%1y%2)半径%3颜色%4",
  catLcd_drawclear_title:"清除 屏幕 %1",
  catLcd_writestring_title:"写 字符串 %1 字体%2位置(x%3y%4)字体颜色%5 背景颜色%6 透明颜色%7",
  catLcd_writestring1_title:"写 字符串(矢量) %1 大小%2位置(x%3y%4)字体颜色%5 背景颜色%6 透明颜色%7",
  catLcd_drawawesome_title:"写 图标(矢量) %1 大小%2位置(x%3y%4)字体颜色%5 背景颜色%6 透明颜色%7",
  catLcd_screenshot_title:"截屏",
  catLcd_screenshotdebug_title:"截屏打印",
  catLcd_screenprevie_title:"屏幕预览",
  catTime_timeoption_year:"年",
  catTime_timeoption_month:"月",
  catTime_timeoption_day:"日",
  catTime_timeoption_hour:"时",
  catTime_timeoption_minute:"分",
  catTime_timeoption_second:"秒",
  catTime_getnow_title:"现在 %1",
  catTime_sleep_title:"睡眠 %1 秒",
  catTime_nowdate_title:"现在日期",
  catTime_nowtime_title:"现在时间",
  catTime_timer_title:"定时器%1 定时(秒)%2执行  %3",
  catTime_timerstart_title:"定时器%1 启动",
  catTime_thread_title:"线程%1 %2",
  catFile_write_title: "写 %1 到 %2",
  catFile_create_title: "写 %1 创建 %2",
  catFile_writeline_title: "写行 %1 到 %2",
  catFile_read_title: "读 %1",
  catFile_readline_title: "读取 %1 第%2行",
  catFile_readlines_title: "读取 %1 所有行",
  catFile_wget_title:"获取资源 %1",
  catI2c_mpu6050_gyro:"陀螺",
  catI2c_mpu6050_acc:"加速度",
  catI2c_mpu6050_temp:"温度",
  catLcd_dotarray_title:"%1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18 %19 %20 %21 %22 %23 %24 %25 %26 %27 %28 %29 %30 %31 %32 %33 %34 %35 %36 %37 %38 %39 %40 %41 %42 %43 %44 %45 %46 %47 %48 %49 %50 %51 %52 %53 %54 %55 %56 %57 %58 %59 %60 %61 %62 %63 %64 %65 %66 %67 %68 %69 %70 %71",
  catLcd_drawdotarray_title:"打印点阵 数据 %1 颜色 %2 背景 %3",
  catLcd_drawdotarraybit_title:"点阵 打印点 (x%1 y%2) 点亮 %3",
  catLcd_selectarraydot_title:"选中点阵点(x %1 y%2) 颜色 %3",
  catLcd_getdotarraybit_title:"获取 点阵点 (x%1 y%2)",
  catLcd_drawdotarraymove_title:"点阵 移动(x %1 y%2)",
  catLcd_carinit_title:"%1初始化 坐标 %2 %3 方向 %4 ",
  catLcd_carmove_title:"%1 %2 %3 步",
  catLcd_inittemp_title:"初始化温度计(%1) 位置(x%2y%3)",
  catLcd_showtemp_title:"更新温度(%1) (值)%2(最大)%3",
  catLcd_map0init_title:"地图初始化%1%2%3%4%5 %6%7%8%9%10 %11%12%13%14%15",
  catCamera_take_title:"使用 %1 拍照",
  catCamera_previewconsole_title:"使用 控制台 预览 %1",
  catCamera_showconsole_title:"使用 控制台 显示 %1",
  catCamera_takesize_title:"使用 %1 大小 %2 拍照",
  catCamera_baiduaip_title:"识别图片%1 应用密钥%2 加密密钥%3",
  catCamera_baiduaip_helpurl:"http://pyly.trtos.com/",
  catCamera_baiduaip_tooltip:"使用百度AI识别图片",
  catWeeemake_130motor_title:"为美致新 130电机 端口 %1 速度 %2",
  catWeeemake_dcmotor_title:"为美致新 dc电机 端口 %1 速度 %2",
  catWeeemake_humiture_title:"为美致新 湿度传感 端口 %1 序号 %2",
  catWeeemake_gassensor_title:"为美致新 气体传感 端口 %1",
  catWeeemake_flamesensor_title:"为美致新 火焰传感 端口 %1 序号 %2",
  catWeeemake_compasssensor_title:"为美致新 罗盘传感 端口 %1 序号 %2",
  catWeeemake_ultrasondistancesensor_title:"为美致新 超声传感测距 端口 %1",
  catWeeemake_ultrasonshowrgbsensor_title:"为美致新 超声传感显示彩色灯 端口 %1 序号 %2 颜色 %3",
  catWeeemake_ultrasonshowrgbsensor_left:"左",
  catWeeemake_ultrasonshowrgbsensor_right:"右",
  catWeeemake_ultrasonshowrgbsensor_all:"全部",
  catWeeemake_rgb5module_title:"为美致新 全彩灯模块 端口 %1 序号 %2 颜色 %3",
  catWeeemake_rgbstrip_title:"为美致新 全彩灯带 端口 %1 序号 %2 颜色 %3",
  catWeeemake_joystick_title:"为美致新 摇杆模块 端口 %1 序号 %2",
  catWeeemake_moisturesensor_title:"为美致新 土壤湿度传感器 端口 %1",
  catWeeemake_pirsensor_title:"为美致新 人体红外传感器 端口 %1",
  catWeeemake_ds18b20_title:"为美致新 温度传感器 端口 %1",
  catWeeemake_linefollower_title:"为美致新 巡线传感器 端口 %1 序号 %2",
  catWeeemake_colorsensor_setlight_title:"为美致新 颜色传感器 端口 %1 开灯 %2",
  catWeeemake_colorsensor_whitebalance_title:"为美致新 颜色传感器 端口 %1 白平衡",
  catWeeemake_colorsensor_getcolor_title:"为美致新 颜色传感器 端口 %1 获取%2",
  catWeeemake_colorsensor_getcolor_light:"亮度分量",
  catWeeemake_colorsensor_getcolor_red:"红色分量",
  catWeeemake_colorsensor_getcolor_green:"绿色分量",
  catWeeemake_colorsensor_getcolor_blue:"蓝色分量",
  catWeeemake_tiltswitch_title:"为美致新 倾斜开关 端口 %1 序号 %2",
  catWeeemake_4ledbutton_title:"为美致新 4位LED背光按键 端口 %1 按键 %2 按下",
  catWeeemake_relay_title:"为美致新 继电器 端口 %1 打开 %2",
  catWeeemake_atomizer_title:"为美致新 雾化器 端口 %1 打开 %2",
  catWeeemake_singleled_title:"为美致新 单色灯 端口 %1 打开 %2",
  catWeeemake_uvsensor_title:"为美致新 紫外线传感器 端口 %1 类型 %2",
  catWeeemake_uvsensor_value:"指数值",
  catWeeemake_uvsensor_analog:"模拟值",
  catWeeemake_pm2_5sensor_title:"为美致新 PM2.5 传感器 端口 %1 类型 %2",
  catWeeemake_barometersensor_title:"为美致新 气压传感器 端口 %1",
  catWeeemake_watersensor_title:"为美致新 雨滴传感器 端口 %1",
  catWeeemake_bot_title:"为美致新 小车方向 %1 速度 %2",
  catWeeemake_bot_forward:"前进",
  catWeeemake_bot_backward:"后退",
  catWeeemake_bot_trun_left:"左转",
  catWeeemake_bot_trun_right:"右转",
  catWeeemake_servo_title:"为美致新 舵机%1 角度 %2",
  catWeeemake_humiture:"湿度",
  catWeeemake_temperature:"温度",
  catWeeemake_potentiometer_title:"为美致新 电位器 %1",
  catWeeemake_openclose_open:"开",
  catWeeemake_openclose_close:"关",
  catText_eval_title:"执行 %1",
  catText_replace_title:"%1替换%2为%3",
};
