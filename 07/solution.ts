#!/usr/bin/env -S deno run --allow-read 
import {
  always,
  compose,
  split,
  map,
  replace,
  adjust,
  tap,
} from "https://deno.land/x/ramda/mod.ts";

const input = await Deno.readTextFile('input.txt')
const part1 = 
  compose(
    map(
      compose(
        adjust(
          1,
          compose(
            map(),
            split(',')
          ),
        ),
        split('contain'),
      ),
    ),
    split('\n'),
    replace(/\./g, ''),
    replace(/\b(bag|bags|)\b/g, ''),
  )


const part2 =
  always(
    undefined
  )

console.log(part1(input))
console.log(part2(input))
