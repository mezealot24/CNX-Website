"use client";
import { useState } from "react";
import Link from "next/link";

export const NavMobile = ({ menuItems }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	const flattenMenuItems = (items) => {
		return items.reduce((acc, item) => {
			if (item.items) {
				return [...acc, item, ...item.items];
			}
			return [...acc, item];
		}, []);
	};

	const flatMenu = flattenMenuItems(menuItems);

	return (
		<div className="md:hidden">
			<div className="flex items-center justify-between h-16">
				<Link href="/" className="text-xl font-semibold text-gray-800">
					Logo
				</Link>
				<button
					onClick={toggleMenu}
					className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
					aria-expanded={isOpen}
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
						stroke="currentColor"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
					<svg
						className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
						stroke="currentColor"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>

			<div
				className={`${
					isOpen ? "block" : "hidden"
				} transition-all duration-300 ease-in-out`}
			>
				<div className="px-2 pt-2 pb-3 space-y-1">
					{flatMenu.map((item) => (
						<Link
							key={item.title}
							href={item.href}
							className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
							onClick={() => setIsOpen(false)}
						>
							{item.title}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
