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

function genererBullets(i, numero=0) {
	const bulletElement = document.createElement("div");
	bulletElement.classList.add('dot');
	if (i===numero){
		bulletElement.classList.add('dot_selected');
	}
	const dots = document.querySelector('.dots');
	dots.appendChild(bulletElement);
}

for (let i=0;i<slides.length; i++){
	genererBullets(i);
}

// Action clic flèche

let numero = 0;
let max = slides.length - 1;
console.log(max);

function changeSlideR() {
	numero++;
	console.log(numero);
	if(numero>max){numero=0};
	console.log(numero);
	const img = document.querySelector(".banner-img");
	img.setAttribute("src","./assets/images/slideshow/"+slides[numero].image);
	document.querySelector("p").innerHTML = slides[numero].tagLine;
	document.querySelector(".dots").innerHTML = "";
	for (let i=0; i < slides.length; i++){
		genererBullets(i, numero);
	}
}

function changeSlideL() {
	numero--;
	console.log(numero);
	if(numero<0){numero=3};
	console.log(numero);
	const img = document.querySelector(".banner-img");
	img.setAttribute("src","./assets/images/slideshow/"+slides[numero].image);
	document.querySelector("p").innerHTML = slides[numero].tagLine;
	document.querySelector(".dots").innerHTML = "";
	for (let i=0; i < slides.length; i++){
		genererBullets(i, numero);
	}
}

arrow_right.addEventListener('click', function (){changeSlideR()});
arrow_left.addEventListener('click', function (){changeSlideL()});

