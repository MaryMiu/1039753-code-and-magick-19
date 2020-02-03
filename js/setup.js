'use strict';

var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardsList = document.querySelector('.setup-similar-list');
var wizards = [];
var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardsCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardsEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fragment = document.createDocumentFragment();

function removeClass(el, clss) {
  document.querySelector(el).classList.remove(clss);
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function createRandomWizard() {
  return {
    name: wizardsNames[getRandomArbitrary(0, wizardsNames.length)] + ' ' + wizardsSurnames[getRandomArbitrary(0, wizardsSurnames.length)],
    coatColor: wizardsCoatColor[getRandomArbitrary(0, wizardsCoatColor.length)],
    eyesColor: wizardsEyesColor[getRandomArbitrary(0, wizardsEyesColor.length)]
  };
}

function renderWizard(elem) {
  var template = wizardTemplate.cloneNode(true);
  template.querySelector('.setup-similar-label').textContent = elem.name;
  template.querySelector('.wizard-coat').style.fill = elem.coatColor;
  template.querySelector('.wizard-eyes').style.fill = elem.eyesColor;
  fragment.appendChild(template);
}

removeClass('.setup', 'hidden');

for (var i = 0; i < 4; i++) {
  var wizard = createRandomWizard();
  wizards.push(wizard);
}

wizards.forEach(renderWizard);
wizardsList.appendChild(fragment);

removeClass('.setup-similar', 'hidden');
