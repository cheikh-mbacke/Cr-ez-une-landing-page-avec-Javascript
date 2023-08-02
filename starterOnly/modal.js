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
const city = document.querySelectorAll('[name="location"]');
//const location = document.getElementsByName('location'); //test
//console.log(city,"SELECTTTTCITYYYYYYYYYYY"); //test
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
      // console.log(firstName.value, 'firstname');
});

lastName.addEventListener('change', function () {
      // console.log(lastName.value, 'lastname');
});

email.addEventListener('change', function () {
      // console.log(email.value, 'email');
});

// test
birthdate.addEventListener('change', function () {
      validateBirthdate();
      // console.log(birthdate.value, 'birthdate')
});

quantity.addEventListener('change', function () {
      validateQuantity();
      // console.log(quantity.value, 'quantity')
});


// Validation du formulaire au submit
/* fonction validation du formulaire */
function validate() {

      
      validateFirstName(); 
      validateLastName(); 
      validateEmail(); 
      validateBirthdate(); 
      validateQuantity();
      validateCity();
      validateCgu();
      return false; //A remettre sur true
}

// Close modal function: ajout d'une fonction et du listener puis un display none
// au click pour fermer la modal, gérer par le css.
modalBtnClose.addEventListener('click', function () {
      modalbg.style.display = 'none';
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
      const regexEmail = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/;
      const parent = document.getElementById('email').parentNode;
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
function validateBirthdate() {
      const parent = document.getElementById('birthdate').parentNode;
            if (!birthdate.value) {
                  
                  birthdate.focus();
                  parent.setAttribute(
                        'data-error',
                        'Veuillez entrer une date de naissance valide !'
                  );
                  parent.setAttribute('data-error-visible', 'true');
                  return false;
            }
            parent.setAttribute('data-error-visible', 'false');
            return true;
}

// ========== NOMBRE DE PARTIE ============
function validateQuantity() {
      const parent = document.getElementById('quantity').parentNode;
      if (quantity.value === '') {
            quantity.focus();
            parent.setAttribute(
                  'data-error',
                  'Veuillez entrer une quantité valide !'
            );
            parent.setAttribute('data-error-visible', 'true');
            return false;
      }
      parent.setAttribute('data-error-visible', 'false');
      return true;
}

// ================ CHOIX DE VILLE ==================
function validateCity() {

      if (document.querySelector('input[name="location"]:checked') == null) {
            document.querySelector('input[name="location"]').parentElement.setAttribute(
                  'data-error',
                  'Veuillez sélectionner une ville !'
            );
            console.log(document.querySelector('input[name="location"]'),'ELEMENT');
            document.querySelector('input[name="location"]').parentElement.setAttribute('data-error-visible', 'true');
            return false;
      }
      document.querySelector('input[name="location"]').parentElement.setAttribute('data-error-visible', 'false');
      return true;
}


  
// TEST CGU==================
function validateCgu() {
      const parent = document.getElementById('checkbox1').parentNode;
      // console.log(parent, 'parent-CGU');
      // console.log(cgu.value);
      if (!cgu.checked) {
            
            cgu.focus();
            parent.setAttribute(
                  'data-error',
                  'Veuillez accepter les conditions générales d\'utilisation !'
            );
            parent.setAttribute('data-error-visible', 'true');
            return false;
      }
      parent.setAttribute('data-error-visible', 'false');
      return true;
}

// TEST=======
console.log(document.forms["reserve"]);


