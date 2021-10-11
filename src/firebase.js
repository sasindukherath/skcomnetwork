import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCurWiS_pc_1V2XCmjTCv5MOA9JW5MoLkU",
    authDomain: "skcord-363b3.firebaseapp.com",
    projectId: "skcord-363b3",
    storageBucket: "skcord-363b3.appspot.com",
    messagingSenderId: "560390721343",
    appId: "1:560390721343:web:4990883ab39743ff004d8a",
    measurementId: "G-YCL8DPJYS5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;