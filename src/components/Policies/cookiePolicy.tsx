"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cookie, Settings, BarChart, Target } from "lucide-react";

export default function CookiePolicy() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		const element = document.getElementById("cookies-section");
		if (element) observer.observe(element);

		return () => observer.disconnect();
	}, []);

	const cookieTypes = [
		{
			icon: Settings,
			title: "Cookies cần thiết",
			description: "Cookies bắt buộc để website hoạt động",
			content: [
				"Session cookies để duy trì phiên đăng nhập",
				"Security cookies để bảo vệ khỏi tấn công",
				"Load balancing cookies để phân phối tải",
				"Cookies lưu trữ tùy chọn ngôn ngữ",
			],
			required: true,
		},
		{
			icon: BarChart,
			title: "Cookies phân tích",
			description: "Giúp chúng tôi hiểu cách bạn sử dụng website",
			content: [
				"Google Analytics để theo dõi lưu lượng truy cập",
				"Heatmap tracking để phân tích hành vi người dùng",
				"Performance monitoring cookies",
				"A/B testing cookies để tối ưu trải nghiệm",
			],
			required: false,
		},
		{
			icon: Target,
			title: "Cookies marketing",
			description: "Để hiển thị quảng cáo phù hợp với bạn",
			content: [
				"Facebook Pixel để theo dõi chuyển đổi",
				"Google Ads cookies cho remarketing",
				"Affiliate tracking cookies",
				"Social media integration cookies",
			],
			required: false,
		},
		{
			icon: Cookie,
			title: "Cookies chức năng",
			description: "Cải thiện chức năng và cá nhân hóa",
			content: [
				"Cookies lưu trữ tùy chọn giao diện",
				"Shopping cart cookies",
				"Recently viewed products",
				"Wishlist và favorites cookies",
			],
			required: false,
		},
	];

	return (
		<section
			id="cookies-section"
			className="py-20 bg-gradient-to-b from-amber-50 to-orange-50"
		>
			<div className="container mx-auto px-4">
				<div
					className={`text-center mb-16 transition-all duration-1000 ${
						isVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-10"
					}`}
				>
					<h2
						id="cookies"
						className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
					>
						Chính sách
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
							{" "}
							Cookie{" "}
						</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Tìm hiểu về cách ShopCare sử dụng cookies để cải thiện
						trải nghiệm của bạn
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 mb-12">
					{cookieTypes.map((type, index) => (
						<Card
							key={index}
							className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-10"
							}`}
							style={{ transitionDelay: `${index * 200}ms` }}
						>
							<CardHeader>
								<CardTitle className="flex items-center justify-between">
									<div className="flex items-center space-x-3">
										<div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
											<type.icon className="w-5 h-5 text-white" />
										</div>
										<div>
											<span className="text-xl font-bold text-gray-900">
												{type.title}
											</span>
											{type.required && (
												<span className="ml-2 px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
													Bắt buộc
												</span>
											)}
										</div>
									</div>
								</CardTitle>
								<p className="text-gray-600">
									{type.description}
								</p>
							</CardHeader>
							<CardContent>
								<ul className="space-y-3">
									{type.content.map((item, itemIndex) => (
										<li
											key={itemIndex}
											className="flex items-start space-x-3"
										>
											<div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
											<span className="text-gray-700">
												{item}
											</span>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Cookie Management */}
				<Card
					className={`bg-gradient-to-r from-amber-50 to-orange-50 border-0 transition-all duration-1000 delay-800 ${
						isVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-10"
					}`}
				>
					<CardContent className="p-8">
						<h3 className="text-2xl font-bold text-gray-900 mb-6">
							Quản lý Cookies
						</h3>
						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<h4 className="font-semibold mb-3 text-lg">
									Cách kiểm soát cookies:
								</h4>
								<ul className="space-y-2 text-gray-700">
									<li>
										• Sử dụng cài đặt trình duyệt để chặn
										hoặc xóa cookies
									</li>
									<li>
										• Sử dụng chế độ duyệt web riêng tư/ẩn
										danh
									</li>
									<li>• Cài đặt extension chặn tracking</li>
									<li>
										• Thay đổi tùy chọn trong cookie banner
										của chúng tôi
									</li>
								</ul>
							</div>
							<div>
								<h4 className="font-semibold mb-3 text-lg">
									Lưu ý quan trọng:
								</h4>
								<ul className="space-y-2 text-gray-700">
									<li>
										• Chặn cookies có thể ảnh hưởng đến chức
										năng website
									</li>
									<li>
										• Cookies cần thiết không thể bị vô hiệu
										hóa
									</li>
									<li>
										• Bạn có thể thay đổi tùy chọn bất kỳ
										lúc nào
									</li>
									<li>
										• Cookies sẽ hết hạn sau thời gian quy
										định
									</li>
								</ul>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
