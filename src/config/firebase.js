// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// ✅ Firebase project config (keep this in .env file ideally)
const firebaseConfig = {
  apiKey:            'AIzaSyCO2yRxgNabRCS2zUh0Igt8Eiy9iQXmmno',
  authDomain:        'learn-fire-a155c.firebaseapp.com',
  projectId:         'learn-fire-a155c',
  storageBucket:     'learn-fire-a155c.appspot.com',
  messagingSenderId: '509247847443',
  appId:             '1:509247847443:web:524c74af98a9543e67d3e6',
  measurementId:     'G-NNN4N6ZYN7',
};

// 🔥 Initialize Firebase App
const app = initializeApp(firebaseConfig);

// 📦 Export Auth, Firestore, Provider
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

