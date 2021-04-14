//REDUX THUNK STEP 3 making functions in actions file we also took the code of  const collectionRef = firestore.collection("collections");
// collectionRef.get().then((snapshot) => {
//   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//   this.setState({ loading: false }); we used this from shop.component fro pages folder
//redux thunk is used to handle async code inside of it
//first this above code was tied to only shop component but now its reuasable because of redux so we can use
//it anywhere
import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});
export const fetchCollectionsSuccess = collectionsMap=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap
})

export const fetchCollectionsFailure = errorMessage=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload:errorMessage
})

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    //doing this using promise by using .get and then .then
    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch (fetchCollectionsSuccess(collectionsMap))
    }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
  };
};
