#!/usr/bin/env -S deno run --allow-read 
import {
  always,
} from "https://deno.land/x/ramda/mod.ts";

const input = await Deno.readTextFile('input.txt')
const part1 = 
  always(
    undefined
  )

const part2 =
  always(
    undefined
  )

console.log(part1(input))
console.log(part2(input))
