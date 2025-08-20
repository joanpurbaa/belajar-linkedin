const BenefitCard = ({ number, text }: { number: number; text: string }) => {
	return (
		<div className="col-span-12 md:col-span-6 flex items-center bg-white text-base md:text-3xl text-[#0a66c2] font-bold border border-gray-100 p-6 md:p-10 hover:scale-105 hover:bg-[#0a66c2] hover:text-white transition-all duration-300 ease-in-out cursor-pointer rounded-lg md:rounded-none">
			{number}. {text}
		</div>
	);
};

export default BenefitCard;
