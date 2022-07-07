import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const login = () => {
	//! importing methods and state from context
	const { signIn, user } = UserAuth();
	//! defining local states
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [showPassword, setShowPassword] = React.useState(false);
	const [error, setError] = React.useState("");

	const navigate = useNavigate();

	async function submitHandeler(e) {
		e.preventDefault();
		setError("");
		try {
			if (!email && !password) {
				alert("incomplete credentials");
			} else {
				await signIn(email, password);
				navigate("/");
			}
		} catch (error) {
			console.log(error);
			setError(error.message);
		}
	}

	//! show password toggler
	const togglePassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<>
			{" "}
			<div className="w-full h-screen">
				<img
					className="hidden sm:block absolute w-full h-full object-cover"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/5fd505fa-f425-4a18-b3cc-00dd2638f541/d638b1fe-b44f-4cb3-b5d8-2106904c3be0/IN-en-20220704-popsignuptwoweeks-perspective_alpha_website_large.jpg"
					alt="bgimg"
				/>
				<div className=" bg-black/60 fixed top-0 left-0 h-screen w-full "></div>
				<div className=" fixed w-full px-4 py-24 z-50">
					<div className="max-w-[450px] h-[500px] mx-auto bg-black/75 text-white">
						<div className="max-w-[320px] mx-auto py-16">
							<h1 className="text-3xl font-bold">Login</h1>
							{error ? (
								<p className="text-md p-3 mt-2 font-bold text-red-700 bg-red-300">
									{" "}
									{error.slice(10)}
								</p>
							) : null}
							<form className="py-4" onSubmit={submitHandeler}>
								<input
									onChange={(e) => setEmail(e.target.value)}
									type="email"
									placeholder="Email"
									autoComplete="email"
									className="input input-bordered w-full rounded-none p-3 my-2"
								/>
								<input
									onChange={(e) =>
										setPassword(e.target.value)
									}
									type={showPassword ? "test" : "password"}
									placeholder="Password"
									autoComplete="current-password"
									className="input  input-bordered w-full rounded-none p-3 my-2"
								/>
								<p className="text-sm text-gray-500 flex items-center mt-2 ">
									<input
										onClick={togglePassword}
										type="checkbox"
										className="checkbox checkbox-xs rounded-none mr-2"
									/>
									Show Password
								</p>
								<button className="btn bg-red-600 text-white rounded-none py-3 my-6 w-full">
									Login
								</button>
								<div className="flex items-center justify-between text-sm text-gray-400">
									<p className="flex items-center ">
										<input
											type="checkbox"
											className="checkbox checkbox-sm rounded-none mr-2"
										/>
										Rembember me
									</p>
									<p>Need Help ?</p>
								</div>
								<p className="py-8 ">
									<span className="text-sm text-gray-400 mr-2">
										New to Netflix ?
									</span>
									<Link to="/signup">Sign Up</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default login;
