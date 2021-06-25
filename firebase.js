import firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBl4G92cNk8h4betVLsPMOcfxaaUga8QlU",
  authDomain: "facebook-x-be15d.firebaseapp.com",
  projectId: "facebook-x-be15d",
  storageBucket: "facebook-x-be15d.appspot.com",
  messagingSenderId: "598628649169",
  appId: "1:598628649169:web:7f1117d0067d12a58b5df0",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const storage = firebase.storage();
export { db, storage };
