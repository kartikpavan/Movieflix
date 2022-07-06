import React, { useState } from "react";
import { BsBookmarkHeart, BsBookmarkCheckFill } from "react-icons/bs";

const Movie = ({ movie }) => {
	const [like, setLike] = useState(false);

	return (
		<div className="w-[160px] sm:w-[200px] md:w-[240px] lg:[280] inline-block cursor-pointer relative p-2">
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
							size={32}
							className="absolute top-4 left-4"
						/>
					) : (
						<BsBookmarkHeart
							size={32}
							className="absolute top-4 left-4"
						/>
					)}
				</p>
			</div>
		</div>
	);
};

export default Movie;
