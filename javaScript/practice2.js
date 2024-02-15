"use strict";
const numberOfFilms = +prompt("How many films have you already watched?","");

const personalMovieDB = {
	count : numberOfFilms,
	movies : {},
	actors : {},
	genres : [],
	private : false
};

//practice2 ex1
first: for (let i = 0; i < 2; i++){
    const oneOfLastMovies = prompt("One of the last movies you watched?",""),
	rate = prompt("How much did you rate it?");
    if (oneOfLastMovies.length === 0 || oneOfLastMovies.length > 50) continue first;
    else{
        personalMovieDB.movies[oneOfLastMovies] = rate;
    }
}

if (personalMovieDB.count < 10){
    console.log("Few films watched");
}
else if (personalMovieDB.count > 10 || personalMovieDB.count < 30){
    console.log("You're a great viewer");
}
else if (personalMovieDB.count > 30){
    console.log("you a movie buff");
}
else{
    console.log("Error");
}



// //git add -A добавление всех новых файлов
// //git commit -a -m"комент"" 
console.log(personalMovieDB);


