#!/usr/bin/env -S deno run --allow-read 
import {
  split,
  compose,
  length,
  sum,
  map,
  join,
  uniq,
  intersection,
  reduce,
} from "https://deno.land/x/ramda/mod.ts";

const input = await Deno.readTextFile('input.txt')
const part1 = 
  compose(
    sum,
    map(
      compose(
        length,
        uniq,
        join(''),
        split('\n'),
      ),
    ),
    split('\n\n'),
  );

const part2 =
  compose(
    sum,
    map(
      compose(
        length,
        reduce(intersection, 'abcdefghijklmnopqrstuvwxyz'),
        split('\n'),
      ),
    ),
    split('\n\n'),
  )

console.log(part1(input))
console.log(part2(input))
