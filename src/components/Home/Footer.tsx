"use client";

import { Phone, Mail, MapPin, Facebook, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
	const footerLinks = {
		company: [
			{ name: "Về ShopCare", href: "#about" },
			{ name: "Dịch vụ", href: "#services" },
			{ name: "Tính năng", href: "#features" },
			{ name: "Báo giá", href: "#pricing" },
		],
		support: [
			{ name: "Hỗ trợ kỹ thuật", href: "#support" },
			{ name: "Hướng dẫn sử dụng", href: "#guide" },
			{ name: "FAQ", href: "#faq" },
			{ name: "Liên hệ", href: "#contact" },
		],
		legal: [
			{ name: "Điều khoản sử dụng", href: "#terms" },
			{ name: "Chính sách bảo mật", href: "#privacy" },
			{ name: "Chính sách cookie", href: "#cookies" },
			{ name: "Bảo mật thông tin", href: "#security" },
		],
	};

	const socialLinks = [
		{ icon: Facebook, href: "#", color: "hover:text-blue-600" },
		{ icon: Youtube, href: "#", color: "hover:text-red-600" },
		{ icon: Linkedin, href: "#", color: "hover:text-blue-700" },
	];

	return (
		<footer className="bg-gradient-to-b from-amber-900 to-orange-900 text-white">
			<div className="container mx-auto px-4 py-16">
				<div className="grid lg:grid-cols-4 gap-12">
					{/* Company Info */}
					<div className="lg:col-span-1">
						<div className="flex items-center space-x-2 mb-6">
							<div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
								<span className="text-white font-bold text-xl">
									S
								</span>
							</div>
							<span className="text-2xl font-bold">ShopCare</span>
						</div>

						<p className="text-amber-100 leading-relaxed mb-6">
							Nền tảng thương mại điện tử hàng đầu Việt Nam, cung
							cấp giải pháp toàn diện cho doanh nghiệp phát triển
							bền vững.
						</p>

						{/* Contact Info */}
						<div className="space-y-3">
							<div className="flex items-center space-x-3">
								<Phone className="w-5 h-5 text-amber-300" />
								<span className="text-amber-100">
									0909.551.661
								</span>
							</div>
							<div className="flex items-center space-x-3">
								<Mail className="w-5 h-5 text-amber-300" />
								<span className="text-amber-100">
									info@shopcare.vn
								</span>
							</div>
							<div className="flex items-center space-x-3">
								<MapPin className="w-5 h-5 text-amber-300" />
								<span className="text-amber-100">
									shopcare.vn
								</span>
							</div>
						</div>
					</div>

					{/* Company Links */}
					<div>
						<h3 className="text-lg font-semibold mb-6">Công ty</h3>
						<ul className="space-y-3">
							{footerLinks.company.map((link, index) => (
								<li key={index}>
									<a
										href={link.href}
										className="text-amber-100 hover:text-white transition-colors duration-300"
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Support Links */}
					<div>
						<h3 className="text-lg font-semibold mb-6">Hỗ trợ</h3>
						<ul className="space-y-3">
							{footerLinks.support.map((link, index) => (
								<li key={index}>
									<a
										href={link.href}
										className="text-amber-100 hover:text-white transition-colors duration-300"
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Legal Links */}
					<div>
						<h3 className="text-lg font-semibold mb-6">Pháp lý</h3>
						<ul className="space-y-3">
							{footerLinks.legal.map((link, index) => (
								<li key={index}>
									<a
										href={link.href}
										className="text-amber-100 hover:text-white transition-colors duration-300"
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-amber-700 mt-12 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="text-amber-200 text-sm mb-4 md:mb-0">
							© 2024 ShopCare. Tất cả quyền được bảo lưu.
						</div>

						{/* Social Links */}
						<div className="flex space-x-4">
							{socialLinks.map((social, index) => (
								<a
									key={index}
									href={social.href}
									className={`w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-amber-700 ${social.color}`}
								>
									<social.icon className="w-5 h-5" />
								</a>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Quick Contact Bar */}
			<div className="bg-amber-800 py-4">
				<div className="container mx-auto px-4">
					<div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-center">
						<div className="flex items-center space-x-2">
							<Phone className="w-4 h-4 text-amber-300" />
							<span className="text-sm text-amber-100">
								Hotline 24/7:
							</span>
							<a
								href="tel:0909551661"
								className="text-sm font-semibold text-white hover:text-amber-200"
							>
								0909.551.661
							</a>
						</div>
						<div className="flex items-center space-x-2">
							<span className="text-sm text-amber-100">
								Zalo:
							</span>
							<a
								href="https://zalo.me/0909551661"
								className="text-sm font-semibold text-white hover:text-amber-200"
							>
								0909.551.661
							</a>
						</div>
						<div className="flex items-center space-x-2">
							<span className="text-sm text-amber-100">
								Website:
							</span>
							<a
								href="https://shopcare.vn"
								className="text-sm font-semibold text-white hover:text-amber-200"
							>
								shopcare.vn
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
