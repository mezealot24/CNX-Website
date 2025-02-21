import Image from "next/image";
import Header from "@/components/Header/Header";
import NewsSection from "@/components/Newsection";
import LoginForm from "@/components/LoginForm";
import OnlineServices from "@/components/OnlineServices";
import GovernorProfile from "@/components/GovernorProfile";
import AnnouncementSection from "@/components/AnnouncementSection";
import ProcurementSection from "@/components/ProcurementSection";
import ActivitySection from "@/components/ActivitySection";
import HeroSection from "@/components/HeroSection";

// ข้อมูลสำหรับ Carousel
const carouselItems = [
	{ src: "/images/hero-1.jpg", alt: "ภาพกิจกรรม 1" },
	{ src: "/images/hero-2.jpg", alt: "ภาพกิจกรรม 2" },
	{ src: "/images/hero-3.jpg", alt: "ภาพกิจกรรม 3" },
];

export default function Home() {
	return (
		<main className="container mx-auto px-4 py-8">
			{/* Hero Section (Carousel) */}
			<div className="mb-8">
				<HeroSection items={carouselItems} />
			</div>

			{/* Grid Layout แบบ 1:3 */}
			<div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
				{/* คอลัมน์ซ้าย (1 ส่วน) */}
				<div className="md:col-span-1 space-y-8">
					{/* ส่วนแสดงรูปและข้อมูลปลัดจังหวัด */}
					<GovernorProfile />

					{/* ส่วน Login Form */}
					<div className="bg-white rounded-lg shadow-md overflow-hidden">
						<div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
							<h2 className="text-xl font-bold text-white flex items-center gap-2">
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
										d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
									/>
								</svg>
								เข้าสู่ระบบ
							</h2>
						</div>
						<LoginForm />
					</div>

					{/* ส่วน Online Services */}
					<div className="bg-white rounded-lg shadow-md overflow-hidden">
						<div className="bg-gradient-to-r from-green-600 to-green-800 p-4">
							<h2 className="text-xl font-bold text-white flex items-center gap-2">
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
										d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								บริการออนไลน์
							</h2>
						</div>
						<OnlineServices />
					</div>
				</div>

				{/* คอลัมน์ขวา (3 ส่วน) - ข่าวประชาสัมพันธ์ */}
				<div className="md:col-span-3 space-y-8">
					<NewsSection />
					<AnnouncementSection />
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto py-4">
						<ProcurementSection />
						<ActivitySection />
					</div>
				</div>
			</div>
		</main>
	);
}

{
	/* <div className="grid grid-cols-5 grid-rows-5 gap-4">
	<div className="col-span-2 row-span-8">1</div>
	<div className="col-span-3 row-span-2 col-start-3">2</div>
	<div className="col-span-3 row-span-3 col-start-3 row-start-3">3</div>
</div>; */
}
