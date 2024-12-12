<?php
$host = "mysql-kitsun-site.alwaysdata.net";
$dbname = "kitsun-site_2";
$user = "root";
$password = "root";

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8",
        $user,
        $password
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion à la base de données : " . $e->getMessage());
}

$categorie = isset($_GET["categorie"]) ? $_GET["categorie"] : "bubbletea";

$categories_valides = [
    "bubbletea" => "bubbletea",
    "Fruits" => "fruits",
    "Tea" => "tea",
    "Cookies" => "cookies",
    "Mochi" => "mochi",
];

$table = isset($categories_valides[$categorie])
    ? $categories_valides[$categorie]
    : "bubbletea";

$sql = "SELECT nom, img, description, prix, disponible FROM $categorie WHERE disponible = 1";
$statement = $pdo->prepare($sql);

try {
    $statement->execute();
    $produits = $statement->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    die("Erreur lors de la récupération des produits : " . $e->getMessage());
}

if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

if (isset($_POST['add_to_cart'])) {
    $product_id = $_POST['product_id'];
    $quantity = $_POST['quantity'];

    if (isset($_SESSION['cart'][$product_id])) {
        $_SESSION['cart'][$product_id]['quantity'] += $quantity;
    } else {
        $_SESSION['cart'][$product_id] = [
            'quantity' => $quantity
        ];
    }
}

if (isset($_GET['remove'])) {
    $product_id = $_GET['remove'];
    unset($_SESSION['cart'][$product_id]);
}

$categorie = isset($_GET["categorie"]) ? $_GET["categorie"] : "bubbletea";

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
						<li><a href="menu.php">Menu</a></li>
						<li><a href="localisation.php">Localisation</a></li>
						<li><a href="about.php">A propos</a></li>
						<li><a href="connexion.php">Mon compte</a></li>
					</ul>
				</nav>
			</div>
		</div>

		<div class="lien">
    <p>
        Accueil / Menu /
        <strong class="actual_page" id="actual_page">Bubble Tea</strong>
    </p>
</div>
<main>
    <section class="categorie_container">
        <article class="categorie_left">
            <p>Categorie</p>
            <ul id="list_cat">
                <li><a href="?categorie=bubbletea" onclick="updateBreadcrumb(this, 'bubbletea')">Bubble Tea</a></li>
                <li><a href="?categorie=Crepes" onclick="updateBreadcrumb(this, 'Crêpes')">Crêpes</a></li>
                <li><a href="?categorie=Cookies" onclick="updateBreadcrumb(this, 'Cookies')">Cookies</a></li>
                <li><a href="?categorie=Mochi" onclick="updateBreadcrumb(this, 'Mochi')">Mochi Mochi</a></li>
            </ul>
        </article>
        <article class="categorie_right">
            <p class="title_cat_right non-selectable" id="title_cat_right">
                Bubble Tea
            </p>
            <hr />
            <section class="card_menu_container">
                <?php foreach ($produits as $produit): ?>
                <article class="card_menu">
                    <i class="bx bx-bookmark favory-icon" onclick="favory(this)"></i>
                    <img src="<?= htmlspecialchars($produit["img"]) ?>" alt="<?= htmlspecialchars($produit["nom"]) ?>" />
                    <p><?= htmlspecialchars($produit["description"]) ?></p>
                </article>
                <?php endforeach; ?>
            </section>
        </article>
    </section>
</main>
		<footer class="footer">
			<img src="img/logo.jpg" alt="" />
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

    document.getElementById('panier_btn').addEventListener('click', function() {
        fetch('cart.php')
            .then(response => response.text())
            .then(data => {
                document.getElementById('cart-container').innerHTML = data;
                document.getElementById('cart-container').style.display = 'block';
            });
    });

    document.getElementById('close-cart-btn')?.addEventListener('click', function() {
        document.getElementById('cart-container').style.display = 'none';
    });

		</script>
		<script src="script/script.js" defer></script>
	</body>
</html>
