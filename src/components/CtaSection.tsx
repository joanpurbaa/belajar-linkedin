const CtaSection = () => {
	return (
		<section className="px-5 pb-30">
			<div className="w-full flex flex-col items-center gap-7 bg-gradient-to-br from-[#0a66c2] to-blue-500 text-white p-20 rounded-xl">
				<h1 className="text-3xl font-bold text-center">
					LinkedIn Bukan Formalitas, Karier Bisa Naik Level
				</h1>
				<p className="text-lg text-center max-w-3xl">
					Belajar bangun profil profesional, personal branding kuat, dan networking
					efektif untuk buka lebih banyak peluang.
				</p>
				<div className="flex gap-5">
					<a
						target="_blank"
						href="https://www.instagram.com/belajarlinkedin/"
						className="bg-white text-[#0a66c2] text-lg font-semibold px-7 py-2 rounded-full hover:bg-gray-100 transition-colors">
						Daftar sekarang
					</a>
					<a
						href="#testimoni"
						className="border border-white text-white hover:bg-white hover:text-[#0a66c2] text-lg font-semibold px-5 py-2 rounded-full transition-all">
						Cek testimoni
					</a>
				</div>
			</div>
		</section>
	);
};

export default CtaSection;
