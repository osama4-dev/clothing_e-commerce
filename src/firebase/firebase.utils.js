import firebase from "firebase/app";
//firebase has all utility in firebase/app
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAvWNqdIbjVWUAUUNIVb8dst5MpKwLfcAM",
  authDomain: "e-commerce-db-218b4.firebaseapp.com",
  databaseURL: "https://e-commerce-db-218b4-default-rtdb.firebaseio.com",
  projectId: "e-commerce-db-218b4",
  storageBucket: "e-commerce-db-218b4.appspot.com",
  messagingSenderId: "87391058685",
  appId: "1:87391058685:web:d9875b956272bfaeb11c94",
  measurementId: "G-LHSEGXYNN6",
};
//userAuth object that we are getting from auth library the object with which we are logging like profile Name,email ,id,photoUrl,,refreshToken 
// the whole object
//so if there is no user auth which is (!userAuth) return from this function or exit from it.
//if it does  image in assets and  which is we will ask query from firestore that is some document or collection
//.set is a create method
//as createUserProfileDoc is an api call so it is asynchronous and we use async
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
//so over here we are getting the userRef which is getting the snapShot as given in the image
//so first we will show the path of of our user by userAuth.uid which is giving the refrence and then get that 
//by userRef.get
//the snapShot simply represents the data ,for updating,creating or delting we will use documentRef object
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
//userRef is the refrence to the child location in the databse by calling ref or userRef("child/path")
//for snapShot and userRef visit assets and  see the image to find more about

//DocumentRefrence is used to perform crud operations on firestore now if we want to get data we will use .get
//.get is getting the snapShot object of that place in database check more in assets in docRef&collectionRef image
//.set is the create method
//so if snapShot does not exist which is (!snapShot.exist) which is if there is no data.then we create data
//by userRef.set
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;

  // console.log(snapShot)
  // console.log(firestore.doc('users/34324dsfds'))
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//for google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
