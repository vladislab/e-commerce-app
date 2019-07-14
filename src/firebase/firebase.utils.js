import firebase from "firebase";
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

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
