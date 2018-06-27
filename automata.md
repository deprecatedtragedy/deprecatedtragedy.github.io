# Cellular Automata

> 

# Reference

[Cellular Automata: Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/cellular-automata)

Cellular automata(henceforth:CA) are *discrete, abstract computational systems*.

## A Simple CA, implemented in Python

```
import time

cells = [False] * 99	# 99 cells in this single dimension
cells[50] = True		# set No.50 cell to a special state !

for i in range(0, 100):
	temp = [False] * 99
	for i in range(2, 97):
		# Hat Rule !	
		temp[i] = cells[i-1] + cells[i+1] == 1
	cells = temp

	# magic to print this whole dimension
	print(''.join(list(map(lambda x: '*' if x else ' ', cells))))

	# wait so that you can see
	time.sleep(0.0002)
```

*Run this and you'll see magic.*

## Game Of Life

匆匆实现了。

```
import numpy
import random
import tkinter
import time

class Automata:
	"""A simple automata"""
	def __init__(self, arg):
		if type(arg) == tuple:
			#self.state = numpy.zeros(arg, dtype=bool)
			self.state = numpy.random.choice(a=[False, True], size=arg, p=[.5,.5])
		elif type(arg) == numpy.ndarray:
			self.state = arg

	def next(self, fn):
		dims = self.state.shape
		temp = numpy.zeros(dims, dtype=numpy.int64)
		for i in range(1, dims[0] - 1):
			for j in range(1, dims[1] - 1):
				temp[i][j] = fn(self.state[[i-1,i,i+1]][:,[j-1,j,j+1]])
		self.state = temp
		return self.state

def change(state):
	past = state[1][1]
	alive_neighbors=state.sum() - past
	if past == False and alive_neighbors == 1:
		# Birth
		return True

	if past == True and (alive_neighbors == 2 or alive_neighbors == 3):
		# Survival
		return True

	if past == True and (alive_neighbors < 2 or alive_neighbors > 3):
		# Death
		return False

	return False

def main():
	universe=(50,50)
	cube_size=5

	top = tkinter.Tk()
	c = tkinter.Canvas(top, bg='black', width=universe[1]*cube_size, height=universe[0]*cube_size)
	c.pack()
	boxes = []
	for x in range(0, universe[0]):
		for y in range(0, universe[1]):
			boxes.append(c.create_rectangle(x*cube_size,y*cube_size,(x+1)*cube_size,(y+1)*cube_size, fill='black'))

	a = Automata(universe)
	while True:
		time.sleep(0.1)
		state = a.next(change).reshape(1, universe[0]*universe[1])[0]
		for i, s in enumerate(state):
			if s:
				c.itemconfig(boxes[i], fill='white')
			else:
				c.itemconfig(boxes[i], fill='black')
		top.update()

if __name__ == '__main__':
	main()
```



