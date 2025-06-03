"use client";

import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
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

		const element = document.getElementById("contact-section");
		if (element) observer.observe(element);

		return () => observer.disconnect();
	}, []);

	const contactInfo = [
		{
			icon: Phone,
			title: "Hotline",
			content: "0909.551.661",
			description: "Hỗ trợ 24/7",
			action: "tel:0909551661",
		},
		{
			icon: MessageCircle,
			title: "Zalo",
			content: "0909.551.661",
			description: "Chat trực tiếp",
			action: "https://zalo.me/0909551661",
		},
		{
			icon: Mail,
			title: "Email",
			content: "info@shopcare.vn",
			description: "Phản hồi trong 2h",
			action: "mailto:info@shopcare.vn",
		},
		{
			icon: MapPin,
			title: "Website",
			content: "shopcare.vn",
			description: "Thông tin chi tiết",
			action: "https://shopcare.vn",
		},
	];

	return (
		<section
			id="contact-section"
			className="py-20 bg-gradient-to-b from-orange-50 to-amber-100"
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
							LIÊN HỆ VỚI CHÚNG TÔI
						</span>
					</div>

					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Sẵn sàng
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
							{" "}
							bắt đầu{" "}
						</span>
						hành trình?
					</h2>

					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn
						phí và nhận báo giá tốt nhất
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-16">
					{/* Contact Info */}
					<div
						className={`space-y-8 transition-all duration-1000 delay-300 ${
							isVisible
								? "opacity-100 translate-x-0"
								: "opacity-0 -translate-x-10"
						}`}
					>
						<div className="space-y-6">
							<h3 className="text-2xl font-bold text-gray-900 mb-6">
								Thông tin liên hệ
							</h3>

							{contactInfo.map((info, index) => (
								<Card
									key={index}
									className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm cursor-pointer"
									onClick={() =>
										window.open(info.action, "_blank")
									}
								>
									<CardContent className="p-6">
										<div className="flex items-center space-x-4">
											<div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
												<info.icon className="w-6 h-6 text-white" />
											</div>
											<div className="flex-1">
												<div className="font-semibold text-gray-900">
													{info.title}
												</div>
												<div className="text-lg text-amber-700 font-medium">
													{info.content}
												</div>
												<div className="text-sm text-gray-600">
													{info.description}
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>

						{/* Business Hours */}
						<Card className="bg-gradient-to-r from-amber-900 to-orange-800 text-white border-0">
							<CardHeader>
								<CardTitle className="flex items-center space-x-2">
									<Clock className="w-6 h-6" />
									<span>Giờ làm việc</span>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-2">
									<div className="flex justify-between">
										<span>Thứ 2 - Thứ 6:</span>
										<span>8:00 - 18:00</span>
									</div>
									<div className="flex justify-between">
										<span>Thứ 7:</span>
										<span>8:00 - 12:00</span>
									</div>
									<div className="flex justify-between">
										<span>Chủ nhật:</span>
										<span>Nghỉ</span>
									</div>
									<div className="pt-2 border-t border-amber-700">
										<div className="flex justify-between font-semibold">
											<span>Hotline 24/7:</span>
											<span>0909.551.661</span>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Contact Form */}
					<div
						className={`transition-all duration-1000 delay-500 ${
							isVisible
								? "opacity-100 translate-x-0"
								: "opacity-0 translate-x-10"
						}`}
					>
						<Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
							<CardHeader>
								<CardTitle className="text-2xl font-bold text-gray-900">
									Gửi yêu cầu tư vấn
								</CardTitle>
								<p className="text-gray-600">
									Điền thông tin bên dưới, chúng tôi sẽ liên
									hệ trong vòng 30 phút
								</p>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="grid md:grid-cols-2 gap-4">
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Họ và tên *
										</label>
										<Input
											placeholder="Nhập họ và tên"
											className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Số điện thoại *
										</label>
										<Input
											placeholder="Nhập số điện thoại"
											className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
										/>
									</div>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Email
									</label>
									<Input
										type="email"
										placeholder="Nhập địa chỉ email"
										className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Dịch vụ quan tâm
									</label>
									<select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-amber-500 focus:ring-amber-500">
										<option>Chọn dịch vụ</option>
										<option>E-commerce Platform</option>
										<option>Mobile App</option>
										<option>Analytics & Reports</option>
										<option>Tư vấn tổng thể</option>
									</select>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Nội dung yêu cầu
									</label>
									<Textarea
										placeholder="Mô tả chi tiết yêu cầu của bạn..."
										rows={4}
										className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
									/>
								</div>

								<Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
									Gửi yêu cầu tư vấn
								</Button>

								<div className="text-center text-sm text-gray-600">
									Hoặc liên hệ trực tiếp qua{" "}
									<a
										href="tel:0909551661"
										className="text-amber-600 font-semibold hover:underline"
									>
										Hotline: 0909.551.661
									</a>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
