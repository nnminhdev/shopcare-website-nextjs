import React from "react";
import { MessageCircle } from "lucide-react";

interface BetaNoticeProps {
	isVisible: boolean;
}

export const BetaNotice: React.FC<BetaNoticeProps> = ({ isVisible }) => {
	return (
		<div
			className={`text-center transition-all duration-1000 delay-900 ${
				isVisible
					? "translate-y-0 opacity-100"
					: "translate-y-10 opacity-0"
			}`}
		>
			<div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
				<div className="mb-6">
					<h3 className="text-xl font-bold text-amber-800 mb-3">
						Phiên bản Beta - Ý kiến của bạn rất quan trọng!
					</h3>
					<p className="text-amber-700 mb-4">
						ShopCare hiện đang trong giai đoạn beta. Chúng tôi rất
						mong nhận được phản hồi từ bạn để cải thiện sản phẩm.
					</p>
				</div>

				<div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6">
					<div className="flex items-center justify-center gap-2 mb-3">
						<MessageCircle className="w-5 h-5 text-amber-600" />
						<span className="font-semibold text-amber-800">
							Hỗ trợ & Phản hồi
						</span>
					</div>
					<p className="text-amber-700 mb-3">
						Liên hệ với chúng tôi qua Zalo:
					</p>
					<a
						href="https://zalo.me/0909551661"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95"
					>
						<MessageCircle className="w-4 h-4" />
						0909.551.661
					</a>
				</div>
			</div>
		</div>
	);
};
