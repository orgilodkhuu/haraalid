import firebase from 'firebase';
import 'firebase/firestore';
firebase.initializeApp({
    apiKey: "AIzaSyCAXiyUmGAqtPUy7iotOx1aj3Au8uV688c",
    authDomain: "whyportfoliove.firebaseapp.com",
    projectId: "whyportfoliove",
    storageBucket: "whyportfoliove.appspot.com",
    messagingSenderId: "544148119568",
    appId: "1:544148119568:web:774eaa4305ce42c1f2ea95",
    measurementId: "G-LNBQP8FN2M"
});
let db = firebase.firestore();
export {
    firebase, db
}
