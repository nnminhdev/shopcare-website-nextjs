import React from "react";
import { Zap, TrendingUp, Star } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

interface FeaturesSectionProps {
	isVisible: boolean;
	currentFeature: number;
}

export interface Feature {
	icon: React.ReactNode;
	title: string;
	description: string;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
	isVisible,
	currentFeature,
}) => {
	const features: Feature[] = [
		{
			icon: <Zap className="w-8 h-8" />,
			title: "Tự động hóa quy trình",
			description:
				"Tiết kiệm thời gian với các công cụ tự động hóa thông minh",
		},
		{
			icon: <TrendingUp className="w-8 h-8" />,
			title: "Tăng hiệu suất bán hàng",
			description: "Phân tích và tối ưu hóa chiến lược bán hàng của bạn",
		},
		{
			icon: <Star className="w-8 h-8" />,
			title: "Quản lý khách hàng",
			description: "Theo dõi và chăm sóc khách hàng một cách hiệu quả",
		},
	];

	return (
		<div
			className={`mb-12 transition-all duration-1000 delay-500 ${
				isVisible
					? "translate-y-0 opacity-100"
					: "translate-y-10 opacity-0"
			}`}
		>
			<h3 className="text-2xl font-bold text-center text-amber-800 mb-8">
				Tính năng nổi bật
			</h3>
			<div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
				{features.map((feature, index) => (
					<FeatureCard
						key={index}
						feature={feature}
						index={index}
						isActive={currentFeature === index}
					/>
				))}
			</div>
		</div>
	);
};
