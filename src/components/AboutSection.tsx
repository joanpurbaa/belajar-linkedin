import AboutCard from "./AboutCard";

const AboutSection = () => {
	const aboutData = [
		{
			bgClass: "bg1",
			title: "Mengapa LinkedIn Penting?",
			description:
				"LinkedIn bukan sekadar media sosial, melainkan platform profesional yang bisa membuka pintu karier, peluang kerja, hingga relasi bisnis. Sayangnya, banyak orang hanya membuat akun tanpa tahu cara mengoptimalkannya.",
		},
		{
			bgClass: "bg2",
			title: "Apa yang Akan Dipelajari?",
			description:
				"Di kelas LinkedIn ini, kamu akan memahami cara membangun profil menarik untuk HR dan recruiter, menyusun personal branding yang kuat, serta mengoptimalkan setiap detail agar mudah ditemukan. Kamu juga akan belajar strategi networking yang elegan dan profesional.",
		},
		{
			bgClass: "bg3",
			title: "Untuk Siapa Kelas Ini?",
			description:
				"Kelas ini dirancang untuk mahasiswa, fresh graduate, maupun profesional yang ingin naik level kariernya. Saatnya LinkedIn menjadi senjata utama dalam perjalanan suksesmu.",
		},
	];

	return (
		<section
			id="tentang"
			className="flex flex-col items-center bg-gradient-to-br from-[#0a66c2] to-blue-500 px-4 md:px-20 py-20 md:py-40 gap-6 md:gap-10">
			<h1 className="text-2xl md:text-3xl font-bold text-white mb-5 md:mb-10 text-center leading-tight">
				Pondasi lu harus kuasain LinkedIn in this economy?
			</h1>
			<div className="grid grid-cols-12 gap-4 md:gap-10 w-full max-w-6xl">
				{aboutData.map((item, index) => (
					<AboutCard
						key={index}
						bgClass={item.bgClass}
						title={item.title}
						description={item.description}
					/>
				))}
			</div>
		</section>
	);
};

export default AboutSection;
