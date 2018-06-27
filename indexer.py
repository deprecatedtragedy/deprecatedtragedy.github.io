#! /usr/bin/python3

from os import listdir
from os.path import isfile, join

memos = [f for f in listdir(".") if f.endswith(".md")]

with open('index.md', 'w') as the_file:
	for memo in memos:
		the_file.write("###### [{0}]({1})\n".format(memo[:-3], memo))