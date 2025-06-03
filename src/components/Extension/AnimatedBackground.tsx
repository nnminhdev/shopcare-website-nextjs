import React from "react";

export const AnimatedBackground: React.FC = () => {
	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			<div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-10 animate-pulse"></div>
			<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
			<div
				className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-5 animate-spin"
				style={{ animationDuration: "20s" }}
			></div>
		</div>
	);
};
