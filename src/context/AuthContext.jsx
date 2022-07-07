import { useContext, useEffect, useState, createContext } from "react";
import { auth, db } from "../firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	const [user, setUser] = useState({});

	//! Sign Up Function
	function signUp(email, password) {
		createUserWithEmailAndPassword(auth, email, password);

		setDoc(doc(db, "users", email), {
			savedShows: [],
		});
	}

	//! Sign In Function
	function signIn(email, password) {
		signInWithEmailAndPassword(auth, email, password);
	}

	//! Log Out Function
	function logOut() {
		signOut(auth);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => {
			unsubscribe();
		};
	});

	return (
		<AuthContext.Provider value={{ signUp, signIn, logOut, user }}>
			{children}
		</AuthContext.Provider>
	);
}

export function UserAuth() {
	return useContext(AuthContext);
}
