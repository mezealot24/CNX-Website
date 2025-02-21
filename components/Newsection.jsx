"use client";
import React, { useState, useEffect } from "react";

// Thai month names
const thaiMonths = [
	"มกราคม",
	"กุมภาพันธ์",
	"มีนาคม",
	"เมษายน",
	"พฤษภาคม",
	"มิถุนายน",
	"กรกฎาคม",
	"สิงหาคม",
	"กันยายน",
	"ตุลาคม",
	"พฤศจิกายน",
	"ธันวาคม",
];

// Mock Data
const mockNews = [
	{
		id: "1",
		title: "ประกาศผลผู้ชนะการจัดซื้อจัดจ้างพัสดุโครงการพัฒนาระบบ ประจำปี 2567",
		department: "กลุ่มงานการเงินและบัญชี",
		publishDate: "2024-02-20",
		category: "ประกาศจัดซื้อจัดจ้าง",
		link: "/announcement/2024/02/001",
	},
	{
		id: "2",
		title: "แจ้งปิดปรับปรุงระบบเครือข่ายวันที่ 25 กุมภาพันธ์ 2567",
		department: "ศูนย์เทคโนโลยีสารสนเทศ",
		publishDate: "2024-02-19",
		category: "ข่าวประชาสัมพันธ์",
		link: "/news/2024/02/002",
	},
	{
		id: "3",
		title: "รับสมัครบุคลากรตำแหน่งนักวิชาการคอมพิวเตอร์",
		department: "ฝ่ายทรัพยากรบุคคล",
		publishDate: "2024-02-18",
		category: "รับสมัครงาน",
		link: "/jobs/2024/02/003",
	},
	{
		id: "4",
		title: "ขอเชิญร่วมอบรมการใช้งานระบบสารบรรณอิเล็กทรอนิกส์",
		department: "ฝ่ายฝึกอบรม",
		publishDate: "2024-02-17",
		category: "อบรมสัมมนา",
		link: "/training/2024/02/004",
	},
	{
		id: "5",
		title: "ประกาศรายชื่อผู้มีสิทธิ์สอบคัดเลือกพนักงานราชการ",
		department: "คณะกรรมการสอบคัดเลือก",
		publishDate: "2024-02-16",
		category: "ประกาศทั่วไป",
		link: "/announcement/2024/02/005",
	},
];

export const NewsApi = {
	getAllNews: async () => {
		return new Promise((resolve) => {
			setTimeout(() => resolve(mockNews), 1000);
		});
	},

	getNewsByCategory: async (category) => {
		return new Promise((resolve) => {
			const filtered = mockNews.filter((news) => news.category === category);
			setTimeout(() => resolve(filtered), 1000);
		});
	},
};

const formatThaiDate = (dateString) => {
	const date = new Date(dateString);
	const day = date.getDate().toString().padStart(2, "0");
	const month = thaiMonths[date.getMonth()];
	const year = date.getFullYear() + 543; // Convert to Buddhist Era
	return `${day} ${month} ${year}`;
};

const NewsItem = ({ news }) => {
	const formattedDate = formatThaiDate(news.publishDate);

	return (
		<div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
			<div className="flex items-start space-x-4">
				<div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
					<svg
						className="w-6 h-6 text-blue-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z"
						/>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M16 6v4M8 6v4M3 10h18"
						/>
					</svg>
				</div>
				<div className="flex-1">
					<h3 className="text-lg font-semibold text-gray-900 mb-2">
						{news.title}
					</h3>
					<div className="text-sm text-gray-600 space-y-1">
						<div className="flex items-center space-x-2">
							<span>วันที่เผยแพร่: {formattedDate}</span>
							<span className="text-gray-300">|</span>
							<span>ผู้เผยแพร่: {news.department}</span>
						</div>
						<a
							href={news.link}
							className="inline-block text-blue-600 hover:text-blue-800 hover:underline mt-2"
						>
							อ่านประกาศเพิ่มเติม →
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

const NewsSection = () => {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				setLoading(true);
				const data = await NewsApi.getAllNews();
				setNews(data);
			} catch (err) {
				setError("ไม่สามารถโหลดข้อมูลข่าวได้");
				console.error("Error fetching news:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchNews();
	}, []);

	if (loading) {
		return (
			<div className="p-6">
				<div className="flex justify-center items-center h-40">
					<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="p-6">
				<div className="text-red-500 text-center py-4">{error}</div>
			</div>
		);
	}

	return (
		<div className="news-container">
			<div className="news-header relative overflow-hidden bg-gradient-to-r from-sky-400 to-blue-500 rounded-lg p-4 mb-6">
				<div className="w-full flex justify-between items-center relative z-10">
					<div className="flex items-center justify-center gap-3">
						<svg
							className="w-6 h-6 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2"
							/>
						</svg>
						<h2 className="text-2xl font-bold text-white">ข่าวประชาสัมพันธ์</h2>
					</div>
					<a
						href="/news"
						className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full 
								 transition-all duration-300 text-sm font-medium backdrop-blur-sm"
					>
						ดูทั้งหมด
					</a>
				</div>
				<div className="absolute inset-0 opacity-10">
					<div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white"></div>
					<div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-white"></div>
				</div>
			</div>
			<div className="space-y-4">
				{news.map((item) => (
					<NewsItem key={item.id} news={item} />
				))}
			</div>
		</div>
	);
};

export default NewsSection;
