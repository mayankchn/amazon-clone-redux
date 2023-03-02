import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAWYiYVs6EuhWqhF69eUP6oqQAsN2oL_kM",
  authDomain: "clone-redux-ff925.firebaseapp.com",
  projectId: "clone-redux-ff925",
  storageBucket: "clone-redux-ff925.appspot.com",
  messagingSenderId: "872878780075",
  appId: "1:872878780075:web:521cd019a07fa16608d1ee"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app);
export default app;