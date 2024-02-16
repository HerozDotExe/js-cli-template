import { compile } from 'nexe'

const options = {
  cwd: 'dist',
  input: 'cli.mjs',
  output: 'cli',
  build: true
}

await compile(options)

console.log('Done.')
