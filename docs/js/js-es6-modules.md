---
title: "JS ES6 Modules"
slug: "js-es6-modules"
---

<!-- Lecture Video

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/truecodersio/review/510436355/800fa41344" type="video/mp4" />
</video>

--- -->

## Why

So what is the difference between ECMAscript and Javascript?

Well ECMA is just a specification, while Javascript is a programming language that conforms to this specification.

The first version of ECMAScript was released in 1997, then starting in 2015, ECMA has been working on new specifications and releasing them annually. [ES6](https://exploringjs.com/es6/ch_overviews.html#ch_overviews) was released in 2015, which released a bunch of new features for Javascript!

One (_of many_) important feature that was added were ES modules. Modules allow us to compartmentalize and organize our code into smaler, cohesive files that can be imported and exported where we need to execute the code.

## What

Before we jump into modules, let’s take a moment to explore what they are, and why they’re beneficial to us. A module is a chunk of a program or application. More specifically, a piece of functionality. Using modules allows us to separate these chunks to keep our code **CCR** (Clean, Concise, Readable).

Why would we want to break up our code? Wouldn’t it just be harder to remember where everything is? Let’s imagine two different programs.

The first program is 1,000 lines of code, all in the same file. Due to the nature of this program, there’s going to be some interdependability between different functionalities in the program. We want to avoid what’s commonly referred to as "[A big ball of mud](https://en.wikipedia.org/wiki/Big_ball_of_mud)". Which is a program that lacks structure, and leads to all of the things that we want to avoid.

Let’s imagine the second program. It’s also 1,000 lines of code, but perhaps seperated into 20 files of 50 lines of code, that are neatly organized and separated in a way that makes maintaining the program a breeze. We just have to reference the functionality of one of the files whenever we want to utilize it!

With the introduction of modules, keeping our program organized has never been easier.

There’s one more tool that we’re going to utilize to make organizing our application even easier and less costly! Let’s recap [Webpack](https://webpack.js.org/concepts/). Webpack is a static module bundler that processes our application and creates a dependency graph. Any time one file depends on another, webpack treats this as a dependency. This allows webpack to take non-code assets, such as images or web fonts, and also provide them as dependencies for your application. Webpack then bundles everything together (normally into one bundle) to be loaded by the browser.

Now that we understand what Webpack is doing it’s time to discuss the module syntax. There are only 2 components to it - import and export.

The static import statement is used to import read only live bindings which are exported by another module. Imported modules are in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) whether you declare them as such or not. The import statement cannot be used in embedded scripts unless such script has a `type="module"`. Bindings imported are called live bindings because they are updated by the module that exported the binding.

There is also a function-like dynamic `import()`, which does not require scripts of `type="module"`.

Backward compatibility can be ensured using attribute nomodule on the [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) tag.

### Export Syntax

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

### Import Syntax

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

## How

Let's write an example where we have a utility function for returning the time of a stop watch. Since it's a utility function, we can define it in a local module, and import it wherever we need to.

```js
// Inside of utils/clock.js

function stopwatch(seconds, minutes, hours, timer) {
  if (seconds, > 59) {
    seconds = 0;
    minutes++;
  } else if (minutes > 59) {
    seconds = 0;
    minutes = 0;
    hours++;
  } else if (hours > 23) {
    clearInterval(duration)
  }

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
```

Here we can implement the ES module syntax. Let's add the `export` keyword before the function declaration to bind `stopwatch` as a _named export_.

```js
export stopwatch(seconds, minutes, hours, duration) {
  // ...
}
```

Now we can import the module wherever we need the stopwatch utility function.

```js
// Inside of index.js

import { stopwatch } from "./utils/clock.js";
```

Now if we call `stopwatch()` inside of our index.js, we can use our function from our `clock.js` module. Trust me, the more code you have clogging up a single file, the more you will need to implement ECMAScript modules.

## Takeaways

1. ESM stands for _ECMAScript Modules_, which were introduced in 2015
2. `import` and `export` keywords can be used to import or export code from modules (project files)
3. Code can be exported as _default_ (one per file) or _named_ (multiple per file)
   - Code should be imported relative to how it is exported
