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

//Practice 2 1&2

	for (let i = 0; i < 2; i++){
		const oneOfLastMovies = prompt("One of the last movies you watched?",""),
			rate = prompt("How much did you rate it?");
		personalMovieDB.movies[oneOfLastMovies] = rate;
	}
console.log(personalMovieDB);
	



//3
// if (personalMovieDB.count < 10){
// 	console.log("Просмотерно мало фильмов");
// }
// else if (personalMovieDB.count > 10 || personalMovieDB.count < 30){
// 	console.log("Вы классический зритель");
// }
// else if (personalMovieDB.count > 30){
// 	console.log("Вы киноман");
// }
// else{
// 	console.log("Произошла ошибка");
// }




//git add -A добавление всех новых файлов
//git commit -a -m"комент"" 


