---
title: "JavaScript Study Questions"
slug: "/javascript-questions"
---

1. What is JavaScript?

   - JavaScript is an interpreted and weakly typed programming language for adding functionality to web pages in the browser.

2. What are the different data types in JS?

   - Primitive
     - string
     - number
     - null
     - undefined
     - boolean
     - bigint
     - symbol
   - Structured/Non-Primitive
     - object (includes functions, arrays, maps, sets, HTMLCollections, et al)

3. Is JS statically typed or dynamically typed language? What do they mean?

   - JS is dynamically typed, meaning we do not have to define types for variables, functions, parameters, etc.

4. What is the difference between `==` and `===` operators?

   - `==`, loose equality (will use type coercion to convert both types to the same data type, to then check value equality)
   - `===`, strict equality (checks for value equality without using type coercion)

5. What is implicit Type Coercion in JS?

   - When the JS interpreter converts data types without explicit code defining it to do so
   - Example:

   ```js
   // Concatenation
   1 + "1" == "11";
   // Loose Equality
   1 == "1"; // true
   // Less than, Greater than, etc
   1 > "12";
   ```

6. What is hoisting in JS?

   - Being able to reference or call a value or function within a program/scope, before that value is defined in the source code.
   - Example:

   ```js
   add(1, 2);

   function add(a, b) {
     return a + b;
   }
   ```

7. What is Scope in JS?

   - Levels of visibility/access between blocks of code in JS
   - Example:

   ```js
   if (val == 1) {
     let name = "Ben";
   }

   name; // Reference Error
   ```

8. What is passed by value and passed by reference?

   - Primitive values are passed by value, non-primitive are passed by reference
   - When we pass primitive values, we pass a copy of the value
   - When we pass non-primitive values, we pass a reference, or memory address, not the value itself
   - Example:

   ```js
   let a = "ben";
   let b = a;
   a = 7;
   console.log(b); // "ben"

   let c = { name: "Ben" };
   let d = c;
   c.name = 7;
   console.log(d.name); // 7
   ```

9. What are Higher Order Functions in JS?

   - A function that acts on another function by:
   - Function that takes another function as a parameter
   - Function that returns another function value

10. What are callbacks?

    - The callback is the function used by a HOF
    - Example:

    ```js
    function math(oper, val1, val2) {
      return oper(val1, val2);
    }

    function add(x, y) {
      return x + y;
    }

    math(add, 1, 2); // returns 3
    ```

11. What are object prototypes?

    - Objects that are models/blueprints used when creating/defining other objects
    - Objects created from prototypes inherit the prototype's properties and methods
    - Class syntax is syntax sugar for using prototypes in JS

12. Explain REST / RESTful Services.

    - Representational State Transfer – is a language-independent architecture that provides interoperability between computer systems on the Internet. It utilizes a stateless protocol aiming for fast performance and reliability.
    - POST, GET, PUT, DELETE

13. Explain the difference between frontend and backend development?

    | Frontend                                                                                                   | Backend                                                                           |
    | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
    | Frontend refers to the client-side of an application                                                       | Backend refers to the server-side of an application                               |
    | Frontend is the part of a web application that users see and interact with                                 | Backend is the part of the application that users do not interact with            |
    | Frontend includes everything that attributes to the visual aspects and content format of a web application | Backend includes a web server that handles requests and interacts with a database |
    | HTML, CSS, JavaScript, AngularJS, and ReactJS are some of the essentials of frontend development           | Java, PHP, Python, and Node.js are some of the backend development technologies   |

14. Explain what a prototype is in JavaScript

    - A class is a user-defined blueprint or prototype from which objects are created

15. What are the 4 pillars of object-oriented programming?

    - **Inheritance** - In OOP, inheritance is the concept that a child class or type can inherit functionality from its parent. You can think of inheritance as a parent/child relationship.
    - **Polymorphism** - (Having many forms) In OOP, polymorphism is the concept that two or more different classes/types with differing implementations can be referenced or called in a similar fashion.
    - **Encapsulation** - In OOP, encapsulation is the concept that a class or type will only expose the functionality necessary to accomplish a given goal, hiding or encapsulating any remaining functionality. A good real world example of encapsulation is a car. A car may have a great deal of moving parts, such as the engine, brakes, and the transmission, but all of that is hidden under the hood. What is exposed to the driver is the bare essentials for driving, such as a steering wheel, gas pedal, and brake pedal.
    - **Abstraction** - In OOP, abstraction is the concept that software should be built in abstract sections that can be combined together into a cohesive whole, as opposed to building code where everything is tightly coupled and difficult to break apart. Think of a swiss army knife vs. a chisel
      - A swiss army knife can be used for a bunch of tasks, but its ability to perform is less than optimal for each one of those tasks.
      - A chisel does one thing; and it does it well.
    - Putting things that a computer will do into concepts that a human can understand – convey in naming! method names, etc. People reading your code can understand your code.

    | Abstraction                                                                | Encapsulation                                                                                      |
    | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
    | Abstraction is used for hiding unwanted data and giving only relevant data | Encapsulation is hiding the code and data into a single unit to protect the data from outside code |

## Study More

- [InterviewBit's JS Interview Questions](https://www.interviewbit.com/javascript-interview-questions/)
- [SudheerJ's JS Interview Questions](https://github.com/sudheerj/javascript-interview-questions)
