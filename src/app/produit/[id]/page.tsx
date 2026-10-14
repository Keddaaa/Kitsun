"use client";

import { useState, useRef } from "react";
import { useParams } from "next/navigation";
import { Dot } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { formatPrice, parsePrice, useCart } from "@/contexts/CartContext";
import Breadcrumb from "@/components/Breadcrumb";
import { useLanguage } from "@/contexts/LanguageContext";

const TICKER_REPEAT = 12;

function TickerContent() {
	const { t } = useLanguage();
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
								fontSize: "var(--fs-20)",
								color: "#000",
								textTransform: "uppercase",
								marginRight: "24px",
							}}
						>
							{t.tickers.produit}
						</span>
						<Dot size={7} className="text-black" />
					</span>
				))}
		</>
	);
}

function VideoThumb({
	src,
	active,
	onClick,
}: {
	src: string;
	active: boolean;
	onClick: () => void;
}) {
	const ref = useRef<HTMLVideoElement>(null);
	return (
		<div
			onClick={onClick}
			style={{
				width: "80px",
				height: "80px",
				overflow: "hidden",
				cursor: "pointer",
				border: active ? "2px solid #000" : "2px solid transparent",
				flexShrink: 0,
			}}
		>
			<video
				ref={ref}
				src={src}
				muted
				playsInline
				style={{ width: "100%", height: "100%", objectFit: "cover" }}
			/>
		</div>
	);
}

const SIZES = [
	{ label: "S (400ml)", multiplier: 1, soon: false },
	{ label: "M (500ml)", multiplier: 1.2, soon: false },
	{ label: "L (700ml)", multiplier: 1.45, soon: true },
	{ label: "XL (900ml)", multiplier: 1.75, soon: false },
];

