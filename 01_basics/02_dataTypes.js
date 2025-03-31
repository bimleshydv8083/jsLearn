"use stricts"; // Enable strict mode to avoid undeclared variables

/*
Data Types in JavaScript:
==========================

1. Primitive Data Types (Stored in Stack Memory, Immutable)
------------------------------------------------------------
✅ String – Represents text ("Hello", 'World', `\JS`) 
✅ **Number** – Represents integers & floating-point numbers (10, 3.14) 
✅ **BigInt** – Represents large numbers beyond Number.MAX_SAFE_INTEGER (123n) 
✅ **Boolean** – Represents trueorfalse values 
✅ **Undefined** – A variable declared but not assigned (let x;) 
✅ **Null** – Represents an empty or unknown value (let x = null;) 
✅ **Symbol** – Unique, immutable value used as object property keys (Symbol("id")`)
*************    Reference (points to same memory)
========================================================================================================

2. Reference Data Types (Stored in Heap Memory, Mutable)
------------------------------------------------------------
✅ Object – Collection of key-value pairs ({ name: "John", age: 30 })
✅ Array – Ordered list of values ([1, 2, 3])
✅ Function – A reusable block of code (function greet() {})
✅ Date – Represents date and time (new Date())
✅ RegExp – Regular expressions (/abc/ for pattern matching)
✅ **Map** – Collection of key-value pairs with any data type as key
*************	Value (creates a new copy)
========================================================================================================
*/

// 1. String Data Type

let name 