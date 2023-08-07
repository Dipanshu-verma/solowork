import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBCk6jR4lQIEshZCWix7rjk9OutEGzh2Is",
  authDomain: "tube-you-pro.firebaseapp.com",
  projectId: "tube-you-pro",
  storageBucket: "tube-you-pro.appspot.com",
  messagingSenderId: "155298825875",
  appId: "1:155298825875:web:c2402c75b499f3b799ef66"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyDMj6YRra2Vnq-biKv3SpDl3yn6_XZ0duA",
//   authDomain: "clone-of-yt.firebaseapp.com",
//   projectId: "clone-of-yt",
//   storageBucket: "clone-of-yt.appspot.com",
//   messagingSenderId: "871665534479",
//   appId: "1:871665534479:web:d0d1e253d6ab90fef9457a"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyBCk6jR4lQIEshZCWix7rjk9OutEGzh2Is",
//   authDomain: "tubeclone-c6c32.firebaseapp.com",
//   projectId: "tubeclone-c6c32",
//   storageBucket: "tubeclone-c6c32.appspot.com",
//   messagingSenderId: "640641529188",
//   appId: "1:640641529188:web:d8aafa3a2d037689587671"
// };

  firebase.initializeApp(firebaseConfig)
  export default firebase.auth();