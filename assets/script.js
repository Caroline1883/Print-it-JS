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
// Fonction anonymisée car non reprise dans la suite du code

const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');


// Ajout bullets

function genererBullets() {
	const bulletElement = document.createElement("div");
	bulletElement.classList.add('dot');
	const dots = document.querySelector('.dots');
  	dots.appendChild(bulletElement);
}

function genererBulletsActive() {
	const bulletElement = document.createElement("div");
	bulletElement.classList.add('dot');
	bulletElement.classList.add('dot_selected');
	const dots = document.querySelector('.dots');
  	dots.appendChild(bulletElement);
}

// Autant de bullets que d'image + bullet 1 sélectionnée

for (let i=0; i < slides.length; i++){
	if (i===0) {
	genererBulletsActive();
	} else {
	genererBullets();
		}
	}

// Action clic flèche

let numero=0;

function changeSlideR() {
	numero++;
	document.querySelector(".dots").innerHTML = "";
		for (let i=0; i < slides.length; i++){
			if (i===numero) {
			genererBulletsActive();
			} else {
			genererBullets();
				}
			}
	const img = document.querySelector(".banner-img");
	img.setAttribute("src","./assets/images/slideshow/"+slides[numero].image);
	document.querySelector("p").innerHTML = slides[numero].tagLine;
}

function changeSlideL() {
	numero--;
	document.querySelector(".dots").innerHTML = "";
		for (let i=0; i < slides.length; i++){
			if (i===numero) {
			genererBulletsActive();
			} else {
			genererBullets();
				}
			}
	const img = document.querySelector(".banner-img");
	img.setAttribute("src","./assets/images/slideshow/"+slides[numero].image);
	document.querySelector("p").innerHTML = slides[numero].tagLine;
}

arrow_right.addEventListener('click', function (){changeSlideR()});
arrow_left.addEventListener('click', function (){changeSlideL()});

