'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var form = setup.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    var buttonSubmit = form.querySelector('.setup-submit');
    buttonSubmit.textContent = 'Данные отправляются...';
    buttonSubmit.disabled = true;
    window.backend.save(new FormData(form), function () {
      window.util.hideElement(setup);
      buttonSubmit.textContent = 'Сохранить';
      buttonSubmit.disabled = false;
    });
    evt.preventDefault();
  });
})();
