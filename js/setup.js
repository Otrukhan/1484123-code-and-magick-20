'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardNumber = 4;

var userDialog = document.querySelector('.setup');
var similar = document.querySelector('.setup-similar');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

// фукция получения числа из диапазона
function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
// функция получения массива случайных неповторяющихся значений на основе массива донора
function arrayFrom(target, length) {
  var result = [];
  var max = Math.min(target.length, length);
  for (var i = 0; i < max; i++) {
    var index = randomInteger(i, max - 1);
    var tmp = target[index];
    target[index] = target[i];
    target[i] = tmp;
    result.push(tmp);
  }
  return result;
}
// функция создания объекта класса Wizard
function createWizards() {
  var names = arrayFrom(WIZARD_NAMES, wizardNumber);
  var surnames = arrayFrom(WIZARD_SURNAMES, wizardNumber);
  var result = [];
  names.forEach(function (item, index) {
    result.push({
      name: item + ' ' + surnames[index],
      coatColor: COAT_COLOR[randomInteger(0, COAT_COLOR.length - 1)],
      eyeColor: EYE_COLOR[randomInteger(0, COAT_COLOR.length - 1)]
    });
  });
  return result;
}
// функция создания шаблона (Node) Wizard
function createWizardTemplate(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;

  return wizardElement;
}

function renderWizards() {
  var fragment = document.createDocumentFragment();
  createWizards().forEach(function (item) {
    fragment.appendChild(createWizardTemplate(item));
  });
  similarListElement.appendChild(fragment);
}
function init() {
  renderWizards();
  userDialog.classList.remove('hidden');
  similar.classList.remove('hidden');
}
init();
