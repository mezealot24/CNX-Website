const ActivitySection = () => {
	const activities = [
		{
			id: "1",
			title: "พิธีถวายพระพรชัยมงคล เนื่องในวันเฉลิมพระชนมพรรษา",
			date: "2024-02-20",
			location: "ศาลากลางจังหวัดเชียงใหม่",
			type: "พิธีการ",
		},
		{
			id: "2",
			title: "การประชุมหัวหน้าส่วนราชการประจำจังหวัด",
			date: "2024-02-19",
			location: "ห้องประชุม 1",
			type: "ประชุม",
		},
		// เพิ่มข้อมูลตามต้องการ
	];

	return (
		<div className="news-container">
			<div className="bg-gradient-to-r from-orange-600 to-orange-800 p-4">
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
							d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
					กิจกรรม
				</h2>
			</div>
			<div className="p-4">
				{activities.map((activity) => (
					<div key={activity.id} className="border-b last:border-0 py-4">
						<h3 className="text-lg font-medium text-gray-800 mb-2">
							{activity.title}
						</h3>
						<div className="text-sm text-gray-600 flex gap-4">
							<span>วันที่: {activity.date}</span>
							<span>|</span>
							<span>{activity.location}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ActivitySection;
