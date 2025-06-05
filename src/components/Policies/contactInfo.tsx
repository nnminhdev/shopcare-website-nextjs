"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactInfo() {
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

		const element = document.getElementById("contact-info-section");
		if (element) observer.observe(element);

		return () => observer.disconnect();
	}, []);

	const contactMethods = [
		{
			icon: Phone,
			title: "Hotline",
			content: "0909.551.661",
			description: "Hỗ trợ 24/7 cho mọi thắc mắc",
			action: "tel:0909551661",
			color: "from-green-500 to-emerald-500",
		},
		{
			icon: MessageCircle,
			title: "Zalo",
			content: "0909.551.661",
			description: "Chat trực tiếp với đội ngũ hỗ trợ",
			action: "https://zalo.me/0909551661",
			color: "from-blue-500 to-cyan-500",
		},
		{
			icon: Mail,
			title: "Email",
			content: "shopcarevn2025@gmail.com",
			description: "Gửi email cho chúng tôi",
			action: "mailto:shopcarevn2025@gmail.com",
			color: "from-purple-500 to-pink-500",
		},
		{
			icon: MapPin,
			title: "Website",
			content: "shopcare.vn",
			description: "Truy cập website chính thức",
			action: "https://www.shopcare.vn",
			color: "from-amber-500 to-orange-500",
		},
	];

	return (
		<section
			id="contact-info-section"
			className="py-20 bg-gradient-to-b from-white to-amber-50"
		>
			<div className="container mx-auto px-4">
				<div
					className={`text-center mb-16 transition-all duration-1000 ${
						isVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-10"
					}`}
				>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Liên hệ
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
							{" "}
							Hỗ trợ{" "}
						</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Có thắc mắc về chính sách hoặc cần hỗ trợ? Liên hệ với
						chúng tôi ngay
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
					{contactMethods.map((method, index) => (
						<Card
							key={index}
							className={`group border-0 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer hover:-translate-y-2 ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-10"
							}`}
							style={{ transitionDelay: `${index * 150}ms` }}
							onClick={() => window.open(method.action, "_blank")}
						>
							<CardHeader className="text-center">
								<div
									className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
								>
									<method.icon className="w-8 h-8 text-white" />
								</div>
								<CardTitle className="text-xl font-bold text-gray-900">
									{method.title}
								</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-lg font-semibold text-amber-700 mb-2">
									{method.content}
								</p>
								<p className="text-sm text-gray-600">
									{method.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>

				<Card
					className={`bg-gradient-to-r from-amber-50 to-orange-50 border-0 transition-all duration-1000 delay-600 ${
						isVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-10"
					}`}
				>
					<CardContent className="p-8">
						<div className="grid md:grid-cols-2 gap-8 items-center">
							<div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									Cán bộ Bảo vệ Dữ liệu (DPO)
								</h3>
								<p className="text-gray-700 mb-4">
									Nếu bạn có bất kỳ thắc mắc nào về việc xử lý
									dữ liệu cá nhân hoặc muốn thực hiện quyền
									của mình, vui lòng liên hệ với Cán bộ Bảo vệ
									Dữ liệu của chúng tôi.
								</p>
								<div className="space-y-2">
									<div className="flex items-center space-x-3">
										<Mail className="w-5 h-5 text-amber-600" />
										<span className="text-gray-700">
											dpo@shopcare.vn
										</span>
									</div>
									<div className="flex items-center space-x-3">
										<Clock className="w-5 h-5 text-amber-600" />
										<span className="text-gray-700">
											Phản hồi trong vòng 72 giờ
										</span>
									</div>
								</div>
							</div>
							<div className="text-center">
								<Button
									size="lg"
									className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
									onClick={() =>
										window.open(
											"mailto:dpo@shopcare.vn",
											"_blank"
										)
									}
								>
									Liên hệ DPO
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
