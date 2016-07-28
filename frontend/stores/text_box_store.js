const Store = require('flux/utils').Store;
const TextBoxConstants = require('../constants/text_box_constants');
const AppDispatcher = require('../dispatcher/dispatcher');

const TextBoxStore = new Store(AppDispatcher);

let _textBoxes = {};

TextBoxStore.currentTextBox = undefined;

TextBoxStore.all = function () {
  return Object.assign({}, _textBoxes);
};

TextBoxStore.find = function (id) {
  return Object.assign({}, _textBoxes[id]);
};

TextBoxStore.findByBoard = function (board_id) {
  let textBoxes = [];

  Object.keys(_textBoxes).forEach((key) => {
    let newKey = parseInt(key);

    if (_textBoxes[newKey].board_id === board_id) {
      textBoxes.push(_textBoxes[key]);
    }
  });

  return textBoxes;
};

function resetAllTextBoxes (textBoxes) {
  textBoxes.forEach((textBox) => {
    _textBoxes[textBox.id] = textBox;
  });

  TextBoxStore.__emitChange();
}

function resetSingleTextBox (textBox) {
  _textBoxes[textBox.id] = textBox;
  TextBoxStore.__emitChange();
}

function removeTextBox (id) {
  delete _textBoxes[id];

  TextBoxStore.__emitChange();
}

TextBoxStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case TextBoxConstants.TEXTBOXES_RECEIVED:
      resetAllTextBoxes(payload.textBoxes);
      break;
    case TextBoxConstants.TEXTBOX_RECEIVED:
      resetSingleTextBox(payload.textBox);
      break;
    case TextBoxConstants.TEXTBOX_REMOVED:
      removeTextBox(payload.id);
      break;
  }
};

module.exports = TextBoxStore;
