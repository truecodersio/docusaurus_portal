---
title: "NPM and ES6 Modules"
slug: "js-npm-and-es6-modules"
description: "JavaScript ES6 Modules Lesson Material"
keywords: [javascript, es6, esm, modules, npm]
---

## Why

![alt_text](../assets/lectures/javascript/frontend-dino-comic.png)

Why do we even need or want this stuff? What do you gain from all of this added complexity? Let's talk about that.

Starting around 2010, several competing JavaScript package managers emerged to help automate the process of downloading and upgrading libraries from a central repository. [Bower](https://bower.io/) was arguably the most popular in 2013, but eventually was overtaken by [npm](https://www.npmjs.com/) around 2015. (It’s worth noting that starting around late 2016, [yarn](https://yarnpkg.com/en/) has picked up a lot of traction as an alternative to npm’s interface, but it still uses npm packages under the hood).

Modern web applications involve a lot of code. Some of that code we write, some we get from other developers. And we can take that a step further. Code that we get from other developers, or that they share with the world, is incredibly useful. We don't always have to reinvent the wheel. A package manager, like NPM, helps us install and manage that code.

On another note, we still end of writing a bunch of code, so how do we maintain our own code? One way is to split and organize files as _modules_. ECMAScript Modules help us do that.

So what is the difference between ECMAscript and Javascript?

Well ECMA is just a specification, while Javascript is a programming language that conforms to this specification.

The first version of ECMAScript was released in 1997, then starting in 2015, ECMA has been working on new specifications and releasing them annually. [ES6](https://exploringjs.com/es6/ch_overviews.html#ch_overviews) was released in 2015, which released a bunch of new features for Javascript!

One (_of many_) important features that was added were ES modules. Modules allow us to compartmentalize and organize our code into smaller, more cohesive files that can be imported and exported where we need to execute the code.

## What

### NPM

The **node package manager** is a command line tool that gives you access to a gigantic repository of plugins, libraries and tools.

### Yarn

At some point, you will probably run into [Yarn](https://yarnpkg.com/en/) - a replacement for the default `npm`. For the most part, it does the same things though it _does_ have a few more features. Recent versions of `npm` have incorporated some of the best features of Yarn, so using it won’t offer you any real advantages at this point in your career. It _is_ a fine project, however, and may be worth your consideration in the future.

### Webpack

[Webpack](https://www.theodinproject.com/courses/javascript/lessons/es6-modules#webpack) is simply a tool for bundling modules. There is a lot of talk across the net about how difficult and complex it is to set up and use, but at the moment our needs are few and the setup is simple enough. In fact, you can see an example of getting it up and running on the front page of [their website](https://webpack.js.org/).

Webpack _is_ a very powerful tool, and with that power comes a decent amount of complexity - just look at this sample [config file](https://webpack.js.org/configuration/) 😱. Don’t let it scare you off! The basic configuration is not difficult and proficiency with webpack looks _amazing_ on resumes.

## How

When dealing with packages from npm, it's important to have a `package.json` file. To initialize npm in your repository, run `npm init` in a new directory. This command will initialize the creation of a `package.json` file in your directory, and ask you basic questions, such as "author:", "description:", "keywords:", "main:", "license:", etc.

> To accept the default configuration answers, you can instead run `npm init -y`.

We can install dependencies for our project using the `npm install` CLI tool.

### Installing A Package

The majority of packages that we'll use are unscoped packages, which means that they can be searched for, downloaded, and installed by anyone. To install a public package, on the command line, run

```sh
npm install <package_name> --save
```

This will create the `node_modules` directory in your current directory (if one doesn’t exist yet) and will download the package to that directory.

> Note: If there is no `package.json` file in the local directory, the latest version of the package is installed. If there is a `package.json` file, npm installs the latest version that satisfies the [semver rule](https://nodesource.com/blog/semver-tilde-and-caret/) declared in `package.json` under the property "dependencies:".

### Exporting Local Modules

To create a module that has code to use in other files, use the `export` keyword.

There are two types of exports:

1. **Named Exports** (Zero or more exports per module)
2. **Default Exports** (One per module)

```js
// Exporting individual features/values
export let name = "Frodo";
export let hobbit = {
  name: "Frodo",
};
export function adventure() {
  console.log("Let's go on an adventure!");
}

// Export List of values
export { name, hobbit, adventure };

// Export as default
export default hobbit;
```

> NOTE: To create a default export, include the `default` keyword after `export`

### Importing Modules

You use the `import` keyword to pull in externally defined values/features.

The `export` statement is used when creating JavaScript modules to export live bindings to functions, objects, or primitive values from the module so they can be used by other programs with the [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) keyword. Bindings that are exported can still be modified locally; when imported, although they can only be read by the importing module the value updates whenever it is updated by the exporting module.

```js
import defaultExport from "module";
import { name } from "module";
import { name1, name2 } from "module";
import "module";
```

Local modules should be imported using file paths.

```js
import hobbit from "./hobbit.js";
```

Exported modules are in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) whether you declare them as such or not. The export statement cannot be used in embedded scripts.

#### Importing an NPM Package

Once you've installed an NPM package, you can import the module into any file using the `import` keyword. The path to the module is simply the name of the package. NPM will know to import the module from `node_modules`.

```js
import dayjs from "dayjs";
```

## Takeaways

1. Modern web development involves code bundling and asset management tools such as _Webpack_ and _npm_
2. _NPM_ is a registry with millions of JavaScript code packages that you can use in your project
3. _Webpack_ is a tool for bundling and minifying your project assets, which makes your overall shipped code base as small and efficient as possible
4. ESM stands for _ECMAScript Modules_, which were introduced in 2015
5. `import` and `export` keywords can be used to import or export code from modules (project files)
6. Code can be exported as _default_ (one per file) or _named_ (multiple per file)
   - Code should be imported relative to how it is exported
