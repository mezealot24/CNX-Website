const ProcurementSection = () => {
	const procurements = [
		{
			id: "1",
			title: "ประกาศผลผู้ชนะการจัดซื้อจัดจ้าง โครงการพัฒนาระบบ",
			date: "2024-02-20",
			budget: "500,000",
			status: "ประกาศผล",
		},
		{
			id: "2",
			title: "ประกวดราคาจ้างก่อสร้างอาคารสำนักงาน",
			date: "2024-02-19",
			budget: "2,000,000",
			status: "รับสมัคร",
		},
		// เพิ่มข้อมูลตามต้องการ
	];

	return (
		<div className="news-container">
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
							d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						/>
					</svg>
					จัดซื้อจัดจ้าง
				</h2>
			</div>
			<div className="p-4">
				{procurements.map((procurement) => (
					<div key={procurement.id} className="border-b last:border-0 py-4">
						<h3 className="text-lg font-medium text-gray-800 mb-2">
							{procurement.title}
						</h3>
						<div className="text-sm text-gray-600 flex gap-4">
							<span>วันที่: {procurement.date}</span>
							<span>|</span>
							<span>งบประมาณ: {procurement.budget} บาท</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProcurementSection;
