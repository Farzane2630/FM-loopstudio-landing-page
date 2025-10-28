const headerTop = document.querySelector(".header__top");
const openMenuButton = document.querySelector(".header__menu__icon--closed");
const closeMenuButton = document.querySelector(".header__menu__icon--opened");
const galleryBody = document.querySelector(".gallary");

openMenuButton.addEventListener("click", () => {
  headerTop.classList.add("header__top--open");
});

closeMenuButton.addEventListener("click", () => {
  headerTop.classList.remove("header__top--open");
});

/*
 Inserting Gallary button 
 at the bottom of gallary body
 when screen size is < 37rem 
*/
galleryBody.insertAdjacentHTML(
  "beforeend",
  `<button type="button" class="gallary__button gallary__button--bottom">
        <a href="#" class="gallary__button__link">See all</a>
    </button>
    `
);
