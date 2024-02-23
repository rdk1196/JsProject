/* eslint-disable no-mixed-spaces-and-tabs */ 
//git add -A добавление всех новых файлов git commit -a -m"комент"" 
"use strict";
let numberOfFilms;
//practice 3

function start () {
   
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){ //валидации . Если арг пустая сторка или 
        numberOfFilms = +prompt("How many films have you already watched?","");//арг null(отмена) или не число продолжай цикл
        personalMovieDB.count = numberOfFilms;
        console.log(personalMovieDB.count);
    }
}
const personalMovieDB = {
	count : numberOfFilms,
	movies : {},
	actors : {},
	genres : [],
	private : false
};


function rememberMyFilms(){
    //oneOfLastMovies != null - если в перемной импута (oneOfLastMovies = null), значит пользователь нажал на отмену
        for (let i = 0; i < 2; i++){
            const oneOfLastMovies = prompt("One of the last movies you watched?",""),
                  rate = prompt("How much did you rate it?");
            if (oneOfLastMovies != null && rate != null && oneOfLastMovies.length != "" && rate !="" && oneOfLastMovies.length < 50){
                personalMovieDB.movies[oneOfLastMovies] = rate;
                console.log("done");
        }
        else{ // добовляет еще 1 итерацию . пользователь возвращаеться к вопросам
            console.log("error");
            i--;
        } 
    }
}

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("Few films watched");
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("You're a great viewer");
    }
    else if (personalMovieDB.count >= 30){
        console.log("you a movie buff");
    }
    else{
        console.log("Error");
    }

}

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}

function writeYourGeners(){
    for (let i = 1;i < 4; i++){
        personalMovieDB.genres[i-1] = prompt(`What your favorite gener on number ${i}`);
    }
    

}
    
start();
rememberMyFilms();
detectPersonalLevel();
writeYourGeners();
showMyDB(personalMovieDB.private);





