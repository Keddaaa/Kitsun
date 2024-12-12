<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<!-- font awesome -->
		<link
			rel="stylesheet"
			href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
			integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
			crossorigin="anonymous"
		/>
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
			integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMhS2SH3Y4h3Cz4Hc1giH2g5mI6O8PHeG1M7mF"
			crossorigin="anonymous"
		/>
		<link
			href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
			rel="stylesheet"
		/>

		<link rel="stylesheet" href="https://path.to/font/MarineSikona.css" />
		<link rel="stylesheet" href="style/footer.css" />
		<link rel="stylesheet" href="style/style.css" />
		<link rel="stylesheet" href="style/header.css" />
		<link rel="stylesheet" href="style/index.css" />
		<link rel="icon" type="image/png" href="img/logo.png" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />

		<link rel="icon" href="logo.png" />
		<title>Kitsun</title>
	</head>
	<body>
		<div class="entete">
			<header>
				<div class="header_left">
					<div class="logo">
						<img
							src="img/logo.png"
							alt=""
							onclick="location.href='index.php'"
						/>
					</div>
					<div class="header_left" id="header_left">
						<img src="img/menu.png" id="menu_btn" />
						<i class="bx bx-x"></i>
						<p>Menu</p>
					</div>
				</div>
				<div class="header_right">
					<div class="icons_right">
						<input
							type="text"
							id="searchInput"
							placeholder="Rechercher"
							class="searchInput"
						/>
						<i class="bx bx-search" id="search_btn"></i>
						<i class="bx bx-basket"></i>
						<i class="bx bx-user"></i>
					</div>
					<div class="btn">
						<button class="btn_click">Commander</button>
					</div>
				</div>
			</header>

			<div class="menu">
				<nav>
					<ul>
						<li><a href="menu.php">Menu</a></li>
						<li><a href="localisation.php">Localisation</a></li>
						<li><a href="about.php">A propos</a></li>
						<li><a href="connexion.php">Mon compte</a></li>
					</ul>
				</nav>
			</div>
		</div>

		<main>
			<section class="hero">
				<div class="hero_left">
					<img src="img/yamato.png" alt="Yamato" />
					<a class="btn_commander" href="menu.php"
						>Commander
						<svg
							width="20"
							height="10"
							viewBox="0 0 20 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 5H1"
								stroke="black"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M19.7152 4.79657L14.265 0.903565C13.7355 0.525354 13 0.903853 13 1.55455V8.44545C13 9.09615 13.7355 9.47465 14.265 9.09644L19.7152 5.20343C19.8548 5.10373 19.8548 4.89627 19.7152 4.79657Z"
								fill="black"
							/>
						</svg>
					</a>
				</div>
				<div class="hero_right">
					<h1>Un Bubble Tea digne d’un pirate !</h1>
					<a class="btn_collab" href="menu.php"
						>One piece x Kitsun
						<svg
							width="20"
							height="10"
							viewBox="0 0 20 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 5H1"
								stroke="black"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M19.7152 4.79657L14.265 0.903565C13.7355 0.525354 13 0.903853 13 1.55455V8.44545C13 9.09615 13.7355 9.47465 14.265 9.09644L19.7152 5.20343C19.8548 5.10373 19.8548 4.89627 19.7152 4.79657Z"
								fill="black"
							/>
						</svg>
					</a>
					<div class="img_collab">
						<img src="img/teacollab.png" alt="tea collab" />
					</div>
					<h3 class="desc_collab">Pirate Pearl Tea</h3>
				</div>
			</section>
			<h1 class="title">Nos Bons Plans</h1>
			<section class="bon_plan">
				<article class="card mint_tea">
					<div class="image_container">
						<img
							src="img/mint_tea.png"
							alt=""
							class="non-selectable"
						/>
					</div>
					<p>Mint tea Kitsun</p>
				</article>
				<article class="card special">
					<div class="image_container">
						<img
							src="img/special.png"
							alt=""
							class="non-selectable"
						/>
					</div>
					<p>Kitsun Special</p>
				</article>
				<article class="card blueberies">
					<div class="image_container">
						<img
							src="img/blueberies.png"
							alt=""
							class="img_petit"
						/>
					</div>
					<p>Kitsun blueberries</p>
				</article>
				<article class="card red">
					<div class="image_container">
						<img
							src="img/red.png"
							alt=""
							class="img_petit"
							class="non-selectable"
						/>
					</div>
					<p>The red kitsun</p>
				</article>
				<article class="card pure">
					<div class="image_container">
						<img src="img/pure.png" alt="" />
					</div>
					<p>Pure tea</p>
				</article>
				<article class="card fruit_series">
					<div class="image_container">
						<img
							src="img/fruit_series.png"
							alt=""
							class="img_petit"
						/>
					</div>
					<p>Fruit Kitsun series</p>
				</article>
			</section>
			<button class="btn_bon_plan">Tout voir</button>
			<section class="decouvrir">
				<div class="decouvrir_left">
					<div class="decouvrir_card">
						<article class="crepes">
							<p>Crepes</p>
							<img
								src="img/decouvrir/Crepes.png"
								alt=""
								class="non-selectable"
							/>
						</article>
						<article class="coockies">
							<img
								src="img/decouvrir/coockie.png"
								alt=""
								class="non-selectable"
							/>
							<p>Coockies</p>
						</article>
					</div>
					<div class="decalage">
						<article class="mochi">
							<img
								src="img/decouvrir/mochi.png"
								alt=""
								class="non-selectable"
							/>
							<p>
								Mochi
								<br />
								Mochi
							</p>
						</article>
						<article class="bubble_tea">
							<img
								src="img/decouvrir/bubble_tea.png"
								alt=""
								class="non-selectable"
							/>
							<p>Bubble Tea</p>
						</article>
					</div>
				</div>
				<div class="decouvrir_right">
					<h2>
						Decouvrir plus de <br />
						produit de Kitsun
					</h2>
					<img src="img/fleche.png" alt="" class="non-selectable" />
				</div>
			</section>
		</main>
		<footer class="footer">
			<img src="img/logo.png" alt="" />
			<div class="footer_container">
				<ul>
					<li>
						<a class="title_footer" href="index.php">Accueil</a>
					</li>
					<li><a href="menu.php">Menu</a></li>
					<li><a href="localisation.php">Localisation</a></li>
					<li>
						<a href="localisation.php"
							>Politique de confidentialité</a
						>
					</li>
				</ul>

				<ul>
					<li>
						<a class="title_footer" href="index.php">Contact</a>
					</li>

					<li><a href="menu.php">+33 1 23 45 67 90</a></li>
					<li>
						<a href="localisation.php">Kitsun.pro@gmail.com</a>
					</li>
				</ul>

				<ul>
					<li>
						<a class="title_footer" href="index.php"
							>Inscrivez vous a notre newlettter</a
						>
					</li>

					<li class="formulaire">
						<input
							type="email"
							id="email"
							pattern=".+@example\.com"
							size="30"
							placeholder="Email"
						/>
						<button class="btn_soumettre">Soumettre</button>
					</li>
				</ul>
			</div>
		</footer>
		<script>
			document.addEventListener("DOMContentLoaded", function () {
				var searchInput = document.getElementById("searchInput");
				var search_btn = document.getElementById("search_btn");
				var header_left = document.getElementById("header_left");
				var menu = document.querySelector(".menu");
				var menu_btn = document.getElementById("menu_btn");
				var menu_close = document.querySelector(".bx-x");

				search_btn.addEventListener("click", function () {
					if (searchInput.style.display === "flex") {
						// on recupere la valeur de l'input et le mettre dans la barre de recherche
						value = searchInput.value;
						if (value == "") {
							location.href = "";
						} else {
							location.href = "#" + value;
						}
						searchInput.value = "";
						searchInput.style.display = "none";
					} else {
						searchInput.style.display = "flex";
					}
				});

				window.addEventListener("click", function () {
					if (
						event.target != searchInput &&
						event.target != search_btn
					) {
						searchInput.style.display = "none";
					}
				});

				// quand on click sur entrer meme quand on click sur la barre de recherche on cache la barre de recherche
				searchInput.addEventListener("keydown", function (event) {
					if (event.key === "Enter") {
						value = searchInput.value;
						if (value == "") {
							location.href = "";
						} else {
							location.href = "#" + value;
						}
						searchInput.value = "";
						searchInput.style.display = "none";
					}
				});
				header_left.addEventListener("click", function () {
					if (menu.style.display === "flex") {
						menu.style.display = "none";
						menu_btn.style.display = "block";
						menu_close.style.display = "none";
					} else {
						menu.style.display = "flex";
						menu_btn.style.display = "none";
						menu_close.style.display = "block";
					}
				});
			});
		</script>
	</body>
</html>

