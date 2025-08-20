import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import BenefitSection from "./components/BenefitSection";
import TestimonialSection from "./components/TestimonialSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<HeroSection />
			<AboutSection />
			<BenefitSection />
			<TestimonialSection />
			<CtaSection />
			<Footer />
		</>
	);
}
