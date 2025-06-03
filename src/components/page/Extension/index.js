"use client";
import React, { useState, useEffect } from "react";
import {
	CheckCircle,
	Star,
	Zap,
	TrendingUp,
	MessageCircle,
	Download,
} from "lucide-react";

export default function ExtensionPage() {
	const [isVisible, setIsVisible] = useState(false);
	const [currentFeature, setCurrentFeature] = useState(0);

	useEffect(() => {
		setIsVisible(true);
		const interval = setInterval(() => {
			setCurrentFeature((prev) => (prev + 1) % 3);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	const features = [
		{
			icon: <Zap className="w-8 h-8" />,
			title: "Tự động hóa quy trình",
			description:
				"Tiết kiệm thời gian với các công cụ tự động hóa thông minh",
		},
		{
			icon: <TrendingUp className="w-8 h-8" />,
			title: "Tăng hiệu suất bán hàng",
			description: "Phân tích và tối ưu hóa chiến lược bán hàng của bạn",
		},
		{
			icon: <Star className="w-8 h-8" />,
			title: "Quản lý khách hàng",
			description: "Theo dõi và chăm sóc khách hàng một cách hiệu quả",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 animate-pulse"></div>
				<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
				<div
					className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-5 animate-spin"
					style={{ animationDuration: "20s" }}
				></div>
			</div>

			<div className="relative z-10 container mx-auto px-4 py-8">
				<div
					className={`text-center mb-12 transition-all duration-1000 ${
						isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-10 opacity-0"
					}`}
				>
					
					<h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
						SHOP CARE
					</h1>
					<div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
						<span className="w-2 h-2 bg-orange-500 rounded-full animate-ping"></span>
						PHIÊN BẢN BETA
					</div>
				</div>

				{/* Success Message */}
				<div
					className={`text-center mb-12 transition-all duration-1000 delay-300 ${
						isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-10 opacity-0"
					}`}
				>
					<div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-6 py-4 mb-6">
						<CheckCircle className="w-6 h-6 text-green-500 animate-bounce" />
						<span className="text-green-700 font-semibold">
							Cài đặt thành công!
						</span>
					</div>
					<h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
						Chào mừng bạn đến với ShopCare! 🎉
					</h2>
					<p className="text-gray-600 text-lg max-w-2xl mx-auto">
						Extension hỗ trợ tăng năng suất bán hàng của bạn đã sẵn
						sàng hoạt động. Hãy khám phá những tính năng tuyệt vời
						bên dưới!
					</p>
				</div>

				{/* Features Section */}
				<div
					className={`mb-12 transition-all duration-1000 delay-500 ${
						isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-10 opacity-0"
					}`}
				>
					<h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
						Tính năng nổi bật
					</h3>
					<div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
						{features.map((feature, index) => (
							<div
								key={index}
								className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
									currentFeature === index
										? "ring-2 ring-blue-400 scale-105"
										: ""
								}`}
							>
								<div className="flex flex-col items-center text-center">
									<div
										className={`p-3 rounded-lg mb-4 transition-colors duration-300 ${
											currentFeature === index
												? "bg-blue-100 text-blue-600"
												: "bg-gray-100 text-gray-600"
										}`}
									>
										{feature.icon}
									</div>
									<h4 className="font-semibold text-gray-800 mb-2">
										{feature.title}
									</h4>
									<p className="text-gray-600 text-sm">
										{feature.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* How to Start */}
				<div
					className={`mb-12 transition-all duration-1000 delay-700 ${
						isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-10 opacity-0"
					}`}
				>
					<div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-3xl mx-auto">
						<h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
							Bắt đầu sử dụng
						</h3>
						<div className="grid md:grid-cols-3 gap-4">
							<div className="text-center">
								<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
									<span className="text-blue-600 font-bold">
										1
									</span>
								</div>
								<p className="text-sm text-gray-600">
									Mở trang web bán hàng của bạn
								</p>
							</div>
							<div className="text-center">
								<div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
									<span className="text-purple-600 font-bold">
										2
									</span>
								</div>
								<p className="text-sm text-gray-600">
									Tìm biểu tượng ShopCare trên thanh extension
								</p>
							</div>
							<div className="text-center">
								<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
									<span className="text-green-600 font-bold">
										3
									</span>
								</div>
								<p className="text-sm text-gray-600">
									Bắt đầu trải nghiệm các tính năng
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Beta Notice & Contact */}
				<div
					className={`text-center transition-all duration-1000 delay-900 ${
						isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-10 opacity-0"
					}`}
				>
					<div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
						<div className="mb-6">
							<h3 className="text-xl font-bold text-gray-800 mb-3">
								Phiên bản Beta - Ý kiến của bạn rất quan trọng!
							</h3>
							<p className="text-gray-600 mb-4">
								ShopCare hiện đang trong giai đoạn beta. Chúng
								tôi rất mong nhận được phản hồi từ bạn để cải
								thiện sản phẩm.
							</p>
						</div>

						<div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
							<div className="flex items-center justify-center gap-2 mb-3">
								<MessageCircle className="w-5 h-5 text-blue-600" />
								<span className="font-semibold text-gray-800">
									Hỗ trợ & Phản hồi
								</span>
							</div>
							<p className="text-gray-600 mb-3">
								Liên hệ với chúng tôi qua Zalo:
							</p>
							<a
								href="https://zalo.me/0909551661"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95"
							>
								<MessageCircle className="w-4 h-4" />
								0909.551.661
							</a>
						</div>
					</div>
				</div>

				{/* Floating Action Button */}
				<div className="fixed bottom-8 right-8">
					<button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 animate-bounce">
						<Download className="w-6 h-6" />
					</button>
				</div>
			</div>
		</div>
	);
}
