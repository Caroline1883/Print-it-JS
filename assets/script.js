const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Ajout et contrôle AddEventListener

var arrow_left = document.querySelector('.arrow_left');

function showMsgL() {
	console.log("banane");
  }

arrow_left.addEventListener('click', showMsgL);

var arrow_right = document.querySelector('.arrow_right');

function showMsgR() {
	console.log("fraise");
  }

arrow_right.addEventListener('click', showMsgR);


// Ajout bullets

function genererBullets() {
	var bulletElement = document.createElement("div");
	bulletElement.classList.add('dot');
	var divContent = document.createTextNode(' ');
	bulletElement.appendChild(divContent);
	var banner = document.getElementById('dots');
  	dots.appendChild(bulletElement);
}

genererBullets();

// Ajout bullets (en comptant le nombre d'image)