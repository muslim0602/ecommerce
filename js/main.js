const elSiteHeaderCartLink = document.querySelector(".js-site-header-cart-link");
const elSiteHeaderCartModal = document.querySelector(".site-header__cart-modal");

if (elSiteHeaderCartLink) {
  elSiteHeaderCartLink.addEventListener("click", function (evt) {
    evt.preventDefault();

    elSiteHeaderCartModal.classList.toggle("site-header__cart-modal--open");
  });
}

const elPicturePrime = document.querySelector(".picture__prime");
const elsPicturesPrimeButton = document.querySelectorAll(".js-pictures-prime-button");
const elsPicturesItem = document.querySelectorAll(".pictures__item");

elsPicturesPrimeButton.forEach(function (elButton) {

  elButton.addEventListener("click", function () {
    elsPicturesItem.forEach(function (elsPicturesItem) {
      elsPicturesItem.classList.remove("pictures__item--active");

    });

    elButton.parentElement.classList.add("pictures__item--active");

    elPicturePrime.src = elButton.dataset.elPicturesBog;
    elPicturePrime.srcset = '${elButton.dataset.imgPicturesBog} 1x, ${elButton.dataset.imgPicturesRetina} 2x';

  });

});


// LIGHTBOX

const elLightshotToggler = document.querySelector(".js-lightshot-toggler");
const elLightBox = document.querySelector(".lightbox");
const elLightboxClose = document.querySelector(".js-lightbox-close");

if (elLightshotToggler) {
  elLightshotToggler.addEventListener('click', function () {
    elLightBox.classList.add("lightbox--open");

  });

}

if (elLightboxClose) {
  elLightboxClose.addEventListener('click', function () {
    elLightBox.classList.remove("lightbox--open");

  });

}