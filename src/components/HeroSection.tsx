import AnimatedText from "./AnimatedText";

const HeroSection = () => {
	return (
		<section id="beranda" className="py-60 flex flex-col items-center gap-10">
			<h3 className="text-center text-xl font-semibold text-gray-500">
				Mastering <span className="text-[#0a66c2]">LinkedIn</span> for Career Growth
			</h3>
			<h1 className="static z-10 w-[900px] text-center text-5xl font-bold text-zinc-700">
				<AnimatedText text="Kok lu bisa dapat offering sebelum lulus kuliah sih?" />
			</h1>
			<p className="text-xl text-zinc-700 text-center max-w-2xl">
				Lu kepo caranya? ini dia 101 course <b>"jual diri"</b> via Linkedin biar
				karir lu legit!
			</p>
			<div className="flex gap-5">
				<a
					target="_blank"
					href="https://www.instagram.com/belajarlinkedin/"
					className="bg-[#0a66c2] hover:bg-blue-900 text-white text-lg font-semibold px-5 py-2 rounded-full transition-colors">
					Daftar sekarang
				</a>
				<a
					href="#testimoni"
					className="border border-[#0a66c2] hover:bg-[#0a66c2] text-[#0a66c2] hover:text-white text-lg font-semibold px-5 py-2 rounded-full transition-all">
					Cek testimoni
				</a>
			</div>
		</section>
	);
};

export default HeroSection;
