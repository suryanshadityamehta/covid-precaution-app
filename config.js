import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBxw0iVIF94TaF-3RVhoFj5K-5TaAwTfw8",
  authDomain: "covid-precaution-app.firebaseapp.com",
  databaseURL: "https://covid-precaution-app-default-rtdb.firebaseio.com",
  projectId: "covid-precaution-app",
  storageBucket: "covid-precaution-app.appspot.com",
  messagingSenderId: "624668815989",
  appId: "1:624668815989:web:3ead98bdf00b88b17f7e3c"
};
// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
