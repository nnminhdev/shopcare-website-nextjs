import React from "react";

interface Step {
	number: number;
	text: string;
	bgColor: string;
	textColor: string;
}

interface StepCardProps {
	step: Step;
}

export const StepCard: React.FC<StepCardProps> = ({ step }) => {
	return (
		<div className="text-center">
			<div
				className={`w-12 h-12 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}
			>
				<span className={`${step.textColor} font-bold`}>
					{step.number}
				</span>
			</div>
			<p className="text-sm text-amber-700">{step.text}</p>
		</div>
	);
};
