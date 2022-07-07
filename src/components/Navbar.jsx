import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="w-full flex items-center justify-between p-4 z-[100] absolute">
			<div>
				{/* Logo */}
				<Link to="/">
					<img
						src={Logo}
						alt="logo"
						className="w-48 h-auto cursor-pointer"
					/>
				</Link>
			</div>
			{/* Sign in and Sign Up  */}
			<div>
				<Link to="/login">
					<button className="btn btn-ghost pr-4 mx-2 apitalize">
						Sign In
					</button>
				</Link>
				<Link to="signup">
					<button className="btn btn-primary  rounded">
						Sign Up
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
