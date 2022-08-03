const elSiteHeaderCartLink = document.querySelector(".js-site-header-cart-link");
const elSiteHeaderCartModal = document.querySelector(".site-header__cart-modal");

if (elSiteHeaderCartLink){
elSiteHeaderCartLink.addEventListener("click", function (evt){
  evt.preventDefault();

  elSiteHeaderCartModal.classList.toggle("site-header__cart-modal--open");
});
}


const elsPicturesPrimeButton = document.querySelectorAll(".js-pictures-prime-button");
const elsPicturesItem = document.querySelectorAll(".pictures__item");

elsPicturesPrimeButton.forEach(function (elButton) {

elButton.addEventListener("click", function (){
  elsPicturesItem.forEach(function (elsPicturesItem){
    elsPicturesItem.classList.remove("pictures__item--active");

  });

  elButton.parentElement.classList.add("pictures__item--active");

});

});
