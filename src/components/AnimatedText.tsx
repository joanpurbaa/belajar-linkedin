import { motion } from "motion/react";

export default function AnimatedText({ text }: { text: string }) {
	const quotedText = `"${text}"`;

	const parts = quotedText.split(/(\s+)/);

	return (
		<>
			{parts.map((part: string, index: number) => {
				const isSpace = /^\s+$/.test(part);
				return (
					<motion.span
						key={index}
						initial={isSpace ? {} : { filter: "blur(8px)", opacity: 0 }}
						animate={isSpace ? {} : { filter: "blur(0px)", opacity: 1 }}
						transition={isSpace ? {} : { duration: 0.6, delay: index * 0.05 }}
						className={isSpace ? "whitespace-pre" : "inline-block"}>
						{part}
					</motion.span>
				);
			})}
		</>
	);
}
