// components/Header/NavDesktop.js
"use client";
import { useState } from "react";
import Link from "next/link";

export const NavDesktop = ({ menuItems }) => {
	const [openDropdown, setOpenDropdown] = useState(null);

	return (
		<div className="hidden md:flex items-center justify-between h-16">
			<div className="flex items-center">
				<Link href="/" className="text-xl font-semibold text-gray-800">
					Logo
				</Link>
			</div>
			<div className="hidden md:block">
				<div className="ml-10 flex items-center space-x-4">
					{menuItems.map((item) =>
						item.items ? (
							<div
								key={item.title}
								className="relative"
								onMouseEnter={() => setOpenDropdown(item.title)}
								onMouseLeave={() => setOpenDropdown(null)}
							>
								<button className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center">
									{item.title}
									<svg
										className="ml-2 h-4 w-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>
								{openDropdown === item.title && (
									<div className="absolute z-10 w-48 py-2 mt-2 bg-white rounded-md shadow-lg">
										{item.items.map((subItem) => (
											<Link
												key={subItem.title}
												href={subItem.href}
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
											>
												{subItem.title}
											</Link>
										))}
									</div>
								)}
							</div>
						) : (
							<Link
								key={item.title}
								href={item.href}
								className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
							>
								{item.title}
							</Link>
						)
					)}
				</div>
			</div>
		</div>
	);
};
