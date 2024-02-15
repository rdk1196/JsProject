"use strict";
const numberOfFilms = +prompt("How many films have you already watched?","");

const personalMovieDB = {
	count : numberOfFilms,
	movies : {},
	actors : {},
	genres : [],
	private : false
};
const oneOfLastMovies = prompt("One of the last movies you watched?",""),
	rate = prompt("How much did you rate it?"),
	oneOfLastMovies2 = prompt("One of the last movies you watched?",""),
	rate2 = prompt("How much did you rate it?");

personalMovieDB.movies[oneOfLastMovies] = rate; //записываю output в обьект
personalMovieDB.movies[oneOfLastMovies2] = rate2; //записываю output в обьект

// //git add -A добавление всех новых файлов
// //git commit -a -m"комент"" 
console.log(personalMovieDB);
//  console.log("Hello");