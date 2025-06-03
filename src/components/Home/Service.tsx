"use client";

import { useEffect, useState } from "react";
import {
	ShoppingCart,
	Smartphone,
	BarChart3,
	Headphones,
	Shield,
	Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
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

		const element = document.getElementById("services-section");
		if (element) observer.observe(element);

		return () => observer.disconnect();
	}, []);

	const services = [
		{
			icon: ShoppingCart,
			title: "E-commerce Platform",
			description:
				"Nền tảng thương mại điện tử hoàn chỉnh với giao diện hiện đại, tối ưu trải nghiệm người dùng.",
			color: "from-amber-500 to-orange-500",
		},
		{
			icon: Smartphone,
			title: "Mobile App",
			description:
				"Ứng dụng di động native cho iOS và Android, mang lại trải nghiệm mua sắm tuyệt vời.",
			color: "from-orange-500 to-red-500",
		},
		{
			icon: BarChart3,
			title: "Analytics & Reports",
			description:
				"Phân tích dữ liệu chi tiết, báo cáo thông minh giúp tối ưu hóa chiến lược kinh doanh.",
			color: "from-amber-600 to-yellow-500",
		},
		{
			icon: Headphones,
			title: "Customer Support",
			description:
				"Hỗ trợ khách hàng 24/7 với đội ngũ chuyên nghiệp, giải đáp mọi thắc mắc nhanh chóng.",
			color: "from-orange-600 to-amber-600",
		},
		{
			icon: Shield,
			title: "Security & Privacy",
			description:
				"Bảo mật cao cấp với mã hóa SSL, bảo vệ thông tin khách hàng và giao dịch an toàn.",
			color: "from-red-500 to-orange-500",
		},
		{
			icon: Zap,
			title: "Performance",
			description:
				"Tốc độ tải trang nhanh, hiệu suất cao, đảm bảo trải nghiệm mượt mà cho người dùng.",
			color: "from-yellow-500 to-amber-500",
		},
	];

	return (
		<section
			id="services-section"
			className="py-20 bg-gradient-to-b from-amber-50 to-white"
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
							DỊCH VỤ CỦA CHÚNG TÔI
						</span>
					</div>

					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Giải pháp
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
							{" "}
							toàn diện{" "}
						</span>
						cho doanh nghiệp
					</h2>

					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						ShopCare cung cấp đầy đủ các dịch vụ cần thiết để xây
						dựng và phát triển hệ thống thương mại điện tử thành
						công
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<Card
							key={index}
							className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2 ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-10"
							}`}
							style={{ transitionDelay: `${index * 150}ms` }}
						>
							<CardHeader className="text-center pb-4">
								<div
									className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
								>
									<service.icon className="w-8 h-8 text-white" />
								</div>
								<CardTitle className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
									{service.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600 leading-relaxed text-center">
									{service.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>

				{/* CTA Section */}
				<div
					className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
						isVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-10"
					}`}
				>
					<div className="bg-gradient-to-r from-amber-900 to-orange-800 rounded-3xl p-12 text-white">
						<h3 className="text-3xl font-bold mb-4">
							Sẵn sàng bắt đầu hành trình thành công?
						</h3>
						<p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
							Liên hệ với chúng tôi ngay hôm nay để được tư vấn
							miễn phí và nhận báo giá tốt nhất
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button className="bg-white text-amber-900 font-semibold px-8 py-4 rounded-full hover:bg-amber-50 transition-all duration-300 transform hover:scale-105">
								Tư vấn miễn phí
							</button>
							<button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-amber-900 transition-all duration-300">
								Xem thêm dịch vụ
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
