"use strict";

//1
const numberOfFilms = +prompt("How many films have you already watched?","");

//2
const personalMovieDB = {
	count : numberOfFilms,
	movies : {},
	actors : {},
	genres : [],
	private : false
};

//3 Задайте пользователю по два раза вопросы 




const oneOfLastMovies = prompt("One of the last movies you watched?",""),
	rate = prompt("How much did you rate it?"),
	oneOfLastMovies2 = prompt("One of the last movies you watched?",""),
	rate2 = prompt("How much did you rate it?");

	console.log(oneOfLastMovies);
//1&2
	let validation = false;

	while (validation === false){
		oneOfLastMovies,
		rate;
		if ((oneOfLastMovies === "" || rate === "" || (oneOfLastMovies === "" && rate === "")) || oneOfLastMovies.length > 50){
			oneOfLastMovies,
			rate;
		}
		else{
			validation = true;
		}
		
	}


personalMovieDB.movies[oneOfLastMovies] = rate; //записываю output в обьект
personalMovieDB.movies[oneOfLastMovies2] = rate2; //записываю output в обьект

//git add -A добавление всех новых файлов
//git commit -a -m"комент"" 
console.log(personalMovieDB);

