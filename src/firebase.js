import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-FsGzI5VnWqRUTqsJBNNGeaBQHocC5h0",
  authDomain: "challenge-69ceb.firebaseapp.com",
  projectId: "challenge-69ceb",
  storageBucket: "challenge-69ceb.appspot.com",
  messagingSenderId: "830813685660",
  appId: "1:830813685660:web:5523b04e56c9aa637d2a59",
  measurementId: "G-2DKR7EGS3R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };