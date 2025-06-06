import PoliciesHero from "@/components/Policies/policiesHero";
import PrivacyPolicy from "@/components/Policies/privacyPolicy";
import TermsOfService from "@/components/Policies/termsOfService";
import CookiePolicy from "@/components/Policies/cookiePolicy";
import DataSecurity from "@/components/Policies/dataSecurity";
import ContactInfo from "@/components/Policies/contactInfo";
// import Navigation from "@/components/navigation";
// import Footer from "@/components/footer";

export default function PoliciesPage() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
			{/* <Navigation /> */}
			<PoliciesHero />
			<PrivacyPolicy />
			<TermsOfService />
			<CookiePolicy />
			<DataSecurity />
			<ContactInfo />
			{/* <Footer /> */}
		</main>
	);
}
