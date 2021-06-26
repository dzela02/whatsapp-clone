import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCejZBBicdJ3pCblO3j6fvreRWJC_Sit14",
  authDomain: "whatsapp-2-82f73.firebaseapp.com",
  projectId: "whatsapp-2-82f73",
  storageBucket: "whatsapp-2-82f73.appspot.com",
  messagingSenderId: "249871532963",
  appId: "1:249871532963:web:3ae6e7c56cbf1010b21016",
  measurementId: "G-YJ9DJDFC92",
};

const app = !firebase.app.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
