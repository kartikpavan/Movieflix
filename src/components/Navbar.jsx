import React from "react";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
	const { logOut, user } = UserAuth();
	const navigate = useNavigate();

	//! logout functionality
	async function logOutHandeler() {
		try {
			await logOut();
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	}

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
			{/* Sign in and Sign Up  and Logout conditional rendering */}
			{user?.email ? (
				<div className="flex items-center gap-4">
					<Link to="/account">
						<MdAccountCircle
							size={44}
							color={"white"}
							className="cursor-pointer"
						/>
					</Link>

					<button
						onClick={logOutHandeler}
						className="btn bg-red-600 rounded-none mx-2 pl-4 text-white border-none"
					>
						Log Out
					</button>
				</div>
			) : (
				<div>
					<Link to="/login">
						<button className="btn btn-ghost pr-4 mx-2 rounded-none">
							Log In
						</button>
					</Link>
					<Link to="signup">
						<button className="btn btn-primary  rounded-none">
							Sign Up
						</button>
					</Link>
				</div>
			)}

			{/* <div>
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
			</div> */}
		</div>
	);
};

export default Navbar;
