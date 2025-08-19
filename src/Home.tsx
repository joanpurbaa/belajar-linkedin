import AnimatedText from "./components/AnimatedText";

export default function Home() {
	return (
		<>
			<header className="fixed z-20 w-full grid grid-cols-12 py-5">
				<section className="col-start-4 col-end-10 static z-20 bg-white flex justify-between items-center shadow-xl py-5 px-10 rounded-full">
					<img className="w-14 h-14" src="/icon.svg" alt="" />
					<nav className="space-x-7">
						<a href="#beranda">Beranda</a>
						<a href="#tentang">Tentang</a>
						<a href="#benefit">Benefit</a>
						<a href="#testimoni">Testimoni</a>
					</nav>
					<a
						target="_blank"
						href="https://www.instagram.com/belajarlinkedin/"
						className="bg-[#0a66c2] hover:bg-blue-900 text-white font-semibold px-5 py-2 rounded-full">
						Tanya
					</a>
				</section>
			</header>
			<section id="beranda" className="py-60 flex flex-col items-center gap-10">
				<h3 className="text-center text-xl font-semibold text-gray-500">
					Mastering <span className="text-[#0a66c2]">LinkedIn</span> for Career
					Growth
				</h3>
				<h1 className="static z-10 w-[900px] text-center text-5xl font-bold text-zinc-700">
					<AnimatedText text="Kok lu bisa dapat offering sebelum lulus kuliah sih?" />
				</h1>
				<p className="text-xl text-zinc-700">
					Lu kepo caranya? ini dia 101 course <b>"jual diri"</b> via Linkedin biar
					karir lu legit!
				</p>
				<div className="flex gap-5">
					<a
						target="_blank"
						href="https://www.instagram.com/belajarlinkedin/"
						className="bg-[#0a66c2] hover:bg-blue-900 text-white text-lg font-semibold px-5 py-2 rounded-full">
						Daftar sekarang
					</a>
					<a
						href="#testimoni"
						className="border border-[#0a66c2] hover:bg-[#0a66c2] text-[#0a66c2] hover:text-white text-lg font-semibold px-5 py-2 rounded-full">
						Cek testimoni
					</a>
				</div>
			</section>
			<section className="flex flex-col items-center bg-gradient-to-br from-[#0a66c2] to-blue-500 px-20 py-40 gap-10">
				<h1 className="text-3xl font-bold text-white mb-10">
					Pondasi kenapa lu harus kuasain LinkedIn in this economy?
				</h1>
				<div className="grid grid-cols-12 gap-10 w-full max-w-6xl">
					<div
						className="bg1 col-span-4 h-[500px] bg-cover bg-center rounded-lg 
             hover:scale-105 transition-transform duration-300 ease-in-out hover:rotate-3">
						<div className="w-full h-full flex flex-col gap-3 justify-end text-white bg-gradient-to-b from-black/20 to-blue-800/90 rounded-lg p-5">
							<h1 className="text-2xl font-bold">Mengapa LinkedIn Penting?</h1>
							<p>
								LinkedIn bukan sekadar media sosial, melainkan platform profesional yang
								bisa membuka pintu karier, peluang kerja, hingga relasi bisnis.
								Sayangnya, banyak orang hanya membuat akun tanpa tahu cara
								mengoptimalkannya.
							</p>
						</div>
					</div>
					<div
						id="tentang"
						className="bg2 col-span-4 h-[500px] bg-cover bg-center rounded-lg 
             hover:scale-105 transition-transform duration-300 ease-in-out hover:rotate-3">
						<div className="w-full h-full flex flex-col gap-3 justify-end text-white bg-gradient-to-b from-black/20 to-blue-800/90 rounded-lg p-5">
							<h1 className="text-2xl font-bold">Apa yang Akan Dipelajari?</h1>
							<p>
								Di kelas LinkedIn ini, kamu akan memahami cara membangun profil menarik
								untuk HR dan recruiter, menyusun personal branding yang kuat, serta
								mengoptimalkan setiap detail agar mudah ditemukan. Kamu juga akan
								belajar strategi networking yang elegan dan profesional.
							</p>
						</div>
					</div>
					<div
						className="bg3 col-span-4 h-[500px] bg-cover bg-center rounded-lg 
             hover:scale-105 transition-transform duration-300 ease-in-out hover:rotate-3">
						<div className="w-full h-full flex flex-col gap-3 justify-end text-white bg-gradient-to-b from-black/20 to-blue-800/90 rounded-lg p-5">
							<h1 className="text-2xl font-bold">Untuk Siapa Kelas Ini?</h1>
							<p>
								Kelas ini dirancang untuk mahasiswa, fresh graduate, maupun profesional
								yang ingin naik level kariernya. Saatnya LinkedIn menjadi senjata utama
								dalam perjalanan suksesmu.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="flex flex-col items-center py-32 gap-20 overflow-hidden">
				<h1 className="text-4xl font-bold text-zinc-700">
					4 alasan kelas ini berguna buat{" "}
					<span className="text-[#0a66c2]">karir</span> lu!
				</h1>
				<div className="w-full grid grid-cols-12 overflow-hidden">
					<div className="col-span-6 flex items-center bg-white text-3xl text-[#0a66c2] font-bold border-1 border-gray-100 p-10 hover:scale-105">
						1. Profil terlihat profesional
					</div>
					<div className="col-span-6 flex items-center bg-white text-3xl text-[#0a66c2] font-bold border-1 border-gray-100 p-10 hover:scale-105">
						2. Menarik perhatian HR
					</div>
					<div className="col-span-6 flex items-center bg-white text-3xl text-[#0a66c2] font-bold border-1 border-gray-100 p-10 hover:scale-105">
						3. Personal branding kuat
					</div>
					<div className="col-span-6 flex items-center bg-white text-3xl text-[#0a66c2] font-bold border-1 border-gray-100 p-10 hover:scale-105">
						4. Peluang karier terbuka luas
					</div>
				</div>
			</section>
			<section className="fixed bottom-0 w-full">
				<div className="w-full h-full animate-marquee-right flex items-center">
					<img
						src="/marquee1.svg"
						alt=""
						className="w-full object-contain flex-shrink-0"
					/>
					<img
						src="/marquee1.svg"
						alt=""
						className="w-full object-contain flex-shrink-0"
					/>
					<img
						src="/marquee1.svg"
						alt=""
						className="w-full object-contain flex-shrink-0"
					/>
					<img
						src="/marquee1.svg"
						alt=""
						className="w-full object-contain flex-shrink-0"
					/>
				</div>

				<style>{`
					@keyframes marquee-right {
						0% {
							transform: translateX(-50%);
						}
						100% {
							transform: translateX(0%);
						}
					}

					.animate-marquee-right {
						animation: marquee-right 15s linear infinite;
					}

					/* Hover to pause */
					section:hover .animate-marquee-right,
					section:hover .animate-marquee-left {
						animation-play-state: paused;
					}

					.bg1 {
						background-image: url("/bg1.jpg");
					}

					.bg2 {
						background-image: url("/bg2.jpg");
					}

					.bg3 {
						background-image: url("/bg3.jpg");
					}
				`}</style>
			</section>
		</>
	);
}
