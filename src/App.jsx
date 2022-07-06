import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
			</Routes>
		</>
	);
};

export default App;
