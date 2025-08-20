import MarqueeRow from "./MarqueeRow";
import { testimoniDataTop, testimoniDataBottom } from "../data/testimonial";

const TestimonialSection: React.FC = () => {
	return (
		<section id="testimoni" className="flex flex-col items-center py-32">
			<h1 className="text-4xl font-bold text-zinc-700 text-center">
				Apa <span className="text-[#0a66c2]">kata</span> mereka?
			</h1>
			<div className="mt-20 w-full">
				<MarqueeRow testimonials={testimoniDataTop} direction="left" />
				<div className="mt-5">
					<MarqueeRow testimonials={testimoniDataBottom} direction="right" />
				</div>
			</div>
		</section>
	);
};

export default TestimonialSection;
