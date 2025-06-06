import React from "react";
import { Feature } from "./FeaturesSection";

interface FeatureCardProps {
	feature: Feature;
	index: number;
	isActive: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
	feature,
	index,
	isActive,
}) => {
	return (
		<div
			className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
				isActive ? "ring-2 ring-amber-400 scale-105" : ""
			}`}
		>
			<div className="flex flex-col items-center text-center">
				<div
					className={`p-3 rounded-lg mb-4 transition-colors duration-300 ${
						isActive
							? "bg-amber-100 text-amber-600"
							: "bg-orange-100 text-orange-600"
					}`}
				>
					{feature.icon}
				</div>
				<h4 className="font-semibold text-amber-800 mb-2">
					{feature.title}
				</h4>
				<p className="text-amber-700 text-sm">{feature.description}</p>
			</div>
		</div>
	);
};
