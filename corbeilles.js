//FUNCTION FOR ANANAS

//Récupération des objets depuis le document
const ananasTitle = document.getElementById("ananas-title");
const ananasBtn = document.getElementById("ananas-btn");
const panier = document.getElementById("panier-container");

//Initialisation d'une variable pour compter les clicks

let numberOfClick = 0;

//Création d'une div avec la classe achat dans l'objet panier

const newDiv = document.createElement("div");
newDiv.classList.toggle("achat");
panier.appendChild(newDiv);

/* Création d'un h4 avec la classe block-achat dans
l'objet newDiv */

let nombre = document.createElement("h4");
nombre.classList.toggle("block-achat");
newDiv.appendChild(nombre);

const fruit = ananasTitle.textContent;

function compterClick() {
    numberOfClick++
    nombre.textContent = `${numberOfClick} ${fruit}`;
}

ananasBtn.addEventListener("click", compterClick);

//FUNCTION FOR BANANES

const bananesTitle = document.getElementById("bananes-title");
const bananesBtn = document.getElementById("bananes-btn");

bananesBtn.addEventListener("click", compterClick);