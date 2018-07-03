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

