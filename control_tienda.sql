-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-12-2018 a las 20:16:06
-- Versión del servidor: 10.1.34-MariaDB
-- Versión de PHP: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `control_tienda`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `ANADIR` (IN `ESTADOp` VARCHAR(30), IN `COSTOp` DOUBLE)  INSERT INTO ENTREGAS(ESTADO, COSTO) VALUES(ESTADOp, COSTOp)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ELIMINAR` (IN `ID` INT)  DELETE FROM ENTREGAS WHERE ID_ENT=ID$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `MODIFICAR` (IN `ID` INT, IN `ESTADO` VARCHAR(30), IN `COSTO` DOUBLE)  UPDATE entregas SET ESTADO=ESTADO, COSTO=COSTO WHERE ID_ENT LIKE ID$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `ID_CLI` int(11) NOT NULL,
  `NOMB` varchar(40) NOT NULL,
  `DOM` varchar(30) DEFAULT NULL,
  `CORREO` varchar(30) DEFAULT NULL,
  `TEL` varchar(10) DEFAULT NULL,
  `PAIS` varchar(30) DEFAULT NULL,
  `CIUDAD` varchar(30) DEFAULT NULL,
  `COLONIA` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `ID_COMP` int(11) NOT NULL,
  `ID_PROD` int(11) NOT NULL,
  `ID_PROV` int(11) NOT NULL,
  `CANTIDAD` double NOT NULL,
  `FECH_COMP` date NOT NULL,
  `SUBT_COMP` double NOT NULL,
  `TOTAL_COMP` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `entregados`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `entregados` (
`ID_ENT` int(11)
,`ESTADO` varchar(30)
,`COSTO` double
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entregas`
--

CREATE TABLE `entregas` (
  `ID_ENT` int(11) NOT NULL,
  `ESTADO` varchar(30) DEFAULT NULL,
  `COSTO` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `entregas`
--

INSERT INTO `entregas` (`ID_ENT`, `ESTADO`, `COSTO`) VALUES
(1, 'Preparando', 25),
(2, 'En Camino', 89),
(3, 'Preparando', 90),
(4, 'Entregado', 110),
(5, 'En Camino', 50),
(6, 'En Camino', 150),
(7, 'En Camino', 12),
(10, 'prueba', 1),
(11, 'jesus', 12),
(12, 'si funciona', 12),
(13, 'Preparando', 987),
(14, 'Preparando', 12345);

--
-- Disparadores `entregas`
--
DELIMITER $$
CREATE TRIGGER `COSTO` BEFORE UPDATE ON `entregas` FOR EACH ROW IF NEW.ESTADO LIKE OLD.ESTADO THEN SET NEW.COSTO=OLD.COSTO; END IF
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `VALIDARCOSTO` BEFORE INSERT ON `entregas` FOR EACH ROW IF NEW.costo < 0 THEN set NEW.costo=0; END IF
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `ID_PROD` int(11) NOT NULL,
  `NOM` varchar(40) NOT NULL,
  `DESCRIP` varchar(30) DEFAULT NULL,
  `STOCK` double NOT NULL,
  `PRECIO_COMP` double DEFAULT NULL,
  `PRECIO_VTA` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

CREATE TABLE `proveedores` (
  `ID_PROV` int(11) NOT NULL,
  `NOM` varchar(40) NOT NULL,
  `DOM` varchar(30) DEFAULT NULL,
  `CORREO` varchar(30) DEFAULT NULL,
  `TEL` varchar(10) DEFAULT NULL,
  `EMPRESA` varchar(30) NOT NULL,
  `PAIS` varchar(30) DEFAULT NULL,
  `CIUDAD` varchar(30) DEFAULT NULL,
  `COLONIA` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `ID_VTA` int(11) NOT NULL,
  `ID_PROD` int(11) NOT NULL,
  `ID_CLI` int(11) NOT NULL,
  `ID_ENT` int(11) NOT NULL,
  `FECH_VTA` date NOT NULL,
  `IVA` double DEFAULT NULL,
  `SUBT_VTA` double NOT NULL,
  `TOTAL_VTA` double NOT NULL,
  `TIPO_PAGO` varchar(30) DEFAULT NULL,
  `CANTIDAD` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura para la vista `entregados`
--
DROP TABLE IF EXISTS `entregados`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `entregados`  AS  select `entregas`.`ID_ENT` AS `ID_ENT`,`entregas`.`ESTADO` AS `ESTADO`,`entregas`.`COSTO` AS `COSTO` from `entregas` ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`ID_CLI`);

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`ID_COMP`),
  ADD KEY `ID_PROD` (`ID_PROD`),
  ADD KEY `ID_PROV` (`ID_PROV`);

--
-- Indices de la tabla `entregas`
--
ALTER TABLE `entregas`
  ADD PRIMARY KEY (`ID_ENT`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`ID_PROD`);

--
-- Indices de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD PRIMARY KEY (`ID_PROV`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`ID_VTA`),
  ADD KEY `ID_PROD` (`ID_PROD`),
  ADD KEY `ID_CLI` (`ID_CLI`),
  ADD KEY `ID_ENT` (`ID_ENT`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `ID_CLI` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `ID_COMP` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `entregas`
--
ALTER TABLE `entregas`
  MODIFY `ID_ENT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `ID_PROD` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  MODIFY `ID_PROV` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `ID_VTA` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `compras`
--
ALTER TABLE `compras`
  ADD CONSTRAINT `compras_ibfk_1` FOREIGN KEY (`ID_PROD`) REFERENCES `productos` (`ID_PROD`),
  ADD CONSTRAINT `compras_ibfk_2` FOREIGN KEY (`ID_PROV`) REFERENCES `proveedores` (`ID_PROV`);

--
-- Filtros para la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD CONSTRAINT `ventas_ibfk_1` FOREIGN KEY (`ID_PROD`) REFERENCES `productos` (`ID_PROD`),
  ADD CONSTRAINT `ventas_ibfk_2` FOREIGN KEY (`ID_CLI`) REFERENCES `clientes` (`ID_CLI`),
  ADD CONSTRAINT `ventas_ibfk_3` FOREIGN KEY (`ID_ENT`) REFERENCES `entregas` (`ID_ENT`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
