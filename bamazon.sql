CREATE DATABASE `Bamazon` /*!40100 DEFAULT CHARACTER SET utf8 */;
CREATE TABLE `Products` (
  `idProducts` int(11) NOT NULL AUTO_INCREMENT,
  `ProductName` varchar(45) NOT NULL,
  `DepartmentName` varchar(45) NOT NULL,
  `Price` decimal(10,2) NOT NULL,
  `StockQuantity` float NOT NULL,
  PRIMARY KEY (`idProducts`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
SELECT * FROM Bamazon.Products;