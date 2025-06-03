"use client";
import { useState, useEffect } from "react";
import { Header } from "@/components/Extension/Header";
import { SuccessMessage } from "@/components/Extension/SuccessMessage";
import { FeaturesSection } from "@/components/Extension/FeaturesSection";
import { HowToStart } from "@/components/Extension/HowToStart";
import { BetaNotice } from "@/components/Extension/BetaNotice";
import { FloatingActionButton } from "@/components/Extension/FloatingActionButton";
import { AnimatedBackground } from "@/components/Extension/AnimatedBackground";

export default function ExtensionPage() {
	const [isVisible, setIsVisible] = useState(false);
	const [currentFeature, setCurrentFeature] = useState(0);

	useEffect(() => {
		setIsVisible(true);
		const interval = setInterval(() => {
			setCurrentFeature((prev) => (prev + 1) % 3);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">
			<AnimatedBackground />

			<div className="relative z-10 container mx-auto px-4 py-8">
				<Header isVisible={isVisible} />
				<SuccessMessage isVisible={isVisible} />
				<FeaturesSection
					isVisible={isVisible}
					currentFeature={currentFeature}
				/>
				<HowToStart isVisible={isVisible} />
				<BetaNotice isVisible={isVisible} />
				<FloatingActionButton />
			</div>
		</div>
	);
}
