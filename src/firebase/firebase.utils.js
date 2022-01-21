import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  onSnapshot as OS,
  setDoc,
  doc,
} from "firebase/firestore";

import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAdes7zK482klUa_lJrE7C9XSl4sIfVjq4",
  authDomain: "crwn-db-95de4.firebaseapp.com",
  projectId: "crwn-db-95de4",
  storageBucket: "crwn-db-95de4.appspot.com",
  messagingSenderId: "410758698057",
  appId: "1:410758698057:web:78cd616a6b44442543db98",
};

const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();

export const firestore = getFirestore(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const onSnapshot = OS;

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, "users", userAuth.uid);
  const userSnp = await getDoc(userRef);

  if (!userSnp.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    await setDoc(userRef, {
      displayName,
      email,
      createdAt,
      ...additionalData,
    });
  }

  return userRef;
};

export const createUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const signInWithUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
