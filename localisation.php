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
		<link rel="stylesheet" href="style/localisation.css" />
		<link rel="stylesheet" href="https://path.to/font/MarineSikona.css" />
		<link rel="stylesheet" href="style/footer.css" />
		<link rel="stylesheet" href="style/style.css" />
		<link rel="stylesheet" href="style/header.css" />
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
			<div class="lien">
				<p>
					Accueil /
					<strong class="actual_page" id="actual_page"
						>Localisation</strong
					>
				</p>
			</div>
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

		<div class="recherche">
			<div class="autocomplete">
				<input
					id="searchBox"
					type="text"
					placeholder="TVille , Code postal..."
				/>
			</div>
		</div>
	</body>
</html>
