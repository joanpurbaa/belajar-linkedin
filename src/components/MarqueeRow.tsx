import type { Testimonial } from "../types/testimonial";
import TestimonialCard from "./TestimonialCard";

interface MarqueeRowProps {
	testimonials: Testimonial[];
	direction?: "left" | "right";
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({
	testimonials,
	direction = "left",
}) => {
	const marqueeClass = direction === "left" ? "marquee-left" : "marquee-right";
	const contentClass =
		direction === "left" ? "marquee-content-left" : "marquee-content-right";

	return (
		<div className="w-full overflow-hidden">
			<div className={marqueeClass}>
				<div className={contentClass}>
					{[...Array(2)].map((_, setIndex) =>
						testimonials.map((testimoni) => (
							<TestimonialCard
								key={`${direction}-${setIndex + 1}-${testimoni.id}`}
								quote={testimoni.quote}
								name={testimoni.name}
							/>
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default MarqueeRow;
