const Store = require('flux/utils').Store;
const PhotoBoxConstants = require('../constants/photo_box_constants');
const AppDispatcher = require('../dispatcher/dispatcher');

const PhotoBoxStore = new Store(AppDispatcher);

let _photoBoxes = {};

PhotoBoxStore.currentPhotoBox = undefined;

PhotoBoxStore.all = function () {
  return Object.assign({}, _photoBoxes);
};

PhotoBoxStore.find = function (id) {
  return Object.assign({}, _photoBoxes[id]);
};

PhotoBoxStore.findByBoard = function (board_id) {
  let photoBoxes = [];

  Object.keys(_photoBoxes).forEach((key) => {
    let newKey = parseInt(key);

    if (_photoBoxes[newKey].board_id === board_id) {
      photoBoxes.push(_photoBoxes[key]);
    }
  });

  return photoBoxes;
};

function resetAllPhotoBoxes (photoBoxes) {
  photoBoxes.forEach((photoBox) => {
    _photoBoxes[photoBox.id] = photoBox;
  });

  PhotoBoxStore.__emitChange();
}

function resetSinglePhotoBox (photoBox) {
  _photoBoxes[photoBox.id] = photoBox;
  PhotoBoxStore.__emitChange();
}

function removePhotoBox (id) {
  delete _photoBoxes[id];

  PhotoBoxStore.__emitChange();
}

PhotoBoxStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case PhotoBoxConstants.PHOTOBOXES_RECEIVED:
      resetAllPhotoBoxes(payload.photoBoxes);
      break;
    case PhotoBoxConstants.PHOTOBOX_RECEIVED:
      resetSinglePhotoBox(payload.photoBox);
      break;
    case PhotoBoxConstants.PHOTOBOX_REMOVED:
      removePhotoBox(payload.id);
      break;
  }
};

module.exports = PhotoBoxStore;
