# React.

A JavaScript library for building user _interfaces._
JS tool in the _frontend that helps us build the visual part of our web application, the interfaces with which our users will interact_
It makes it easy to write HTML and CSS from JS by _giving an order to the code._

- Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
- Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
- Learn Once, Write Anywhere: We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.

Create React App
Set up a modern web app by running one command.
Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.

npx create-react-app my-app

cd my-app

npm start

Ctrl + C = ^C para detenerlo

**Create a new repository**

git remote add origin ejemplo: https://github.com/CelesteJS/1acdv.git

git push -u origin master _master no main_

[GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages)

Step 1: Add homepage to package.json

Open your package.json and add a homepage field for your project:

**"homepage": "https://myusername.github.io/my-app",**

Step 2: Install gh-pages and add deploy to scripts in package.json

Now, whenever you run npm run build, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

\*\*pnpm add gh-pages

Add the following scripts in your package.json:

`Código`

```[React]
"scripts": {

  * "predeploy": "npm run build",

  * "deploy": "gh-pages -d build",

  "start": "react-scripts start",

  "build": "react-scripts build",
```

Step 3: Deploy the site by running npm run deploy
Then run:

\*\*pnpm run deploy

Step 4: For a project page, ensure your project’s settings use gh-pages

Finally, **make sure** GitHub Pages option in your GitHub project settings is set to use the gh-pages branch:
https://celestejs.github.io/2reactejemplo/
