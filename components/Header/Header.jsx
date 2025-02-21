import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";
import Image from "next/image";

const menuItems = [
	{ title: "หน้าแรก", href: "/" },
	{ title: "ทำเนียบผู้บริหาร", href: "/executives" },
	{ title: "ข้อมูลข่าวสาร", href: "/news" },
	{
		title: "เมนูเพิ่มเติม",
		href: "#",
		items: [
			{ title: "ประชาสัมพันธ์", href: "/pr" },
			{ title: "กิจกรรม", href: "/activities" },
			{ title: "หนังสือราชการ", href: "/documents" },
		],
	},
];

export const Header = () => {
	return (
		<header className="bg-white shadow-md">
			{/* เพิ่มส่วน Top Header */}
			<div className="bg-[#0F172A] text-white py-2">
				<div className="container mx-auto px-4 flex justify-between items-center">
					<div className="flex items-center space-x-4">
						<Image
							src="/logo.png"
							alt="Logo"
							width={40}
							height={40}
							className="rounded-full"
						/>
						<div>
							<h1 className="text-lg font-bold">
								ที่ทำการปกครองจังหวัดเชียงใหม่
							</h1>
							<p className="text-sm">
								Chiang Mai Provincial Administration Office
							</p>
						</div>
					</div>
					<div className="hidden md:flex items-center space-x-4">
						<a href="#" className="text-sm hover:text-blue-300">
							ติดต่อเรา
						</a>
						<a href="#" className="text-sm hover:text-blue-300">
							แผนผังเว็บไซต์
						</a>
					</div>
				</div>
			</div>

			{/* Main Navigation */}
			<nav className="container mx-auto px-4 border-t border-gray-200">
				<NavDesktop menuItems={menuItems} />
				<NavMobile menuItems={menuItems} />
			</nav>
		</header>
	);
};

export default Header;
