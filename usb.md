> 揭开迷雾般的面纱是一件令人愉快的事, 但后果却并不容易承受. 

今天要讲和一位老朋友的故事, 应该是和老朋友重新认识的故事. 这位朋友是一位万人迷, 你想象不到有多少人依赖着他, 他也知道自己无时无刻不在被人们提起, 然而他感觉内心总是空空的, 就像一口荒废的枯井, 你知道他有多难受的. 

## 一枚摄像头
虽然很不好意思提起, 但这枚KS2A17...难过了, 不说了. 

## 好朋友们!
首先介绍第一位好朋友Ubuntu 16.04, 麻烦他`sudo modprobe usbmon`, 他就会加载usbmon module到他的Kernel里面了. 问下他`ls -l /dev/usbmon*`, 权限信息如果是'crw-------'这样的, 为了和下一位朋友玩耍, 得`sudo chmod 644 /dev/usbmon*`这么. 

第二位好朋友是*Wireshark*! 安装下他就来了. 打开Wireshark的图形界面, 选择名为usbmon的interface, 应该看得到这个interface有活动的哦! 进去后超级超级多信息, 幸好Wireshark有filter, 不妨这么`usb.device_address eq 15 and usb.bus_id eq 1`, 在终端里`lsusb`就可以看出来参数的!

这样一来, 就可以监听USB Traffic啦~

其实一开始我是想知道电脑是怎么和硬件交流的, 然后今天发现了USB协议后很愉快, 然而对于BIOS是怎么使用硬件还是不清楚, 也是USB协议吗? 我猜应该都是很普通地发送数据包? 很难过不能直接问谁. 

## Reference

1. [How to install Wireshark on Linux and capture USB traffic?](https://stackoverflow.com/questions/31054437/how-to-install-wireshak-on-linux-and-capture-usb-traffic)

2. [analysing-usb-traffic](https://osqa-ask.wireshark.org/questions/11054/analysing-usb-traffic)

3. [USB on wikipedia](https://en.wikipedia.org/wiki/USB)

