"use client";

import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
	{ label: "Bubble tea", width: 228, soon: false },
	{ label: "Crêpes", width: 176, soon: true },
	{ label: "Cookies", width: 197, soon: true },
	{ label: "Mochi", width: 228, soon: true },
];

const products = [
	{
		id: 1,
		name: "Berry Boost",
		type: "Smoothie",
		price: "4,90€",
		category: "Bubble tea",
		video: "/videos/Berry Boost.mp4",
		ingredients: [
			"Framboises",
			"Fraises",
			"Coconut Sugar",
			"Dragonfruit",
			"Dates",
			"Coconut Milk",
		],
		bg: "#E8503A",
	},
	{
		id: 2,
		name: "Banana Nut",
		type: "Protein Shake",
		price: "5,50€",
		category: "Bubble tea",
		video: "/videos/Banana Nut.mp4",
		ingredients: [
			"Banana",
			"Unflavoured Whey Protein",
			"Oats",
			"Peanut Butter",
			"Cinnamon",
			"Himalayan Salt",
			"Oat Milk",
		],
		bg: "#C8934A",
	},
	{
		id: 3,
		name: "Green Glow",
		type: "Smoothie",
		price: "4,50€",
		category: "Bubble tea",
		video: "/videos/Green Glow.mp4",
		ingredients: [
			"Mango",
			"Pineapple",
			"Coconut Yoghurt",
			"Lime",
			"Turmeric",
			"Passionfruit",
			"Coconut Water",
		],
		bg: "#F5C842",
	},
	{
		id: 4,
		name: "Green Glow",
		type: "Smoothie",
		price: "4,50€",
		category: "Bubble tea",
		video: "/videos/Green Glow.mp4",
		ingredients: [
			"Avocado",
			"Spinach",
			"Pineapple",
			"Kiwi",
			"Apple",
			"Fresh Mint",
			"Lime",
			"Coconut Water",
		],
		bg: "#7A9E3B",
	},
	{
		id: 5,
		name: "Blueberry Fuel",
		type: "Protein Shake",
		price: "5,90€",
		category: "Bubble tea",
		video: "/videos/Blueberry Fuel.mp4",
		ingredients: [
			"Banana",
			"Vanilla Whey Protein",
			"Oats",
			"Almond Butter",
			"Blueberries",
			"Kefir",
			"Oat Milk",
		],
		bg: "#7B5EA7",
	},
	{
		id: 6,
		name: "Cacao Power",
		type: "Protein Shake",
		price: "4,50€",
		category: "Bubble tea",
		video: "/videos/cacao power.mp4",
		ingredients: [
			"Banana",
			"Unflavoured Whey Protein",
			"Oats",
			"Almond Butter",
			"Espresso",
			"Dates",
			"Dairy",
			"Oat Milk",
		],
		bg: "#8B6340",
	},
];

function ProductCard({
	name,
	type,
	price,
	video,
	ingredients,
	bg,
}: (typeof products)[0]) {
	const ref = useRef<HTMLVideoElement>(null);

	return (
		<div>
			<div
				className="relative overflow-hidden"
				style={{
					width: "410px",
					height: "510.22px",
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
				className="flex items-center justify-between mt-1"
				style={{ width: "410px" }}
			>
				<span
					style={{
						fontFamily: "Excon, sans-serif",
						fontSize: "25px",
						color: "#000",
						fontWeight: 400,
					}}
				>
					{name}
				</span>
				<span
					style={{
						fontFamily: "Excon, sans-serif",
						fontSize: "25px",
						color: "#000",
						fontWeight: 400,
					}}
				>
					{price}
				</span>
			</div>
		</div>
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
					paddingTop: "120px",
					paddingLeft: "48px",
					paddingRight: "48px",
					paddingBottom: "80px",
				}}
			>
				{/* Title area */}
				<p
					style={{
						fontFamily: "Excon, sans-serif",
						fontSize: "25px",
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
						style={{
							fontFamily: "LemonMilk, sans-serif",
							fontSize: "110px",
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
								fontSize: "37px",
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
					className="flex items-center"
					style={{
						gap: "65px",
						marginBottom: "40px",
						marginTop: "55px",
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
								onClick={() => setActiveCategory(label)}
								style={{
									fontFamily: "Excon, sans-serif",
									fontSize: "30px",
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
									width: `${width}px`,
									height: "63px",
									cursor: "pointer",
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
										fontSize: "20px",
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
					className="grid items-start"
					style={{
						gridTemplateColumns: "repeat(3, 410px)",
						columnGap: "68px",
						rowGap: "16px",
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
