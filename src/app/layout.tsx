import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DefaultLayout from "@/components/Layout";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Shopcare",
	description: "Shopcare - Trợ lý bán hàng thông minh",
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<DefaultLayout>{children}</DefaultLayout>
			</body>
		</html>
	);
}
