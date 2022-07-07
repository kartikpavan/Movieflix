import React, { useState } from "react";
import { BsBookmarkHeart, BsBookmarkCheckFill } from "react-icons/bs";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ movie }) => {
	const { user } = UserAuth();
	const [saved, setSaved] = useState(false);
	const [like, setLike] = useState(false);

	const movieID = doc(db, "users", `${user?.email}`);

	const saveShow = async () => {
		if (user?.email) {
			setLike(!like);
			setSaved(true);
			await updateDoc(movieID, {
				savedShows: arrayUnion({
					id: movie.id,
					title: movie.title,
					img: movie.backdrop_path,
				}),
			});
		} else {
			alert("please log In to save the Movie ");
		}
	};

	return (
		<div className="w-[200px] sm:w-[200px] md:w-[240px] lg:[280] inline-block cursor-pointer relative p-2">
			<img
				className=""
				src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
				alt={movie?.title}
			/>
			<div className="absolute top-0 left-0 w-full h-full p-4 text-white hover:bg-black/70 opacity-0 hover:opacity-100  duration-500">
				<p className="flex justify-center items-center h-full text-sm ">
					{movie?.title}
				</p>
				<p onClick={saveShow}>
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
