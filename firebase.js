import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBl4hTsEbQVfr4g5qefg2OFfRkismRMCKg",
  authDomain: "docs-clone-25631.firebaseapp.com",
  projectId: "docs-clone-25631",
  storageBucket: "docs-clone-25631.appspot.com",
  messagingSenderId: "35571800753",
  appId: "1:35571800753:web:c356340f79e29749c32090",
  measurementId: "G-T5T1HKP793",
};

// Checking if the app is already initialized
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
