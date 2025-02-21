const AnnouncementSection = () => {
	const announcements = [
		{
			id: "1",
			title: "ประกาศรับสมัครบุคคลเพื่อเลือกสรรเป็นพนักงานราชการทั่วไป",
			date: "2024-02-20",
			department: "ฝ่ายบริหารทั่วไป",
			category: "ประกาศรับสมัครงาน",
		},
		{
			id: "2",
			title: "ประกาศปิดทำการเนื่องในวันหยุดราชการเพิ่มเติมเป็นกรณีพิเศษ",
			date: "2024-02-19",
			department: "สำนักงานจังหวัด",
			category: "ประกาศทั่วไป",
		},
		// เพิ่มข้อมูลตามต้องการ
	];

	return (
		<div className="news-container">
			<div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
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
							d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
						/>
					</svg>
					ประกาศ
				</h2>
			</div>
			<div className="p-4">
				{announcements.map((announcement) => (
					<div key={announcement.id} className="border-b last:border-0 py-4">
						<h3 className="text-lg font-medium text-gray-800 mb-2">
							{announcement.title}
						</h3>
						<div className="text-sm text-gray-600 flex gap-4">
							<span>วันที่: {announcement.date}</span>
							<span>|</span>
							<span>{announcement.department}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AnnouncementSection;
