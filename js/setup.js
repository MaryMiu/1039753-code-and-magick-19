'use strict';

var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var list = document.querySelector('.setup-similar-list');
document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var heroes = [
  {
    name: name,
    coatColor: coatColor,
    eyesColor: eyesColor
  },
  {
    name: name,
    coatColor: coatColor,
    eyesColor: eyesColor
  },
  {
    name: name,
    coatColor: coatColor,
    eyesColor: eyesColor
  },
  {
    name: name,
    coatColor: coatColor,
    eyesColor: eyesColor
  }
];

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

for (var i = 0; i < 4; i++) {
  var el = template.cloneNode(true);
  list.appendChild(el);
}
