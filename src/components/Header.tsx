const Header = () => {
	return (
		<header className="fixed z-20 w-full grid grid-cols-12 py-5">
			<section className="col-start-4 col-end-10 static z-20 bg-white flex justify-between items-center shadow-xl py-5 px-10 rounded-full">
				<img className="w-14 h-14" src="/icon.svg" alt="LinkedIn Course Logo" />
				<nav className="space-x-7">
					<a href="#beranda" className="hover:text-[#0a66c2] transition-colors">
						Beranda
					</a>
					<a href="#tentang" className="hover:text-[#0a66c2] transition-colors">
						Tentang
					</a>
					<a href="#benefit" className="hover:text-[#0a66c2] transition-colors">
						Benefit
					</a>
					<a href="#testimoni" className="hover:text-[#0a66c2] transition-colors">
						Testimoni
					</a>
				</nav>
				<a
					target="_blank"
					href="https://www.instagram.com/belajarlinkedin/"
					className="bg-[#0a66c2] hover:bg-blue-900 text-white font-semibold px-5 py-2 rounded-full transition-colors">
					Tanya
				</a>
			</section>
		</header>
	);
};

export default Header;
