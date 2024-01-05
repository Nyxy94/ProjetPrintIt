const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

slides.forEach((slide, index) => {
	const dot = document.createElement('div'); //créer une nouvelle div
	dot.classList.add("dot"); //Ajout d'une classe a la div

	// Ajout d'un gestionnaire d'événements pour le clic sur chaque dot
	dot.addEventListener('click', () => {
		position = index; //mettre a jour la position en fonction de l'index de la dot cliquée
		slideActive(); //Active la diapositive correspondante
		updateDots(); //mettre a jour les dots
	});
	// Ajout élément dot au conteneur avec la classe ".dots"
	document.querySelector('.dots').appendChild(dot);
})

// Déclaration des variables

const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector('.arrow_right')
const img = document.querySelector('.banner-img')
const dots = document.querySelector('.dots')
const tagLine = document.querySelector('#banner p')

let position = 0
slideActive(position)

function slideActive() {
	img.src = "./assets/images/slideshow/" + slides[position].image //Mettre à jour la source de l'image via le tableau
	updateDots(); //Mettre à jour l'état des dots
	tagLine.innerHTML = slides[position].tagLine //Mettre à jour le texte (tagLine) de l'image
}

//Fonction pour mettre a jour l'états des dots en fonction de leur position
function updateDots() {
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, i) => {
		if (i === position) {
			dot.classList.add('dot_selected'); //Ajout de la classe ".dot_selected" à la dot actuelle
		} else {
			dot.classList.remove('dot_selected');//retire la classe ".dot_selected" des autres dots
		}
	});
}

arrowLeft.addEventListener('click', () => {
	if (position === 0) {
		position = slides.length - 1
	} else {
		position--
	}
	slideActive()
})

arrowRight.addEventListener("click", () => {
	if (position === slides.length - 1) {
		position = 0
	} else {
		position++
	}
	slideActive()
})



