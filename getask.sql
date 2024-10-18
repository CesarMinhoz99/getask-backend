-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 18/10/2024 às 18:31
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `getask`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `jobs`
--

CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `companyName` varchar(255) NOT NULL,
  `jobName` varchar(255) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `contato` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `jobs`
--

INSERT INTO `jobs` (`id`, `companyName`, `jobName`, `cidade`, `description`, `valor`, `contato`, `hash`) VALUES
(4, 'Teste', 'Designer UX/UI', 'Belo Horizonte', 'Oportunidade para designer UX/UI para criar interfaces atrativas.', 5000.00, 'yuytuytm', 'hash3'),
(5, '1', '2', 'Água Branca', '4', 9000.00, 'gerente@creativeminds.com', 'hash4'),
(6, 'Dev Works', 'Desenvolvedor Backend', 'Porto Alegre', 'Vaga para desenvolvedor backend com experiência em Node.js.', 7000.00, 'backend@devworks.com', 'hash5'),
(7, 'EduTech', 'Instrutor de Programação', 'Fortaleza', 'Estamos procurando um instrutor de programação para cursos online.', 4500.00, 'instrutor@edutech.com', 'hash6'),
(8, 'Marketing Hub', 'Especialista em Marketing Digital', 'Salvador', 'Vaga para especialista em marketing digital com foco em redes sociais.', 5500.00, 'marketing@marketinghub.com', 'hash7'),
(11, 'Teste', 'Designer UX/UI', 'Belo Horizonte', 'Oportunidade para designer UX/UI para criar interfaces atrativas.', 5000.00, 'yuytuytm', 'hash3'),
(12, '1', '2', 'Água Branca', '4', 9000.00, 'gerente@creativeminds.com', 'hash4'),
(13, 'Dev Works', 'Desenvolvedor Backend', 'Porto Alegre', 'Vaga para desenvolvedor backend com experiência em Node.js.', 7000.00, 'backend@devworks.com', 'hash5'),
(14, 'EduTech', 'Instrutor de Programação', 'Fortaleza', 'Estamos procurando um instrutor de programação para cursos online.', 4500.00, 'instrutor@edutech.com', 'hash6'),
(15, 'Marketing Hub', 'Especialista em Marketing Digital', 'Salvador', 'Vaga para especialista em marketing digital com foco em redes sociais.', 5500.00, 'marketing@marketinghub.com', 'hash7'),
(18, 'Teste', 'Designer UX/UI', 'Belo Horizonte', 'Oportunidade para designer UX/UI para criar interfaces atrativas.', 5000.00, 'yuytuytm', 'hash3'),
(19, '1', '2', 'Água Branca', '4', 9000.00, 'gerente@creativeminds.com', 'hash4'),
(20, 'Dev Works', 'Desenvolvedor Backend', 'Porto Alegre', 'Vaga para desenvolvedor backend com experiência em Node.js.', 7000.00, 'backend@devworks.com', 'hash5'),
(21, 'EduTech', 'Instrutor de Programação', 'Fortaleza', 'Estamos procurando um instrutor de programação para cursos online.', 4500.00, 'instrutor@edutech.com', 'hash6'),
(22, 'Marketing Hub', 'Especialista em Marketing Digital', 'Salvador', 'Vaga para especialista em marketing digital com foco em redes sociais.', 5500.00, 'marketing@marketinghub.com', 'hash7'),
(24, 'Teste', 'teste', 'teste', 'testetestetestetestetestetesteteste', 8899.00, 'teste', 'r8154yao'),
(25, 'Teste', 'teste', 'teste', '2323', 2323.00, '23232', 'hccxurrg'),
(26, 'Teste', '434343', 'SP', 'testre', 8899.00, '6y56y56', 'g3u0adei'),
(27, 'Teste', '434343', 'CE', 'testre', 8899.00, '6y56y56', 'xynlx59f'),
(28, 'refer', 'ferfer', 'AM', 'ferf', 0.00, 'erfer', 'pa0pz6lb'),
(29, 'refer', 'ferfer', 'AL', 'ferf', 0.00, 'erfer', 'g6qqm42d'),
(30, 'hh56', 'h5hh56h56', 'Assis Brasil', 'rger', 0.00, 'gerger', 'mjxzvqm5'),
(31, 'erge', 'gerge', 'Acrelândia', 'erger', 0.00, 'erger', '5jlt5hk9');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
