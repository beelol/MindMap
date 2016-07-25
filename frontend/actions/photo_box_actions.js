const AppDispatcher = require('../dispatcher/dispatcher');
const PhotoBoxConstants = require('../constants/photo_box_constants');
const PhotoBoxApiUtil = require('../util/photo_box_api_util');

const PhotoBoxActions = {
  // fetchAllPhotoBoxes (filters) {
  //   PhotoBoxApiUtil.fetchAllPhotoBoxes(filters, PhotoBoxActions.receiveAllPhotoBoxes);
  // },
  // fetchPhotoBox (filters) {
  //   PhotoBoxApiUtil.fetchPhotoBoxes(filters, PhotoBoxActions.receiveAllPhotoBoxes);
  // },
  // createPhotoBox (photoBox) {
  //   PhotoBoxApiUtil.createPhotoBox(photoBox, PhotoBoxActions.receiveSinglePhotoBox);
  // },

  fetchAllPhotoBoxes () {
    PhotoBoxApiUtil.fetchAllPhotoBoxes(PhotoBoxActions.receiveAllPhotoBoxes);
  },

  fetchPhotoBox (id) {
    PhotoBoxApiUtil.fetchPhotoBox(id, PhotoBoxActions.receivePhotoBox);
  },

  createPhotoBox (photoBox) {
    PhotoBoxApiUtil.createPhotoBox(photoBox, PhotoBoxActions.receiveSinglePhotoBox);
  },

  deletePhotoBox(id) {
    PhotoBoxApiUtil.deletePhotoBox(id, PhotoBoxActions.removePhotoBox);
  },

  editPhotoBox(photoBox){
    PhotoBoxApiUtil.updatePhotoBox(photoBox, PhotoBoxActions.updatePhotoBox);
  },

  removePhotoBox (id) {
    AppDispatcher.dispatch({
      actionType: PhotoBoxConstants.PHOTOBOX_REMOVED,
      id: id
    });
  },

  updatePhotoBox (photoBox) {
    AppDispatcher.dispatch({
      actionType: PhotoBoxConstants.PHOTOBOX_RECEIVED,
      photoBox: photoBox
    });
  },

  receiveAllPhotoBoxes(photoBoxes) {
    AppDispatcher.dispatch({
      actionType: PhotoBoxConstants.PHOTOBOXES_RECEIVED,
      photoBoxes: photoBoxes
    });
  },

  receiveSinglePhotoBox (photoBox) {
    AppDispatcher.dispatch({
      actionType: PhotoBoxConstants.PHOTOBOX_RECEIVED,
      photoBox: photoBox
    });
  }
};

module.exports = PhotoBoxActions;
