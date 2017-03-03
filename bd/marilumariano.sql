-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-03-2017 a las 00:16:53
-- Versión del servidor: 5.6.24
-- Versión de PHP: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `marilumariano`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `LoginCliente`(IN `user` VARCHAR(100), IN `pass` VARCHAR(100))
    NO SQL
select * from cliente c where c.user=user and c.pass=pass$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `LoginVendedor`(IN `user` VARCHAR(100), IN `pass` VARCHAR(100))
    NO SQL
SELECT * from vendedor v where v.user=user and v.pass=pass$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE IF NOT EXISTS `cliente` (
  `idCliente` int(11) NOT NULL,
  `codigoPostal` int(11) NOT NULL,
  `fax` varchar(100) NOT NULL,
  `telefono` int(11) NOT NULL,
  `diaLugarPago` varchar(500) NOT NULL,
  `encargadoResponsable` varchar(100) NOT NULL,
  `horarioEntrega` varchar(100) NOT NULL,
  `responsableEntrega` varchar(100) NOT NULL,
  `observaciones` varchar(500) NOT NULL,
  `codigo` varchar(100) NOT NULL,
  `razonSocial` varchar(100) NOT NULL,
  `nombreFantasma` varchar(100) NOT NULL,
  `tipoResponsable` varchar(100) NOT NULL,
  `cuit` varchar(100) NOT NULL,
  `ingresosBrutos` varchar(100) NOT NULL,
  `idVendedor` int(11) NOT NULL,
  `listaPrecio` varchar(100) NOT NULL,
  `condicionVenta` varchar(100) NOT NULL,
  `domicilio` varchar(100) NOT NULL,
  `user` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE IF NOT EXISTS `compra` (
  `idCompra` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `idCliente` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `fecha` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedor`
--

CREATE TABLE IF NOT EXISTS `vendedor` (
  `idVendedor` int(11) NOT NULL,
  `user` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `vendedor`
--

INSERT INTO `vendedor` (`idVendedor`, `user`, `pass`, `nombre`, `apellido`) VALUES
(1, 'brian', 'ojeda', 'Brian', 'Ojeda');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `vendedor`
--
ALTER TABLE `vendedor`
  ADD PRIMARY KEY (`idVendedor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `vendedor`
--
ALTER TABLE `vendedor`
  MODIFY `idVendedor` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
