#!/bin/bash

[ -d $1 ] || cp -r 00 $1
cd $1 && ls | entr ./solution.ts

