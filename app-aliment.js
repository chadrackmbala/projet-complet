//FUNCTION POUR ANANAS

//Récupération des objets depuis le document
const ananasTitle = document.getElementById("ananas-title");
const ananasBtn = document.getElementById("ananas-btn");
const panier = document.getElementById("panier-container");

//Initialisation d'une variable pour compter les clicks

let numberOfClickAnanas = 0;

//Création d'une div avec la classe achat dans l'objet panier

const newDiv = document.createElement("div");
newDiv.classList.toggle("achat");
panier.appendChild(newDiv);

/* Création d'un h4 avec la classe block-achat dans
l'objet newDiv */

let nombreAnanas = document.createElement("h4");
nombreAnanas.classList.toggle("block-achat");
newDiv.appendChild(nombreAnanas);

function compterClick() {
    const fruit = ananasTitle.textContent;
    numberOfClickAnanas++
    nombreAnanas.textContent = `${numberOfClickAnanas} ${fruit}`;
}

ananasBtn.addEventListener("click", compterClick);

//FUNCTION POUR BANANES

const bananesTitle = document.getElementById("bananes-title");
const bananesBtn = document.getElementById("bananes-btn");

let nombreBananes = document.createElement("h4");
nombreBananes.classList.toggle("block-achat");
newDiv.appendChild(nombreBananes);

let numberOfClickBananes = 0;

function achatBanane() {
    const fruit = bananesTitle.textContent;
    numberOfClickBananes++
    nombreBananes.textContent = `${numberOfClickBananes} ${fruit}`;
}

bananesBtn.addEventListener("click", achatBanane);


//FUNCTION POUR PASTEQUES

const pastequeTitle = document.getElementById("pasteque-title");
const pastequeBtn = document.getElementById("pasteque-btn");

let nombrePasteque = document.createElement("h4");
nombrePasteque.classList.toggle("block-achat");
newDiv.appendChild(nombrePasteque);

let numberOfClickPasteque = 0;

function achatPasteque() {
    const fruit = pastequeTitle.textContent;
    numberOfClickPasteque++
    nombrePasteque.textContent = `${numberOfClickPasteque} ${fruit}`;
}

pastequeBtn.addEventListener("click", achatPasteque);

//FUNCTION POUR AVOCATS

const avocatTitle = document.getElementById("avocat-title");
const avocaBtn = document.getElementById("avocat-btn");

let nombreAvocat = document.createElement("h4");
nombreAvocat.classList.toggle("block-achat");
newDiv.appendChild(nombreAvocat);

let numberOfClickAvocat = 0;

function achatAvocat() {
    const fruit = avocatTitle.textContent;
    numberOfClickAvocat++
    nombreAvocat.textContent = `${numberOfClickAvocat} ${fruit}`;
}

avocaBtn.addEventListener("click", achatAvocat);

//FUNCTION POUR CAROTTES

const carotteTitle = document.getElementById("carotte-title");
const carotteBtn = document.getElementById("carotte-btn");

let nombreCarotte = document.createElement("h4");
nombreCarotte.classList.toggle("block-achat");
newDiv.appendChild(nombreCarotte);

let numberOfClickCarotte = 0;

function achatCarotte() {
    const fruit = carotteTitle.textContent;
    numberOfClickCarotte++
    nombreCarotte.textContent = `${numberOfClickCarotte} ${fruit}`;
}

carotteBtn.addEventListener("click", achatCarotte);

//FUNCTION POUR MANGUES

const manguesTitle = document.getElementById("mangue-title");
const manguesBtn = document.getElementById("mangue-btn");

let nombreMangues = document.createElement("h4");
nombreMangues.classList.toggle("block-achat");
newDiv.appendChild(nombreMangues);

let numberOfClickMangues = 0;

function achatMangue() {
    const fruit = manguesTitle.textContent;
    numberOfClickMangues++
    nombreMangues.textContent = `${numberOfClickMangues} ${fruit}`;
}

