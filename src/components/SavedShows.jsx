import React, { useState, useEffect } from "react";
import {
	IoMdArrowDropleftCircle,
	IoMdArrowDroprightCircle,
} from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";

const SavedShows = () => {
	const { user } = UserAuth();
	const [movies, setMovies] = useState([]);

	const slideLeft = () => {
		var slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft - 500;
	};
	const slideRight = () => {
		var slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft + 500;
	};

	useEffect(() => {
		onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
			setMovies(doc.data()?.savedShows);
		});
	}, [user?.email]);

	const movieRef = doc(db, "users", `${user?.email}`);
	async function deleteShow(id) {
		try {
			const result = movies.filter((item) => item.id !== id);
			await updateDoc(movieRef, {
				savedShows: result,
			});
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<h2 className="text-2xl md:text-2xl font-bold p-4 text-white">
				Saved Shows
			</h2>
			<div className="relative flex items-center group">
				{/* slider */}
				<IoMdArrowDropleftCircle
					onClick={slideLeft}
					color={"white"}
					size={40}
					className=" h-full  rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
				/>
				<div
					id={"slider"}
					className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative "
				>
					{movies.map((movie, id) => {
						return (
							<div
								key={id}
								className="w-[200px] sm:w-[200px] md:w-[240px] lg:[280] inline-block cursor-pointer relative p-2"
							>
								<img
									className=""
									src={`https://image.tmdb.org/t/p/w500${movie?.img}`}
									alt={movie?.title}
								/>
								<div className="absolute top-0 left-0 w-full h-full p-4 text-white hover:bg-black/70 opacity-0 hover:opacity-100  duration-500">
									<p className="flex justify-center items-center h-full text-sm ">
										{movie?.title}
									</p>
									<p
										onClick={() => deleteShow(movie.id)}
										className="absolute text-gray-300 top-4 right-4"
									>
										<AiOutlineClose />
									</p>
								</div>
							</div>
						);
					})}
				</div>
				<IoMdArrowDroprightCircle
					onClick={slideRight}
					color={"white"}
					size={40}
					className=" right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
				/>
			</div>
		</>
	);
};

export default SavedShows;
