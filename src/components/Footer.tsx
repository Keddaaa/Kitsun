'use client';

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

function TikTokIcon() {
	return (
		<svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
			<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
		</svg>
	);
}

function XIcon() {
	return (
		<svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
			<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
		</svg>
	);
}

function InstagramIcon() {
	return (
		<svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
			<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
		</svg>
	);
}

export default function Footer() {
	const { t } = useLanguage();
	return (
		<footer
			style={{
				backgroundColor: "#fff",
				borderTop: "1px solid #e5e5e5",
				width: "100%",
				minHeight: "1038px",
			}}
		>
			{/* Top: logo + socials */}
			<div
				className="flex items-start justify-between pt-12 pb-10"
				style={{ paddingLeft: "200px", paddingRight: "40px" }}
			>
				<div>
					<Image
						src="/Kitsun.svg"
						alt="Kitsun"
						width={744.08}
						height={246}
						priority
					/>
				</div>
				<div className="flex items-center gap-6 pt-2">
					<a
						href="#"
						aria-label="TikTok"
						className="text-black hover:opacity-60 transition-opacity"
					>
						<TikTokIcon />
					</a>
					<a
						href="#"
						aria-label="X (Twitter)"
						className="text-black hover:opacity-60 transition-opacity"
					>
						<XIcon />
					</a>
					<a
						href="#"
						aria-label="Instagram"
						className="text-black hover:opacity-60 transition-opacity"
					>
						<InstagramIcon />
					</a>
				</div>
			</div>

			{/* Columns */}
			<div
				className="grid grid-cols-4 pb-16 gap-8"
				style={{ paddingLeft: "200px", paddingRight: "40px" }}
			>
				{/* Contact */}
				<div>
					<p style={{ fontFamily: "Excon, sans-serif", fontSize: "30px", color: "#000", fontWeight: 500, opacity: 0.5, marginBottom: "12px" }}>
						{t.footer.contact}
					</p>
					<p style={{ fontFamily: "Excon, sans-serif", fontSize: "25px", fontWeight: 500, color: "#000", lineHeight: "1.6" }}>
						{t.footer.contactText}
					</p>
					<a href="mailto:hello@kitsun.fr" style={{ fontFamily: "Excon, sans-serif", fontSize: "25px", color: "#000", fontWeight: 500 }} className="hover:opacity-60 transition-opacity">
						hello@kitsun.fr
					</a>
				</div>

				{/* Navigation */}
				<div>
					<p style={{ fontFamily: "Excon, sans-serif", fontSize: "30px", fontWeight: 500, color: "#000", opacity: 0.5, marginBottom: "12px" }}>
						{t.footer.navigation}
					</p>
					<ul className="flex flex-col gap-2">
						{t.nav.map((link) => (
							<li key={link}>
								<a href="#" style={{ fontFamily: "Excon, sans-serif", fontSize: "25px", color: "#000", fontWeight: 500 }} className="hover:opacity-60 transition-opacity">
									{link}
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* Catégories */}
				<div>
					<p style={{ fontFamily: "Excon, sans-serif", fontSize: "30px", color: "#000", fontWeight: 500, opacity: 0.5, marginBottom: "12px" }}>
						{t.footer.categories}
					</p>
					<ul className="flex flex-col gap-2">
						{["Bubble tea", "Crepe", "Cookies", "Mochi"].map((item) => (
							<li key={item}>
								<a href="#" style={{ fontFamily: "Excon, sans-serif", fontSize: "25px", color: "#000", fontWeight: 500 }} className="hover:opacity-60 transition-opacity">
									{item}
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* Légal */}
				<div>
					<p style={{ fontFamily: "Excon, sans-serif", fontSize: "30px", fontWeight: 500, color: "#000", opacity: 0.5, marginBottom: "12px" }}>
						{t.footer.legal}
					</p>
					<ul className="flex flex-col gap-2">
						{t.footer.legalLinks.map((item) => (
							<li key={item}>
								<a href="#" style={{ fontFamily: "Excon, sans-serif", fontSize: "25px", color: "#000", fontWeight: 500 }} className="hover:opacity-60 transition-opacity">
									{item}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* Bottom: illustration + copyright */}
			<div className="relative px-10 pb-6">
				<div
					style={{ height: "160px", marginTop: "320px" }}
					className="flex items-end"
				>
					{/* Placeholder skateboarder illustration */}
					<div
						style={{
							width: "612px",
							height: "459px",
							position: "relative",
						}}
					>
						<Image
							src="/skate.gif"
							alt="Kitsun skater"
							fill
							className="object-contain object-bottom"
							unoptimized
						/>
					</div>
				</div>
				<p
					className="absolute right-16 bottom-6"
					style={{
						fontFamily: "Excon, sans-serif",
						fontSize: "25px",
						fontWeight: 400,
						color: "#000",
						whiteSpace: "nowrap",
					}}
				>
					{t.footer.copyright}
				</p>
			</div>
			{/* Hashtag bar */}
			<div className="grid grid-cols-4">
				{["#KITSUN", "#CESIRSEULEMENT", "#BOLDTEA", "#MOCHIPOWER"].map(
					(tag) => (
						<div
							key={tag}
							className="py-4 flex items-center justify-center"
						>
							<span
								style={{
									fontFamily: "LemonMilk, sans-serif",
									fontSize: "30px",
									fontWeight: 400,
									color: "#000",
									letterSpacing: "0.05em",
								}}
							>
								{tag}
							</span>
						</div>
					),
				)}
			</div>
		</footer>
	);
}
