import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyApFgkC3MPjPPLu_mSiHTxlCi0QUtwIG0U",
    authDomain: "slack-clone-deebe.firebaseapp.com",
    projectId: "slack-clone-deebe",
    storageBucket: "slack-clone-deebe.appspot.com",
    messagingSenderId: "872364708472",
    appId: "1:872364708472:web:6997ee021b5b6f3800938d"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };