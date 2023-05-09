const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');

let imageIndex = 0;
let picture = document.querySelector('.banner-img');
let banner = document.getElementById("banner");
let paragraph = banner.querySelector("p");


function carrousel() {
	picture.src = slides[imageIndex].image;
	paragraph.innerHTML = slides[imageIndex].tagLine;
	const parent = document.querySelector('.dots');
	parent.innerHTML = '';
	for (let i = 0; i < slides.length; i += 1) {
		const icone = document.createElement('div');
		icone.classList.add('dot');
		parent.appendChild(icone);
		if (i === imageIndex) {
			icone.classList.add('dot_selected')
		}
		icone.addEventListener('click', function () {
			console.log('ok dots');
			if (i !== imageIndex) {
				imageIndex = i;
				carrousel();
			}
		});
	};
};
function animation() {
	let next = document.querySelector(".next");
	next.classList.add('active')
	setTimeout(() => {
		next.classList.remove('active');
	}, 600);
	console.log(imageIndex);

}

carrousel();
arrow_left.addEventListener('click', function () {
	console.log('ok');
	imageIndex--;
	if (imageIndex <= -1) {
		imageIndex = slides.length - 1;
	}
	animation();
	carrousel();
});
arrow_right.addEventListener('click', function () {
	console.log("ok");
	imageIndex++;
	if (imageIndex >= slides.length) {
		imageIndex = 0;

	}
	carrousel();
});



