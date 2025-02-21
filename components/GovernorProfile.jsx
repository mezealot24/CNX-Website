import Image from "next/image";
import React from "react";

const GovernorProfile = () => {
	return (
		<div className="news-container">
			<div className="bg-gradient-to-r from-yellow-600 to-yellow-800 p-4">
				<h2 className="text-xl font-bold text-white text-center">
					ปลัดจังหวัดเชียงใหม่
				</h2>
			</div>

			<div className="p-4 flex flex-col items-center">
				<div className="relative w-48 h-64 mb-4">
					<Image
						src="/images/governor.jpg"
						alt="ปลัดจังหวัดเชียงใหม่"
						fill
						className="object-cover rounded-lg"
						priority
					/>
				</div>

				<div className="text-center">
					<h3 className="text-xl font-bold text-gray-800 mb-2">
						นายชัชวาลย์ ฉายะบุตร
					</h3>
					<p className="text-gray-600">ปลัดจังหวัดเชียงใหม่</p>
				</div>
			</div>
		</div>
	);
};

export default GovernorProfile;
