"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ name: "Trang chủ", href: "#home" },
		{ name: "Về chúng tôi", href: "#about" },
		{ name: "Dịch vụ", href: "#services" },
		{ name: "Tính năng", href: "#features" },
		{ name: "Liên hệ", href: "#contact" },
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-white/95 backdrop-blur-md shadow-lg"
					: "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex items-center space-x-2">
						<div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
							<span className="text-white font-bold text-xl">
								S
							</span>
						</div>
						<span
							className={`text-xl font-bold transition-colors ${
								isScrolled ? "text-amber-900" : "text-white"
							}`}
						>
							ShopCare
						</span>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className={`font-medium transition-colors hover:text-orange-500 ${
									isScrolled ? "text-gray-700" : "text-white"
								}`}
							>
								{item.name}
							</a>
						))}
					</div>

					{/* Contact Button */}
					<div className="hidden md:flex items-center space-x-4">
						<Button
							variant="outline"
							size="sm"
							className={`transition-all ${
								isScrolled
									? "border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white"
									: "border-white text-white hover:bg-white hover:text-amber-900"
							}`}
						>
							<Phone className="w-4 h-4 mr-2" />
							0909.551.661
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? (
							<X
								className={`w-6 h-6 ${
									isScrolled ? "text-gray-700" : "text-white"
								}`}
							/>
						) : (
							<Menu
								className={`w-6 h-6 ${
									isScrolled ? "text-gray-700" : "text-white"
								}`}
							/>
						)}
					</button>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-medium"
									onClick={() => setIsOpen(false)}
								>
									{item.name}
								</a>
							))}
							<div className="px-3 py-2">
								<Button
									size="sm"
									className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
								>
									<Phone className="w-4 h-4 mr-2" />
									0909.551.661
								</Button>
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
