<?php
// Connexion à la base de données
$host = 'localhost';
$dbname = 'kitsun';
$user = 'root';
$password = 'root';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion à la base de données : " . $e->getMessage());
}

// Récupérer la catégorie depuis l'URL
$categorie = isset($_GET['categorie']) ? $_GET['categorie'] : 'bubbletea';  // Valeur par défaut 'bubbletea'

// Validation de la catégorie (pour éviter des problèmes de sécurité)
$categories_valides = ['bubbletea', 'Fruits', 'Tea', 'Cookies', 'Mochi'];
if (!in_array($categorie, $categories_valides)) {
    $categorie = 'bubbletea';  // Valeur par défaut si la catégorie est invalide
}

// Sélectionner les produits de la catégorie spécifique dans la base de données
$sql = "SELECT nom, img, description, prix, disponible FROM $categorie WHERE disponible = 1";
$statement = $pdo->prepare($sql);
$statement->execute();
$produits = $statement->fetchAll(PDO::FETCH_ASSOC);

?>

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
		<link rel="icon" type="image/png" href="img/logo.jpg" />
		<link rel="stylesheet" href="style/footer.css" />
		<link rel="stylesheet" href="https://path.to/font/MarineSikona.css" />
		<link rel="stylesheet" href="style/style.css" />
		<link rel="stylesheet" href="style/header.css" />
		<link rel="stylesheet" href="style/connexion.css" />
		<link rel="stylesheet" href="style/menu.css" />
		<link
			rel="stylesheet"
			href="https://use.fontawesome.com/releases/v5.12.0/css/all.css"
		/>
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />

		<link rel="icon" href="logo.png" />
		<title>Document</title>
	</head>
	<body>
		<div class="entete">
			<header>
				<div class="header_left">
					<div class="logo">
						<img
							src="img/logo.jpg"
							alt=""
							onclick="location.href='index.html'"
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
						<i class="bx bx-basket" id="panier_btn"></i>
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
						<li><a href="menu.html">Menu</a></li>
						<li><a href="localisation.html">Localisation</a></li>
						<li><a href="about.html">A propos</a></li>
						<li><a href="connexion.html">Mon compte</a></li>
					</ul>
				</nav>
			</div>
		</div>
		<!-- <section class="panier" id="panier">
			<div class="panier_top">
				<div class="panier_entete">
					<p>Panier d'achat</p>
					<img src="img/close.png" alt="" id="panier_close" />
				</div>
				<hr />
				<section class="panier_produit_container">
					<article class="panier_produit">
						<img src="img/special.png" alt="" />
						<div class="panier_produit_infos">
							<div class="nom">
								<p>Passionfruit mango</p>
								<img
									src="img/close.png"
									alt=""
									id="panier_close"
								/>
							</div>
							<div class="category">
								<h3>CATEGORY</h3>
								<p class="type">Kitsun Specials</p>
							</div>
							<div class="price">
								<div class="nb_article">
									<button id="remove">-</button>
									<p id="nb_article_chiffre">1</p>
									<button id="add">+</button>
								</div>
								<p class="prix" id="prix">6.00 $</p>
							</div>
						</div>
					</article>
					<article class="panier_produit">
						<img src="img/special.png" alt="" />
						<div class="panier_produit_infos">
							<div class="nom">
								<p>Passionfruit mango</p>
								<img
									src="img/close.png"
									alt=""
									id="panier_close"
								/>
							</div>
							<div class="category">
								<h3>CATEGORY</h3>
								<p class="type">Kitsun Specials</p>
							</div>
							<div class="price">
								<div class="nb_article">
									<button id="remove">-</button>
									<p id="nb_article_chiffre">1</p>
									<button id="add">+</button>
								</div>
								<p class="prix" id="prix">6.00 $</p>
							</div>
						</div>
					</article>
					<article class="panier_produit">
						<img src="img/special.png" alt="" />
						<div class="panier_produit_infos">
							<div class="nom">
								<p>Passionfruit mango</p>
								<img
									src="img/close.png"
									alt=""
									id="panier_close"
								/>
							</div>
							<div class="category">
								<h3>CATEGORY</h3>
								<p class="type">Kitsun Specials</p>
							</div>
							<div class="price">
								<div class="nb_article">
									<button id="remove">-</button>
									<p id="nb_article_chiffre">1</p>
									<button id="add">+</button>
								</div>
								<p class="prix" id="prix">6.00 $</p>
							</div>
						</div>
					</article>
				</section>
			</div>
			<div class="panier_bottom">
				<div class="panier_total">
					<p>Total :</p>
					<p id="total">6.00 $</p>
				</div>
				<hr />
				<div class="panier_btn">
					<button class="panier_btn_click">PAYER</button>
				</div>
			</div>
		</section> -->
		<div class="lien">
			<p>
				Accueil / Menu /
				<strong class="actual_page" id="actual_page">Mochi</strong>
			</p>
		</div>
		<main>
			<section class="categorie_container">
				<article class="categorie_left">
					<p>Categorie</p>
						<ul id="list_cat">
							<li><a href="?categorie=bubbletea" onclick="updateBreadcrumb(this, 'bubbletea')">Bubble Tea</a></li>
							<li><a href="?categorie=Tea" onclick="updateBreadcrumb(this, 'Crêpes')">Crêpes</a></li>
							<li><a href="?categorie=Cookies" onclick="updateBreadcrumb(this, 'Cookies')">Cookies</a></li>
							<li><a href="?categorie=Mochi" onclick="updateBreadcrumb(this, 'Mochi')">Mochi Mochi</a></li>
						</ul>
				</article>
				<article class="categorie_right">
					<p
						class="title_cat_right non-selectable"
						id="title_cat_right"
					>
						Mochi Mochi
					</p>
					<hr />
						<section class="card_menu_container">
												<section class="card_menu_container">
											<?php foreach ($produits as $produit): ?>
							<article class="card_menu">
								<i class="bx bx-bookmark favory-icon" onclick="favory(this)"></i>
								<img src="<?= htmlspecialchars($produit['img']); ?>" alt="<?= htmlspecialchars($produit['nom']); ?>" />
								<p><?= htmlspecialchars($produit['description']); ?></p>
							</article>
						<?php endforeach; ?>
						</section>

					</section>
				</article>
			</section>
		</main>
		<footer class="footer">
			<img src="img/logo.jpg" alt="" />
			<div class="footer_container">
				<ul>
					<li>
						<a class="title_footer" href="index.html">Accueil</a>
					</li>
					<li><a href="menu.html">Menu</a></li>
					<li><a href="localisation.html">Localisation</a></li>
					<li>
						<a href="localisation.html"
							>Politique de confidentialité</a
						>
					</li>
				</ul>

				<ul>
					<li>
						<a class="title_footer" href="index.html">Contact</a>
					</li>

					<li><a href="menu.html">+33 1 23 45 67 90</a></li>
					<li>
						<a href="localisation.html">Kitsun.pro@gmail.com</a>
					</li>
				</ul>

				<ul>
					<li>
						<a class="title_footer" href="index.html"
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
		<script src="script/script.js" defer></script>
	</body>
</html>
