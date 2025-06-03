"use client";

import { useState, useEffect } from "react";
import { Shield, FileText, Lock, Eye } from "lucide-react";

export default function PoliciesHero() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const policyItems = [
		{ icon: Shield, title: "Chính sách bảo mật", href: "#privacy" },
		{ icon: FileText, title: "Điều khoản dịch vụ", href: "#terms" },
		{ icon: Eye, title: "Chính sách Cookie", href: "#cookies" },
		{ icon: Lock, title: "Bảo mật dữ liệu", href: "#security" },
	];

	return (
		<section className="relative pt-24 pb-16 bg-gradient-to-br from-amber-900 via-orange-800 to-amber-700 overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:30px_30px]"></div>
			</div>

			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto text-center">
					<div
						className={`transition-all duration-1000 ${
							isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-10"
						}`}
					>
						<div className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-6">
							<span className="text-amber-800 font-semibold text-sm">
								CHÍNH SÁCH & ĐIỀU KHOẢN
							</span>
						</div>

						<h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
							Chính sách &
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
								{" "}
								Điều khoản{" "}
							</span>
							ShopCare
						</h1>

						<p className="text-xl text-amber-100 leading-relaxed max-w-3xl mx-auto mb-12">
							Chúng tôi cam kết bảo vệ quyền riêng tư và dữ liệu
							của bạn. Tìm hiểu về các chính sách và điều khoản sử
							dụng dịch vụ ShopCare.
						</p>

						{/* Quick Navigation */}
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
							{policyItems.map((item, index) => (
								<a
									key={index}
									href={item.href}
									className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 ${
										isVisible
											? "opacity-100 translate-y-0"
											: "opacity-0 translate-y-10"
									}`}
									style={{
										transitionDelay: `${index * 150}ms`,
									}}
								>
									<div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
										<item.icon className="w-6 h-6 text-white" />
									</div>
									<h3 className="text-white font-semibold text-lg">
										{item.title}
									</h3>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
