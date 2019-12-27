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
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservations` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `date` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `shelter_name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Gender` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `shelter_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `reservations` DISABLE KEYS */;
INSERT INTO `reservations` VALUES (1,'December 26, 2019','Test1','Amy','Syxomphou','Female',1),(2,'December 26, 2019','Test1','Pizza','Hut','Male',1),(3,'December 26, 2019','Test1','Amazon','Prime','Male',1),(4,'December 26, 2019','Test1','Mike','Sweeney','Male',1),(5,'December 26, 2019','Test1','Josh','Leavitt','Male',1),(6,'December 26, 2019','Test1','Ryan','Lee','Male',1),(7,'December 26, 2019','Test1','Mario','Mitchell','Male',1),(8,'December 26, 2019','Test1','Zailey','Lo','Female',1),(9,'December 26, 2019','Test1','Nina','Sacamos','Female',1),(10,'December 26, 2019','Test1','Camrie','McArthur','Female',1),(11,'December 26, 2019','Shelter2','Amy','Syxomphou','Female',2),(12,'December 26, 2019','Shelter2','Arielle','Swift','Female',2),(13,'December 26, 2019','Shelter2','Melissa','Bostic','Female',2),(14,'December 26, 2019','Shelter2','Minion','Syxomphou','Male',2),(15,'December 26, 2019','Shelter2','Minion','Syxomphou','Male',2),(16,'December 26, 2019','Shelter2','Cherry','Syxomphou','Female',2),(17,'December 26, 2019','Shelter2','Ryan','Martinez','Male',2),(18,'December 27, 2019','Test1','Ryan','Martinez','Male',1),(19,'December 27, 2019','Shelter2','Amy','Syxomphou','Female',2),(20,'December 27, 2019','Test1','Minion','Syxomphou','Male',1),(21,'December 27, 2019','Test1','Josh','Leavitt','Male',1),(22,'December 27, 2019','Test1','Mario','Mitchell','Male',1),(23,'December 27, 2019','Test1','Mike','Sweeney','Male',1),(24,'December 27, 2019','Test1','Ryan','Lee','Male',1);
/*!40000 ALTER TABLE `reservations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-27  9:25:57
