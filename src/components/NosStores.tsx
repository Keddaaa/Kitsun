"use client";

import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const stores = [
	{
		id: 1,
		district: "Paris 11e",
		address: "23 rue de la Roquette, 75011",
		open: true,
		image: "/store.webp",
	},
	{
		id: 2,
		district: "Paris 18e",
		address: "14 rue Lepic, 75018",
		open: true,
		image: "/store.webp",
	},
	{
		id: 3,
		district: "Paris 6e",
		address: "5 rue de Buci, 75006",
		open: false,
		image: "/store.webp",
	},
	{
		id: 4,
		district: "Paris 4e",
		address: "12 rue de Rivoli, 75004",
		open: true,
		image: "/store.webp",
	},
	{
		id: 5,
		district: "Paris 9e",
		address: "8 rue des Martyrs, 75009",
		open: true,
		image: "/store.webp",
	},
	{
		id: 6,
		district: "Paris 15e",
		address: "3 rue du Commerce, 75015",
		open: false,
		image: "/store.webp",
	},
];

function StoreCard({
	district,
	address,
	open,
	image,
	openLabel,
	closedLabel,
}: {
	district: string;
	address: string;
	open: boolean;
	image: string;
	openLabel: string;
	closedLabel: string;
}) {
	return (
		<div className="flex-shrink-0" style={{ width: "457px" }}>
			<div
				className="relative overflow-hidden"
				style={{ width: "457px", height: "447px", borderRadius: "0px" }}
			>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={image}
					alt={district}
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}
				/>
			</div>
			<div className="flex items-start justify-between mt-3">
				<div>
					<p
						className="text-black"
						style={{
							fontFamily: "Excon, sans-serif",
							fontSize: "25px",
							fontWeight: 500,
							lineHeight: "1.2",
						}}
					>
						{district}
					</p>
					<p
						className="text-black"
						style={{
							fontFamily: "Excon, sans-serif",
							fontSize: "25px",
							fontWeight: 400,
							lineHeight: "1.4",
							marginTop: "2px",
						}}
					>
						{address}
					</p>
					<div className="flex items-center gap-1.5 mt-2">
						<span
							style={{
								width: "8px",
								height: "8px",
								borderRadius: "50%",
								backgroundColor: open ? "#4CAF50" : "#999",
								display: "inline-block",
							}}
						/>
						<span
							className="text-black"
							style={{
								fontFamily: "Excon, sans-serif",
								fontSize: "25px",
								fontWeight: 400,
							}}
						>
							{open ? openLabel : closedLabel}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function NosStores() {
	const scrollRef = useRef<HTMLDivElement>(null);
	const { t } = useLanguage();

	const scroll = () => {
		scrollRef.current?.scrollBy({ left: 480, behavior: "smooth" });
	};

	return (
		<section style={{ backgroundColor: "#FDF3E6", padding: "80px 80px" }}>
			<div className="flex items-end justify-between" style={{ marginBottom: "40px" }}>
				<div>
					<h2
						className="text-black"
						style={{
							fontFamily: "LemonMilk, sans-serif",
							fontSize: "40px",
							fontWeight: 700,
							lineHeight: "1",
							marginBottom: "6px",
						}}
					>
						{t.stores.title}
					</h2>
					<p
						className="text-black"
						style={{
							fontFamily: "Excon, sans-serif",
							fontSize: "30px",
							fontWeight: 400,
						}}
					>
						{t.stores.subtitle}
					</p>
				</div>
				<button
					onClick={scroll}
					aria-label="Scroll vers la droite"
					style={{
						backgroundColor: "#000",
						color: "#fff",
						width: "52px",
						height: "52px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						border: "none",
						cursor: "pointer",
						flexShrink: 0,
					}}
				>
					<ChevronRight size={28} strokeWidth={2} />
				</button>
			</div>

			<div
				ref={scrollRef}
				className="flex gap-6 overflow-x-auto"
				style={{
					scrollbarWidth: "none",
					msOverflowStyle: "none",
					paddingBottom: "8px",
				}}
			>
				{stores.map((store) => (
					<StoreCard key={store.id} {...store} openLabel={t.stores.open} closedLabel={t.stores.closed} />
				))}
			</div>
		</section>
	);
}
