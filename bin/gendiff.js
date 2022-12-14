#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-v, --vers', 'output the current version')
  .option('-f, --format <type>', 'output format', 'stylish')
  .argument('<filepath1>', 'path to file1')
  .argument('<filepath2>', 'path to file2')
  .action((filepath1, filepath2, option) => {
    console.log(genDiff(filepath1, filepath2, option.format));
  });

program.parse(process.argv);
