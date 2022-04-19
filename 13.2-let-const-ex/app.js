var PI = 3.14;
PI = 42; // stop me from doing this!

// instead use const to prevent reassignment

const pi = 3.14

// 1. var can be redeclared, and accessed within a code block as it has a function scope, while let cannot be redeclared, and it can not be accessed from within a code block.
// 2. like let, const cannot be redeclared either, but it also cannot be reassigned, unless you use array methods like push, shift, etc.
// 3. let can be reassigned, const cannot
// 4. hoisting is when a variables definition is propelled to the top of the scope. this is done with variables made with var. this allows you to access the variable name before it appears in the code, also it will be undefined.