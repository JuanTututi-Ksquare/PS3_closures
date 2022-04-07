// Question 1
// console.log("bar:", bar);
// bar = 15;
// var foo = 1;
// console.log(foo, bar);
// var bar;

// Question 2
// var foo = 5;
// console.log("foo:", foo);
// var foo;
// var bar = 10;
// var bar;
// console.log("bar:", bar);
// var baz = 10;
// var baz = 12;
// console.log("baz:", baz);

// In this example we define two functions with the same name, when hoisted the second function is assigned as value
// Question 3
// function foo() {
//   function bar() {
//     return 5;
//   }
//   return bar();

//   function bar() {
//     return 10;
//   }
// }
// console.log(foo());

// In this example the variable bar gets defined and assigned before the function so it recognizes bar as a string instead of a function
// This is because the order of precedence, if the variable weren't assigned then bar would be a function instead
// Question 4
// function foo() {
//   var bar = "I'm a variable";
//   function bar() {
//     return "I'm a bar function";
//   }
//   return bar();
// }
// console.log(foo());

// Question 5
// greeting();
// var greeting = function () {
//   console.log("Good Morning");
// };
// greeting();
// function greeting() {
//   console.log("Good Evening");
// }
// greeting();

// Question 6
// var foo = 5;
// console.log('foo:', foo);
// var foo = 10;
// console.log("foo:", foo);

//  Function expression dont get hoisted, so it returns the value 3
// Question 7
// console.log(foo());
// function foo() {
//   var bar = function () {
//     return 3;
//   };
//   return bar();
//   var bar = function () {
//     return 8;
//   };
// }

// In this example the IIFE uses the local scope to define x
// QUestion 8
// var x = "foo";
// (function() {
//   console.log("x: " + x);
//   var x = "bar"
//   console.log("x: " + x);
// })()

// Question 9
// function foo() {
//   console.log("First");
// }
// foo();
// function foo() {
//   console.log("Second");
// }

// In this example when JS reads the code it defines the foo variable inside the function in the global scope, 
// Then it defines the var foo variable so the value returned to log foo is 5
// Question 10
var foo = 5;
function baz() {
  foo = 10;
  return;
  function foo() {}
}
baz();
console.log(foo);
