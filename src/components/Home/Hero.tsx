"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";

export default function Hero() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<section className="relative min-h-screen bg-gradient-to-br from-amber-900 via-orange-800 to-amber-700 overflow-hidden">
			<div className="absolute inset-0 opacity-10">
				{/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fillOpacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div> */}
			</div>

			<Navigation />

			<div className="container mx-auto px-4 pt-20 pb-16">
				<div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
					{/* Content */}
					<div
						className={`space-y-8 transition-all duration-1000 ${
							isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-10"
						}`}
					>
						<div className="space-y-4">
							<div className="flex items-center space-x-2 mb-4">
								<div className="flex space-x-1">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className="w-5 h-5 fill-yellow-400 text-yellow-400"
										/>
									))}
								</div>
								<span className="text-amber-100 text-sm font-medium">
									Được tin tưởng bởi 10,000+ khách hàng
								</span>
							</div>

							<h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
								Giải pháp
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
									{" "}
									E-commerce{" "}
								</span>
								toàn diện
							</h1>

							<p className="text-xl text-amber-100 leading-relaxed max-w-lg">
								ShopCare cung cấp nền tảng thương mại điện tử
								hiện đại, giúp doanh nghiệp phát triển bền vững
								trong kỷ nguyên số.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-4">
							<Button
								size="lg"
								className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
							>
								Bắt đầu ngay
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="border-2 border-white text-white hover:bg-white hover:text-amber-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 group"
							>
								<Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
								Xem demo
							</Button>
						</div>

						<div className="grid grid-cols-3 gap-8 pt-8">
							<div className="text-center">
								<div className="text-3xl font-bold text-white">
									10K+
								</div>
								<div className="text-amber-200 text-sm">
									Khách hàng
								</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-white">
									99.9%
								</div>
								<div className="text-amber-200 text-sm">
									Uptime
								</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-white">
									24/7
								</div>
								<div className="text-amber-200 text-sm">
									Hỗ trợ
								</div>
							</div>
						</div>
					</div>

					{/* Hero Image */}
					<div
						className={`relative transition-all duration-1000 delay-300 ${
							isVisible
								? "opacity-100 translate-x-0"
								: "opacity-0 translate-x-10"
						}`}
					>
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
							<div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
								<div className="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
									<div className="text-6xl">🛍️</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Scroll Indicator */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
					<ChevronDown className="w-8 h-8 text-white/70" />
				</div>
			</div>
		</section>
	);
}
