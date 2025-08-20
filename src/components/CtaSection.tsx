const CtaSection = () => {
	return (
		<section className="px-2 md:px-5 pb-20 md:pb-30">
			<div className="w-full mx-auto flex flex-col items-center gap-5 md:gap-7 bg-gradient-to-br from-[#0a66c2] to-blue-500 text-white p-5 md:p-20 rounded-xl">
				<h1 className="text-lg md:text-3xl font-bold text-center leading-tight">
					LinkedIn Bukan Formalitas, Karier Bisa Naik Level
				</h1>
				<p className="text-base md:text-lg text-center max-w-3xl leading-relaxed">
					Belajar bangun profil profesional, personal branding kuat, dan networking
					efektif untuk buka lebih banyak peluang.
				</p>
				<div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-5 w-full max-w-md sm:max-w-none">
					<a
						target="_blank"
						href="https://www.instagram.com/belajarlinkedin/"
						className="bg-white text-[#0a66c2] text-base sm:text-lg font-semibold px-6 md:px-7 py-3 rounded-full hover:bg-gray-100 transition-colors text-center">
						Daftar sekarang
					</a>
					<a
						href="#testimoni"
						className="border border-white text-white hover:bg-white hover:text-[#0a66c2] text-base sm:text-lg font-semibold px-5 py-3 rounded-full transition-all text-center">
						Cek testimoni
					</a>
				</div>
			</div>
		</section>
	);
};

export default CtaSection;
