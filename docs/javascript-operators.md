---
title: "Operators"
slug: "/javascript-operators"
---

Lecture Video Part 1

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/504984084/bee103445e" type="video/mp4" />
</video>

Lecture Video Part 2

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/504984217/a665a7c3cc" type="video/mp4" />
</video>

---

# Lecture

## Why:

JavaScript includes operators as in other languages. An operator performs some operation on single or multiple operands (data value) and produces a result.

For example 1 + 2, where the (+) sign is an operator and 1 is the left operand and 2 is the right operand.

The (+) operator adds two numeric values and produces a result which is 3 in this case.

| Type    | Syntax                            |
| ------- | --------------------------------- |
| Unary   | `operator<operand>`               |
| Binary  | `<operand>operator<operand>`      |
| Ternary | `(condition) ? result1 : result2` |

## What:

JavaScript has the following types of operators.

- [Assignment operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment)
- [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison)
- [Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic)
- [Bitwise operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise)
- [Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Logical)
- [String operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#String)
- [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Conditional)
- [Comma operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comma)
- [Unary operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Unary)
- [Relational operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Relational)

### Arithmetic operators

- Addition: The ‘+’ operator adds two operands. For example, x + y
- Subtraction: The ‘-’ operator subtracts two operands. For example, x - y
- Multiplication: The ‘_’ operator multiplies two operands. For example, x _ y
- Division: The ‘/’ operator divides the first operand by the second. For example, x / y
- Modulus: The ‘%’ operator returns the remainder when the first operand is divided by the second. For example, x % y

JavaScript has both** unary** and **binary** operators, and one special **ternary** operator, the conditional operator.

### Unary Operators

A unary operator requires a single operand, either before or after the operator:

```
x++; // post- increment
++x; // pre- increment
y--; // post- decrement
--y; // pre- decrement

let isTrue = !true; // false. ! will return the opposite of a value
```

### Binary operators

A binary operator requires two operands, one before the operator and one after the operator:

| Operator | Expression | Description    |
| -------- | ---------- | -------------- |
| +        | x + y      | Addition       |
| -        | x - y      | Subtraction    |
| \*       | x \* y     | Multiplication |
| \        | x \ y      | Division       |
| \*\*     | x \*\* y   | Exponentiation |
| %        | x % y      | Modulus        |

### Assignment Operators

The most common assignment operator is the (=) sign

| Operator | Example   | Same As    |
| -------- | --------- | ---------- |
| =        | x = y     | x = y      |
| +=       | x += y    | x = x + y  |
| -=       | x -= y    | x = x - y  |
| \*=      | x \*= y   | x = x \* y |
| /=       | x /= y    | x = x / y  |
| %=       | x %= y    | x = x % y  |
| \*\*=    | x \*\*= y | x = x\*\*y |

### Comparison Operators

A comparison operator compares the operands and returns a value based on whether the comparison is true or false.

| Operator | Description                                                         |
| -------- | ------------------------------------------------------------------- |
| ==       | Returns true if operands are equal                                  |
| !==      | Returns true if operands are strictly equal                         |
| !==      | Returns true if operands are not strictly equal                     |
| >        | Returns true if left operand is greater than right operand          |
| >=       | Returns true if left operand is greater or equal to right operand   |
| <        | Returns true if left operand is less than right operand             |
| <=       | Returns true if left operand is less than or equal to right operand |

### Logical operators

A logical operator is used to compare two expressions. This typically returns a boolean value.

| Operator | Description |
| -------- | ----------- |
| &&       | AND         |
| \|\|     | OR          |
| !        | NOT         |

## How:

### Arithmetic operators

- Add:

`let answer = 12 + 3; // 15`

- Subtract:

`let answer = 12 - 3; // 9`

- Multiply:

`let answer = 12 * 3; // 36`

- Divide:

`let answer = 12 / 3; // 4`

- Modulus:

`let answer = 4 % 2; // 0`

- Exponentiation:

`let answer = 4 ** 2; // 16`

- Increment (post/pre):

```
let a = 4;
let b = a++;
console.log(`a:${a}, b:${b}`); // a:4, b:4

let x = 4;
let y = ++x;
console.log(`x:${x}, y:${y}`); // a:4, b:5
```

### Comparison Operators

- == (equal to):

```
let x = "false";
let y = "true";
console.log(x == y); // false
```

- != (not equal to):

```
let x = 5;
let y = 1;
console.log(x != y); // true
```

- \> (greater than):

```
let x = 5;
let y = 1;
console.log(x > y); // true
```

- < (less than):

```
let x = 0;
let y = 1;
console.log(x < y); // true
```

- <= (less than or equal to):

```
let x = 1;
let y = 1;
console.log(x <= y); // true
```

- \>= (greater than or equal to):

```
let x = 1;
let y = 1;
console.log(x >= y); // true
```

### Strict Equality ( === )

The strict equality operator (===) checks whether its two operands are equal, returning a Boolean result. Unlike the [equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality) operator, the strict equality operator always considers operands of different types to be different.

```
console.log(1 === 1); // true
console.log('1' === 1); // false
console.log('hello' === 'hello'); // true
console.log(0 === false); // false
```

Strict Inequality ( !== ):

```
console.log(1 !== 1); // false
console.log('1' !== 1); // true
console.log('hello' !== 'hello'); // false
console.log(0 !== false); // true
```

### Logical operators

Logical AND ( && ):

```
let a = 3;
let b = -2;

console.log(a > 0 && b > 0); // false
```

Logical OR ( || ):

```
let a = 3;
let b = -2;

console.log(a > 0 || b > 0); // true
```

Logical NOT ( ! ):

```
let isOnline = true;
console.log(!isOnline); // false
```

### Type Coercion and Equality

As well as a type, each value also has an inherent boolean value, generally known as either truthy or falsy.

Javascript utilizes a couple of options for checking equality:

**==** the “Double equal” operator or the “**Abstract operator**”

- Also known as “**Loose Equality**” - Using **Type Coercion** the == takes both values and converts them to the same type before performing the comparison

**===** the “triple equal” operator or the “**identity operator**”

- Does not use **coercion**. Both of the items being compared must have **the same value and type** to return true.

For example:

```
1 == "1" // true
1 === "1" // true
```

We cannot do this with arrays however, even if 2 arrays have the same exact contents, both arrays point to different places in memory:

```
let array1 = [10, 9, 8];
let array2 = [10, 9, 8];

array1 == array2; // false
array1 === array2; // false
```

### Truthy and Falsy:

In Javascript, all values have an inherit boolean value assigned to it:

According to the Mozilla Developer Network,

_A **falsy value** is a value that is considered false when encountered in a [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) context. We can use these in if statements_

**Falsy Examples**: The following all have boolean value of false

- false
- 0
- 0n - BigInt
- “”, ‘’, ``
- null
- undefined
- NaN - Not a number

For Example:

```
false == false;
"" == false;
0 == false;
0n == false;
undefined == false;
```

```
if("") {
    console.log("truthy");
} else {
    console.log("falsy");
}

"falsy"
```

```
if(0) {
    console.log("truthy");
} else {
    console.log("falsy");
}

"falsy"
```

All other values are considered “truthy”.

All of the following expressions evaluate to true in Javascript:

**1 == true**

```
if(1) {
    console.log("truthy");
} else {
    console.log("falsy");
}

“truthy”

if([]) {
    console.log("truthy");
} else {
    console.log("falsy");
}

“truthy”

if(“false”) {
    console.log("truthy");
} else {
    console.log("falsy");
}

“truthy”
```

And we can use truthy/falsy when we evaluate conditions.

For example with this if statement: Since 0 if falsy, the if statement changed the value of the variable val to “falsy”

```
let val = 0;

if(val) {
    val = "truthy";
} else {
    val = "falsy";
}

"falsy"
```

---

## Exercise:

### Exercise 1

1. Declare 2 variables, `a` and `b`, and assign 20 to `a` and 4 to `b`
2. Declare a variable `add` that uses the `+` operator to store the result of adding the values stored in `a` and `b`
3. Declare a variable `minus` that uses the `-` operator to store the result of subtracting the values stored in `a` and `b`
4. Declare a variable `multiply` that uses the `*` operator to store the result of multiplying the values stored in `a` and `b`
5. Declare a variable `dividing` that uses the `/` operator to store the result of dividing the values stored in `a` and `b`

You can print the value of the variables to the browser console (ex: `console.log(add)`) to check the result.

### Exercise 2

1. Use the following code to answer the questions below:

```
let a = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Jackie";
let lastName = "Chan";
```

- What is the value of: a + str?
- What is the value of: a + str2?
- What is the value of: a + isPresent?
- What is the value of: a + firstName?
- What is the value of: a + lastName?

Use the code above to test and print the results.

### Exercise 3

1. Use the following code to answer the questions below:

```
let a = 5;
let str = "5";
let str2 = "five";
let isPresent = false;
let firstName = "Robin";
let lastName = "Williams";
```

- What is the value of: a == str?
- What is the value of: a === str?
- What is the value of: !isPresent?
- What is the value of: (“eleven” == str2 && a >= str)?
- What is the value of: (!isPresent || isPresent)?
- What is the value of: 0 == false?
- What is the value of: 0 === false?
- What is the value of: 0 != false?
- What is the value of 0 !== false?

Use the code above to test and print the results.

[Exercise Walkthrough Documentation](https://docs.google.com/document/d/1O4dkANafXzl1gzvR4W7sQpQHnayMaULyyE4WPTdFvgw/edit?usp=sharing)

---

## Quiz:

[JavaScript Operator Quiz](https://docs.google.com/forms/d/e/1FAIpQLScGATRmc8u1G14bSEOv5ahFEKCRl_49GJJqH-eIWdlANIsKng/viewform?authuser=3)

### Quiz Review Video

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/505434933/7adb700738" type="video/mp4" />
</video>
