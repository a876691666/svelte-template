import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import * as fs from 'fs';
import compileSvelte from './compileSvelte.js';

const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

export default {
  input: config.svelteOutput,
  output: {
    sourcemap: false,
    format: 'umd',
    name: config.name,
    file: './output/index.js'
  },
  plugins: [
    resolve({
      browser: true,
      dedupe: ['svelte'],
      exportConditions: ['svelte']
    }),
    commonjs(),
    terser(),
    {
      name: 'compileSvelte',
      buildStart() {
        compileSvelte(config);
      }
    },
    {
      name: 'cleanFolder',
      buildStart() {
        fs.rmSync('./output', { recursive: true });
        fs.mkdirSync('./output');
      }
    },
    {
      name: 'removeOutput',
      closeBundle() {
        fs.unlinkSync(config.svelteOutput);
      }
    }
  ],
  watch: {
    clearScreen: false
  }
};