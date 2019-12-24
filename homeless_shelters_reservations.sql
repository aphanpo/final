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
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `reservations` DISABLE KEYS */;
INSERT INTO `reservations` VALUES (1,'December 19, 2019','test2','google','person',NULL,2),(2,'December 19, 2019','test1','hello','doodle',NULL,1),(3,'December 19, 2019','test2','hello','world',NULL,2),(4,'December 19, 2019','test1','new','person',NULL,1),(5,'December 19, 2019','test2','lilo','stitch','Female',2),(6,'December 19, 2019','test1','girl','boy','Male',1),(7,'December 20, 2019','test1','good','morning','Male',1),(8,'December 20, 2019','test2','day','night','Male',2),(9,'December 20, 2019','test1','ai','noa','Female',1),(10,'December 20, 2019','test2','hi','mom','Female',2),(11,'December 20, 2019','test1','luis','alonso','Male',1),(12,'December 20, 2019','test3','hello','roger','Female',3),(13,'December 20, 2019','test3','hello','world','Male',3),(14,'December 20, 2019','test3','hello','again','Male',3),(15,'December 20, 2019','test2','hello','people','Male',2),(16,'December 20, 2019','test2','good','bye','Male',2),(17,'December 20, 2019','test2','last','one','Male',2),(18,'December 20, 2019','test1','helol','helo','Male',1),(19,'December 20, 2019','test1','gtgt','vfr','Female',1),(20,'December 22, 2019','test3','minion','doggy','Male',3),(21,'December 22, 2019','test3','hello','world','Female',3),(22,'December 22, 2019','test3','good','night','Male',3),(23,'December 23, 2019','test2','minion','mini','Male',2);
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

-- Dump completed on 2019-12-23 20:13:51
