"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

export default function TermsOfService() {
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

		const element = document.getElementById("terms-section");
		if (element) observer.observe(element);

		return () => observer.disconnect();
	}, []);

	const termsPoints = [
		{
			icon: CheckCircle,
			title: "Quyền và nghĩa vụ của người dùng",
			content: [
				"Cung cấp thông tin chính xác và cập nhật khi đăng ký",
				"Sử dụng dịch vụ một cách hợp pháp và phù hợp",
				"Bảo mật thông tin đăng nhập tài khoản",
				"Tuân thủ các quy định về thanh toán và giao dịch",
				"Không sử dụng dịch vụ cho mục đích bất hợp pháp",
			],
		},
		{
			icon: FileText,
			title: "Điều khoản sử dụng dịch vụ",
			content: [
				"Dịch vụ được cung cấp 'như hiện tại' với khả năng tốt nhất",
				"Chúng tôi có quyền tạm ngừng dịch vụ để bảo trì",
				"Người dùng chịu trách nhiệm về nội dung họ tải lên",
				"Nghiêm cấm việc sao chép, phân phối trái phép",
				"Tuân thủ các quy định về sở hữu trí tuệ",
			],
		},
		{
			icon: AlertTriangle,
			title: "Giới hạn trách nhiệm",
			content: [
				"ShopCare không chịu trách nhiệm về thiệt hại gián tiếp",
				"Không đảm bảo dịch vụ hoạt động liên tục 100%",
				"Người dùng tự chịu rủi ro khi sử dụng dịch vụ",
				"Giới hạn bồi thường theo quy định pháp luật",
				"Không chịu trách nhiệm về hành vi của bên thứ ba",
			],
		},
		{
			icon: XCircle,
			title: "Chấm dứt dịch vụ",
			content: [
				"Người dùng có thể hủy tài khoản bất kỳ lúc nào",
				"ShopCare có quyền đình chỉ tài khoản vi phạm",
				"Thông báo trước 30 ngày khi ngừng cung cấp dịch vụ",
				"Dữ liệu sẽ được xóa sau khi chấm dứt dịch vụ",
				"Các khoản phí đã thanh toán không được hoàn lại",
			],
		},
	];

	return (
		<section
			id="terms-section"
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
					<h2
						id="terms"
						className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
					>
						Điều khoản
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
							{" "}
							Dịch vụ{" "}
						</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Các điều khoản và điều kiện sử dụng dịch vụ ShopCare mà
						bạn cần biết
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 mb-12">
					{termsPoints.map((point, index) => (
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

				{/* Legal Information */}
				<Card
					className={`bg-gradient-to-r from-amber-50 to-orange-50 border-0 transition-all duration-1000 delay-800 ${
						isVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-10"
					}`}
				>
					<CardContent className="p-8">
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							Thông tin pháp lý
						</h3>
						<div className="grid md:grid-cols-2 gap-6 text-gray-700">
							<div>
								<h4 className="font-semibold mb-2">
									Luật áp dụng:
								</h4>
								<p>
									Các điều khoản này được điều chỉnh bởi pháp
									luật Việt Nam. Mọi tranh chấp sẽ được giải
									quyết tại tòa án có thẩm quyền.
								</p>
							</div>
							<div>
								<h4 className="font-semibold mb-2">
									Hiệu lực:
								</h4>
								<p>
									Điều khoản này có hiệu lực từ ngày
									01/01/2024 và được cập nhật lần cuối vào
									ngày 01/12/2024.
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
