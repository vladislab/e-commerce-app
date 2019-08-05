import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAOUuQXJ1HVz11jrMlOeJoyLwNbYwugmUM",
  authDomain: "e-commerce-db-4f388.firebaseapp.com",
  databaseURL: "https://e-commerce-db-4f388.firebaseio.com",
  projectId: "e-commerce-db-4f388",
  storageBucket: "",
  messagingSenderId: "902209213342",
  appId: "1:902209213342:web:b6f229fe520f6248"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  console.log(userAuth);
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, emailVerified } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        emailVerified,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey); //get a new collection reference from the database with a unique ID.

  const batch = firestore.batch(); //batch writes let us group all the Set commands into one big request since we can only fire one command per function call.

  objectsToAdd.forEach(object => {
    const newDocRef = collectionRef.doc(); //get a new document reference from the database with a unique ID.

    batch.set(newDocRef, object);
  });

  return await batch.commit(); //A Promise which returns a void value if succeed.
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
