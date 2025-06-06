import React from "react";
import { StepCard } from "./StepCard";

interface HowToStartProps {
	isVisible: boolean;
}

export const HowToStart: React.FC<HowToStartProps> = ({ isVisible }) => {
	const steps = [
		{
			number: 1,
			text: "Mở trang web bán hàng của bạn",
			bgColor: "bg-amber-100",
			textColor: "text-amber-600",
		},
		{
			number: 2,
			text: "Tìm biểu tượng ShopCare trên thanh extension",
			bgColor: "bg-orange-100",
			textColor: "text-orange-600",
		},
		{
			number: 3,
			text: "Bắt đầu trải nghiệm các tính năng",
			bgColor: "bg-yellow-100",
			textColor: "text-yellow-600",
		},
	];

	return (
		<div
			className={`mb-12 transition-all duration-1000 delay-700 ${
				isVisible
					? "translate-y-0 opacity-100"
					: "translate-y-10 opacity-0"
			}`}
		>
			<div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 max-w-3xl mx-auto">
				<h3 className="text-2xl font-bold text-center text-amber-800 mb-6">
					Bắt đầu sử dụng
				</h3>
				<div className="grid md:grid-cols-3 gap-4">
					{steps.map((step, index) => (
						<StepCard key={index} step={step} />
					))}
				</div>
			</div>
		</div>
	);
};
