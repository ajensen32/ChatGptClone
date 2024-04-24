import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmZaX-xsNt6Dpp5f9Gyqf3gSTxWoN5x4o",
  authDomain: "chatgpt-messenger-yt-65650.firebaseapp.com",
  projectId: "chatgpt-messenger-yt-65650",
  storageBucket: "chatgpt-messenger-yt-65650.appspot.com",
  messagingSenderId: "448030345813",
  appId: "1:448030345813:web:93d1308bc91b2a8e8b62dc",
  measurementId: "G-64R73BS18C",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

// const firebaseConfig = {
//   apiKey: "AIzaSyDOGDfNEMAvDHlg7jwtp3v-Z8IX9yn6WrM",
//   authDomain: "chatgpt-messenger-c5b15.firebaseapp.com",
//   projectId: "chatgpt-messenger-c5b15",
//   storageBucket: "chatgpt-messenger-c5b15.appspot.com",
//   messagingSenderId: "590657455962",
//   appId: "1:590657455962:web:e61b717c0eb22587d45563",
//   measurementId: "G-PCYP6R3K8X",
// };

// // Initialize Firebase
// const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };
