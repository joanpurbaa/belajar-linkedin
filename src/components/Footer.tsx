const Footer = () => {
	return (
		<section className="fixed bottom-0 w-full z-10 overflow-hidden">
			<div className="marquee-container">
				<div className="marquee-content">
					{[...Array(4)].map((_, index) => (
						<img
							key={index}
							src="/marquee1.svg"
							alt="LinkedIn Course Banner"
							className="marquee-image"
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Footer;
