import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: "FETCH_COLLECTIONS_START"
});

export const fetchCollectionsSuccess = collectionsObject => ({
  type: "FETCH_COLLECTIONS_SUCCESS",
  payload: collectionsObject
});

export const fetchCollectionsFailure = errorMessage => ({
  type: "FETCH_COLLECTIONS_FAILURE",
  payload: errorMessage
});

//This action object returns a function which then will be processed by redux-thunk. In this case, redux-thunk takes in dispatch() and later fires three different action objects depending on the conditions.

//1 - Calls FETCH_COLLECTIONS_START when getting a queryReference from Firestore.
//2 - After the Promise complete, fires FETCH_COLLECTIONS_SUCCESS if the Promise is fullfilled, otherwise catch the error and fire FETCH_COLLECTIONS_FAILURE with the error message.
export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsObject = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsObject));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
