// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// apiKey: "AIzaSyB8-SsDnEXeHeweOIA_Y7pmKXUScCvAyJA",
// authDomain: "movieflix-react-e2ed8.firebaseapp.com",
// projectId: "movieflix-react-e2ed8",
// storageBucket: "movieflix-react-e2ed8.appspot.com",
// messagingSenderId: "783488024399",
// appId: "1:783488024399:web:b5657520409625fbc34f3a",
// measurementId: "G-3CSE1YXGFD",

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
