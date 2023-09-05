function editNav() {
      var x = document.getElementById('myTopnav');
      if (x.className === 'topnav') {
            x.className += ' responsive';
      } else {
            x.className = 'topnav';
      }
};

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const modalBtnClose = document.querySelector('.close'); // ISSUE#1: on récupère le bouton close de la modale
const formData = document.querySelectorAll('.formData');
const modalBody = document.querySelector('.modal-body'); // on récupère le modal-body
const modalbgThanks = document.querySelector('.confirmation');
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
};

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// Close modal form
function closeModal() {
      modalbg.style.display = 'none';
};

// On ferme la modale de confirmation
function closeModalConfirmation() {
      modalbgThanks.style.display = 'none';
      modalbg.style.display = 'none';
      window.location.reload();
      form.reset();
};

// Listener sur les champs
firstName.addEventListener('change', function () {
      validateFirstName(this);
});

lastName.addEventListener('change', function () {
      validateLastName(this);
});

email.addEventListener('change', function () {
      validateEmail(this);
});

birthdate.addEventListener('change', function () {
      validateBirthdate(this);
});

quantity.addEventListener('change', function () {
      validateQuantity(this);
});

// On vérifie si tous les champs sont valide sinon on affiche un message d'erreur.
function verifChamps() {
      validateFirstName()
      validateLastName()
      validateEmail()
      validateQuantity()
      validateBirthdate()
      validateCity()
      validateCgu()
};

// Si tous les champs sont valide on envoie la validation
function envoieValider(){
      modalbg.style.display = "none";
};

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
            ) {
            openModalThanking();
      } else {
            verifChamps();
      }
      return true; 
};

// Envoyer la demande
form.addEventListener('submit', function (event) {
      event.preventDefault();
      validate()
});

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
      // Minimum 2 caractères, maximum 20, chiffres interdit
      const regexFirstName = /^([A-Za-z|\s]{2,20})?([-]{0,1})?([A-Za-z|\s]{2,20})$/;  
      
      const parent = document.getElementById('first').parentNode;
            if (firstName.value.trim() == '' || !regexFirstName.test(firstName.value)) {
                  firstName.focus();
                  parent.setAttribute(
                        'data-error',
                        'Minimum 2 caractères, maximum 20 caractères. Les chiffres et caractères spéciaux différents de - ne sont pas autorisés !'
                  );
                  parent.setAttribute('data-error-visible', 'true');
                  return false;
            }
            parent.setAttribute('data-error-visible', 'false');
            return true;
}

//fonction validation du nom et message erreur si KO!!!
function validateLastName() {
      // Minimum 2 caractères, maximum 20, chiffres interdit
      const regexLastName = /^([A-Za-z|\s]{2,20})?([-]{0,1})?([A-Za-z|\s]{2,20})$/;

      const parent = document.getElementById('last').parentNode;
            if (lastName.value.trim() == '' || !regexLastName.test(lastName.value)) {
                  lastName.focus();
                  parent.setAttribute(
                        'data-error',
                        'Minimum 2 caractères, maximum 20 caractères. Les chiffres et caractères spéciaux différents de - ne sont pas autorisés !'
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

// NOMBRE DE PARTIE
function validateQuantity() {
      // Nombre compris entre 0 et 99
      const regexQuantity = /^([0-9]{1,2})$/;
      const parent = document.getElementById('quantity').parentNode;
      if (quantity.value === '' || !regexQuantity.test(quantity.value)) {
            quantity.focus();
            parent.setAttribute(
                  'data-error',
                  'Veuillez entrer un nombre entre 0 et 99 !'
            );
            parent.setAttribute('data-error-visible', 'true');
            return false;
      }
      parent.setAttribute('data-error-visible', 'false');
      return true;
}

// CHOIX DE VILLE
function validateCity() {
      if (document.querySelector('input[name="location"]:checked') == null) {
            document.querySelector('input[name="location"]').parentElement.setAttribute(
                  'data-error',
                  'Veuillez sélectionner une ville !'
            );
            document.querySelector('input[name="location"]').parentElement.setAttribute('data-error-visible', 'true');
            return false;
      }
      document.querySelector('input[name="location"]').parentElement.setAttribute('data-error-visible', 'false');
      return true;
}
  
// VALIDATION CGU
function validateCgu() {
      if (document.querySelector('input[name="cgu"]:checked') == null) {
            document.querySelector('input[name="cgu"]').parentElement.setAttribute(
                  'data-error',
                  'Veuillez accepter les conditions générales d\'utilisation !'
            );
            document.querySelector('input[name="cgu"]').parentElement.setAttribute('data-error-visible', 'true');
            return false;
      }
      document.querySelector('input[name="cgu"]').parentElement.setAttribute('data-error-visible', 'false');
      return true;
}

// Modal de remerciement
function openModalThanking() {
      form.style.display = 'none'
      document.querySelector(".confirmation").classList.remove("aria-hidden");
      document.querySelector(".confirmation").classList.add("aria-succes");
      
}

// ACTIVE LINKS, TOGGLE NAVBAR
const activeLinks = document.querySelectorAll('.nav__link');
activeLinks.forEach(activeLink => {
      activeLink.addEventListener('click', () => {
            document.querySelector('.active')?.classList.remove('active');
            activeLink.classList.add('active');
      });
});



