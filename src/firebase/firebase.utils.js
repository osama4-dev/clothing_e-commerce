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
//we will be passing userAuth which is actually the whole library which coming after console.log the users in app.js file
//.set is a create method

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
//userRef is the refrence to the child location in the databse by calling ref or userRef("child/path")
//for snapShot and userRef visit assets and  see the image to find more about
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
