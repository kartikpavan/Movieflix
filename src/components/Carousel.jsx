import React, { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { fetchData } from "../utils/fetchData";

const Carousel = ({ movieId }) => {
	const [credits, setCredits] = React.useState([]);

	const fetchCredits = async () => {
		const movieCredit = await fetchData(
			`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${
				import.meta.env.VITE_MOVIE_API_KEY
			}&language=en-US`
		);
		setCredits(movieCredit.cast);
	};

	useEffect(() => {
		fetchCredits();
	}, []);

	function handleDragStart(e) {
		e.preventDefault();
	}

	const items = credits?.map((item) => {
		return (
			<div className="flex flex-col object-contain p-2">
				<img
					className="border mb-2 shadow-md"
					src={
						item.profile_path
							? `https://image.tmdb.org/t/p/w300/${item.profile_path}`
							: `https://via.placeholder.com/300`
					}
					alt={item.name}
					onDragStart={handleDragStart}
				/>
				<p>{item.name}</p>
			</div>
		);
	});

	const responsive = {
		0: {
			items: 3,
		},
		512: { items: 5 },
		1024: {
			items: 7,
		},
	};

	return (
		<div>
			<AliceCarousel
				mouseTracking
				autoPlay
				autoPlayInterval={1000}
				infinite
				disableButtonsControls
				disableDotsControls
				responsive={responsive}
				items={items}
			/>
		</div>
	);
};

export default Carousel;
