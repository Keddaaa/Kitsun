<?php
session_start();
$host = "localhost";
$dbname = "kitsun";
$user = "root";
$password = "root";

// Connexion à la base de données
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion à la base de données : " . $e->getMessage());
}

// Vérifier si le panier est déjà initialisé, sinon, initialisez-le
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

// Ajouter un produit au panier
if (isset($_POST['add_to_cart'])) {
    $product_id = $_POST['product_id'];
    $quantity = $_POST['quantity'];

    // Vérifier si le produit est déjà dans le panier
    if (isset($_SESSION['cart'][$product_id])) {
        $_SESSION['cart'][$product_id]['quantity'] += $quantity;
    } else {
        // Si ce n'est pas dans le panier, l'ajouter
        $_SESSION['cart'][$product_id] = [
            'quantity' => $quantity
        ];
    }
}

// Supprimer un produit du panier
if (isset($_GET['remove'])) {
    $product_id = $_GET['remove'];
    unset($_SESSION['cart'][$product_id]);
}

// Afficher les produits dans le panier
function display_cart() {
    global $pdo;  // Utilisation de la connexion PDO dans la fonction

    $total_price = 0; // Initialisation de la variable total_price

    if (empty($_SESSION['cart'])) {
        echo "<p>Votre panier est vide.</p>";
    } else {
        echo "<table>";
        echo "<tr><th>Produit</th><th>Quantité</th><th>Prix</th><th>Action</th></tr>";

        foreach ($_SESSION['cart'] as $product_id => $item) {
            // Récupérer le produit depuis la base de données
            $stmt = $pdo->prepare("SELECT nom, prix FROM bubbletea WHERE id = :id");
            $stmt->bindParam(':id', $product_id);
            $stmt->execute();
            $product = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($product) {
                $product_price = $product['prix'];
                $product_total = $product_price * $item['quantity'];
                $total_price += $product_total;

                echo "<tr>";
                echo "<td>" . htmlspecialchars($product['nom']) . "</td>";
                echo "<td>" . $item['quantity'] . "</td>";
                echo "<td>" . number_format($product_total, 2, ',', ' ') . " €</td>";
                echo "<td><a href='?remove=$product_id'>Supprimer</a></td>";
                echo "</tr>";
            }
        }

        echo "</table>";
    }

    return $total_price; // Retourner le total calculé
}

// Appel de la fonction et récupération du total
$total_price = display_cart();  // Assurez-vous que le total est calculé avant de l'afficher dans le HTML

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panier</title>
    <link rel="stylesheet" href="style/cart.css" />
    <link rel="stylesheet" href="style/style.css">
</head>
<body>

<section class="panier" id="panier">
    <div class="panier_top">
        <div class="panier_entete">
            <p>Panier d'achat</p>
            <img src="img/close.png" alt="" id="panier_close" />
        </div>
        <hr />
    </div>
    <div class="panier_bottom">
        <div class="panier_total">
            <p>Total :</p>
            <p id="total"><?= number_format($total_price, 2, ',', ' ') ?> €</p> <!-- Affichage du total ici -->
        </div>
        <hr />
        <div class="panier_btn">
            <button class="panier_btn_click">PAYER</button>
        </div>
    </div>
</section>

<script src="script/script.js"></script>
<script src="script/cart.js"></script>
</body>
</html>
