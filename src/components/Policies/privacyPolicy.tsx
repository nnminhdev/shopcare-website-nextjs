"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Database, Users, Eye } from "lucide-react";

export default function PrivacyPolicy() {
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

		const element = document.getElementById("privacy-section");
		if (element) observer.observe(element);

		return () => observer.disconnect();
	}, []);

	const privacyPoints = [
		{
			icon: Database,
			title: "Thu thập thông tin",
			content: [
				"Thông tin cá nhân: Họ tên, email, số điện thoại, địa chỉ",
				"Thông tin giao dịch: Lịch sử mua hàng, phương thức thanh toán",
				"Thông tin kỹ thuật: IP address, browser, thiết bị sử dụng",
				"Cookies và tracking technologies để cải thiện trải nghiệm",
			],
		},
		{
			icon: Shield,
			title: "Sử dụng thông tin",
			content: [
				"Cung cấp và cải thiện dịch vụ thương mại điện tử",
				"Xử lý đơn hàng và giao dịch thanh toán",
				"Gửi thông báo về đơn hàng và cập nhật dịch vụ",
				"Phân tích và tối ưu hóa hiệu suất website",
				"Tuân thủ các yêu cầu pháp lý và quy định",
			],
		},
		{
			icon: Users,
			title: "Chia sẻ thông tin",
			content: [
				"Không bán hoặc cho thuê thông tin cá nhân cho bên thứ ba",
				"Chia sẻ với đối tác dịch vụ cần thiết (thanh toán, vận chuyển)",
				"Tiết lộ khi có yêu cầu pháp lý từ cơ quan có thẩm quyền",
				"Chia sẻ thông tin tổng hợp, không định danh cho mục đích phân tích",
			],
		},
		{
			icon: Eye,
			title: "Quyền của người dùng",
			content: [
				"Quyền truy cập và xem thông tin cá nhân được lưu trữ",
				"Quyền chỉnh sửa hoặc cập nhật thông tin cá nhân",
				"Quyền xóa tài khoản và dữ liệu cá nhân",
				"Quyền từ chối nhận email marketing",
				"Quyền khiếu nại về việc xử lý dữ liệu cá nhân",
			],
		},
	];

	return (
		<section
			id="privacy-section"
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
						id="privacy"
						className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
					>
						Chính sách
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
							{" "}
							Bảo mật{" "}
						</span>
						Thông tin
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						ShopCare cam kết bảo vệ thông tin cá nhân của bạn theo
						các tiêu chuẩn bảo mật cao nhất
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 mb-12">
					{privacyPoints.map((point, index) => (
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
										<point.icon className="w-5 h-5 text-white" />
									</div>
									<span className="text-xl font-bold text-gray-900">
										{point.title}
									</span>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-3">
									{point.content.map((item, itemIndex) => (
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

				{/* Additional Information */}
				<Card
					className={`bg-gradient-to-r from-amber-50 to-orange-50 border-0 transition-all duration-1000 delay-800 ${
						isVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-10"
					}`}
				>
					<CardContent className="p-8">
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							Thông tin bổ sung
						</h3>
						<div className="grid md:grid-cols-2 gap-6 text-gray-700">
							<div>
								<h4 className="font-semibold mb-2">
									Thời gian lưu trữ:
								</h4>
								<p>
									Chúng tôi lưu trữ thông tin cá nhân của bạn
									trong thời gian cần thiết để cung cấp dịch
									vụ hoặc theo yêu cầu pháp lý.
								</p>
							</div>
							<div>
								<h4 className="font-semibold mb-2">
									Cập nhật chính sách:
								</h4>
								<p>
									Chính sách này có thể được cập nhật định kỳ.
									Chúng tôi sẽ thông báo về các thay đổi quan
									trọng qua email.
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
