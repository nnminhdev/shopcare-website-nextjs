"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Server, Eye } from "lucide-react";

export default function DataSecurity() {
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

		const element = document.getElementById("security-section");
		if (element) observer.observe(element);

		return () => observer.disconnect();
	}, []);

	const securityMeasures = [
		{
			icon: Lock,
			title: "Mã hóa dữ liệu",
			content: [
				"SSL/TLS encryption cho tất cả dữ liệu truyền tải",
				"AES-256 encryption cho dữ liệu lưu trữ",
				"End-to-end encryption cho thông tin nhạy cảm",
				"Hashing algorithms cho mật khẩu người dùng",
			],
		},
		{
			icon: Server,
			title: "Bảo mật hạ tầng",
			content: [
				"Datacenter được chứng nhận ISO 27001",
				"Firewall và intrusion detection systems",
				"Regular security audits và penetration testing",
				"24/7 monitoring và incident response",
			],
		},
		{
			icon: Eye,
			title: "Kiểm soát truy cập",
			content: [
				"Multi-factor authentication (MFA)",
				"Role-based access control (RBAC)",
				"Regular access reviews và deprovisioning",
				"Audit logs cho tất cả hoạt động truy cập",
			],
		},
		{
			icon: Shield,
			title: "Tuân thủ quy định",
			content: [
				"GDPR compliance cho người dùng EU",
				"SOC 2 Type II certification",
				"PCI DSS compliance cho thanh toán",
				"Regular compliance assessments",
			],
		},
	];

	return (
		<section
			id="security-section"
			className="py-20 bg-gradient-to-b from-orange-50 to-white"
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
						id="security"
						className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
					>
						Bảo mật
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
							{" "}
							Dữ liệu{" "}
						</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						ShopCare áp dụng các biện pháp bảo mật tiên tiến để bảo
						vệ dữ liệu của bạn
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 mb-12">
					{securityMeasures.map((measure, index) => (
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
								<CardTitle className="flex items-center space-x-3">
									<div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
										<measure.icon className="w-5 h-5 text-white" />
									</div>
									<span className="text-xl font-bold text-gray-900">
										{measure.title}
									</span>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-3">
									{measure.content.map((item, itemIndex) => (
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

				{/* Security Certifications */}
				<Card
					className={`bg-gradient-to-r from-amber-50 to-orange-50 border-0 transition-all duration-1000 delay-800 ${
						isVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-10"
					}`}
				>
					<CardContent className="p-8">
						<h3 className="text-2xl font-bold text-gray-900 mb-6">
							Chứng nhận Bảo mật
						</h3>
						<div className="grid md:grid-cols-3 gap-6 text-center">
							<div className="p-6 bg-white rounded-xl shadow-sm">
								<div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
									<Shield className="w-8 h-8 text-white" />
								</div>
								<h4 className="font-semibold text-gray-900 mb-2">
									ISO 27001
								</h4>
								<p className="text-sm text-gray-600">
									Chứng nhận quản lý bảo mật thông tin quốc tế
								</p>
							</div>
							<div className="p-6 bg-white rounded-xl shadow-sm">
								<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
									<Lock className="w-8 h-8 text-white" />
								</div>
								<h4 className="font-semibold text-gray-900 mb-2">
									SOC 2 Type II
								</h4>
								<p className="text-sm text-gray-600">
									Kiểm toán bảo mật và kiểm soát nội bộ
								</p>
							</div>
							<div className="p-6 bg-white rounded-xl shadow-sm">
								<div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
									<Server className="w-8 h-8 text-white" />
								</div>
								<h4 className="font-semibold text-gray-900 mb-2">
									PCI DSS
								</h4>
								<p className="text-sm text-gray-600">
									Tiêu chuẩn bảo mật dữ liệu thẻ thanh toán
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
