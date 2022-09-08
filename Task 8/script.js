/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function calculate(a, b, operator) {
    switch(operator){
      case 'sum':
        return a + b;
      case 'subtraction':
        return a - b;
      case 'division':
        return a / b;
      case 'multiplication':
        return a * b;
    };
  };
  console.log(calculate(5, 10, 'sum'));
  console.log(calculate(6, 4, 'subtraction'));
  console.log(calculate(7, 8, 'multiplication'));
  console.log(calculate(2, 10, 'division'));