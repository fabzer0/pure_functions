# UNDERSTANDING THE BASICS

## WHAT IS FUNCTIONAL PROGRAMMING
Functional programming is a paradigm of building computer programs using declarations and expressions.

## IS JAVASCRIPT A FUNCTIONAL PROGRAMMING LANGUAGE OR OBJECT-ORIENTED?
Thanks to new developments in ES6, we can say that JavaScript is both a functional as well as object-oriented programming language because of the various first-class features it provides.

## WHAT IS THE ADVANTAGE OF FUNCTIONAL PROGRAMMING?
Functional programming ensures simpler flow control in our code and avoids any surprises in the form of variable and state changes. All this helps us avoid bugs and understand our code easily.

## WHAT ARE OTHER FUNCTIONAL PROGRAMMING LANGUAGES?
Lisp, Erlang, Haskell, Closure, and Python are other functional programming languages. In these, Haskell is a purely functional programming language in the sense that it allows no other paradigm of programming.

## WHAT IS ES6?
ES6 or ECMAScript 6 is a new version of JavaScript that includes many new features like arrow functions, constants, and spread operators, among many others.

## MORE QNS.

### Can you write js application using functional style completely or there is just small local fp-style code improvements possible atm?

Depends on the application. If your aim is to write a CLI app that takes input from the user and does arithmetic and string computations, you can do mostly FP.

If you want to write an application making HTTP requests, dealing with APIs and doing async programming, then NO. In that case, you can only write functional code where it is possible and where it makes sense.

### const SECRET = 42; const getId = (a) => SECRET * a;
#### getId is a pure function here since SECRET is a constant.

Purity and impurity are concepts that apply to the function on an atomic level and not just at the program level. Let's consider copying the getId function and pasting it to a different file with a different value of SECRET. In that case, the new getId call will give a different value for the same input. This is because getId is dependant on the state of the program which includes the constant SECRET. A pure function should act independently, not dependant on the state of a program or a global variable.