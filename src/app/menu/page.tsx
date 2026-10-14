"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import Breadcrumb from "@/components/Breadcrumb";

const categories = [
	{ label: "Bubble tea", width: 228, soon: false },
	{ label: "Crêpes", width: 176, soon: true },
	{ label: "Cookies", width: 197, soon: true },
	{ label: "Mochi", width: 228, soon: true },
];

function ProductCard({
	id,
	name,
	price,
	video,
	bg,
}: (typeof products)[0]) {
	const ref = useRef<HTMLVideoElement>(null);

	return (
		<Link href={`/produit/${id}`} style={{ textDecoration: 'none' }}>
			<div
				className="relative overflow-hidden"
				style={{
					width: "100%",
					aspectRatio: "410 / 510.22",
					backgroundColor: bg,
				}}
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
				className="flex items-center justify-between mt-1 gap-3"
				style={{ width: "100%" }}
			>
				<span
					style={{
						fontFamily: "Excon, sans-serif",
						fontSize: "var(--fs-25)",
						color: "#000",
						fontWeight: 400,
					}}
				>
					{name}
				</span>
				<span
					style={{
						fontFamily: "Excon, sans-serif",
						fontSize: "var(--fs-25)",
						color: "#000",
						fontWeight: 400,
					}}
				>
					{price}
				</span>
			</div>
		</Link>
	);
}

export default function MenuPage() {
	const [activeCategory, setActiveCategory] = useState("Bubble tea");

	const filtered = products.filter((p) => p.category === activeCategory);

	return (
		<div style={{ backgroundColor: "#FDF3E6" }}>
			<Header light />

			<div
				style={{
					paddingTop: "clamp(88px, 9vw, 120px)",
					paddingLeft: "var(--gutter-sm)",
					paddingRight: "var(--gutter-sm)",
					paddingBottom: "80px",
					maxWidth: "1920px",
					marginInline: "auto",
				}}
			>
				<Breadcrumb crumbs={[{ label: 'Accueil', href: '/' }, { label: 'Carte' }]} />
				{/* Title area */}
				<p
					style={{
						fontFamily: "Excon, sans-serif",
						fontSize: "var(--fs-25)",
						color: "#000",
						fontWeight: 500,
						marginBottom: "4px",
					}}
				>
					La carte Kitsun
				</p>
				<div
					className="flex items-center gap-4"
					style={{ marginBottom: "32px" }}
				>
					<h1
						className="menu-title"
						style={{
							fontFamily: "LemonMilk, sans-serif",
							fontSize: "var(--fs-110)",
							fontWeight: 800,
							color: "#000",
							lineHeight: "0.9",
						}}
					>
						NOS PRODUITS
					</h1>
					<div
						className="flex items-center justify-center"
						style={{
							width: "68px",
							height: "68px",
							borderRadius: "50%",
							border: "1.5px solid #000",
							flexShrink: 0,
						}}
					>
						<span
							style={{
								fontFamily: "Excon, sans-serif",
								fontSize: "var(--fs-37)",
								color: "#000",
								fontWeight: 500,
							}}
						>
							{products.length}
						</span>
					</div>
				</div>

				{/* Filter tabs */}
				<div
					className="menu-cats flex items-center overflow-x-auto"
					style={{
						gap: "clamp(24px, 4.5vw, 65px)",
						marginBottom: "40px",
						marginTop: "27px",
						paddingTop: "28px",
						scrollbarWidth: "none",
					}}
				>
					{categories.map(({ label, width, soon }) => (
						<div
							key={label}
							style={{
								position: "relative",
								display: "inline-block",
							}}
						>
							<button
								onClick={() => !soon && setActiveCategory(label)}
								disabled={soon}
								title={soon ? `${label} — bientôt disponible` : undefined}
								style={{
									fontFamily: "Excon, sans-serif",
									fontSize: "var(--fs-30)",
									fontWeight: 500,
									color:
										activeCategory === label
											? "#fff"
											: "#000",
									backgroundColor:
										activeCategory === label
											? "#000"
											: "transparent",
									border: "2.4px solid #000",
									borderRadius: "999px",
									width: `clamp(${Math.round(width*0.55)}px, ${(width/14.4).toFixed(1)}vw, ${width}px)`,
									height: "clamp(44px, 4.4vw, 63px)",
									cursor: soon ? "not-allowed" : "pointer",
									transition: "all 0.2s",
								}}
							>
								{label}
							</button>
							{soon && (
								<span
									style={{
										position: "absolute",
										top: "-10px",
										right: "-35px",
										width: "107px",
										height: "37px",
										backgroundColor: "#FFA5ED",
										borderRadius: "999px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										transform: "rotate(32.61deg)",
										fontFamily: "Excon, sans-serif",
										fontSize: "var(--fs-20)",
										fontWeight: 500,
										color: "#000",
										pointerEvents: "none",
									}}
								>
									Bientôt
								</span>
							)}
						</div>
					))}
				</div>

				{/* Product grid */}
				<div
					className="grid items-start grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
					style={{
						columnGap: "clamp(16px, 4.7vw, 68px)",
						rowGap: "clamp(24px, 3.3vw, 48px)",
					}}
				>
					{filtered.map((product) => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}
