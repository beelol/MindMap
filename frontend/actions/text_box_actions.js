const AppDispatcher = require('../dispatcher/dispatcher');
const TextBoxConstants = require('../constants/text_box_constants');
const TextBoxApiUtil = require('../util/text_box_api_util');

const TextBoxActions = {
  // fetchAllTextBoxes (filters) {
  //   TextBoxApiUtil.fetchAllTextBoxes(filters, TextBoxActions.receiveAllTextBoxes);
  // },
  // fetchTextBox (filters) {
  //   TextBoxApiUtil.fetchTextBoxes(filters, TextBoxActions.receiveAllTextBoxes);
  // },
  // createTextBox (textBox) {
  //   TextBoxApiUtil.createTextBox(textBox, TextBoxActions.receiveSingleTextBox);
  // },

  fetchAllTextBoxes () {
    TextBoxApiUtil.fetchAllTextBoxes(TextBoxActions.receiveAllTextBoxes);
  },

  fetchTextBox (id) {
    TextBoxApiUtil.fetchTextBox(id, TextBoxActions.receiveTextBox);
  },

  createTextBox (textBox) {
    TextBoxApiUtil.createTextBox(textBox, TextBoxActions.receiveSingleTextBox);
  },

  deleteTextBox(id) {
    TextBoxApiUtil.deleteTextBox(id, TextBoxActions.removeTextBox);
  },

  editTextBox(textBox){
    TextBoxApiUtil.updateTextBox(textBox, TextBoxActions.updateTextBox);
  },

  removeTextBox (id) {
    AppDispatcher.dispatch({
      actionType: TextBoxConstants.TEXTBOX_REMOVED,
      id: id
    });
  },

  updateTextBox (textBox) {
    AppDispatcher.dispatch({
      actionType: TextBoxConstants.TEXTBOX_RECEIVED,
      textBox: textBox
    });
  },

  receiveAllTextBoxes(textBoxes) {
    AppDispatcher.dispatch({
      actionType: TextBoxConstants.TEXTBOXES_RECEIVED,
      textBoxes: textBoxes
    });
  },

  receiveSingleTextBox (textBox) {
    AppDispatcher.dispatch({
      actionType: TextBoxConstants.TEXTBOX_RECEIVED,
      textBox: textBox
    });
  }
};

module.exports = TextBoxActions;
