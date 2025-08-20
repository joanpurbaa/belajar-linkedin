import BenefitCard from "./BenefitCard";

const BenefitSection = () => {
	const benefits = [
		{ number: 1, text: "Profil terlihat profesional 😎" },
		{ number: 2, text: "Menarik perhatian HR 👁️" },
		{ number: 3, text: "Personal branding kuat 🧍‍♂️" },
		{ number: 4, text: "Peluang karier terbuka luas 🌐" },
	];

	return (
		<section
			id="benefit"
			className="flex flex-col items-center py-20 md:py-40 gap-10 md:gap-20 overflow-hidden px-4">
			<h1 className="text-3xl md:text-4xl font-bold text-zinc-700 text-center leading-tight">
				4 alasan kelas ini berguna buat{" "}
				<span className="text-[#0a66c2]">karir</span> lu!
			</h1>
			<div className="w-full grid grid-cols-12 gap-4 md:gap-0 md:overflow-hidden">
				{benefits.map((benefit) => (
					<BenefitCard
						key={benefit.number}
						number={benefit.number}
						text={benefit.text}
					/>
				))}
			</div>
		</section>
	);
};

export default BenefitSection;
