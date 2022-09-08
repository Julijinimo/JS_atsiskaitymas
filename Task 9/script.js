/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

function Movie() {
    this.title = '';
    this.director = '';
    this.budget = 'budget';
};

const Movie1 = new Movie('Antanas', 'Antano brolis', 13);

console.log(Movie1);

//https://rollbar.com/blog/javascript-constructors/
//https://www.w3schools.com/js/js_object_constructors.asp