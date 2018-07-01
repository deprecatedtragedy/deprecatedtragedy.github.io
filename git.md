# LifeSaver - Git

> 生命是一团欲望，欲望不能满足便痛苦，满足便无聊，人生就在痛苦和无聊之间摇摆。	--- Arthur Schopenhauer 

这篇文章描述了如何使用Github管理文件，尤其是代码和文章。
以抵抗无聊易逝生活的烈火。

## 日常之一

无聊的阿宅每天总是会写点东西，始于```Ctrl+N```，终于```Ctrl+S```。虽然阿宅知道自己已经被眼前的计算机逐渐驯服了，但是阿宅不会让自己陷入思想的囹圄之中。尽管这样，阿宅仍然坚持着笔耕不辍的日常。有一天，阿宅听到了一首很好听的歌，是在一个很有趣的Github教程里听到的。

<iframe style="display: block; margin: auto;" frameborder="no" border="0" width="330px" height="88px" src="//music.163.com/outchain/player?type=2&id=32451501&auto=0&height=66"></iframe>

**突然困了！**

现在是第二天的下午，稍微有了点气力的我决定继续写下去。

## Configuration

首先让我们完成密码学上的配置，这一步是和Git服务器安全通信的基础。而且可让我免于输入用户名和密码。

在自己的终端上这么做(当然邮箱之类的信息得用你自己的)(第二句把文件复制到了你的剪贴板，方便吧！)：

```
ssh-keygen -t rsa -b 4096 -C "reehccheer@gmail.com"
clip < ~/.ssh/id_rsa.pub
```

然后在Github的Setting里添加SSH Key. 在终端里测试一下：

```
ssh -T git@github.com
```

OK啦！剩下简单的两步：

```
git config --global user.email "reehccheer@gmail.com"
git config --global user.name "deprecatedtragedy"
```

## Workflow

我们还是先在Github上新建一个仓库！

同步到本地：

```
git clone git@github.com:deprecatedtragedy/june.git
```

然后新建一个文件啦，写点东西啦，更新一下：

```
git add -A
git commit -m "😘😘😘😘😘"
git push
```

如果直接在Github网页或其它计算机上更新了你的Git仓库，需要进行如下的拉取来同步(当然也可以跳到git clone那步从头开始)：

```
git pull
```


如何游荡于历史之中：

```
git log
git reset --hard 7f123
```

如果我们没做什么很不小心的事情，上面的命令就够了。但是生活中总是会有各种意外。

譬如我们...就不展开讲了。Google和Stackoverflow是你的好朋友。

## 有用的Git教程！

+ [Schaepher: Git和Github简单教程](http://www.cnblogs.com/schaepher/p/5561193.html)
+ [Git Tips](https://github.com/git-tips/tips)

## 有分支啦!

多台终端操作同一个仓库而没有用到分支真的会让人难受. 

```
git checkout -b [branch-name]
git branch
``` 

```
git push -u origin [branch-name]
```

```
git merge [branch-name]
git push
```
