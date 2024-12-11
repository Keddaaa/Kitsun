var title_cat_right = document.getElementById("title_cat_right");

document.addEventListener("DOMContentLoaded", function () {
	const defaultCategory = document.querySelector("#list_cat li a");
	if (defaultCategory) {
		updateBreadcrumb(defaultCategory, "Specials");
	}
});

function updateBreadcrumb(element, newPage) {
	const breadcrumb = document.getElementById("actual_page");
	breadcrumb.textContent = newPage;
	const links = document.querySelectorAll("#list_cat li a");
	links.forEach((link) => link.classList.remove("selected"));

	if (newPage == "Mochi") {
		title_cat_right.textContent = "Mochi Mochi";
	} else {
		title_cat_right.textContent = "Kitsun " + newPage;
	}

	element.classList.add("selected");
}

function favory(icon) {
	icon.classList.toggle("active_favory");
}

document.getElementById("panier_close").addEventListener("click", function () {
	var panier = document.getElementById("panier");
	panier.style.transform = "translateX(100%)";

	setTimeout(function () {
		panier.style.display = "none";
	}, 500);
});

document.getElementById("panier_btn").addEventListener("click", function () {
	var panier = document.getElementById("panier");
	panier.style.display = "flex";
	setTimeout(function () {
		panier.style.transform = "translateX(0%)";
	}, 100);
});

document.addEventListener("DOMContentLoaded", function () {
	var articles = document.querySelectorAll(".panier_produit");
	var total = document.querySelector("#total");

	function calculerTotal() {
		let totalPanier = 0;
		articles.forEach(function (article) {
			var prix = article.querySelector("#prix");
			totalPanier += parseFloat(prix.textContent);
		});
		total.innerHTML = totalPanier.toFixed(2) + " $";
	}

	articles.forEach(function (article) {
		var remove = article.querySelector("#remove");
		var add = article.querySelector("#add");
		var nb_article_chiffre = article.querySelector("#nb_article_chiffre");
		var prix = article.querySelector("#prix");
		var nb_article = 1;

		remove.addEventListener("click", function () {
			nb_article--;
			if (nb_article < 1) {
				nb_article = 1;
			}
			nb_article_chiffre.textContent = nb_article;
			prix.innerHTML = (nb_article * 6.0).toFixed(2) + " $";
			calculerTotal();
		});
		add.addEventListener("click", function () {
			nb_article++;
			nb_article_chiffre.textContent = nb_article;
			prix.innerHTML = (nb_article * 6.0).toFixed(2) + " $";
			calculerTotal();
		});
	});

	calculerTotal();
});

// Script de validation de l'adresse email
document.querySelector(".btn_soumettre").addEventListener("click", function () {
	const email = document.getElementById("email").value;
	if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
		alert("Veuillez entrer une adresse email valide.");
	}
});
