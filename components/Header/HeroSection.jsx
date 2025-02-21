"use client";

import { useState, useEffect } from "react";

const HeroSection = ({ items = [], autoSlideInterval = 3000 }) => {
	// Exit early if no items
	if (!items || items.length === 0) {
		return null; // Or return a placeholder/loading state
	}

	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			handleNextSlide();
		}, autoSlideInterval);

		return () => clearInterval(interval);
	}, [currentSlide, autoSlideInterval]);

	const handlePrevSlide = () => {
		setCurrentSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));
	};

	const handleNextSlide = () => {
		setCurrentSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));
	};

	const goToSlide = (slideIndex) => {
		setCurrentSlide(slideIndex);
	};

	return (
		<div
			id="default-carousel"
			className="relative w-full"
			data-carousel="slide"
		>
			{/* Carousel wrapper */}
			<div className="relative h-56 overflow-hidden rounded-lg md:h-96">
				{items.map((item, index) => (
					<div
						key={index}
						className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
							currentSlide === index ? "opacity-100" : "opacity-0"
						}`}
						data-carousel-item
					>
						<img
							src={item.src}
							className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							alt={item.alt}
						/>
					</div>
				))}
			</div>

			{/* Slider indicators */}
			<div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
				{items.map((_, index) => (
					<button
						key={index}
						type="button"
						className={`w-3 h-3 rounded-full ${
							currentSlide === index ? "bg-white" : "bg-white/50"
						}`}
						aria-current={currentSlide === index}
						aria-label={`Slide ${index + 1}`}
						onClick={() => goToSlide(index)}
					/>
				))}
			</div>

			{/* Slider controls */}
			<button
				type="button"
				className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
				onClick={handlePrevSlide}
			>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
					<svg
						className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M5 1 1 5l4 4"
						/>
					</svg>
					<span className="sr-only">Previous</span>
				</span>
			</button>
			<button
				type="button"
				className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
				onClick={handleNextSlide}
			>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
					<svg
						className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="m1 9 4-4-4-4"
						/>
					</svg>
					<span className="sr-only">Next</span>
				</span>
			</button>
		</div>
	);
};

export default HeroSection;
