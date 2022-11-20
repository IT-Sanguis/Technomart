var map = document.querySelector(".modal__map");
var writeUs = document.querySelector(".write-us");
var modalCart = document.querySelector(".modal-cart");

var btnMap = document.querySelector(".map");
var btnWriteUs = document.querySelector(".contact__btn");
var btnBuy = document.querySelectorAll("a.product__btn");

var btnClose = document.querySelectorAll(".btn-close");

if (btnMap) {
  btnMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    map.classList.add("modal-show");
  });
}

if (btnWriteUs) {
  btnWriteUs.addEventListener("click", function(evt) {
    evt.preventDefault();
    writeUs.classList.add("modal-show");
  });
}

if (btnBuy) {
  for (var i = 0; i < btnBuy.length; i++) {
    btnBuy[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      modalCart.classList.add("modal-show");
    });
  }
}

if (btnClose) {
  if (writeUs&&map) {
    for (var i = 0; i < btnClose.length; i++) {
      btnClose[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        writeUs.classList.remove("modal-show");
        map.classList.remove("modal-show");
      });
    }
  }
  if (btnBuy) {
    for (var i = 0; i < btnClose.length; i++) {
      btnClose[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        modalCart.classList.remove("modal-show");
      });
    }
  }
}

window.addEventListener("keydown", function(evt) {
  if (evt.code === "Escape") {
    if (writeUs&&map&&(map.classList.contains("modal-show")||writeUs.classList.contains("modal-show"))) {
      evt.preventDefault();
      writeUs.classList.remove("modal-show");
      map.classList.remove("modal-show");
    }
    if (modalCart.classList.contains("modal-show")) {
      evt.preventDefault();
      modalCart.classList.remove("modal-show");
    }
  }
});
