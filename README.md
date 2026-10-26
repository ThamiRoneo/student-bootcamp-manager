# Student Bootcamp Manager

## Project Description
A vanilla JavaScript console application that manages students, calculates performance, determines PASS/FAIL status, and generates comprehensive reports. The project demonstrates advanced JavaScript concepts from Module 4 through student registration, processing, and asynchronous operations.

## Technologies
- JavaScript (ES6+)
- Node.js Console

## How to Run
1. Ensure Node.js is installed
2. Navigate to the project directory
3. Run: `node main.js`
4. View the output in the console

## Module 4 Concepts Implemented
- Default parameters
- Rest parameters
- Spread syntax
- Closures
- IIFE
- Functions as values
- Higher-order functions
- Callbacks
- `this` keyword
- `call()`
- `apply()`
- `bind()`
- Generators (`function*`, `yield`, `.next()`)
- Asynchronous programming with `setTimeout()`

## Features
- Student registration with unique IDs
- Store student names, courses, and marks
- Calculate student averages
- Determine PASS/FAIL based on configurable passing mark (default 50)
- Closure-based student processing counter
- IIFE configuration system
- Functions as values and higher-order functions
- Callback-based asynchronous processing
- Demonstrate `this`, `call()`, `apply()`, and `bind()`
- Generator for unique student IDs
- Comprehensive final report with class statistics

## Challenges
1. **Asynchronous flow understanding** - Managing the order of synchronous and asynchronous operations with setTimeout was confusing initially.
2. **Controlling 'this' context** - Understanding when to use call(), apply(), vs bind() and their differences required careful thought.

## Solutions
1. **Asynchronous flow** - Used explicit console logs numbered to trace execution order, demonstrating that synchronous code runs first while callbacks execute after delays.
2. **'this' context** - Practiced with real examples using objects and explicitly tested each method (call with individual args, apply with arrays, bind for later execution) to understand their behavior.
