'use strict';

(function () {
  var wizardsList = document.querySelector('.setup-similar-list');
  var similarWizards = document.querySelector('.setup-similar');

  function renderWizard(elem) {
    var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var wizardCloneTemplate = wizardTemplate.cloneNode(true);
    wizardCloneTemplate.querySelector('.setup-similar-label').textContent = elem.name;
    wizardCloneTemplate.querySelector('.wizard-coat').style.fill = elem.colorCoat;
    wizardCloneTemplate.querySelector('.wizard-eyes').style.fill = elem.colorEyes;
    return wizardCloneTemplate;
  }

  window.render = function (data) {
    var fragment = document.createDocumentFragment();
    var takeNumber = data.length > 4 ? 4 : data.length;
    wizardsList.innerHTML = '';

    for (var i = 0; i < takeNumber; i++) {
      var primaryWizards = renderWizard(data[i]);
      fragment.appendChild(primaryWizards);
    }
    wizardsList.appendChild(fragment);
  };

  window.util.showElement(similarWizards);

})();
