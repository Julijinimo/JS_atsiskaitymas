/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }

    wasExpensive() {
        return this.budget >= 100000000 
    }
}

const movie1 = new Movie('Harry Potter', 'Chris Columbus', 100000000);
const movie2 = new Movie('The Fast and the Furious', 'Vin Diesel', 150000000);
const movie3 = new Movie('The Godfather', 'Francis Ford Coppola', 90000000);
console.log(movie1);
console.log(movie2);
console.log(movie3);    

console.log(movie1.wasExpensive());
console.log(movie2.wasExpensive());
console.log(movie3.wasExpensive());