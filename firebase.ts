import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBmZaX-xsNt6Dpp5f9Gyqf3gSTxWoN5x4o",
  authDomain: "chatgpt-messenger-yt-65650.firebaseapp.com",
  projectId: "chatgpt-messenger-yt-65650",
  storageBucket: "chatgpt-messenger-yt-65650.appspot.com",
  messagingSenderId: "448030345813",
  appId: "1:448030345813:web:93d1308bc91b2a8e8b62dc",
  measurementId: "G-64R73BS18C",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

