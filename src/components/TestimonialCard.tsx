import React from "react";

interface TestimonialCardProps {
	quote: string;
	name: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name }) => {
	return (
		<div className="bg-gray-100 hover:bg-[#0a66c2] p-5 rounded-md flex-shrink-0 w-[500px] mr-5 group transition-all duration-300">
			<p className="text-6xl text-[#0a66c2] group-hover:text-white transition-colors duration-300">
				❝
			</p>
			<p className="mt-5 text-gray-900 group-hover:text-white transition-colors duration-300">
				{quote}
			</p>
			<p className="mt-5 text-gray-600 group-hover:text-white transition-colors duration-300">
				{name}
			</p>
		</div>
	);
};

export default TestimonialCard;
