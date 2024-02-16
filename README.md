# js-cli-template
This project is a template for making cli in javascript with nodejs, [nexe](https://github.com/nexe/nexe), [rollup](https://rollupjs.org) and [ink](https://github.com/vadimdemedes/ink).

## How to use
First, install dependencies :
```bash
$ npm i
```
> I couldn't make nexe work with pnpm so, don't use pnpm or maybe try with the option `--shamefully-hoist`.

You can now edit `src/` as you like, then you can run your program with :
```bash
$ npm run dev
```

When you are satisfied with your changes you can compile the projet to an executable for your platform with :
```bash
$ npm run bundle && npm run compile
```
> * `npm run bundle` transform jsx to plain js and bundle some dependencies using [rollup](https://rollupjs.org). But to run it you will still need to have `node_modules` installed.
> * `npm run compile` use [nexe](https://github.com/nexe/nexe) to create executable for your platform. You have to run `npm run bundle` before using it. The executable don't need `node_modules`.
> You can change the targeted platform by editing scripts/compile.js, see [this](https://github.com/nexe/nexe?tab=readme-ov-file#target-string--object). Also you can change the generated executable name in the same file (`output` value in options).
The executable will be available in `dist/`.