import Image from "next/image";
import Link from "next/link";
import React from "react";

const OnlineServices = () => {
	const services = [
		{ title: "TV Online สถานีโทรทัศน์", icon: "📺", link: "#" },
		{ title: "ปฏิทินกิจกรรม", icon: "📅", link: "#" },
		{ title: "ระบบงานสารบรรณ", icon: "📋", link: "#" },
		{ title: "ระบบจัดซื้อจัดจ้าง", icon: "🏢", link: "#" },
		{ title: "สถิติผู้เข้าชม", icon: "📊", link: "#" },
	];

	return (
		<div className="p-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{services.map((service, index) => (
					<a
						key={index}
						href={service.link}
						className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200"
					>
						<span className="text-2xl mr-3">{service.icon}</span>
						<span className="text-gray-700 font-medium">{service.title}</span>
					</a>
				))}
			</div>
		</div>
	);
};

export default OnlineServices;
