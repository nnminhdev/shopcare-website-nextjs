"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
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

		const element = document.getElementById("testimonials-section");
		if (element) observer.observe(element);

		return () => observer.disconnect();
	}, []);

	const testimonials = [
		{
			name: "Nguyễn Văn An",
			position: "CEO, Fashion Store",
			avatar: "👨‍💼",
			rating: 5,
			content:
				"ShopCare đã giúp chúng tôi tăng doanh thu 300% chỉ trong 6 tháng. Nền tảng rất dễ sử dụng và hỗ trợ khách hàng tuyệt vời.",
			company: "Fashion Store",
		},
		{
			name: "Trần Thị Bình",
			position: "Founder, Beauty World",
			avatar: "👩‍💼",
			rating: 5,
			content:
				"Tính năng phân tích dữ liệu của ShopCare giúp chúng tôi hiểu rõ khách hàng hơn và đưa ra chiến lược marketing hiệu quả.",
			company: "Beauty World",
		},
		{
			name: "Lê Minh Cường",
			position: "Director, Tech Gadgets",
			avatar: "👨‍💻",
			rating: 5,
			content:
				"Ứng dụng mobile của ShopCare mang lại trải nghiệm mua sắm tuyệt vời cho khách hàng. Tỷ lệ chuyển đổi tăng đáng kể.",
			company: "Tech Gadgets",
		},
		{
			name: "Phạm Thu Hà",
			position: "Manager, Home Decor",
			avatar: "👩‍🎨",
			rating: 5,
			content:
				"Hệ thống quản lý kho hàng thông minh giúp chúng tôi tối ưu hóa inventory và giảm thiểu tồn kho hiệu quả.",
			company: "Home Decor",
		},
		{
			name: "Hoàng Đức Thành",
			position: "Owner, Sports Shop",
			avatar: "🏃‍♂️",
			rating: 5,
			content:
				"Tốc độ tải trang nhanh và SEO tối ưu của ShopCare giúp website chúng tôi luôn ở top đầu kết quả tìm kiếm.",
			company: "Sports Shop",
		},
		{
			name: "Vũ Thị Mai",
			position: "CEO, Organic Food",
			avatar: "👩‍🌾",
			rating: 5,
			content:
				"Đội ngũ hỗ trợ 24/7 của ShopCare luôn sẵn sàng giải đáp mọi thắc mắc. Dịch vụ khách hàng xuất sắc!",
			company: "Organic Food",
		},
	];

	return (
		<section
			id="testimonials-section"
			className="py-20 bg-gradient-to-b from-amber-50 to-orange-50"
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
							KHÁCH HÀNG NÓI GÌ
						</span>
					</div>

					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Câu chuyện
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
							{" "}
							thành công{" "}
						</span>
						thực tế
					</h2>

					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Hàng nghìn doanh nghiệp đã tin tưởng và đạt được thành
						công vượt bậc cùng ShopCare
					</p>
				</div>

				{/* Testimonials Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<Card
							key={index}
							className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2 ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-10"
							}`}
							style={{ transitionDelay: `${index * 150}ms` }}
						>
							<CardContent className="p-8">
								{/* Quote Icon */}
								<div className="mb-6">
									<Quote className="w-8 h-8 text-amber-500" />
								</div>

								{/* Rating */}
								<div className="flex space-x-1 mb-4">
									{[...Array(testimonial.rating)].map(
										(_, i) => (
											<Star
												key={i}
												className="w-5 h-5 fill-yellow-400 text-yellow-400"
											/>
										)
									)}
								</div>

								{/* Content */}
								<p className="text-gray-700 leading-relaxed mb-6 italic">
									"{testimonial.content}"
								</p>

								{/* Author */}
								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-2xl">
										{testimonial.avatar}
									</div>
									<div>
										<div className="font-semibold text-gray-900">
											{testimonial.name}
										</div>
										<div className="text-sm text-gray-600">
											{testimonial.position}
										</div>
										<div className="text-xs text-amber-600 font-medium">
											{testimonial.company}
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Stats Section */}
				<div
					className={`mt-20 transition-all duration-1000 delay-1000 ${
						isVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-10"
					}`}
				>
					<div className="bg-gradient-to-r from-amber-900 to-orange-800 rounded-3xl p-12 text-white">
						<div className="grid md:grid-cols-4 gap-8 text-center">
							<div>
								<div className="text-4xl font-bold mb-2">
									10,000+
								</div>
								<div className="text-amber-200">
									Khách hàng tin tưởng
								</div>
							</div>
							<div>
								<div className="text-4xl font-bold mb-2">
									99.9%
								</div>
								<div className="text-amber-200">
									Uptime đảm bảo
								</div>
							</div>
							<div>
								<div className="text-4xl font-bold mb-2">
									300%
								</div>
								<div className="text-amber-200">
									Tăng trưởng trung bình
								</div>
							</div>
							<div>
								<div className="text-4xl font-bold mb-2">
									24/7
								</div>
								<div className="text-amber-200">
									Hỗ trợ khách hàng
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
