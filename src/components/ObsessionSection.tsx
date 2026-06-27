'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function ObsessionSection() {
	const { t } = useLanguage();
	return (
		<section
			className="flex items-center"
			style={{
				backgroundColor: "#FDF3E6",
				height: "1080px",
				padding: "0 80px",
				overflow: "hidden",
			}}
		>
			{/* Left: text */}
			<div className="flex-1 pr-16 flex flex-col">
				<h2
					className="text-black"
					style={{
						fontFamily: "LemonMilk, sans-serif",
						fontSize: "100px",
						fontWeight: 800,
						width: "100%",
						lineHeight: "1.4",
						textTransform: "uppercase",
						marginBottom: "80px",
					}}
				>
					{t.obsession.title}
				</h2>
				<p
					className="text-black"
					style={{
						fontFamily: "Excon, sans-serif",
						fontSize: "35px",
						width: "70%",
						fontWeight: 500,
						lineHeight: "1.4",
						textTransform: "uppercase",
					}}
				>
					{t.obsession.subtitle}
				</p>
			</div>

			{/* Right: gif */}
			<div
				className="flex-shrink-0"
				style={{ width: "551px", height: "993px", borderRadius: "32px", overflow: "hidden" }}
			>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src="/mouse.gif"
					alt="Kitsun"
					style={{
						width: "551px",
						height: "993px",
						objectFit: "cover",
					}}
				/>
			</div>
		</section>
	);
}
