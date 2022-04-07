# Problem Set #3 - Closures
## Problem 2 - Hoisting Interview
***
### Question 1
```JavaScript
console.log("bar:", bar);
bar = 15;
var foo = 1;
console.log(foo, bar);
var bar;
```
### Console log
```console
bar: undefined
1 15
```
### Explanation
When the code is analyzed, the variables `bar` and `foo` get hoisted, since bar without the keyword **var** can only be hoisted to the global scope when it's inside a function it is taken as a variable assignment. That's why in the first line the value for `bar` is **undefined**.
***
### Question 2
```JavaScript
var foo = 5;
console.log("foo:", foo);
var foo;
var bar = 10;
var bar;
console.log("bar:", bar);
var baz = 10;
var baz = 12;
console.log("baz:", baz);
```
### Console log
```console
foo: 5
bar: 10
baz: 12
```
### Explanation
In this example we have more than one variable declaration on the same variable (foo, bar and baz), due to hoisting this declarations move to the top of the scope, and the assignment stays on the same place were it was declared.
***
### Question 3
```JavaScript
function foo() {
  function bar() {
    return 5;
  }
  return bar();

  function bar() {
    return 10;
  }
}
console.log(foo());
```
### Console log
```console
10
```
### Explanation
In this example we define two functions with the same name, when hoisted the second function is assigned as value since it's the last declaration
***
### Question 4
```JavaScript
function foo() {
  var bar = "I'm a variable";
  function bar() {
    return "I'm a bar function";
  }
  return bar();
}
console.log(foo());
```
### Console log
```console
return bar();
         ^
TypeError: bar is not a function
```
### Explanation
In this example the variable `bar` gets declared and assigned before the function so it recognizes bar as a string instead of a function, this is because the order of precedence, assignments of variables take precedence over function declarations.
***
### Question 5
```JavaScript
greeting();
var greeting = function () {
  console.log("Good Morning");
};
greeting();
function greeting() {
  console.log("Good Evening");
}
greeting();
```
### Console log
```console
Good Evening
Good Morning
Good Morning
```
### Explanation
Function expression `var greeting` don't get hoisted, so when we first invoke `greeting` it is referencing it's function declaration `function greeting` which is the one getting hoisted. Then the second time is invoked it is referencing the funcion expression since its a new assignment and overwrites the first function declaration.
***
### Question 6
``` JavaScript
var foo = 5;
console.log('foo:', foo);
var foo = 10;
console.log("foo:", foo);
```
### Console log
```console
foo: 5
foo: 10
```
### Explanation
This is a similar case to Question 2. The variable declaration of `foo` gets hoisted to the top of the scope but its assignments stays in the same place where it was declared.
*** 
### Question 7
```JavaScript
console.log(foo());
function foo() {
  var bar = function () {
    return 3;
  };
  return bar();
  var bar = function () {
    return 8;
  };
}
```
### Console log
```console
3
```
### Explanation
Function expressions don't get hoisted, so it returns the value 3 and ignores the last function expression.
***
### Question 8
```JavaScript
var x = "foo";
(function() {
  console.log("x: " + x);
  var x = "bar"
  console.log("x: " + x);
})()
```
### Console log
```console
x: undefined
x: bar
```
### Explanation
In this example the IIFE uses the local scope to get the value of `x`. Since its value is encapsulated in the IIFE it doesn't recognize the value assigned in the global scope. (?)
***
### Question 9
```JavaScript
function foo() {
  console.log("First");
}
foo();
function foo() {
  console.log("Second");
}
```
### Console log
```console
Second
```
### Explanation
Both functions `foo` get hoisted, so when the code is read it takes the last declaration as the function.
***
### Question 10
```JavaScript
var foo = 5;
function baz() {
  foo = 10;
  return;
  function foo() {}
}
baz();
console.log(foo);
```
### Console log
```console
5
```
### Explanation
In this example when JS reads the code it defines the `foo` variable inside the function, in the global scope, then it declares and assign the `var foo` variable so the value returned to log is 5