// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDG2swZfO_z_NLFEHd4b4LL8sG4HAVs-MA",
  authDomain: "assessment-auth.firebaseapp.com",
  projectId: "assessment-auth",
  storageBucket: "assessment-auth.appspot.com",
  messagingSenderId: "969431624862",
  appId: "1:969431624862:web:1994840eb0d80b52789f8f",
  measurementId: "G-QF4MSMS2MD",
};

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const auth = firebase.auth();

export {db,auth}