/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {              
    this.sum = function() {
        return (a + b);
    }
    this.subtraction = function() {
      return (a - b);
    }
    this.multiplication = function() {
      return (a * b);
    }
    this.division = function() {
      return (a / b);
    }
}

const sum = new Calculator(1, 2);
const subtraction = new Calculator(2, 2);
const multiplication = new Calculator(2, 2);
const division = new Calculator(2, 10);

console.log(sum.sum());
console.log(subtraction.subtraction());
console.log(multiplication.multiplication());
console.log(division.division());