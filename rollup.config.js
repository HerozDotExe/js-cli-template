// rollup.config.js
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import copy from 'rollup-plugin-copy'

export default {
  input: 'src/cli.js',
  output: {
    dir: 'dist',
    format: 'es',
    entryFileNames: '[name].mjs',
    chunkFileNames: '[name]-[hash].mjs'
  },
  plugins: [
    babel({
      presets: ['@babel/preset-react'],
      babelHelpers: 'bundled'
    }),
    resolve({
      preferBuiltins: false,
      exportConditions: ['node'],
      resolveOnly: ['ink-use-stdout-dimensions', 'ink']
    }),
    commonjs(),
    json(),
    copy({
      targets: [{
        src: 'node_modules/yoga-wasm-web/dist/bundle/yoga.wasm',
        dest: 'dist'
      }]
    })
  ]
}
