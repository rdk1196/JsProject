"use strict";

//1
let numberOfFilms = prompt("How many films have you already watched?","");

//2
const personalMovieDB = {
	count : numberOfFilms,
	movies : {},
	actors : {},
	genres : [],
	private : false
};

//3
let oneOfLastMovies = prompt("One of the last movies you watched?","");
let rate = prompt("How much did you rate it?");

console.log(oneOfLastMovies);
console.log(rate);

personalMovieDB.movies[{oneOfLastMovies : rate}];

console.log(oneOfLastMovies);
console.log(rate);

personalMovieDB.movies[{oneOfLastMovies : rate}];
