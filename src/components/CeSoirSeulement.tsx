"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Dot } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "@/hooks/useInView";

const products = [
	{ id: 1, name: "Berry Boost", price: "4,90€", video: "/videos/Berry Boost.mp4" },
	{ id: 2, name: "Banana Nut", price: "5,50€", video: "/videos/Banana Nut.mp4" },
	{ id: 3, name: "Green Glow", price: "4,50€", video: "/videos/Green Glow.mp4" },
	{ id: 5, name: "Blueberry Fuel", price: "5,90€", video: "/videos/Blueberry Fuel.mp4" },
];

const TICKER_TEXT = "LOREM IPSUM DO";
const TICKER_REPEAT = 12;

function TickerContent() {
	return (
		<>
			{Array(TICKER_REPEAT)
				.fill(null)
				.map((_, i) => (
					<span
						key={i}
						className="inline-flex items-center"
						style={{ marginRight: "24px" }}
					>
						<span
							style={{
								fontFamily: "LemonMilk, sans-serif",
								fontSize: "20px",
								color: "#000",
								textTransform: "uppercase",
								marginRight: "24px",
							}}
						>
							{TICKER_TEXT}
						</span>
						<Dot size={40} className="text-black" />
					</span>
				))}
		</>
	);
}

function ProductCard({
	id,
	name,
	price,
	video,
}: {
	id: number;
	name: string;
	price: string;
	video: string;
}) {
	const ref = useRef<HTMLVideoElement>(null);

	return (
		<Link href={`/produit/${id}`} style={{ textDecoration: "none" }}>
			<div className="flex flex-col">
				<div
					className="ce-soir-card relative overflow-hidden"
					style={{ width: "408px", height: "507.73px" }}
					onMouseEnter={() => ref.current?.play()}
					onMouseLeave={() => {
						if (ref.current) {
							ref.current.pause();
							ref.current.currentTime = 0;
						}
					}}
				>
					<video
						ref={ref}
						src={video}
						loop
						muted
						playsInline
						className="absolute inset-0 w-full h-full object-cover"
					/>
				</div>
				<div
					className="ce-soir-card flex items-center justify-between mt-3"
					style={{ width: "408px" }}
				>
					<span
						className="text-black"
						style={{
							fontFamily: "Excon, sans-serif",
							fontSize: "25px",
							fontWeight: 400,
						}}
					>
						{name}
					</span>
					<span
						className="text-black"
						style={{
							fontFamily: "Excon, sans-serif",
							fontSize: "25px",
							fontWeight: 400,
						}}
					>
						{price}
					</span>
				</div>
			</div>
		</Link>
	);
}

export default function CeSoirSeulement() {
	const { t } = useLanguage();
	const titleRef = useInView('anim-fade-up', 0);
	const subtitleRef = useInView('anim-fade-up', 100);
	const card0 = useInView('anim-fade-up', 0);
	const card1 = useInView('anim-fade-up', 100);
	const card2 = useInView('anim-fade-up', 200);
	const card3 = useInView('anim-fade-up', 300);
	const cardRefs = [card0, card1, card2, card3];
	const voirPlusRef = useInView('anim-fade-in', 200);

	return (
		<section style={{ backgroundColor: "#FDF3E6" }}>
			{/* Ticker */}
			<div
				className="overflow-hidden bg-[#d6e8b0] flex items-center"
				style={{ height: "56px" }}
			>
				<div
					className="flex whitespace-nowrap"
					style={{ animation: "marquee 18s linear infinite" }}
				>
					<TickerContent />
					<TickerContent />
				</div>
			</div>

			{/* Content */}
			<div className="mob-px px-8 pt-16 md:pt-28 pb-16">
				<h2
					ref={titleRef as React.RefObject<HTMLHeadingElement>}
					className="anim-fade-up text-black mb-1"
					style={{
						fontFamily: "LemonMilk, sans-serif",
						fontSize: "55px",
						fontWeight: 700,
						lineHeight: "55px",
					}}
				>
					{t.ceSoir.title}
				</h2>
				<p
					ref={subtitleRef as React.RefObject<HTMLParagraphElement>}
					className="anim-fade-up text-black mb-16"
					style={{
						fontFamily: "Excon, sans-serif",
						fontSize: "30px",
						fontWeight: 500,
					}}
				>
					{t.ceSoir.subtitle}
				</p>

				{/* Cards */}
				<div className="ce-soir-grid grid grid-cols-1 md:grid-cols-4 gap-4">
					{products.map((p, i) => (
						<div
							key={p.name}
							ref={cardRefs[i] as React.RefObject<HTMLDivElement>}
							className="anim-fade-up"
						>
							<ProductCard {...p} />
						</div>
					))}
				</div>

				{/* Voir plus */}
				<div
					ref={voirPlusRef as React.RefObject<HTMLDivElement>}
					className="anim-fade-in mt-14 text-center"
				>
					<Link
						href="/menu"
						className="text-black underline underline-offset-4 hover:opacity-60 transition-opacity"
						style={{
							fontFamily: "Excon, sans-serif",
							fontSize: "22px",
							fontWeight: 400,
						}}
					>
						{t.ceSoir.voirPlus}
					</Link>
				</div>
			</div>
		</section>
	);
}
