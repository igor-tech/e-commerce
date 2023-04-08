import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  storageBucket: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_APP_FIREBASE_APP_ID,
  databaseURL: 'https://e-commerce-bf4a8-default-rtdb.firebaseio.com',
}

initializeApp(firebaseConfig)
