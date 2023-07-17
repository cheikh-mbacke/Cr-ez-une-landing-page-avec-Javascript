function editNav() {
      var x = document.getElementById('myTopnav');
      if (x.className === 'topnav') {
            x.className += ' responsive';
      } else {
            x.className = 'topnav';
      }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const modalBtnClose = document.querySelector('.close'); // on récupère le bouton close de la modal
const formData = document.querySelectorAll('.formData');
const modalBody = document.querySelector('.modal-body'); // on récupère le modal-body

// Formulaire
const form = document.getElementById('reserve');
const validationMsg = document.querySelector('.validationMessage');

// Récupérer les champs du formulaire
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const city = document.getElementsByName('location');
const cgu = document.getElementById('checkbox1');
const validMessage = document.getElementById('validMessage');
const btnSubmit = document.getElementById('btnSubmit');
const btnValid = document.getElementById('btnValid');

// launch modal form
function launchModal() {
      modalbg.style.display = 'block';
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// Close modal form
function closeModal() {
      modalbg.style.display = 'none';
}

// Listener sur les champs
firstName.addEventListener('change', function () {
      console.log(firstName.value, 'firstname');
});

lastName.addEventListener('change', function () {
      console.log(lastName.value, 'lastname');
});

email.addEventListener('change', function () {
      console.log(email.value, 'email');
});

// Validation du formulaire au submit
/* fonction validation du formulaire */
function validate() {
      // console.clear();
      console.log('validation en cours.....');

      validateFirstName();
      validateLastName();
      validateEmail();
      return false;
}

// Close modal function: ajout d'une fonction et du listener puis un display none
// au click pour fermer la modal, gérer par le css.
modalBtnClose.addEventListener('click', function () {
      modalbg.style.display = 'none';
      console.log('fermeture du modal');
});

// ================= VALIDATION DES CHAMPS ======================
/**
 * fonction validation du prénom et message erreur si KO!!
 *
 * @return  {Boolean}  true si valide sinon false
 */

function validateFirstName() {
      const regexFirstName = /^[a-zA-z -ê/ë/é]{2,30}$/; /*min 2 caractères*/
      const parent = document.getElementById('first').parentNode;
      console.log(parent,'parent-PRENOM');
      if (firstName.value == '' || !regexFirstName.test(firstName.value)) {
            firstName.focus();
            parent.setAttribute(
                  'data-error',
                  'Veuillez entrer un prénom valide !'
            );
            parent.setAttribute('data-error-visible', 'true');
            return false;
      }
      parent.setAttribute('data-error-visible', 'false');
      return true;
}

//fonction validation du nom et message erreur si KO!!!
function validateLastName() {
      // a vérifier
      const regexLastName = /^[a-zA-z -ê/ë/é]{2,30}$/; /*min 2 caracteres*/
      const parent = document.getElementById('last').parentNode;
      console.log(parent, 'parent-NOM');
      if (lastName.value == '' || !regexLastName.test(lastName.value)) {
            lastName.focus();
            parent.setAttribute(
                  'data-error',
                  'Veuillez entrer un nom valide !'
            );
            parent.setAttribute('data-error-visible', 'true');
            return false;
      }
      parent.setAttribute('data-error-visible', 'false');
      return true;
}

//fonction validation du courriel et message erreur si KO!!!
function validateEmail() {
      const regexEmail =
            // a vérifier regex
            /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
      const parent = document.getElementById('email').parentNode;
      console.log(parent, 'parent-Email');
      console.log(email.value);
      if (email.value == '' || !regexEmail.test(email.value)) {
            email.focus();
            parent.setAttribute(
                  'data-error',
                  'Veuillez entrer une adresse mail valide !'
            );
            parent.setAttribute('data-error-visible', 'true');
            return false;
      }
      parent.setAttribute('data-error-visible', 'false');
      return true;
}

// fonction validation date de naissance et message erreur si KO!!!
