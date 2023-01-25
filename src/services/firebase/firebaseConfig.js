import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDsLP73cKMr6tVeTzDppNc8mqDSDxpe69c",
    authDomain: "ecommerce-19bab.firebaseapp.com",
    projectId: "ecommerce-19bab",
    storageBucket: "ecommerce-19bab.appspot.com",
    messagingSenderId: "935803654540",
    appId: "1:935803654540:web:b9bd257214ac1e707f06a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);