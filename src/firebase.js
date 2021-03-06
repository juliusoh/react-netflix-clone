import firebase from "firebase/compat/app"
import auth from "firebase/compat/auth"
import firestore from "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCDUSArXAMfEQYmTQRGPqUx18YL0yj5EMs",
  authDomain: "netflix-clone-5d88d.firebaseapp.com",
  projectId: "netflix-clone-5d88d",
  storageBucket: "netflix-clone-5d88d.appspot.com",
  messagingSenderId: "55290435543",
  appId: "1:55290435543:web:4a78e7bda569d550421d92"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const authentication = firebase.auth();

// explicit export
export { authentication }

export default db;