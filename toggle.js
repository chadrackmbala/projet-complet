const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
// const toggleBtnIcon = document.querySelector('.toggle_btn ion-icon');
const dropDownMenu = document.querySelector('.drop-down');
const main = document.getElementById("main");
// console.log(main.innerHTML);
const overlay = document.getElementById("overlay");

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open');

    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen 
    ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    // if(toggleBtnIcon.classList === isOpen) {
    //     main.style.filter = "blur(4px)"
    // } else {
    //     main.style.filter = "blur(0)"
    // }
  
    //toggleBtnIcon.classList = isOpen 
    //? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
  

    // toggleBtnIcon.classList = isOpen ? 'icon menu' : 'add-outline'

}