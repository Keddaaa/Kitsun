<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=
	, initial-scale=1.0">
	<link
	rel="stylesheet"
	href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
	integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
	crossorigin="anonymous"
/>

<link rel="stylesheet" href="about.css">

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

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">


<link rel="stylesheet" href="https://path.to/font/MarineSikona.css" />
<link rel="stylesheet" href="style/footer.css" />
<link rel="stylesheet" href="style/style.css" />
<link rel="stylesheet" href="style/header.css" />
<link rel="stylesheet" href="style/about.css">
<link rel="stylesheet" href="style/index.css" />
<link rel="icon" type="image/png" href="img/logo.jpg" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />

<link rel="icon" href="logo.png" />
<title>Document</title>
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
					<li><a href="menu.html">Menu</a></li>
					<li><a href="localisation.html">Localisation</a></li>
					<li><a href="about.html">A propos</a></li>
					<li><a href="connexion.html">Mon compte</a></li>
				</ul>
			</nav>
		</div>
	</div>


	<main>
    <section>
		<div class="lien">
			<p>
				Accueil /
				<strong class="actual_page" id="actual_page">A propos</strong>
			</p>
		</div>
	</section>

	<section class="orange">
	</section>


	<div class="byebyemugi">
		<img id=sanji src="img/onepiecebye.jpeg">
	</div>



	<section class="presentation">
		<div class="descriptionK">
			<p><strong>Chez Kitsun,</strong></p>
            <br><p>Nous croyons que chaque boisson doit être une aventure ! Spécialisés dans le bubble tea, nous créons des recettes uniques, alliant des ingrédients frais et de qualité avec des saveurs audacieuses et innovantes. Que vous soyez fan des saveurs fruitées, lactées ou exotiques, notre menu est conçu pour ravir vos papilles et vous offrir un moment de plaisir.</p>
            <p>Nous nous engageons à offrir une expérience gourmande et rafraîchissante à chacun de nos clients, tout en explorant constamment de nouvelles idées pour enrichir notre carte.</p>
            <br><p>Chez <strong >Kitsun,</strong>chaque gorgée est un voyage de saveurs !</p>
            <br><p><strong> Sirotez l’aventure, savourez l’instant !</strong></p>
		</div>

	</section>



	<div class="kitsun-stats-container">
		<!-- Bubble Tea -->
		<div class="stat">
		  <div class="circle">
			<span>6</span>
		  </div>
		  <p>Bubble Tea</p>
		</div>

		<!-- Employés -->
		<div class="stat">
		  <div class="circle">
			<span>80+</span>
		  </div>
		  <p>Employés</p>
		</div>

		<!-- Verres vendus -->
		<div class="stat">
		  <div class="circle">
			<span>5M</span>
		  </div>
		  <p><strong>Verres vendu</strong></p>
		</div>

		<!-- Carrousel employés -->
		<div class="employee-carousel">
		  <div class="carousel-container">
			<img id="carousel-image" src="img/employee1.jpeg" alt="Employé 1">
		  </div>
		</div>
	  </div>





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




<script src= script.js></script>
</body>
</html>