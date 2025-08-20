const AboutCard = ({
	bgClass,
	title,
	description,
}: {
	bgClass: string;
	title: string;
	description: string;
}) => {
	return (
		<div
			className={`${bgClass} col-span-12 md:col-span-4 h-[300px] md:h-[500px] bg-cover bg-center rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out md:hover:rotate-3`}>
			<div className="w-full h-full flex flex-col gap-3 justify-end text-white bg-gradient-to-b from-black/20 to-blue-800/90 rounded-lg p-4 md:p-5">
				<h1 className="text-xl md:text-2xl font-bold">{title}</h1>
				<p className="text-sm md:text-base leading-relaxed">{description}</p>
			</div>
		</div>
	);
};

export default AboutCard;
