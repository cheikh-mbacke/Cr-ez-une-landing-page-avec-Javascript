function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtnClose = document.querySelector('.close');  // on récupère le bouton close de la modal
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
      modalbg.style.display = 'none';
}

// Close modal function: ajout d'une fonction et du listener puis un display none gérer pas le css
modalBtnClose.addEventListener('click', function () {
      modalbg.style.display = 'none';
      console.log("fermeture du modal")
});
