-- MySQL dump 10.13  Distrib 8.0.18, for macos10.14 (x86_64)
--
-- Host: localhost    Database: homeless_shelters
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `shelters`
--

DROP TABLE IF EXISTS `shelters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shelters` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(128) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `salt` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phone` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `days_open` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `hours_open` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `hours_closed` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `bed_option` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `open_beds` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `total_beds` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `meal_option` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shelters`
--

LOCK TABLES `shelters` WRITE;
/*!40000 ALTER TABLE `shelters` DISABLE KEYS */;
INSERT INTO `shelters` VALUES (1,'test1','0b5dca18b80e0c61c4bcde9421a87d576fb7ee356f6264f26a3de09f0a16ff8babdb511ac884c828285820ee8d23138d33f5626dc9541d98f20450f9f4e93938','f6cd595e-d165-4cb7-b095-bd134f9c6112','23456','(59358)50','test1@test.com','Mo,Fr,Sa,Su','24 Hours','12:00 am','Yes',NULL,'45','Yes'),(2,'test2','f45d061ce73c612a6a2ae88e072386352459e82bb979ff79a83d8e3abff88a30eded32167593a168fc169df7142c674a18551a07fa1e958f005a5ecbb901369c','6fbb8a96-e127-4ea8-820f-12777ea27500','helicopter','(123)123-1234','test2@test.com','Su','12:00 am','10:00 pm','Yes','2','30','Yes'),(3,'test3','66f2068e2d8b878cd6f324a0797c9005a0a2de68ca77d888741e6dba740c3440478a9a52ede7d1f3c98f1fb32a721c2a3f5154db5a22cf9b8d811fa6797ad057','9b3c3073-c27e-490c-b747-b36d7dd7f0ab','test3','(947)395-5398','test3@gmail.com','Mo,Tu,We,Th,Fr,Sa,Su','12:00 am','01:00 am','Yes','3','30','Yes'),(4,'test4','66990b53b95f61afae87c6af4ea6e750281a1f620b809bf545561893a3cb4f286dcd37f84ae101dd822355997c525fa6795776b5fe6b5790847c6634cd23fc18','1b36e81e-c1df-4019-94c3-19d7cc391f24','test4addy','(999)999-9999','test4@shelter.com','Mo,Tu,We,Th,Fr,Sa,Su','24 Hours','24 Hours','Yes','10','20','Yes');
/*!40000 ALTER TABLE `shelters` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-23 20:13:51
