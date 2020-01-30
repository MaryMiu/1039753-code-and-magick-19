'use strict';

var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var list = document.querySelector('.setup-similar-list');
var heroes = [];
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var color1 = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var color2 = ['black', 'red', 'blue', 'yellow', 'green'];
var fragment = document.createDocumentFragment();

document.querySelector('.setup').classList.remove('hidden');

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function makeHero(name, surname, coatColor, eyesColor) {
  return {
    name: name[getRandomArbitrary(0, name.length)] + ' ' + surname[getRandomArbitrary(0, surname.length)],
    coatColor: coatColor[getRandomArbitrary(0, coatColor.length)],
    eyesColor: eyesColor[getRandomArbitrary(0, eyesColor.length)]
  };
}

for (var i = 0; i < 4; i++) {
  var el = template.cloneNode(true);
  var hero = makeHero(names, surnames, color1, color2);
  heroes.push(hero);
  el.querySelector('.setup-similar-label').textContent = heroes[i].name;
  el.querySelector('.wizard-coat').style.fill = heroes[i].coatColor;
  el.querySelector('.wizard-eyes').style.fill = heroes[i].eyesColor;
  fragment.appendChild(el);
}
list.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');
