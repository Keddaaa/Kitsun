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
			className="flex flex-col lg:flex-row items-center"
			style={{
				backgroundColor: "#FDF3E6",
				minHeight: "100dvh",
				padding: "clamp(40px, 6vw, 60px) var(--gutter-sm)",
				gap: "clamp(32px, 5vw, 64px)",
				overflow: "hidden",
			}}
		>
			{/* Left: text */}
			<div className="flex-1 min-w-0 flex flex-col">
				<h2
					ref={titleRef as React.RefObject<HTMLHeadingElement>}
					className="obsession-title anim-fade-up text-black"
					style={{
						fontFamily: "LemonMilk, sans-serif",
						fontSize: "var(--fs-100)",
						fontWeight: 800,
						width: "100%",
						lineHeight: "1.2",
						textTransform: "uppercase",
						marginBottom: "clamp(24px, 5.5vw, 80px)",
						overflowWrap: "anywhere",
					}}
				>
					{t.obsession.title}
				</h2>
				<p
					ref={subtitleRef as React.RefObject<HTMLParagraphElement>}
					className="obsession-sub anim-fade-up text-black"
					style={{
						fontFamily: "Excon, sans-serif",
						fontSize: "var(--fs-35)",
						width: "min(100%, 70ch)",
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
				className="anim-slide-left flex-shrink-0"
				style={{ width: "clamp(260px, 38vw, 551px)", aspectRatio: "551 / 993", maxHeight: "90dvh", borderRadius: "32px", overflow: "hidden" }}
			>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src="/mouse.gif"
					alt="Kitsun"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}
				/>
			</div>
		</section>
	);
}
