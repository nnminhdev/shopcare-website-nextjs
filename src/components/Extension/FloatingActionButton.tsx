import React from "react";
import { Download } from "lucide-react";

export const FloatingActionButton: React.FC = () => {
	return (
		<div className="fixed bottom-8 right-8">
			<button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 animate-bounce">
				<Download className="w-6 h-6" />
			</button>
		</div>
	);
};
