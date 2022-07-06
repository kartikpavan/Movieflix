// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB8-SsDnEXeHeweOIA_Y7pmKXUScCvAyJA",
	authDomain: "movieflix-react-e2ed8.firebaseapp.com",
	projectId: "movieflix-react-e2ed8",
	storageBucket: "movieflix-react-e2ed8.appspot.com",
	messagingSenderId: "783488024399",
	appId: "1:783488024399:web:b5657520409625fbc34f3a",
	measurementId: "G-3CSE1YXGFD",
};

// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.REACT_APP_FIREBASE_APP_ID,
// measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
