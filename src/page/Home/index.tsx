import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Services from "@/components/Home/Service";
import Features from "@/components/Home/Features";
import Testimonials from "@/components/Home/Testimonials";
import Contact from "@/components/Home/Contact";
import Footer from "@/components/Home/Footer";

export default function HomePage() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
			<Hero />
			<About />
			<Services />
			<Features />
			<Testimonials />
			<Contact />
			<Footer />
		</main>
	);
}
