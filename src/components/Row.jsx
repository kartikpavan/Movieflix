import React, { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData";
import { BsBookmarkHeart, BsBookmarkCheckFill } from "react-icons/bs";

const Row = ({ title, fetchURL }) => {
	const [movies, setMovies] = useState([]);
	const [like, setLike] = useState(false);

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
						return (
							<div
								key={id}
								className="w-[160px] sm:w-[200px] md:w-[240px] lg:[280] inline-block cursor-pointer relative p-2"
							>
								<img
									className=""
									src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
									alt={movie?.title}
								/>
								<div className="absolute top-0 left-0 w-full h-full p-4 text-white hover:bg-black/70 opacity-0 hover:opacity-100  duration-500">
									<p className="flex justify-center items-center h-full">
										{movie?.title}
									</p>
									<p>
										{like ? (
											<BsBookmarkCheckFill
												size={24}
												className="absolute top-4 left-4"
											/>
										) : (
											<BsBookmarkHeart
												size={24}
												className="absolute top-4 left-4"
											/>
										)}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Row;
