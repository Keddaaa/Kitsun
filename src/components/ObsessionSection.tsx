export default function ObsessionSection() {
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
					NÉS DE L&apos;OBSESSION DU GOÛT ET DU DÉTAIL
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
					POURQUOI LE BUBBLE TEA EST TOUJOURS PAREIL PARTOUT&nbsp;?
					KITSUN EST NOTRE RÉPONSE.
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
