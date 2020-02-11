'use strict';
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardsList = document.querySelector('.setup-similar-list');
var wizards = [];
var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardsCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardsEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fragment = document.createDocumentFragment();
var similarWizards = document.querySelector('.setup-similar');
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');
var setupwWizard = document.querySelector('.setup-wizard');
var setupWizardCoat = setupwWizard.querySelector('.wizard-coat');
var setupWizardEyes = setupwWizard.querySelector('.wizard-eyes');
var setupWizardFireball = document.querySelector('.setup-fireball-wrap');
var setupWizardFireballInput = setupWizardFireball.querySelector('[name="fireball-color"]');
var setupWizardEyesInput = document.querySelector('[name="eyes-color"]');
var setupWizardCoatInput = document.querySelector('[name="coat-color"]');

function showElement(el) {
  el.classList.remove('hidden');
}

function hideElement(el) {
  el.classList.add('hidden');
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function fetchRandomItems(arr) {
  return arr[getRandomArbitrary(0, arr.length)];
}

function createRandomWizard() {
  return {
    name: wizardsNames[getRandomArbitrary(0, wizardsNames.length)] + ' ' + wizardsSurnames[getRandomArbitrary(0, wizardsSurnames.length)],
    coatColor: wizardsCoatColor[getRandomArbitrary(0, wizardsCoatColor.length)],
    eyesColor: wizardsEyesColor[getRandomArbitrary(0, wizardsEyesColor.length)]
  };
}

function renderWizard(elem) {
  var wizardCloneTemplate = wizardTemplate.cloneNode(true);
  wizardCloneTemplate.querySelector('.setup-similar-label').textContent = elem.name;
  wizardCloneTemplate.querySelector('.wizard-coat').style.fill = elem.coatColor;
  wizardCloneTemplate.querySelector('.wizard-eyes').style.fill = elem.eyesColor;
  fragment.appendChild(wizardCloneTemplate);
}

function documentKeydownHandler(evt) {
  if (evt.key === ESC_KEY) {
    hideElement(setup);
  }
}

function openbtnClickHandler() {
  showElement(setup);
  document.addEventListener('keydown', documentKeydownHandler);
}

function closebtnClickHandler() {
  hideElement(setup);
  document.removeEventListener('keydown', documentKeydownHandler);
}

function openbtnKeydownHandler(evt) {
  if (evt.key === ENTER_KEY) {
    showElement(setup);
  }
}

function closebtnKeydownHandler(evt) {
  if (evt.key === ENTER_KEY) {
    hideElement(setup);
  }
}

function getRandomCoatColor() {
  return fetchRandomItems(['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']);
}

function getRandomEyesColor() {
  return fetchRandomItems(['black', 'red', 'blue', 'yellow', 'green']);
}

function getRandomFireballColor() {
  return fetchRandomItems(['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']);
}

showElement(setup);

for (var i = 0; i < 4; i++) {
  var wizard = createRandomWizard();
  wizards.push(wizard);
}

wizards.forEach(renderWizard);
wizardsList.appendChild(fragment);

showElement(similarWizards);

document.addEventListener('keydown', documentKeydownHandler);
setupOpen.addEventListener('click', openbtnClickHandler);
setupOpen.addEventListener('keydown', openbtnKeydownHandler);
setupClose.addEventListener('click', closebtnClickHandler);
setupClose.addEventListener('keydown', closebtnKeydownHandler);

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

setupWizardCoat.addEventListener('click', function () {
  var randomColor = getRandomCoatColor();
  setupWizardCoat.style.fill = randomColor;
  setupWizardCoatInput.value = randomColor;
});

setupWizardEyes.addEventListener('click', function () {
  var randomColor = getRandomEyesColor();
  setupWizardEyes.style.fill = randomColor;
  setupWizardEyesInput.value = randomColor;
});

setupWizardFireball.addEventListener('click', function () {
  var randomColor = getRandomFireballColor();
  setupWizardFireball.style.background = randomColor;
  setupWizardFireballInput.value = randomColor;
});
