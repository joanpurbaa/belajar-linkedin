import AnimatedText from "./AnimatedText";

const HeroSection = () => {
	return (
		<section
			id="beranda"
			className="pt-32 pb-20 md:py-60 flex flex-col items-center gap-6 md:gap-10 px-4">
			<h3 className="text-center text-base md:text-xl font-semibold text-gray-500">
				Mastering <span className="text-[#0a66c2]">LinkedIn</span> for Career Growth
			</h3>
			<h1 className="static z-10 w-full max-w-4xl text-center text-3xl md:text-5xl font-bold text-zinc-700 leading-tight">
				<AnimatedText text="Kok lu bisa dapat offering sebelum lulus kuliah sih?" />
			</h1>
			<p className="text-base md:text-xl text-zinc-700 text-center max-w-2xl px-4">
				Lu kepo caranya? ini dia 101 course <b>"jual diri"</b> via Linkedin biar
				karir lu legit!
			</p>
			<div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-5 w-full max-w-md sm:max-w-none">
				<a
					target="_blank"
					href="https://www.instagram.com/belajarlinkedin/"
					className="bg-[#0a66c2] hover:bg-blue-900 text-white text-base sm:text-lg font-semibold px-6 py-3 rounded-full transition-colors text-center">
					Daftar sekarang
				</a>
				<a
					href="#testimoni"
					className="border border-[#0a66c2] hover:bg-[#0a66c2] text-[#0a66c2] hover:text-white text-base sm:text-lg font-semibold px-6 py-3 rounded-full transition-all text-center">
					Cek testimoni
				</a>
			</div>
		</section>
	);
};

export default HeroSection;
