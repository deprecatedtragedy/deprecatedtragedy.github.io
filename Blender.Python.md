# Memo

[API Reference](https://docs.blender.org/api/master/)

### Create Cube

```
import bpy
import random

for i in range(0, 100):
	location=[random.randint(-100,100) for j in range(0, 3)]
	bpy.ops.mesh.primitive_cube_add(location=tuple(location))
```

Alt+P

### Insert Keyframe
```
import bpy

obj = bpy.data.objects["Sphere"]

positions = (0, 0, -1), (0, 2, 4), (3, 4, -1), (0, 0, 4)

frame_num = 0

for position in positions:
#    bpy.context.scene.frame_set(frame_num)
    obj.location = position
    obj.keyframe_insert(data_path='location', frame=frame_num)
    frame_num += 50
```

### 下一步

由于Blender下的Python体验不太好，我有必要把我需要的基本操作列出来，然后查阅这些基本操作的使用方法，从而缩短我的制作周期。那么，我所需要的基本操作是：

+ Object Generate & Destroy
+ Object Position & Rotation & Scale
+ Attached Material Change
+ Keyframe

### COSMOS

OK, my first animation start!

Description: 

+ Weightless Camera Movement
  - A 3-dim Vector Speed
  - Rotaion Around Itself
  - Time Gap Re-Random
+ Galaxy Generation
  - Moving Balls And Transparent Lights
  - Extraordinary Material !

For now !

### 困境

我只有那天花了时间做这件事，之后就好像丧失兴趣了。原因如下。

+ 初版不符合预想效果，做不下去了。
+ 对作品持有的信念不强大。
+ 没有考虑到这种情形。
+ 懒惰。

当我反思过后，我有一种强烈的感觉，那就是我必须完成它。

Develop my skill and develop my mind.

### COSMOS V2

Restart.

1. Learn Material
2. One Object with lights and a sticked camera ANIMATION

To be continue...

