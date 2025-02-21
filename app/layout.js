import { Inter, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const notoSansThai = Noto_Sans_Thai({
	variable: "--font-noto-sans-thai",
	subsets: ["thai", "latin"],
	weight: ["400", "700"], // ปรับความหนาตามต้องการ
});

export const metadata = {
	title: "ที่ทำการปกครองจังหวัดเชียงใหม่",
	description: "เว็บไซต์ทางการของที่ทำการปกครองจังหวัดเชียงใหม่",
};

export default function RootLayout({ children }) {
	return (
		<html lang="th">
			<body
				className={`${inter.variable} ${notoSansThai.variable} antialiased`}
			>
				<Header />
				{children}
			</body>
		</html>
	);
}
