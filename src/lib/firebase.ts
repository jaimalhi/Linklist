import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
   apiKey: "AIzaSyA48ipFzguWuLst46poc8nsd1GWKZOTi_I",
   authDomain: "svelte-linklist.firebaseapp.com",
   projectId: "svelte-linklist",
   storageBucket: "svelte-linklist.appspot.com",
   messagingSenderId: "70658051159",
   appId: "1:70658051159:web:138a9bd62d2e17cf002712",
};

// init firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
