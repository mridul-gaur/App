// // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// import firebase from 'firebase/app';
// // firebase.initializeApp({})
// // TODO: Add SDKs for Firebase products that you want to use
// import "firebase/auth";
// import "firebase/database";
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBAwvNbu4lAbtL2W89Wbnr0d5SsNCpX1Io",
//   authDomain: "whatsapp-clone-f117d.firebaseapp.com",
//   projectId: "whatsapp-clone-f117d",
//   storageBucket: "whatsapp-clone-f117d.appspot.com",
//   messagingSenderId: "70061510190",
//   appId: "1:70061510190:web:be779fe4a346dfdbf019bf"
// };

// // Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const firebaseAuth = firebase.auth();
// const firebaseDb = firebase.database();

// export { firebaseAuth, firebaseDb }

import { initializeApp } from 'firebase/app'

import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBAwvNbu4lAbtL2W89Wbnr0d5SsNCpX1Io",
  authDomain: "whatsapp-clone-f117d.firebaseapp.com",
  projectId: "whatsapp-clone-f117d",
  storageBucket: "whatsapp-clone-f117d.appspot.com",
  messagingSenderId: "70061510190",
  appId: "1:70061510190:web:be779fe4a346dfdbf019bf"
};

const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp)
const firebaseDb = getDatabase(firebaseApp)

export { firebaseAuth, firebaseDb }