import { initializeApp } from "firebase/app";

import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAdes7zK482klUa_lJrE7C9XSl4sIfVjq4",
  authDomain: "crwn-db-95de4.firebaseapp.com",
  projectId: "crwn-db-95de4",
  storageBucket: "crwn-db-95de4.appspot.com",
  messagingSenderId: "410758698057",
  appId: "1:410758698057:web:78cd616a6b44442543db98",
};

initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
