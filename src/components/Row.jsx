import React, { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData";
import { BsBookmarkHeart, BsBookmarkCheckFill } from "react-icons/bs";
import Movie from "./Movie";

const Row = ({ title, fetchURL }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchMovieData = async () => {
			const data = await fetchData(fetchURL);
			console.log(data.results);
			setMovies(data.results);
		};
		fetchMovieData();
	}, [fetchURL]);

	return (
		<>
			<h2 className="text-2xl md:text-2xl font-bold p-4">{title}</h2>
			<div className="relative flex items-center">
				{/* slider */}
				<div id={"slider"}>
					{movies.map((movie, id) => {
						return <Movie movie={movie} />;
					})}
				</div>
			</div>
		</>
	);
};

export default Row;
