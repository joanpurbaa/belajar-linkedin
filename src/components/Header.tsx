const Header = () => {
	return (
		<header className="fixed z-20 w-full px-4 py-3 md:py-5">
			<section className="w-full max-w-4xl mx-auto bg-white flex justify-between items-center shadow-xl py-3 px-4 md:py-5 md:px-10 rounded-full">
				<img
					className="w-10 h-10 md:w-14 md:h-14"
					src="/icon.svg"
					alt="LinkedIn Course Logo"
				/>

				<nav className="hidden md:flex space-x-7">
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

				<div className="md:hidden">
					<a
						target="_blank"
						href="https://www.instagram.com/belajarlinkedin/"
						className="bg-[#0a66c2] hover:bg-blue-900 text-white font-semibold px-3 py-2 text-sm rounded-full transition-colors">
						Tanya
					</a>
				</div>

				<a
					target="_blank"
					href="https://www.instagram.com/belajarlinkedin/"
					className="hidden md:block bg-[#0a66c2] hover:bg-blue-900 text-white font-semibold px-5 py-2 rounded-full transition-colors">
					Tanya
				</a>
			</section>
		</header>
	);
};

export default Header;
