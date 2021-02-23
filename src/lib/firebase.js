import firebase from "firebase";
const firebaseConfig = {

  //Ha csak te használod a projektet, akkor a lenti helyett ide másolhatod a Firestore kapcsolódás adataid.
  // De a felmásolod a Githubra, akkor a .env módszert kövesd.

  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,


};
const initFirebase = firebase.initializeApp(firebaseConfig);
const db = initFirebase.firestore();
// időbélyeg hozzáadva
db.serverTimestamp = firebase.firestore.FieldValue.serverTimestamp();


export default db;