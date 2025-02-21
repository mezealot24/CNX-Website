"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const HeroSection = ({ items }) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	// Auto slide
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % items.length);
		}, 5000); // เปลี่ยนสไลด์ทุก 5 วินาที

		return () => clearInterval(timer);
	}, [items.length]);

	// ปุ่มเปลี่ยนสไลด์
	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % items.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
	};

	return (
		<div className="relative w-full h-[400px] rounded-lg overflow-hidden">
			{/* รูปภาพ */}
			{items.map((item, index) => (
				<div
					key={index}
					className={`absolute w-full h-full transition-opacity duration-500 ${
						index === currentSlide ? "opacity-100" : "opacity-0"
					}`}
				>
					<Image
						src={item.src}
						alt={item.alt}
						fill
						className="object-cover"
						priority={index === 0}
					/>
				</div>
			))}

			{/* ปุ่มควบคุม */}
			<button
				onClick={prevSlide}
				className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
			>
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
			</button>
			<button
				onClick={nextSlide}
				className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
			>
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M9 5l7 7-7 7"
					/>
				</svg>
			</button>

			{/* Indicators */}
			<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
				{items.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentSlide(index)}
						className={`w-3 h-3 rounded-full transition-colors ${
							index === currentSlide ? "bg-white" : "bg-white/50"
						}`}
					/>
				))}
			</div>
		</div>
	);
};

export default HeroSection;
