(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{97:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"rightToc",(function(){return r})),a.d(t,"metadata",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(1),c=(a(0),a(112));const p={id:"getting-started",title:"Getting Started"},r=[{value:"Quick Start",id:"quick-start",children:[{value:"Get Started Immediately",id:"get-started-immediately",children:[]}]},{value:"Creating an App",id:"creating-an-app",children:[{value:"npx",id:"npx",children:[]},{value:"npm",id:"npm",children:[]},{value:"Yarn",id:"yarn",children:[]},{value:"Selecting a template",id:"selecting-a-template",children:[]},{value:"Selecting a package manager",id:"selecting-a-package-manager",children:[]}]},{value:"Output",id:"output",children:[]},{value:"Scripts",id:"scripts",children:[{value:"<code>npm start</code> or <code>yarn start</code>",id:"npm-start-or-yarn-start",children:[]},{value:"<code>npm test</code> or <code>yarn test</code>",id:"npm-test-or-yarn-test",children:[]},{value:"<code>npm run build</code> or <code>yarn build</code>",id:"npm-run-build-or-yarn-build",children:[]}]}],i={id:"getting-started",title:"Getting Started",description:"Create React App is an officially supported way to create single-page React",source:"@site/../docs/getting-started.md",permalink:"/doc/docs/getting-started",editUrl:"https://github.com/taoveweb/jsSchool/../docs/getting-started.md",lastUpdatedBy:"matt",lastUpdatedAt:1599809487,sidebar:"docs",previous:{title:"\u5806\u6808",permalink:"/doc/docs/stack"}},o={rightToc:r,metadata:i},l="wrapper";function b({components:e,...t}){return Object(c.b)(l,Object(n.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Create React App is an officially supported way to create single-page React\napplications. It offers a modern build setup with no configuration."),Object(c.b)("h2",{id:"quick-start"},"Quick Start"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx create-react-app my-app\ncd my-app\nnpm start\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"If you've previously installed ",Object(c.b)("inlineCode",{parentName:"p"},"create-react-app")," globally via ",Object(c.b)("inlineCode",{parentName:"p"},"npm install -g create-react-app"),", we recommend you uninstall the package using ",Object(c.b)("inlineCode",{parentName:"p"},"npm uninstall -g create-react-app")," or ",Object(c.b)("inlineCode",{parentName:"p"},"yarn global remove create-react-app")," to ensure that ",Object(c.b)("inlineCode",{parentName:"p"},"npx")," always uses the latest version.")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"(",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"}),"npx")," comes with npm 5.2+ and higher, see ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f"}),"instructions for older npm versions"),")")),Object(c.b)("p",null,"Then open ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:3000/"}),"http://localhost:3000/")," to see your app."),Object(c.b)("p",null,"When you\u2019re ready to deploy to production, create a minified bundle with ",Object(c.b)("inlineCode",{parentName:"p"},"npm run build"),"."),Object(c.b)("p",{align:"center"},Object(c.b)("img",{src:"https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg",width:"600",alt:"npm start"})),Object(c.b)("h3",{id:"get-started-immediately"},"Get Started Immediately"),Object(c.b)("p",null,"You ",Object(c.b)("strong",{parentName:"p"},"don\u2019t")," need to install or configure tools like webpack or Babel. They are preconfigured and hidden so that you can focus on the code."),Object(c.b)("p",null,"Create a project, and you\u2019re good to go."),Object(c.b)("h2",{id:"creating-an-app"},"Creating an App"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"You\u2019ll need to have Node >= 10 on your local development machine")," (but it\u2019s not required on the server). You can use ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/creationix/nvm#installation"}),"nvm")," (macOS/Linux) or ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows"}),"nvm-windows")," to switch Node versions between different projects."),Object(c.b)("p",null,"To create a new app, you may choose one of the following methods:"),Object(c.b)("h3",{id:"npx"},"npx"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx create-react-app my-app\n")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"(",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"}),"npx")," comes with npm 5.2+ and higher, see ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f"}),"instructions for older npm versions"),")")),Object(c.b)("h3",{id:"npm"},"npm"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm init react-app my-app\n")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"em"},"npm init <initializer>")," is available in npm 6+")),Object(c.b)("h3",{id:"yarn"},"Yarn"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"yarn create react-app my-app\n")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"em"},"yarn create")," is available in Yarn 0.25+")),Object(c.b)("h3",{id:"selecting-a-template"},"Selecting a template"),Object(c.b)("p",null,"You can now optionally start a new app from a template by appending ",Object(c.b)("inlineCode",{parentName:"p"},"--template [template-name]")," to the creation command."),Object(c.b)("p",null,"If you don't select a template, we'll create your project with our base template."),Object(c.b)("p",null,"Templates are always named in the format ",Object(c.b)("inlineCode",{parentName:"p"},"cra-template-[template-name]"),", however you only need to provide the ",Object(c.b)("inlineCode",{parentName:"p"},"[template-name]")," to the creation command."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx create-react-app my-app --template [template-name]\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"You can find a list of available templates by searching for ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/search?q=cra-template-*"}),'"cra-template-',"*",'"')," on npm.")),Object(c.b)("p",null,"Our ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"custom-templates.md"}),"Custom Templates")," documentation describes how you can build your own template."),Object(c.b)("h4",{id:"creating-a-typescript-app"},"Creating a TypeScript app"),Object(c.b)("p",null,"You can start a new TypeScript app using templates. To use our provided TypeScript template, append ",Object(c.b)("inlineCode",{parentName:"p"},"--template typescript")," to the creation command."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx create-react-app my-app --template typescript\n")),Object(c.b)("p",null,"If you already have a project and would like to add TypeScript, see our ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"adding-typescript.md"}),"Adding TypeScript")," documentation."),Object(c.b)("h3",{id:"selecting-a-package-manager"},"Selecting a package manager"),Object(c.b)("p",null,"When you create a new app, the CLI will use ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://yarnpkg.com/"}),"Yarn")," to install dependencies (when available). If you have Yarn installed, but would prefer to use npm, you can append ",Object(c.b)("inlineCode",{parentName:"p"},"--use-npm")," to the creation command. For example:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx create-react-app my-app --use-npm\n")),Object(c.b)("h2",{id:"output"},"Output"),Object(c.b)("p",null,"Running any of these commands will create a directory called ",Object(c.b)("inlineCode",{parentName:"p"},"my-app")," inside the current folder. Inside that directory, it will generate the initial project structure and install the transitive dependencies:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"my-app\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 public\n\u2502   \u251c\u2500\u2500 favicon.ico\n\u2502   \u251c\u2500\u2500 index.html\n\u2502   \u251c\u2500\u2500 logo192.png\n\u2502   \u251c\u2500\u2500 logo512.png\n\u2502   \u251c\u2500\u2500 manifest.json\n\u2502   \u2514\u2500\u2500 robots.txt\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 App.css\n    \u251c\u2500\u2500 App.js\n    \u251c\u2500\u2500 App.test.js\n    \u251c\u2500\u2500 index.css\n    \u251c\u2500\u2500 index.js\n    \u251c\u2500\u2500 logo.svg\n    \u251c\u2500\u2500 serviceWorker.js\n    \u2514\u2500\u2500 setupTests.js\n")),Object(c.b)("p",null,"No configuration or complicated folder structures, only the files you need to build your app. Once the installation is done, you can open your project folder:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"cd my-app\n")),Object(c.b)("h2",{id:"scripts"},"Scripts"),Object(c.b)("p",null,"Inside the newly created project, you can run some built-in commands:"),Object(c.b)("h3",{id:"npm-start-or-yarn-start"},Object(c.b)("inlineCode",{parentName:"h3"},"npm start")," or ",Object(c.b)("inlineCode",{parentName:"h3"},"yarn start")),Object(c.b)("p",null,"Runs the app in development mode. Open ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000")," to view it in the browser."),Object(c.b)("p",null,"The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console."),Object(c.b)("p",{align:"center"},Object(c.b)("img",{src:"https://cdn.jsdelivr.net/gh/marionebl/create-react-app@9f6282671c54f0874afd37a72f6689727b562498/screencast-error.svg",width:"600",alt:"Build errors"})),Object(c.b)("h3",{id:"npm-test-or-yarn-test"},Object(c.b)("inlineCode",{parentName:"h3"},"npm test")," or ",Object(c.b)("inlineCode",{parentName:"h3"},"yarn test")),Object(c.b)("p",null,"Runs the test watcher in an interactive mode. By default, runs tests related to files changed since the last commit."),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"running-tests.md"}),"Read more about testing"),"."),Object(c.b)("h3",{id:"npm-run-build-or-yarn-build"},Object(c.b)("inlineCode",{parentName:"h3"},"npm run build")," or ",Object(c.b)("inlineCode",{parentName:"h3"},"yarn build")),Object(c.b)("p",null,"Builds the app for production to the ",Object(c.b)("inlineCode",{parentName:"p"},"build")," folder. It correctly bundles React in production mode and optimizes the build for the best performance."),Object(c.b)("p",null,"The build is minified and the filenames include the hashes."),Object(c.b)("p",null,"Your app is ready to be deployed."))}b.isMDXComponent=!0}}]);