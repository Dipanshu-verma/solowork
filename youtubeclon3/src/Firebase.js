import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyA5WrI7yNykv-duQpziqvfv2J6bityka0Y",
    authDomain: "tube-you-pro.firebaseapp.com",
    projectId: "tube-you-pro",
    storageBucket: "tube-you-pro.appspot.com",
    messagingSenderId: "155298825875",
    appId: "1:155298825875:web:c2402c75b499f3b799ef66"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase.auth();