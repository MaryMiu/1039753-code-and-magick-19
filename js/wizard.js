'use strict';

(function () {
  var setupwWizard = document.querySelector('.setup-wizard');
  var setupWizardCoat = setupwWizard.querySelector('.wizard-coat');
  var setupWizardEyes = setupwWizard.querySelector('.wizard-eyes');
  var setupWizardFireball = document.querySelector('.setup-fireball-wrap');

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function fetchRandomItems(arr) {
    return arr[getRandomArbitrary(0, arr.length)];
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

  setupWizardCoat.addEventListener('click', function (evt) {
    var setupWizardCoatInput = document.querySelector('[name="coat-color"]');
    var randomColor = getRandomCoatColor();
    evt.currentTarget.style.fill = randomColor;
    setupWizardCoatInput.value = randomColor;
    wizard.onCoatChange(randomColor);
  });

  setupWizardEyes.addEventListener('click', function (evt) {
    var setupWizardEyesInput = document.querySelector('[name="eyes-color"]');
    var randomColor = getRandomEyesColor();
    evt.currentTarget.style.fill = randomColor;
    setupWizardEyesInput.value = randomColor;
    wizard.onEyesChange(randomColor);
  });

  setupWizardFireball.addEventListener('click', function (evt) {
    var setupWizardFireballInput = setupWizardFireball.querySelector('[name="fireball-color"]');
    var randomColor = getRandomFireballColor();
    evt.currentTarget.style.background = randomColor;
    setupWizardFireballInput.value = randomColor;
  });

  window.wizard = wizard;

})();
