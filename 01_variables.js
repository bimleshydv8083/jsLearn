// Types of Variables: var, let, const

/* 
   var: ✅Function-scoped (accessible anywhere inside the function where it’s declared)
        ✅ Global-scoped (if declared outside a function, it becomes a global variable)
        ✅ Can be redeclared in the same scope
        ✅ Can be updated (reassigned)
        ✅ Hoisted (moved to the top of its scope, but initialized as undefined)
        ✅ Not block-scoped (ignores {} blocks unless inside a function)
        ✅ Can be accessed before declaration (returns undefined due to hoisting)
        ✅ Can be deleted (if declared globally without use strict)
*/

/* 
   let: ✅ Block-scoped (only accessible within {} where it's defined)
        ✅ Cannot be redeclared in the same scope
        ✅ Can be updated (reassigned)
        ✅ Hoisted, but in Temporal Dead Zone (cannot be accessed before declaration)
        ✅ Not function-scoped (unlike var, it does not leak outside a function)
        ✅ Cannot be accessed before declaration (throws an error)
        ✅ Cannot be deleted 
*/

/*
   const: ✅ Block-scoped (like let, it stays inside {} where it's defined)
          ✅ Cannot be redeclared
          ✅ Cannot be updated (reassigned) (but mutable objects inside const can be changed)
          ✅ Hoisted, but in Temporal Dead Zone (cannot be accessed before declaration)
          ✅ Cannot be deleted
          ✅ Not function-scoped
          ✅ Must be initialized during declaration (no const x;)
*/

// lets declare 

var x = 10;
console.log("x:", x);

let y = 20;
console.log("y:", y);

const z = 30;
console.log("z:", z);