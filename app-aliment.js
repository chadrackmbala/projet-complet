const ananasBtn = document.getElementById("ananas-btn");
const panier = document.getElementById("panier-container");
const fruit = "Ananas"
console.log(ananasBtn.textContent);

let ananas = document.createElement("h4");
    panier.appendChild(ananas);
function ajouterFruit() {
    ananas.textContent = fruit;
}

ananasBtn.addEventListener("click", ajouterFruit);

let nombre = document.createElement("h4");
panier.appendChild(nombre);
console.log(nombre);

let numberOfClick = 0;

function compterClick() {
    numberOfClick = numberOfClick + 1;
    nombre.textContent = numberOfClick;
    console.log(numberOfClick);
}
// ananas.textContent = numberOfClick, ananas;

ananasBtn.addEventListener("click", compterClick);