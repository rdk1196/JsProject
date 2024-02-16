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

//oneOfLastMovies != null - если в перемной импута (oneOfLastMovies = null), значит пользователь нажал на отмену
//  for (let i = 0; i < 2; i++){
//     const oneOfLastMovies = prompt("One of the last movies you watched?",""),
// 	rate = prompt("How much did you rate it?");
//     if (oneOfLastMovies != null && rate != null && oneOfLastMovies.length != "" && rate !="" && oneOfLastMovies.length < 50){
//         personalMovieDB.movies[oneOfLastMovies] = rate;
//         console.log("done");
//     }
//     else{ // добовляет еще 1 итерацию . пользователь возвращаеться к вопросам
//         console.log("error");
//         i--;
//     } 
// }

//ex1 second way

let iteration = 0;
while (iteration < 2){
    const oneOfLastMovies = prompt("One of the last movies you watched?",""),
	rate = prompt("How much did you rate it?");
    if (oneOfLastMovies != null && rate != null && oneOfLastMovies.length != "" && rate !="" && oneOfLastMovies.length < 50){
        personalMovieDB.movies[oneOfLastMovies] = rate;
        console.log("done");
        iteration ++;
    }
    else{ // добовляет еще 1 итерацию . пользователь возвращаеться к вопросам
        console.log("error");
        iteration--;
    } 
}
console.log(personalMovieDB);


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
//console.log(personalMovieDB);


