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
const modalBtnClose = document.querySelector('.close'); // ISSUE#1: on récupère le bouton close de la modal
const formData = document.querySelectorAll('.formData');
const modalBody = document.querySelector('.modal-body'); // on récupère le modal-body

// Formulaire
const form = document.getElementById('reserve');
const validateForm = document.querySelector('validateForm');

// Récupérer les champs du formulaire
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const city = document.querySelectorAll('[name="location"]');
const cgu = document.getElementById('checkbox1');
const validateMessage = document.getElementById('validateMessage');
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
      validateFirstName(this);
    
      
      // console.log(firstName.value, 'firstname');
});

lastName.addEventListener('change', function () {
      validateLastName(this);
      // console.log(lastName.value, 'lastname');
});

email.addEventListener('change', function () {
      validateEmail(this);
      // console.log(email.value, 'email');
});

birthdate.addEventListener('change', function () {
      validateBirthdate(this);
      // console.log(birthdate.value, 'birthdate')
});

quantity.addEventListener('change', function () {
      validateQuantity(this);
      // console.log(quantity.value, 'quantity')
});


// Validation du formulaire au submit
/* fonction validation du formulaire */
function validate() {

      if (
            validateFirstName() && 
            validateLastName() &&
            validateEmail() &&
            validateBirthdate() && 
            validateQuantity() &&
            validateCity() &&
            validateCgu()
            // prochain event !!!
            
            ) {
            
            console.log('envoi du formulaire');
            console.log('je rentre dans le thanks')
            openModalThanking();
      } else {
            return false;
      }
      return true; //A remettre sur true
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
      // A vérifier pour empecher la saisie de chiffre
      const regexFirstName = /^[a-zA-z -ê/ë/é]{2,30}$/; /*min 2 caractères*/
      const parent = document.getElementById('first').parentNode;
            if (firstName.value.trim() == '' || !regexFirstName.test(firstName.value)) {
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
            if (lastName.value.trim() == '' || !regexLastName.test(lastName.value)) {
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
            if (email.value.trim() == '' || !regexEmail.test(email.value)) {
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
            // console.log(document.querySelector('input[name="location"]'),'ELEMENT');
            document.querySelector('input[name="location"]').parentElement.setAttribute('data-error-visible', 'true');
            return false;
      }
      document.querySelector('input[name="location"]').parentElement.setAttribute('data-error-visible', 'false');
      return true;
}
  
// TEST CGU==================
function validateCgu() {
      const parent = document.getElementById('checkbox1').parentNode;
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

function openModalThanking(e) {
      document.forms["reserve"].classList.add('aria-hidden');
      document.querySelector(".confirm").classList.remove("aria-hidden");
      document.querySelector(".confirm").classList.add("aria-succes");

}

// BTN SUBMIT======
// btnValid.addEventListener('click', function() {
//       window.location.reload();
// });

// TEST=======
console.log(document.forms["reserve"]);


