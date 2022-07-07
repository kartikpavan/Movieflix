import React, { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData";
import {
	IoMdArrowDropleftCircle,
	IoMdArrowDroprightCircle,
} from "react-icons/io";
import Movie from "./Movie";

const Row = ({ title, fetchURL, rowId }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchMovieData = async () => {
			const data = await fetchData(fetchURL);
			console.log(data.results);
			setMovies(data.results);
		};
		fetchMovieData();
	}, [fetchURL]);

	// sliding functionality
	const slideLeft = () => {
		var slider = document.getElementById("slider" + rowId);
		slider.scrollLeft = slider.scrollLeft - 500;
	};
	const slideRight = () => {
		var slider = document.getElementById("slider" + rowId);
		slider.scrollLeft = slider.scrollLeft + 500;
	};

	return (
		<>
			<h2 className="text-2xl md:text-2xl font-bold p-4 text-white">
				{title}
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
					id={"slider" + rowId}
					className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative "
				>
					{movies.map((movie, id) => {
						return <Movie movie={movie} />;
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

export default Row;
