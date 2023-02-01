import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyDsLP73cKMr6tVeTzDppNc8mqDSDxpe69c",
//     authDomain: "ecommerce-19bab.firebaseapp.com",
//     projectId: "ecommerce-19bab",
//     storageBucket: "ecommerce-19bab.appspot.com",
//     messagingSenderId: "935803654540",
//     appId: "1:935803654540:web:b9bd257214ac1e707f06a9"
// };
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messaginSenderId,
    appId: process.env.REACT_APP_appId
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);