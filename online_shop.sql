-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 20, 2024 at 02:17 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `online_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(155) NOT NULL,
  `price` float NOT NULL,
  `description` text NOT NULL,
  `picture` varchar(255) NOT NULL,
  `ownerName` varchar(255) NOT NULL,
  `ownerTel` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `picture`, `ownerName`, `ownerTel`) VALUES
(7, 'T. PATTERSON 5\'10 CONSIGNMENT SURFBOARD', 550, 'Length: 5\'10\"\r\nWidth: 19\"\r\nThickness: 2 3/8\"\r\nFin Setup: Tri-Fin FCS I\r\nTail Shape: Squash', 'https://www.surfstationstore.com/cdn/shop/files/X2_5000x.jpg?v=1694463827', 'Tomer Gal', '05341234'),
(6, '11TH STREET SURFBOARDS 5\'4 CONSIGNMENT SURFBOARD', 850, 'Length: 5\'4\"\r\nWidth: 20 3/8\"\r\nThickness: 2 3/8\"\r\nFin Setup: Tri-Fin Futures\r\nTech: EPS\r\nTail Shape: Swallow', 'https://www.surfstationstore.com/cdn/shop/files/11thStreetFish_5000x.jpg?v=1706218773', 'Rami Levi', '05341324565'),
(8, '11TH STREET SURFBOARDS 5\'8 CONSIGNMENT SURFBOARD', 750, 'Length: 5\'8\"\r\nWidth: 20 1/4\"\r\nThickness: 2 5/8\"\r\nFin Setup: Tri-Fin FCS II\r\nTech: EPS\r\nTail Shape: Swallow', 'https://www.surfstationstore.com/cdn/shop/files/11thStreet_07e47d48-aaf5-4cc2-aefc-c4f47c93ce8f_5000x.jpg?v=1701716858', 'Avi Ron', '0549989291'),
(9, 'J7 5\'10 CONSIGNMENT SURFBOARD\r\n', 375, 'Length: 5\'10\"\r\nVolume: 25L\r\nFin Setup: Tri-Fin Futures\r\nTech: Poly\r\nTail Shape: Squash', 'https://www.surfstationstore.com/cdn/shop/files/J7510_5000x.jpg?v=1698942059', 'Eli Kopter', '05341324565'),
(10, 'CHANNEL ISLANDS CI PRO 5\'8 CONSIGNMENT SURFBOARD', 650, 'Length: 5\'8\"\r\nWidth: 18 1/4\"\r\nThickness: 2 3/16\"\r\nVolume: 24.3L\r\nFin Setup: Tri-Fin FCS II\r\nTech: Poly\r\nTail Shape: Squash', 'https://www.surfstationstore.com/cdn/shop/files/CIPro_d11142ba-9d4f-4c03-b005-5e52b156297c_5000x.jpg?v=1700156505', 'Amit Pozez', '053415123'),
(11, 'PROCTOR 5\'10 CONSIGNMENT SURFBOARD\r\n', 600, 'Length: 5\'10\"\r\nWidth: 18 3/4\"\r\nThickness: 2 5/16\"\r\nFin Setup: Tri-Fin FCS II\r\nTail Shape: Squash', 'https://www.surfstationstore.com/cdn/shop/files/Proctor_cf666ba5-7f94-4840-a691-15438070cd1c_5000x.jpg?v=1694116340', 'Tomer Gal', '05341324565'),
(12, 'DOMINION 5\'5 CONSIGNMENT SURFBOARD\r\n', 425, 'Length: 5\'5\"\r\nWidth: 20.63\"\r\nThickness: 2.32\"\r\nFin Setup: Twin Fin Futures\r\nTail Shape: Swallow', 'https://www.surfstationstore.com/cdn/shop/files/Dominion55_5000x.jpg?v=1697478799', 'Zipi Shavit', '053413455'),
(13, '11TH STREET SURFBOARDS SECRET WEAPON 5\'7 CON', 325, 'Length: 5\'7\"\r\nWidth: 19 3/4\"\r\nThickness: 2 1/2\"\r\nFin Setup: Tri-Fin FCS II\r\nTech: EPS\r\nTail Shape: Squash', 'https://www.surfstationstore.com/cdn/shop/files/SecretWeapon_5000x.jpg?v=1706217990', 'Shmolik Hakipod', '054512342'),
(21, 'CHANNEL ISLANDS OG FLYER 5\'10 USED SURFBOARD\r\n', 775, 'Length: 5\'10\"\r\nWidth: 19 1/4\"\r\nThickness: 2 7/16\"\r\nFin Setup: Tri-Fin Futures\r\nTech: Spine-Tek\r\nTail Shape: Squash', 'https://www.surfstationstore.com/cdn/shop/files/OGFlyer_5000x.png?v=1697565084', 'Golesh Blisof', '05442042069'),
(14, 'J7 5\'11 CONSIGNMENT SURFBOARD', 399, 'Length: 5\'11\r\nVolume: 24.3L\r\nFin Setup: Tri-Fin Futures\r\nTech: Poly\r\nTail Shape: Round', 'https://www.surfstationstore.com/cdn/shop/files/J7511_5000x.jpg?v=1698944904', 'Amit Pozez', '05420420420'),
(15, 'JS PSYCHO NITRO 6\'1 CONSIGNMENT SURFBOARD\r\n', 255, 'Length: 6\'1\"\r\nWidth: 21 1/2\"\r\nThickness: 2 3/4\"\r\nVolume: 39.4L\r\nFin Setup: 5-fin Futures\r\nTech: HYFI\r\nTail Shape: Swallow', 'https://www.surfstationstore.com/cdn/shop/files/PsychoNitro_93c4054d-b10e-4c78-8ae0-3b632c4f27b8_5000x.jpg?v=1701709809', 'Golesh Blisof', '05442042069'),
(16, 'INSPIRED WIZARD 5\'11 CONSIGNMENT SURFBOARD\r\n', 450, 'Length: 5\'11\"\r\nWidth: 18 3/8\"\r\nThickness: 2 1/4\"\r\nFin Setup: Tri-Fin Futures\r\nTech: Poly\r\nTail Shape: Swallow', 'https://www.surfstationstore.com/cdn/shop/products/InspiredWizard_5000x.png?v=1680893255', 'Golesh Blisof', '05442042069'),
(17, 'CHANNEL ISLANDS FLYER 5\'8 CONSIGNMENT SURFBOARD', 300, 'Length: 5\'8\"\r\nWidth: 18 5/8\"\r\nThickness: 2 7/16\"\r\nFin Setup: 5-fin Futures\r\nTail Shape: Round', 'https://www.surfstationstore.com/cdn/shop/files/Flyer_9ede04d1-20cd-438c-b091-ac80a5a0df2e_5000x.jpg?v=1705338923', 'Tomer Gal', '0549806100'),
(18, 'CHANNEL ISLANDS OG FLYER 5\'9 CONSIGNMENT SURFBOARD', 565, 'Length: 5\'9\"\r\nWidth: 19\"\r\nThickness: 2 3/8\"\r\nVolume: 27.6L\r\nFin Setup: Tri-Fin Futures\r\nTail Shape: Swallow', 'https://www.surfstationstore.com/cdn/shop/files/OGFlyer_66972b3e-2b9b-4087-9e2e-8c79cbd62092_5000x.jpg?v=1701199732', 'Golesh Blisof', '05442042069'),
(19, 'CHANNEL ISLANDS CAMPBELL BROTHERS BONZER 5\'8 CONSIGNMENT SURFBOARD', 399, 'Length: 5\'8\"\r\nWidth: 18 5/8\"\r\nThickness: 2 3/16\"\r\nVolume: 24.1L\r\nFin Setup: Quad + 1\r\nTail Shape: Squash', 'https://www.surfstationstore.com/cdn/shop/files/Bonzer5_5000x.jpg?v=1707066230', 'Avi Ron', '051236424'),
(20, 'CHANNEL ISLANDS FISHBEARD 6\' CONSIGNMENT SURFBOARD', 475, 'Length: 6\'\r\nWidth: 20 1/8\"\r\nThickness: 2 11/16\"\r\nVolume: 35.20L\r\nFin Setup: Twin Futures\r\nTech: Poly\r\nTail Shape: Swallow', 'https://www.surfstationstore.com/cdn/shop/files/Fishbeard_16a34831-09bb-42a1-ac1c-69f7a26d4901_5000x.jpg?v=1695664366', 'Barry Zakala', '05442042069'),
(22, 'CHANNEL ISLANDS FEVER 5\'11 USED SURFBOARD\r\n', 449, 'Length: 5\'11\"\r\nWidth: 18 7/8\"\r\nThickness: 2 5/16\"\r\nFin Setup: Tri-Fin FCS II\r\nTech: Poly\r\nTail Shape: Squash', 'https://www.surfstationstore.com/cdn/shop/files/Fever_50bddcb2-089d-489f-835f-cc6954e30305_5000x.jpg?v=1684257740', 'Rastaman', '05442042069'),
(23, 'CHANNEL ISLANDS NECK BEARD 6\'4 USED SURFBOARD\r\n', 950, 'Length: 6\'4\"\r\nWidth: 20 5/8\"\r\nThickness: 2 7/8\"\r\nVolume: 41.4L\r\nFin Setup: 5-fin FCS II\r\nTech: Spine-Tek\r\nTail Shape: Squash', 'https://www.surfstationstore.com/cdn/shop/files/NB_5000x.jpg?v=1683224323', 'Tomer Gal', ' 0549806100'),
(24, 'CHANNEL ISLANDS FEVER 5\'11 CONSIGNMENT SURFBOARD', 370, 'Length: 5\'11\"\r\nWidth: 18 3/8\"\r\nThickness: 2 3/4\"\r\nVolume: 27.9L\r\nFin Setup: Tri-Fin Futures\r\nTech: Poly\r\nTail Shape: Squash', 'https://www.surfstationstore.com/cdn/shop/products/Fever2_5000x.jpg?v=1663871257', 'Barry Zakala', '05414325661'),
(27, 'SHARP EYE 5\\\'8 CONSIGNMENT SURFBOARD', 450, 'Length: 5\'8\"\r\nWidth: 18.4\"\r\nThickness: 2.36\"\r\nVolume: 25.1L\r\nFin Setup: Tri-Fin FCS II\r\nTech: Poly\r\nTail Shape: Round', 'https://www.surfstationstore.com/cdn/shop/files/SECustom_5000x.jpg?v=1688589104', 'Mike Batovski', '057284592');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdTime` date NOT NULL,
  `username` varchar(255) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL,
  `password` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(155) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `createdTime`, `username`, `isAdmin`, `password`, `email`) VALUES
(5, '0000-00-00', 'tom', 1, 'tom', ''),
(55, '0000-00-00', 'tomergal@tomergal.com', 0, 'bigbootylatinas', 'asf'),
(54, '0000-00-00', 'tomergal@tomergal.com', 0, 'bigbootylatinas', 'asf');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
