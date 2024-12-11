-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mer 11 Décembre 2024 à 16:58
-- Version du serveur :  5.6.20-log
-- Version de PHP :  5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `kitsun`
--

-- --------------------------------------------------------

--
-- Structure de la table `bubbletea`
--

CREATE TABLE IF NOT EXISTS `bubbletea` (
`id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `description` text,
  `prix` decimal(10,2) NOT NULL,
  `disponible` tinyint(1) DEFAULT '1'
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Contenu de la table `bubbletea`
--

INSERT INTO `bubbletea` (`id`, `nom`, `description`, `prix`, `disponible`) VALUES
(1, 'Mint tea Kitsun', 'Bubble tea à la menthe', '4.50', 1),
(2, 'The red kitsun', 'Bubble tea rouge', '4.50', 1),
(3, 'Pure tea', 'Thé pur', '4.00', 1),
(4, 'Fruit Kitsun series', 'Série de bubble tea aux fruits', '5.00', 1),
(5, 'Kitsun bluberries', 'Bubble tea aux myrtilles', '4.50', 1);

-- --------------------------------------------------------

--
-- Structure de la table `cookies`
--

CREATE TABLE IF NOT EXISTS `cookies` (
`id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `description` text,
  `prix` decimal(10,2) NOT NULL,
  `disponible` tinyint(1) DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `crepes`
--

CREATE TABLE IF NOT EXISTS `crepes` (
`id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `description` text,
  `prix` decimal(10,2) NOT NULL,
  `disponible` tinyint(1) DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `kitsunspecials`
--

CREATE TABLE IF NOT EXISTS `kitsunspecials` (
`id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `description` text,
  `prix` decimal(10,2) NOT NULL,
  `disponible` tinyint(1) DEFAULT '1'
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `kitsunspecials`
--

INSERT INTO `kitsunspecials` (`id`, `nom`, `description`, `prix`, `disponible`) VALUES
(1, 'Powerpuff drink', 'Boisson énergisante spéciale', '6.00', 1),
(2, 'Pirate pearl tea', 'Bubble tea avec perles spéciales', '5.50', 1);

-- --------------------------------------------------------

--
-- Structure de la table `mochi`
--

CREATE TABLE IF NOT EXISTS `mochi` (
`id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `description` text,
  `prix` decimal(10,2) NOT NULL,
  `disponible` tinyint(1) DEFAULT '1'
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- Contenu de la table `mochi`
--

INSERT INTO `mochi` (`id`, `nom`, `description`, `prix`, `disponible`) VALUES
(1, 'Mo''Passion', 'Mochi au fruit de la passion', '3.00', 1),
(2, 'Mo''Fraise', 'Mochi à la fraise', '3.00', 1),
(3, 'Mo''Menthe', 'Mochi à la menthe', '3.00', 1),
(4, 'Mo''Framboise', 'Mochi à la framboise', '3.00', 1),
(5, 'Mo''Chocolate', 'Mochi au chocolat', '3.00', 1),
(6, 'Mo''Caramel', 'Mochi au caramel', '3.00', 1),
(7, 'Mo''Coco', 'Mochi à la noix de coco', '3.00', 1),
(8, 'Mo''Pitaya', 'Mochi au pitaya', '3.00', 1),
(9, 'Mo''Mistere', 'Mochi mystérieux', '3.00', 1);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE IF NOT EXISTS `utilisateurs` (
`id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `pseudo` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `mot_de_passe` varchar(255) NOT NULL,
  `ville` varchar(255) DEFAULT NULL,
  `date_inscription` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Contenu de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `nom`, `prenom`, `pseudo`, `email`, `mot_de_passe`, `ville`, `date_inscription`) VALUES
(1, 'Dupont', 'Jean', 'JeanD', 'jean.dupont@gmail.com', '123456', 'Paris', '2024-10-20 11:45:26');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `bubbletea`
--
ALTER TABLE `bubbletea`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `cookies`
--
ALTER TABLE `cookies`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `crepes`
--
ALTER TABLE `crepes`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `kitsunspecials`
--
ALTER TABLE `kitsunspecials`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `mochi`
--
ALTER TABLE `mochi`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `bubbletea`
--
ALTER TABLE `bubbletea`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `cookies`
--
ALTER TABLE `cookies`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `crepes`
--
ALTER TABLE `crepes`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `kitsunspecials`
--
ALTER TABLE `kitsunspecials`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `mochi`
--
ALTER TABLE `mochi`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
