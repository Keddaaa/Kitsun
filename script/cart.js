// ================================================= Script de gestion du panier (fermeture) ===================================================
document.getElementById("panier_close").addEventListener("click", function () {
	var panier = document.getElementById("panier");
	panier.style.transform = "translateX(100%)";

	setTimeout(function () {
		panier.style.display = "none";
	}, 500);
});

// ================================================= Script de gestion du panier (ouverture) ===================================================
document.getElementById("panier_btn").addEventListener("click", function () {
	var panier = document.getElementById("panier");
	panier.style.display = "flex";
	setTimeout(function () {
		panier.style.transform = "translateX(0%)";
	}, 100);
});

// ================================================= Script de calcul et mise à jour du total dans le panier ===================================================
document.addEventListener("DOMContentLoaded", function () {
	// Récupérer tous les articles du panier
	var articles = document.querySelectorAll(".panier_produit");
	var total = document.querySelector("#total");

	// Fonction pour calculer le total du panier
	function calculerTotal() {
		let totalPanier = 0;
		articles.forEach(function (article) {
			var prix = article.querySelector(".prix");
			totalPanier += parseFloat(prix.textContent);
		});
		total.textContent = totalPanier.toFixed(2) + " $";
	}

	// Mettre en place la gestion des boutons + et -
	articles.forEach(function (article) {
		var removeButton = article.querySelector(".remove"); // Bouton -
		var addButton = article.querySelector(".add"); // Bouton +
		var quantityDisplay = article.querySelector(".nb_article_chiffre"); // Quantité d'article
		var priceDisplay = article.querySelector(".prix"); // Prix de l'article
		var unitPrice = 6.0; // Prix unitaire de chaque produit
		var quantity = 1; // Initialisation de la quantité

		// Lorsqu'on clique sur le bouton "-" pour réduire la quantité
		removeButton.addEventListener("click", function () {
			if (quantity > 1) {
				quantity--;
				quantityDisplay.textContent = quantity;
				priceDisplay.textContent =
					(quantity * unitPrice).toFixed(2) + " $";
				calculerTotal(); // Recalculer le total
			}
		});

		// Lorsqu'on clique sur le bouton "+" pour augmenter la quantité
		addButton.addEventListener("click", function () {
			quantity++;
			quantityDisplay.textContent = quantity;
			priceDisplay.textContent = (quantity * unitPrice).toFixed(2) + " $";
			calculerTotal(); // Recalculer le total
		});
	});

	// Initialisation du total au chargement de la page
	calculerTotal();
});