manguesBtn.addEventListener("click", achatMangue);

//FUNCTION POUR NOIX DE COCO

const noixDeCocoTitle = document.getElementById("n-coco-title");
const noixDeCocoBtn = document.getElementById("n-coco-btn");

let nombreNoixDeCoco = document.createElement("h4");
nombreNoixDeCoco.classList.toggle("block-achat");
newDiv.appendChild(nombreNoixDeCoco);

let numberOfClickNoixDeCoco = 0;

function achatNoixDeCoco() {
    const fruit = noixDeCocoTitle.textContent;
    numberOfClickNoixDeCoco++
    nombreNoixDeCoco.textContent = `${numberOfClickNoixDeCoco} ${fruit}`;
}

noixDeCocoBtn.addEventListener("click", achatNoixDeCoco);

//FUNCTION POUR POMMES

const pommeTitle = document.getElementById("pommes-title");
const pommeBtn = document.getElementById("pommes-btn");

let nombrePomme = document.createElement("h4");
nombrePomme.classList.toggle("block-achat");
newDiv.appendChild(nombrePomme);

let numberOfClickPomme = 0;

function achatNoixPomme() {
    const fruit = pommeTitle.textContent;
    numberOfClickPomme++
    nombrePomme.textContent = `${numberOfClickPomme} ${fruit}`;
}

pommeBtn.addEventListener("click", achatNoixPomme);

//FUNCTION POUR POMME DE TERRE

const pommeDeTerreTitle = document.getElementById("p-de-terre-title");
const pommeDeTerreBtn = document.getElementById("p-de-terre-btn");

let nombrePommeDeTerre = document.createElement("h4");
nombrePommeDeTerre.classList.toggle("block-achat");
newDiv.appendChild(nombrePommeDeTerre);

let numberOfClickPommeDeTerre = 0;

function achatNoixPommeDeTerre() {
    const fruit = pommeDeTerreTitle.textContent;
    numberOfClickPommeDeTerre++
    nombrePommeDeTerre.textContent = `${numberOfClickPommeDeTerre} ${fruit}`;
}

pommeDeTerreBtn.addEventListener("click", achatNoixPommeDeTerre);

//FUNCTION POUR MANGOUSTA

const mangoustaTitle = document.getElementById("mangousta-title");
const mangoustaBtn = document.getElementById("mangousta-btn");

let nombreMangousta = document.createElement("h4");
nombreMangousta.classList.toggle("block-achat");
newDiv.appendChild(nombreMangousta);

let numberOfClickMangousta = 0;

function achatMangousta() {
    const fruit = mangoustaTitle.textContent;
    numberOfClickMangousta++
    nombreMangousta.textContent = `${numberOfClickMangousta} ${fruit}`;
}

mangoustaBtn.addEventListener("click", achatMangousta);

//FUNCTION POUR Poillus

const poillusTitle = document.getElementById("poillus-title");
const poillusBtn = document.getElementById("poillus-btn");

let nombrePoillus = document.createElement("h4");
nombrePoillus.classList.toggle("block-achat");
newDiv.appendChild(nombrePoillus);

let numberOfClickPoillus = 0;

function achatPoillus() {
    const fruit = poillusTitle.textContent;
    numberOfClickPoillus++
    nombrePoillus.textContent = `${numberOfClickPoillus} ${fruit}`;
}

poillusBtn.addEventListener("click", achatPoillus);

//FUNCTION POUR GOYAVE

const goyaveTitle = document.getElementById("goyave-title");
const goyaveBtn = document.getElementById("goyave-btn");

let nombreGoyave = document.createElement("h4");
nombreGoyave.classList.toggle("block-achat");
newDiv.appendChild(nombreGoyave);

let numberOfClickGoyave = 0;

function achatGoyave() {
    const fruit = goyaveTitle.textContent;
    numberOfClickGoyave++
    nombreGoyave.textContent = `${numberOfClickGoyave} ${fruit}`;
}

goyaveBtn.addEventListener("click", achatGoyave);