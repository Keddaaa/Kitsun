// Fonction pour récupérer un paramètre dans l'URL
function getURLParameter(name) {
	const params = new URLSearchParams(window.location.search);
	return params.get(name);
}

// Fonction pour mettre à jour le fil d'Ariane et le titre
function updateBreadcrumb(element, newPage) {
	const breadcrumb = document.getElementById("actual_page");
	const titleCatRight = document.getElementById("title_cat_right");

	if (!breadcrumb || !titleCatRight) {
		console.error("Éléments manquants : breadcrumb ou title_cat_right.");
		return;
	}

	// Met à jour le fil d'Ariane
	breadcrumb.textContent = newPage.charAt(0).toUpperCase() + newPage.slice(1);

	// Réinitialise la classe "selected" pour tous les liens
	const links = document.querySelectorAll("#list_cat li a");
	links.forEach((link) => link.classList.remove("selected"));

	// Met à jour le titre de la catégorie
	if (newPage.toLowerCase() === "mochi") {
		titleCatRight.textContent = "Mochi Mochi";
	} else {
		titleCatRight.textContent =
			"Kitsun " + newPage.charAt(0).toUpperCase() + newPage.slice(1);
	}

	// Ajoute la classe "selected" à l'élément courant
	element.classList.add("selected");
}

// Initialisation par défaut lors du chargement de la page
document.addEventListener("DOMContentLoaded", function () {
	// Récupère la catégorie depuis l'URL, ou utilise "bubbletea" comme valeur par défaut
	const categorie = getURLParameter("categorie") || "bubbletea";
	const defaultCategory = document.querySelector(
		`#list_cat li a[href*='${categorie}']`
	);

	if (defaultCategory) {
		updateBreadcrumb(defaultCategory, categorie);
	} else {
		console.warn("Catégorie par défaut non trouvée :", categorie);
	}
});

// Fonction pour marquer/démarquer un favori
function favory(icon) {
	icon.classList.toggle("active_favory");
}

// Script de gestion des favoris
function favory(icon) {
	icon.classList.toggle("active_favory");
}

// Script de validation de l'adresse email
document.querySelector(".btn_soumettre").addEventListener("click", function () {
	const email = document.getElementById("email").value;
	if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
		alert("Veuillez entrer une adresse email valide.");
	}
});
