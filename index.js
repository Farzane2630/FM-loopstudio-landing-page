const headerTop = document.querySelector(".header__top");
const openMenuButton = document.querySelector(".header__menu__icon--closed");
const closeMenuButton = document.querySelector(".header__menu__icon--opened");


openMenuButton.addEventListener("click", ()=>{
    headerTop.classList.add("header__top--open")
})

closeMenuButton.addEventListener("click", ()=>{
    headerTop.classList.remove("header__top--open")
})
