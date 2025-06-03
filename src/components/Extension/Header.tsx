import React from "react";

interface HeaderProps {
	isVisible: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isVisible }) => {
	return (
		<div
			className={`text-center mb-12 transition-all duration-1000 ${
				isVisible
					? "translate-y-0 opacity-100"
					: "translate-y-10 opacity-0"
			}`}
		>
			<h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-800 to-orange-600 bg-clip-text text-transparent mb-4">
				SHOP CARE
			</h1>
			<div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
				<span className="w-2 h-2 bg-amber-500 rounded-full animate-ping"></span>
				PHIÊN BẢN BETA
			</div>
		</div>
	);
};
