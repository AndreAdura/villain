function battle(){

var hero = document.getElementById('hero').value;
var villian = document.getElementById('villian').value;
var audio = document.getElementById("audio");
var audio1 = document.getElementById("audio1");

if (hero.toLowerCase() == "fire" && villian.toLowerCase() == "rock" || hero.toLowerCase() == "water" && villian.toLowerCase() == "fire" || hero.toLowerCase() == "rock" && villian.toLowerCase() == "water") {


	audio1.play();


	} else if(villian.toLowerCase() == "fire" && hero.toLowerCase() == "rock" || villian.toLowerCase() == "water" && hero.toLowerCase() == "fire" || villian.toLowerCase() == "rock" && hero.toLowerCase() == "water") {

		
		audio.play();


	} else if(hero.toLowerCase() === villian.toLowerCase()){
		alert("Tie!!!");
	}

}