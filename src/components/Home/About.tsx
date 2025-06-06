"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Users, Award, TrendingUp } from "lucide-react";

export default function About() {
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

		const element = document.getElementById("about-section");
		if (element) observer.observe(element);

		return () => observer.disconnect();
	}, []);

	const stats = [
		{ icon: Users, value: "10,000+", label: "Khách hàng tin tưởng" },
		{ icon: Award, value: "5+", label: "Năm kinh nghiệm" },
		{ icon: TrendingUp, value: "300%", label: "Tăng trưởng doanh thu" },
	];

	const features = [
		"Nền tảng thương mại điện tử hiện đại",
		"Tích hợp đa kênh bán hàng",
		"Quản lý kho hàng thông minh",
		"Phân tích dữ liệu chi tiết",
		"Hỗ trợ 24/7 chuyên nghiệp",
		"Bảo mật cao cấp",
	];

	return (
		<section
			id="about-section"
			className="py-20 bg-gradient-to-b from-orange-50 to-amber-50"
		>
			<div className="container mx-auto px-4">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Content */}
					<div
						className={`space-y-8 transition-all duration-1000 ${
							isVisible
								? "opacity-100 translate-x-0"
								: "opacity-0 -translate-x-10"
						}`}
					>
						<div className="space-y-4">
							<div className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full">
								<span className="text-amber-800 font-semibold text-sm">
									VỀ SHOPCARE
								</span>
							</div>

							<h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
								Đối tác tin cậy cho
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
									{" "}
									thành công{" "}
								</span>
								của bạn
							</h2>

							<p className="text-lg text-gray-600 leading-relaxed">
								ShopCare là nền tảng thương mại điện tử hàng đầu
								Việt Nam, cung cấp giải pháp toàn diện giúp
								doanh nghiệp phát triển bền vững trong thời đại
								số hóa.
							</p>
						</div>

						{/* Features List */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{features.map((feature, index) => (
								<div
									key={index}
									className={`flex items-center space-x-3 transition-all duration-500 delay-${
										index * 100
									}`}
									style={{
										transitionDelay: `${index * 100}ms`,
									}}
								>
									<CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
									<span className="text-gray-700">
										{feature}
									</span>
								</div>
							))}
						</div>

						{/* Stats */}
						<div className="grid grid-cols-3 gap-8 pt-8">
							{stats.map((stat, index) => (
								<div key={index} className="text-center">
									<div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl mb-3">
										<stat.icon className="w-6 h-6 text-white" />
									</div>
									<div className="text-2xl font-bold text-gray-900">
										{stat.value}
									</div>
									<div className="text-sm text-gray-600">
										{stat.label}
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Image */}
					<div
						className={`relative transition-all duration-1000 delay-300 ${
							isVisible
								? "opacity-100 translate-x-0"
								: "opacity-0 translate-x-10"
						}`}
					>
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl blur-3xl opacity-20"></div>
							<div className="relative bg-white rounded-3xl p-8 shadow-2xl">
								<div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center">
									<div className="text-8xl">📊</div>
								</div>

								{/* Floating Cards */}
								<div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg animate-float">
									<div className="flex items-center space-x-2">
										<div className="w-3 h-3 bg-green-500 rounded-full"></div>
										<span className="text-sm font-medium">
											Online
										</span>
									</div>
								</div>

								<div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg animate-float-delayed">
									<div className="text-2xl font-bold text-amber-600">
										+25%
									</div>
									<div className="text-xs text-gray-600">
										Tăng trưởng
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
