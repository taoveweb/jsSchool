---
id: stack
title: 堆栈
---

### 栈内存 ECStack （Execution Context stack）执行环境栈

浏览器会在计算机内存中分配一块内存专门用来供代码执行，这个内存叫做栈内存，

### 堆内存(Heap)

浏览器会给我们供我们调用的方法存放在 GO (Gobal Object ) `在浏览器中window 指向GO , 在 node 环境中 global 指向 GO`, 浏览器把内置的一些属性方法放到一个单独的内存 堆内存(Heap)

任务何开辟的内存都有一个 16 进制的内存地址，方便后期找到这个内存

```
isNaN function ...
parseInt parseFloat :function
```

### EC (Execution Context ) 执行上下文 代码自己执行所在的环境

- 全局执行上下文 EC(G)

* 函数中的代码都会在一个单独的私有的执行上下文中处理

- 块级的执行上下文

### 进栈出栈

先进后出,自上而下

- 进栈:`EC(G) 全局的执行上下文进入到栈内存中执行`

- 出栈:`执行完的代码，可能会把形成的上下文出栈释放`

### VO (Varibale Object) 变量对象

在当前上下文中，用来存放创建变量和值的地方 每一个上下文中都有一个自己的变量对象，函数私有上下文中叫做 AO（Activation Object）活动对象，但是也是变量对象.

## Quick Start

```sh
npx create-react-app my-app
cd my-app
npm start
```

> If you've previously installed `create-react-app` globally via `npm install -g create-react-app`, we recommend you uninstall the package using `npm uninstall -g create-react-app` or `yarn global remove create-react-app` to ensure that `npx` always uses the latest version.

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.

When you’re ready to deploy to production, create a minified bundle with `npm run build`.

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg' width='600' alt='npm start' />
</p>

### Get Started Immediately

You **don’t** need to install or configure tools like webpack or Babel. They are preconfigured and hidden so that you can focus on the code.

Create a project, and you’re good to go.

## Creating an App

**You’ll need to have Node >= 10 on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### npx

```sh
npx create-react-app my-app
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### npm

```sh
npm init react-app my-app
```

_`npm init <initializer>` is available in npm 6+_

### Yarn

```sh
yarn create react-app my-app
```

_`yarn create` is available in Yarn 0.25+_

### Selecting a template

You can now optionally start a new app from a template by appending `--template [template-name]` to the creation command.

If you don't select a template, we'll create your project with our base template.

Templates are always named in the format `cra-template-[template-name]`, however you only need to provide the `[template-name]` to the creation command.

```sh
npx create-react-app my-app --template [template-name]
```

> You can find a list of available templates by searching for ["cra-template-\*"](https://www.npmjs.com/search?q=cra-template-*) on npm.

Our [Custom Templates](custom-templates.md) documentation describes how you can build your own template.

#### Creating a TypeScript app

You can start a new TypeScript app using templates. To use our provided TypeScript template, append `--template typescript` to the creation command.

```sh
npx create-react-app my-app --template typescript
```

If you already have a project and would like to add TypeScript, see our [Adding TypeScript](adding-typescript.md) documentation.

### Selecting a package manager

When you create a new app, the CLI will use [Yarn](https://yarnpkg.com/) to install dependencies (when available). If you have Yarn installed, but would prefer to use npm, you can append `--use-npm` to the creation command. For example:

```sh
npx create-react-app my-app --use-npm
```

## Output

Running any of these commands will create a directory called `my-app` inside the current folder. Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js
```

No configuration or complicated folder structures, only the files you need to build your app. Once the installation is done, you can open your project folder:

```sh
cd my-app
```

## Scripts

Inside the newly created project, you can run some built-in commands:

### `npm start` or `yarn start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/marionebl/create-react-app@9f6282671c54f0874afd37a72f6689727b562498/screencast-error.svg' width='600' alt='Build errors' />
</p>

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode. By default, runs tests related to files changed since the last commit.

[Read more about testing](running-tests.md).

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed.
