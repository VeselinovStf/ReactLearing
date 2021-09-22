// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-Q54IXd86klVE5RcrQy1rbIOK3cqNdZk",
    authDomain: "react-firegram-6f061.firebaseapp.com",
    projectId: "react-firegram-6f061",
    storageBucket: "react-firegram-6f061.appspot.com",
    messagingSenderId: "538850290946",
    appId: "1:538850290946:web:15da86cd8fe3ad4eeea61b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore}