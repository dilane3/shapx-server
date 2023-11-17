-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 17 nov. 2023 à 13:07
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `shapxdb`
--

-- --------------------------------------------------------

--
-- Structure de la table `files`
--

CREATE TABLE `files` (
  `id` int(4) NOT NULL,
  `name` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `files`
--

INSERT INTO `files` (`id`, `name`, `created_at`, `updated_at`) VALUES
(24882656, 'Untitled', '2023-11-17 11:26:12', '2023-11-17 10:26:12'),
(45216065, 'Draggable', '2023-11-17 12:01:14', '2023-11-17 11:01:22'),
(73770132, 'Test', '2023-11-17 12:00:53', '2023-11-17 11:01:11');

-- --------------------------------------------------------

--
-- Structure de la table `shapes`
--

CREATE TABLE `shapes` (
  `id` int(4) NOT NULL,
  `type` varchar(50) NOT NULL,
  `x` int(4) NOT NULL,
  `y` int(4) NOT NULL,
  `color` varchar(10) NOT NULL,
  `rotate` int(4) NOT NULL,
  `width` int(4) DEFAULT NULL,
  `height` int(4) DEFAULT NULL,
  `radius_x` int(4) DEFAULT NULL,
  `radius_y` int(4) DEFAULT NULL,
  `side` int(4) DEFAULT NULL,
  `file_id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `shapes`
--

INSERT INTO `shapes` (`id`, `type`, `x`, `y`, `color`, `rotate`, `width`, `height`, `radius_x`, `radius_y`, `side`, `file_id`) VALUES
(9680112, 'rectangle', 57, 80, '#D3D3D3', 0, 205, 189, NULL, NULL, NULL, 24882656),
(44677525, 'rectangle', 343, 81, '#D3D3D3', 0, 205, 189, NULL, NULL, NULL, 24882656);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `shapes`
--
ALTER TABLE `shapes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `file_id` (`file_id`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `shapes`
--
ALTER TABLE `shapes`
  ADD CONSTRAINT `shapes_ibfk_1` FOREIGN KEY (`file_id`) REFERENCES `files` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
