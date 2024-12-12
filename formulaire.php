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
		<link rel="icon" type="image/png" href="img/logo.png" />
		<link rel="stylesheet" href="style/footer.css" />
		<link rel="stylesheet" href="https://path.to/font/MarineSikona.css" />
		<link rel="stylesheet" href="style/style.css" />
		<link rel="stylesheet" href="style/header.css" />
		<link rel="stylesheet" href="style/formulaire.css" />
		<link
			rel="stylesheet"
			href="https://use.fontawesome.com/releases/v5.12.0/css/all.css"
		/>
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />

		<link rel="icon" href="logo.png" />
		<title>Formulaire</title>
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
		<div class="lien">
			<p>Accueil / <strong>Connexion</strong></p>
		</div>
		<main>
			
		<div class="container">
            <form action="login.php" method="POST" class="form">
                <h1>Connexion</h1>
                <label for="email"></label>
                <input  class="email" type="email" id="email" name="email" placeholder="Entrez votre email" required>
                
                <label for="password"></label>
                <input class="mdp" type="password" id="password" name="password" placeholder="Entrez votre mot de passe" required>
                
                <button  type="submit" class="submit-btn">Se connecter</button>
                <p class="terms">
                    En continuant, vous acceptez nos <a href="#">Conditions générales</a> et notre
                    <a href="#">Politique de confidentialité</a>.
					Nous utilisons vos données personnelles pour vous offrir une expérience personnalisée, ainsi que pour mieux comprendre et améliorer notre service. Pour plus de détails, cliquez ici.
                </p>
            </form>
        </div>

			</div>
			<script type="module" src="/main.js"></script>
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
						//recuperer la valeur de l'input et le mettre dans la barre de recherche
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

				// quand on click sur entrer meme quand on click sur la barre de recherche, on cache la barre de recherche
				searchInput.addEventListener("keydown", function (event) {
					if (event.key === "Enter") {
						value = searchInput.value;
						location.href = "#" + value;
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