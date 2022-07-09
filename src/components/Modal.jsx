import React, { Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { fetchData } from "../utils/fetchData";
import AliceCarousel from "react-alice-carousel";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "react-alice-carousel/lib/alice-carousel.css";

const Modal = ({ isOpen, openModal, closeModal, movie }) => {
	const [video, setVideo] = React.useState();
	const [credits, setCredits] = React.useState();

	useEffect(() => {
		const fetchMovieData = async () => {
			const videoData = await fetchData(
				`https://api.themoviedb.org/3/movie/${
					movie.id
				}/videos?api_key=${
					import.meta.env.VITE_MOVIE_API_KEY
				}&language=en-US`
			);
			const movieCredit = await fetchData(
				`https://api.themoviedb.org/3/movie/${
					movie.id
				}/credits?api_key=${
					import.meta.env.VITE_MOVIE_API_KEY
				}&language=en-US`
			);

			setCredits(movieCredit.cast);

			setVideo(videoData.results[0]?.key);
		};
		fetchMovieData();
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
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="max-w-[700px] w-full h-auto transform overflow-hidden rounded-2xl bg-base-200  p-6 text-left align-middle shadow-xl transition-all">
									<div className="absolute top-0 right-0 p-4 cursor-pointer ">
										<AiOutlineCloseCircle
											size={32}
											onClick={closeModal}
										/>
									</div>
									<div className=" w-full mx-auto mt-4">
										<iframe
											className="h-auto w-[250px] md:w-full md:h-[350px] mx-auto"
											src={`https://www.youtube.com/embed/${video}`}
											title={movie.name}
											frameborder="0"
											allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										></iframe>
									</div>
									<Dialog.Title className="text-2xl my-4 font-bold leading-6 text-white text-center">
										<p className="flex items-center justify-center">
											{movie.title}
											<span className="badge badge-outline rounded-none text-sm text-gray-400 mx-2">
												{movie.original_language.toUpperCase()}
											</span>
										</p>

										<div className="text-md text-gray-400 mx-4 my-2">
											({movie.release_date.slice(0, 4)})
										</div>
									</Dialog.Title>
									<div>
										<p className="text-lg">
											{movie.overview}
										</p>
									</div>
									<div className="mt-4">
										<p className="text-2xl font-semibold text-white">
											Cast
										</p>
										<AliceCarousel
											mouseTracking
											autoPlay
											infinite
											disableButtonsControls
											disableDotsControls
											responsive={responsive}
											items={items}
										/>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default Modal;
