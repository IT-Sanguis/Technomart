var map = document.querySelector(".modal__map");
var writeUs = document.querySelector(".write-us");
var modalCart = document.querySelector(".modal-cart");

var cart = document.querySelector(".cart");
var bookmark = document.querySelector(".bookmark");

var username = document.getElementById("name");
var useremail = document.getElementById("email");
var usertext = document.getElementById("text");

var btnMap = document.querySelector(".map");
var btnWriteUs = document.querySelector(".contact__btn");
var btnBuy = document.querySelectorAll("a.product__btn");
var btnBookmark = document.querySelectorAll("button.product__btn");


var btnClose = document.querySelectorAll(".btn-close");

var isStorageSupport = true;
var storageUsername = "";
var storageUseremail = "";
var storageCartCount = "";
var storageBookmarkCount = "";


try {
  storageUsername = localStorage.getItem("username");
  storageUseremail = localStorage.getItem("useremail");
  storageCartCount = localStorage.getItem("localCartCount");
  storageBookmarkCount = localStorage.getItem("localBookmarkCount");
} catch (err) {
  isStorageSupport = false;
}

if (btnMap) {
  btnMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    map.classList.add("modal-show");
  });
}

if (btnWriteUs) {
  var form = writeUs.querySelector("form");

  btnWriteUs.addEventListener("click", function(evt) {
    evt.preventDefault();
    writeUs.classList.add("modal-show");

    if (isStorageSupport && storageUsername && storageUseremail) {
      username.value = storageUsername;
      useremail.value = storageUseremail;
      usertext.focus();
    } else {
      username.focus();
    }
  });

  form.addEventListener("submit", function(evt) {
    if (!username.value || !useremail.value || !usertext.value) {
      evt.preventDefault();
      writeUs.classList.remove("modal-error");
      writeUs.offsetWidth = writeUs.offsetWidth;
      writeUs.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("username", username.value);
        localStorage.setItem("useremail", useremail.value);
      }
    }
  });
}



if (btnBookmark) {
  if (isStorageSupport) {
    if (storageBookmarkCount && !bookmark.classList.contains("full")) {
      bookmark.querySelector(".bookmark__count").textContent = storageBookmarkCount;
      bookmark.classList.add("full");
    }
  } else {
    bookmark.querySelector(".bookmark__count").textContent = 0;
    bookmark.classList.remove("full");
  }

  for (var i = 0; i < btnBookmark.length; i++) {
    btnBookmark[i].addEventListener("click", function(evt) {
      evt.preventDefault();

      var bookmarkCount = bookmark.querySelector(".bookmark__count").textContent;

      bookmarkCount = +bookmarkCount + 1;
      if (isStorageSupport) {
        localStorage.setItem("localBookmarkCount", bookmarkCount);
        bookmark.querySelector(".bookmark__count").textContent = localStorage.getItem("localBookmarkCount");;
      }
      if (!bookmark.classList.contains("full") && bookmarkCount != 0) {
        bookmark.classList.add("full");
      }
    });
  }
}

if (btnBuy) {
  if (isStorageSupport) {
    if (storageCartCount && !cart.classList.contains("full")) {
      cart.querySelector(".cart__count").textContent = storageCartCount;
      cart.classList.add("full");
    }
  } else {
    cart.querySelector(".cart__count").textContent = 0;
    cart.classList.remove("full");
  }
  for (var i = 0; i < btnBuy.length; i++) {
    btnBuy[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      modalCart.classList.add("modal-show");

      var cartCount = cart.querySelector(".cart__count").textContent;

      cartCount = +cartCount + 1;
      if (isStorageSupport) {
        localStorage.setItem("localCartCount", cartCount);
        cart.querySelector(".cart__count").textContent = localStorage.getItem("localCartCount");;
      }
      if (!cart.classList.contains("full") && cartCount != 0) {
        cart.classList.add("full");
      }
    });
  }
}

if (btnClose) {
  if (writeUs && map) {
    for (var i = 0; i < btnClose.length; i++) {
      btnClose[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        writeUs.classList.remove("modal-show");
        writeUs.classList.remove("modal-error");
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
    if (writeUs && map && (map.classList.contains("modal-show") || writeUs.classList.contains("modal-show"))) {
      evt.preventDefault();
      writeUs.classList.remove("modal-show");
      writeUs.classList.remove("modal-error");
      map.classList.remove("modal-show");
    }
    if (modalCart.classList.contains("modal-show")) {
      evt.preventDefault();
      modalCart.classList.remove("modal-show");
    }
  }
});

