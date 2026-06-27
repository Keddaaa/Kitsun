'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';

export default function ObsessionSection() {
	const { t } = useLanguage();
	const titleRef = useInView('anim-fade-up', 0);
	const subtitleRef = useInView('anim-fade-up', 150);
	const gifRef = useInView('anim-slide-left', 100);

	return (
		<section
			id="about"
			className="mob-col flex items-center"
			style={{
				backgroundColor: "#FDF3E6",
				minHeight: "100dvh",
				padding: "60px 40px",
				overflow: "hidden",
			}}
		>
			{/* Left: text */}
			<div className="flex-1 md:pr-16 flex flex-col">
				<h2
					ref={titleRef as React.RefObject<HTMLHeadingElement>}
					className="obsession-title anim-fade-up text-black"
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
					ref={subtitleRef as React.RefObject<HTMLParagraphElement>}
					className="obsession-sub anim-fade-up text-black"
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
				ref={gifRef as React.RefObject<HTMLDivElement>}
				className="footer-skate anim-slide-left flex-shrink-0"
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