export default function ProduitPage() {
	const { id } = useParams<{ id: string }>();
	const product = products.find((p) => p.id === Number(id)) ?? products[0];

	const { add, openCart } = useCart();
	const [selectedSize, setSelectedSize] = useState("M (500ml)");
	const [qty, setQty] = useState(1);
	const [activeThumb, setActiveThumb] = useState(0);

	const basePrice = parsePrice(product.price);
	const sizeMultiplier = SIZES.find((s) => s.label === selectedSize)?.multiplier ?? 1;
	const unitPrice = basePrice * sizeMultiplier;
	const totalPrice = formatPrice(unitPrice * qty);

	return (
		<div style={{ backgroundColor: "#FDF3E6", minHeight: "100vh" }}>
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

			<Header light staticPos />

			{/* Product layout */}
			<div
				className="flex flex-col lg:flex-row gap-8"
				style={{
					paddingTop: "clamp(24px, 3vw, 40px)",
					paddingLeft: "var(--gutter-sm)",
					paddingRight: "var(--gutter-sm)",
					paddingBottom: "80px",
					maxWidth: "1920px",
					marginInline: "auto",
				}}
			>
				{/* Thumbnails */}
				<div
					className="hidden lg:flex flex-col gap-3"
					style={{ paddingTop: "8px" }}
				>
					{[product.video, product.video, product.video].map(
						(src, i) => (
							<VideoThumb
								key={i}
								src={src}
								active={activeThumb === i}
								onClick={() => setActiveThumb(i)}
							/>
						),
					)}
				</div>

				{/* Main video */}
				<div
					className="w-full max-w-[635px] mx-auto lg:mx-0 lg:w-[clamp(340px,44vw,635px)]"
					style={{
						aspectRatio: "635 / 791",
						flexShrink: 0,
						overflow: "hidden",
					}}
				>
					<video
						src={product.video}
						autoPlay
						loop
						muted
						playsInline
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
						}}
					/>
				</div>

				{/* Details */}
				<div
					className="flex flex-col lg:pl-10 min-w-0"
					style={{ flex: 1 }}
				>
					<Breadcrumb crumbs={[{ label: 'Accueil', href: '/' }, { label: 'Carte', href: '/menu' }, { label: product.name }]} />
					<h1
						
						style={{
							fontFamily: "Excon, sans-serif",
							fontSize: "var(--fs-60)",
							fontWeight: 800,
							color: "#000",
							lineHeight: "1",
							marginBottom: "4px",
						}}
					>
						{product.name}
					</h1>
					<p
						style={{
							fontFamily: "Excon, sans-serif",
							fontSize: "var(--fs-30)",
							fontWeight: 500,
							color: "#000",

							marginBottom: "16px",
						}}
					>
						{product.type}
					</p>
					<p
						style={{
							fontFamily: "Excon, sans-serif",
							fontSize: "var(--fs-30)",
							fontWeight: 400,
							color: "#000",
							lineHeight: "1.5",
							marginBottom: "32px",
							width: "90%",
						}}
					>
						{product.description}
					</p>

					{/* Taille */}
					<p
						style={{
							fontFamily: "Excon, sans-serif",
							fontSize: "var(--fs-30)",
							fontWeight: 500,
							color: "#000",
							marginBottom: "12px",
						}}
					>
						TAILLE
					</p>
					<div
						className="flex flex-col gap-3"
						style={{ marginBottom: "32px" }}
					>
						<div className="flex gap-3">
							{SIZES.slice(0, 3).map(({ label, soon }) => (
								<div key={label} style={{ position: "relative", display: "inline-block" }}>
									<button
										onClick={() => !soon && setSelectedSize(label)}
										style={{
											fontFamily: "Excon, sans-serif",
											fontWeight: 400,
											color: soon ? "#aaa" : selectedSize === label ? "#fff" : "#000",
											backgroundColor: soon ? "transparent" : selectedSize === label ? "#000" : "transparent",
											border: "2px solid #000",
											borderRadius: "999px",
											width: "clamp(80px, 25vw, 210px)",
											height: "clamp(44px, 4.4vw, 63px)",
											fontSize: "var(--fs-20)",
											cursor: soon ? "not-allowed" : "pointer",
											transition: "all 0.15s ease",
											transform: selectedSize === label ? "scale(1.04)" : "scale(1)",
											opacity: soon ? 0.5 : 1,
										}}
									>
										{label}
									</button>
									{soon && (
										<span style={{
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
										}}>
											Épuisé
										</span>
									)}
								</div>
							))}
						</div>
						<div className="flex gap-3">
							{SIZES.slice(3).map(({ label, soon }) => (
								<div key={label} style={{ position: "relative", display: "inline-block" }}>
								<button
									onClick={() => !soon && setSelectedSize(label)}
									style={{
										fontFamily: "Excon, sans-serif",
										fontWeight: 400,
										color: soon ? "#aaa" : selectedSize === label ? "#fff" : "#000",
										backgroundColor: soon ? "transparent" : selectedSize === label ? "#000" : "transparent",
										border: "2px solid #000",
										borderRadius: "999px",
										width: "clamp(110px, 36vw, 210px)",
										height: "clamp(44px, 4vw, 50px)",
										cursor: soon ? "not-allowed" : "pointer",
										transition: "all 0.15s ease",
										transform: selectedSize === label ? "scale(1.04)" : "scale(1)",
										opacity: soon ? 0.5 : 1,
										fontSize: "var(--fs-20)",
									}}
								>
									{label}
								</button>
								{soon && (
									<span style={{
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
									}}>
										Épuisé
									</span>
								)}
								</div>
							))}
						</div>
					</div>


					{/* Inclus */}
					<p
						style={{
							fontFamily: "Excon, sans-serif",
							fontSize: "var(--fs-30)",
							fontWeight: 500,
							color: "#000",
							marginBottom: "8px",
						}}
					>
						INCLUS
					</p>
					<ul
						className="flex flex-col gap-1"
						style={{ marginBottom: "40px" }}
					>
						{product.inclus.map((item) => (
							<li
								key={item}
								style={{
									fontFamily: "Excon, sans-serif",
									fontSize: "var(--fs-30)",
									fontWeight: 400,
									color: "#000",
								}}
							>
								{item}
							</li>
						))}
					</ul>

					{/* Price + cart */}
					<div className="flex flex-col items-start sm:flex-row sm:items-center" style={{ gap: "clamp(16px, 3.3vw, 48px)" }}>
						<span
							
							style={{
								fontFamily: "Excon, sans-serif",
								fontSize: "var(--fs-60)",
								fontWeight: 500,
								color: "#000",
							}}
						>
							{totalPrice}
						</span>
						<div className="flex flex-wrap items-center gap-4">

						{/* Qty */}
						<div
							className="flex items-center"
							style={{
								border: "1.5px solid #000",
								borderRadius: "0",
								overflow: "hidden",
								width: "min(274px, 100%)",
								height: "clamp(52px, 4.6vw, 66px)",
							}}
						>
							<button
								onClick={() => setQty((q) => Math.max(1, q - 1))}
								className="hover:bg-black hover:text-white transition-colors"
								style={{
									width: "clamp(52px, 4.6vw, 66px)",
									height: "clamp(52px, 4.6vw, 66px)",
									fontFamily: "Excon, sans-serif",
									fontSize: "24px",
									background: "transparent",
									border: "none",
									cursor: "pointer",
									color: "#000",
								}}
							>
								-
							</button>
							<span
								style={{
									fontFamily: "Excon, sans-serif",
									fontSize: "var(--fs-20)",
									color: "#000",
									flex: 1,
									textAlign: "center",
									height: "100%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								{qty}
							</span>
							<button
								onClick={() => setQty((q) => q + 1)}
								className="hover:bg-black hover:text-white transition-colors"
								style={{
									width: "clamp(52px, 4.6vw, 66px)",
									height: "clamp(52px, 4.6vw, 66px)",
									fontFamily: "Excon, sans-serif",
									fontSize: "24px",
									background: "transparent",
									border: "none",
									cursor: "pointer",
									color: "#000",
								}}
							>
								+
							</button>
						</div>

						{/* Add to cart */}
						<button
							onClick={() => { add({ id: product.id, name: product.name, price: formatPrice(unitPrice), size: selectedSize, qty, video: product.video }); openCart(); }}
							className="hover:bg-white hover:text-black transition-colors"
							style={{
								fontFamily: "Excon, sans-serif",
								fontSize: "var(--fs-20)",
								fontWeight: 400,
								color: "#fff",
								backgroundColor: "#000",
								border: "2px solid #000",
								borderRadius: "0",
								width: "min(274px, 100%)",
								height: "clamp(52px, 4.6vw, 66px)",
								cursor: "pointer",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							ADD TO CART
						</button>
					</div>
				</div>
			</div>
			</div>


			<Footer />
		</div>
	);
}
