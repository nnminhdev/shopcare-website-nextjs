import Image from "next/image";
import React from "react";
import LogoShopCare from "@/asset/logo/logo_shop_care.png";
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
			<div className="flex justify-center mb-5">
				<Image
					src={LogoShopCare}
					width={300}
					height={200}
					alt="logo shop care"
					title="shop care logo"
				/>
			</div>
			<div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
				<span className="w-2 h-2 bg-amber-500 rounded-full animate-ping"></span>
				PHIÊN BẢN BETA
			</div>
		</div>
	);
};
