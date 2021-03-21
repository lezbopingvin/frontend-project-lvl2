#! /usr/bin/env node
import { Command } from 'commander';
import genDiff from '../index.js';

const program = new Command();
program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .helpOption('-h, --help', 'output usage information')
  .action((filepath1, filepath2) => console.log(genDiff(filepath1, filepath2)));

program.parse();
