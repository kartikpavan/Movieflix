import React from "react";
import { AuthContextProvider } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import Notfound from "./components/Notfound";

const App = () => {
	return (
		<>
			<AuthContextProvider>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route
						path="/account"
						element={
							<ProtectedRoute>
								{" "}
								<Account />
							</ProtectedRoute>
						}
					/>
					<Route path="*" element={<Notfound />} />
				</Routes>
			</AuthContextProvider>
		</>
	);
};

export default App;
