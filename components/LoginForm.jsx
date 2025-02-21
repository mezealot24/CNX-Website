import React from "react";

const LoginForm = () => {
	return (
		<div className="p-6">
			<form className="space-y-4">
				<div>
					<label className="block text-sm font-medium text-gray-700">
						ชื่อผู้ใช้:
					</label>
					<input
						type="text"
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700">
						รหัสผ่าน:
					</label>
					<input
						type="password"
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
				>
					เข้าสู่ระบบ
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
