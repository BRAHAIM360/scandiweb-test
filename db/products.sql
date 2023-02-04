-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: db:3306
-- Generation Time: Jan 31, 2023 at 06:14 PM
-- Server version: 8.0.32
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `scandiweb`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `sku` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `size` double DEFAULT NULL,
  `weight` double DEFAULT NULL,
  `height` double DEFAULT NULL,
  `width` double DEFAULT NULL,
  `length` double DEFAULT NULL,
  `productType` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`sku`, `name`, `price`, `size`, `weight`, `height`, `width`, `length`, `productType`) VALUES
('DRZEE43', 'Office table', 200, NULL, NULL, 22, 44, 12, 'fourniture'),
('DRZEE45', 'CHAIR', 200, NULL, NULL, 22, 4, 12, 'fourniture'),
('ISBN34534', 'Harry Portter', 200, NULL, 1.2, NULL, NULL, NULL, 'book'),
('JVC2012', 'Harry potter Movie', 100, 450, NULL, NULL, NULL, NULL, 'disc'),
('JVC22025', 'Windows 11', 200, 550, NULL, NULL, NULL, NULL, 'disc'),
('TSSDZDZ', 'The witcher 3', 1000, 542, NULL, NULL, NULL, NULL, 'disc');
('TSSDZER', 'Rainbow Six Sieg', 1000, 542, NULL, NULL, NULL, NULL, 'disc');
('TSSDZF12', 'One Piece game', 1000, 542, NULL, NULL, NULL, NULL, 'disc');
('DRZEE45', 'Office disk', 500, NULL, NULL, 22, 4, 12, 'fourniture'),
('DRZEE85', 'Pc Case', 2700, NULL, NULL, 22, 4, 12, 'fourniture'),
('ISBN34534', '5 love languages', 200, NULL, 1.2, NULL, NULL, NULL, 'book'),
('ISBN34994', 'The Miracle Morning', 200, NULL, 1.2, NULL, NULL, NULL, 'book'),

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD UNIQUE KEY `sku` (`sku`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
