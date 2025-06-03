"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
	CheckCircle,
	Smartphone,
	Globe,
	BarChart,
	Settings,
} from "lucide-react";

export default function Features() {
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

		const element = document.getElementById("features-section");
		if (element) observer.observe(element);

		return () => observer.disconnect();
	}, []);

	const featureTabs = [
		{
			id: "platform",
			label: "Nền tảng",
			icon: Globe,
			title: "Nền tảng E-commerce Hiện đại",
			description:
				"Giao diện thân thiện, tối ưu SEO và responsive trên mọi thiết bị",
			features: [
				"Thiết kế responsive, tương thích mọi thiết bị",
				"Tối ưu SEO tự động, tăng thứ hạng Google",
				"Tốc độ tải trang siêu nhanh",
				"Giao diện quản trị trực quan, dễ sử dụng",
				"Tích hợp đa ngôn ngữ và đa tiền tệ",
				"Hỗ trợ PWA (Progressive Web App)",
			],
			image: "🌐",
		},
		{
			id: "mobile",
			label: "Mobile App",
			icon: Smartphone,
			title: "Ứng dụng Di động Native",
			description: "App iOS và Android với trải nghiệm mua sắm tuyệt vời",
			features: [
				"Ứng dụng native cho iOS và Android",
				"Push notification thông minh",
				"Thanh toán trong app an toàn",
				"Offline mode cho trải nghiệm liền mạch",
				"Tích hợp camera để scan barcode",
				"Geolocation cho giao hàng chính xác",
			],
			image: "📱",
		},
		{
			id: "analytics",
			label: "Phân tích",
			icon: BarChart,
			title: "Analytics & Business Intelligence",
			description: "Báo cáo chi tiết và phân tích dữ liệu thông minh",
			features: [
				"Dashboard tổng quan trực quan",
				"Báo cáo doanh thu theo thời gian thực",
				"Phân tích hành vi khách hàng",
				"Dự báo xu hướng và nhu cầu",
				"ROI tracking cho marketing campaigns",
				"Export báo cáo đa định dạng",
			],
			image: "📊",
		},
		{
			id: "management",
			label: "Quản lý",
			icon: Settings,
			title: "Hệ thống Quản lý Toàn diện",
			description: "Quản lý sản phẩm, đơn hàng và khách hàng hiệu quả",
			features: [
				"Quản lý kho hàng thông minh",
				"Xử lý đơn hàng tự động",
				"CRM tích hợp quản lý khách hàng",
				"Hệ thống loyalty program",
				"Multi-vendor marketplace support",
				"Inventory forecasting",
			],
			image: "⚙️",
		},
	];

	return (
		<section
			id="features-section"
			className="py-20 bg-gradient-to-b from-white to-amber-50"
		>
			<div className="container mx-auto px-4">
				{/* Header */}
				<div
					className={`text-center mb-16 transition-all duration-1000 ${
						isVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-10"
					}`}
				>
					<div className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-4">
						<span className="text-amber-800 font-semibold text-sm">
							TÍNH NĂNG NỔI BẬT
						</span>
					</div>

					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Công nghệ
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
							{" "}
							tiên tiến{" "}
						</span>
						nhất
					</h2>

					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Khám phá những tính năng mạnh mẽ giúp doanh nghiệp của
						bạn vượt trội trong thị trường cạnh tranh
					</p>
				</div>

				{/* Features Tabs */}
				<div
					className={`transition-all duration-1000 delay-300 ${
						isVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-10"
					}`}
				>
					<Tabs defaultValue="platform" className="w-full">
						<TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 bg-amber-100/50 p-2 rounded-2xl">
							{featureTabs.map((tab) => (
								<TabsTrigger
									key={tab.id}
									value={tab.id}
									className="flex items-center space-x-2 data-[state=active]:bg-white data-[state=active]:text-amber-900 data-[state=active]:shadow-md rounded-xl py-3"
								>
									<tab.icon className="w-5 h-5" />
									<span className="hidden sm:inline">
										{tab.label}
									</span>
								</TabsTrigger>
							))}
						</TabsList>

						{featureTabs.map((tab) => (
							<TabsContent
								key={tab.id}
								value={tab.id}
								className="mt-0"
							>
								<div className="grid lg:grid-cols-2 gap-12 items-center">
									{/* Content */}
									<div className="space-y-8">
										<div className="space-y-4">
											<h3 className="text-3xl font-bold text-gray-900">
												{tab.title}
											</h3>
											<p className="text-lg text-gray-600">
												{tab.description}
											</p>
										</div>

										<div className="space-y-4">
											{tab.features.map(
												(feature, index) => (
													<div
														key={index}
														className="flex items-start space-x-3"
													>
														<CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
														<span className="text-gray-700">
															{feature}
														</span>
													</div>
												)
											)}
										</div>
									</div>

									{/* Visual */}
									<Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-0 shadow-2xl">
										<CardContent className="p-12">
											<div className="aspect-square bg-gradient-to-br from-white/50 to-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm">
												<div className="text-9xl">
													{tab.image}
												</div>
											</div>

											{/* Floating Elements */}
											<div className="relative -mt-8">
												<div className="absolute top-0 left-4 bg-white rounded-xl p-3 shadow-lg animate-float">
													<div className="w-4 h-4 bg-green-500 rounded-full"></div>
												</div>
												<div className="absolute top-8 right-4 bg-white rounded-xl p-3 shadow-lg animate-float-delayed">
													<div className="w-4 h-4 bg-blue-500 rounded-full"></div>
												</div>
												<div className="absolute -top-4 right-12 bg-white rounded-xl p-3 shadow-lg animate-pulse">
													<div className="w-4 h-4 bg-amber-500 rounded-full"></div>
												</div>
											</div>
										</CardContent>
									</Card>
								</div>
							</TabsContent>
						))}
					</Tabs>
				</div>
			</div>
		</section>
	);
}
