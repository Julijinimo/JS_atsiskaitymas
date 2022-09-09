/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */
import { composition } from './modules/math/composition.js';
import { division } from './modules/math/division.js';
import { subtraction } from './modules/math/subtraction.js';
import { multiplication } from './modules/math/multiplication.js';

let a = composition(1, 4);
let b = division(1, 4);
let c = subtraction(1, 4);
let d = multiplication(1, 4);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
