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
			className={`${bgClass} col-span-4 h-[500px] bg-cover bg-center rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:rotate-3`}>
			<div className="w-full h-full flex flex-col gap-3 justify-end text-white bg-gradient-to-b from-black/20 to-blue-800/90 rounded-lg p-5">
				<h1 className="text-2xl font-bold">{title}</h1>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default AboutCard;
