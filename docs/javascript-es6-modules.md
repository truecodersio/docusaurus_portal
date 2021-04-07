---
title: "ES6 Modules"
slug: "javascript-es6-modules"
---

Lecture Video

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/truecodersio/review/510436355/800fa41344" type="video/mp4" />
</video>

# Lecture

## Why

So what is the difference between ECMAscript and Javascript?

Well ECMA is just a specification, while Javascript is a programming language that conforms to this specification.

The first version of ECMAScript was released in 1997, then starting in 2015, ECMA has been working on new specifications and releasing them annually. And thus ES6 was released in 2015, which released a bunch of new features for Javascript!

## What

Now that we understand what Webpack is doing it’s time to discuss the module syntax. There are only 2 components to it - import and export.

The static import statement is used to import read only live bindings which are exported by another module. Imported modules are in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) whether you declare them as such or not. The import statement cannot be used in embedded scripts unless such script has a type="module". Bindings imported are called live bindings because they are updated by the module that exported the binding.

There is also a function-like dynamic import(), which does not require scripts of type="module".

Backward compatibility can be ensured using attribute nomodule on the [&lt;script>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) tag.

### Import Syntax

```
import defaultExport from "module-name";
import * as alias from "module-name";
import { export1 } from "module-name";
import { export1 as alias }from "module-name";
import { export1, export2 }from "module-name";
import { foo, bar } from "module-ame/path/to/specific/un-exported/file";
import defaultExport, { export1, [...] } from "module-name";
import defaultExport, * as alias from "module-name";
import "module-name";
const module = import("module-name");
```

The **export** statement is used when creating JavaScript modules to export live bindings to functions, objects, or primitive values from the module so they can be used by other programs with the [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) statement. Bindings that are exported can still be modified locally; when imported, although they can only be read by the importing module the value updates whenever it is updated by the exporting module.

Exported modules are in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) whether you declare them as such or not. The export statement cannot be used in embedded scripts.

### Export Syntax

There are two types of exports:

1. Named Exports (Zero or more exports per module)
2. Default Exports (One per module)

- Exporting individual features

```
export let name1, name2;
export let name1 = n, name2 = n2;
export function name() {...};
export class Name {...};
```

- Exporting a list

```
export { name1, name2, name3 };
```

- Renaming Exports

```
export { variable1 as alias, variable2 as alias2 };
```

- Exporting destructured assignments with renaming

```
export const { name1, name2, foo, bar } = object;
```

- Default Exports

```
export default expression;
export default function () {...};
export default function name() {...};
export { name as default };
```

- Aggregating Modules

```
export * from file;
export * as name from file;
export { name1, name2 } from file;
export { import as alias, import2 as alias } from file;
export { default } from file;
```

## How:

Consider the following code:

```
function clock(playing, seconds, minutes, hours, currentTime, duration, timeP) {
    if (playing) {
        seconds++;
    }
    if (seconds > 59) {
        seconds = 0;
        minutes++;
    } else if (minutes > 59) {
        seconds = 0;
        minutes = 0;
        hours++;
    } else if (hours > 24 || !playing) {
        clearInterval(duration)
    }

    currentTime = `${hours.toString().padStart(2, "0")
    :${minutes.toString().padStart(2, "0")
    :${seconds.toString().padStart(2, "0")`;

    timeP.textContent = currentTime;
}
```

Here we can implement the ecma module design, so first we’ll create a new file called stopwatch.js, and then cut the following code from the index.js and paste it into the stopwatch.js:

```
export function clock(playing, seconds, minutes, hours);
```

Be sure to add the export keyword.

Then back in index.js, we’ll import the module:

```
import { clock } from "./stopwatch";

clock();
```

Now if we call clock() inside of our index.js, we can use our function from our stopwatch.js module. **Trust me, the more code you have clogging up a single file, the more you will go out of your way to import/export modules.**

### Exercise

#### Objective

Our users should be able to come to our web app to add or remove cars that they want on their Wish List.

#### Part 1:

1. Create a new project for practicing ES6 modules
2. Inside of your project
   - Create an index.js file
   - Create an index.html file
     - In our index.html, add a script tag and set the src to be our index.js file

#### Part 2:

1. We’re going to be using ES6 modules. So let’s take this time to configure Webpack to bundle our project
2. Initialize npm in your project to create a package.json file
3. Install webpack and webpack-cli
4. Create a dist/ and src/ folder in the root directory of your project
5. Move your index.html file to the dist/ folder
6. Move your index.js file to the src/ folder
7. Open your package.json file, and make sure to add “scripts”: {“build”: “webpack”}
8. Make sure you change the js script in your index.html to ...src=”main.js”...
9. From the command line/terminal, run “npm run build” for webpack to bundle your project

#### Part 3:

1. Create a car.js file, then do the following:
   1. Create a class called Car
   2. Add a constructor that takes a make, model, and year
   3. Create an info() function that displays the car’s info to the document
2. Create a wishlist.js file 4. Create a class WishList 5. At minimum, the WishList class should have a method for adding or removing cars from the WishList 6. Our users should be able to view the cars in the WishList from the document, so either as a method on the WishList class, or a separate function in the index.js file, you should account for this functionality of displaying and updating the DOM
3. Inside of index.js 7. Import our Car and WishList modules 8. Create a new instance of our WishList 9. Users should be able to interact with our web page (DOM) to add new Car instances to their Wish List

Exercise Walkthrough Video

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/510880938/f76156aae2" type="video/mp4" />
</video>

## Quiz

**No Quiz!**
