import React from "react";
import { CheckCircle } from "lucide-react";

interface SuccessMessageProps {
	isVisible: boolean;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({
	isVisible,
}) => {
	return (
		<div
			className={`text-center mb-12 transition-all duration-1000 delay-300 ${
				isVisible
					? "translate-y-0 opacity-100"
					: "translate-y-10 opacity-0"
			}`}
		>
			<div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-6 py-4 mb-6">
				<CheckCircle className="w-6 h-6 text-green-500 animate-bounce" />
				<span className="text-green-700 font-semibold">
					Cài đặt thành công!
				</span>
			</div>
			<h2 className="text-2xl md:text-3xl font-bold text-amber-800 mb-4">
				Chào mừng bạn đến với ShopCare! 🎉
			</h2>
			<p className="text-amber-700 text-lg max-w-2xl mx-auto">
				Extension hỗ trợ tăng năng suất bán hàng của bạn đã sẵn sàng
				hoạt động. Hãy khám phá những tính năng tuyệt vời bên dưới!
			</p>
		</div>
	);
};
