import React from "react";

const Notfound = () => {
	return (
		<div className="w-full h-screen flex justify-center items-center ">
			<div className="text-center">
				<h1 className="text-8xl font-bold text-red-800">404 </h1>
				<h2 className="text-4xl font-semibold text-primary-content">
					NOT FOUND
				</h2>
				<p className="text-error">
					The page you are looking for does not exist
				</p>
			</div>
		</div>
	);
};

export default Notfound;
