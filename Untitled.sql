CREATE TABLE `EasyModeData` (
  `id` integer PRIMARY KEY,
  `question` varchar(255),
  `options` varchar(255),
  `correct_option` varchar(255)
);

CREATE TABLE `FunnyModeData` (
  `id` integer PRIMARY KEY,
  `question` varchar(255),
  `options` varchar(255),
  `correct_option` varchar(255)
);

CREATE TABLE `MathModeData` (
  `id` integer PRIMARY KEY,
  `question` varchar(255),
  `options` varchar(255),
  `correct_option` varchar(255)
);

CREATE TABLE `WordModeData` (
  `id` integer PRIMARY KEY,
  `question` varchar(255),
  `options` varchar(255),
  `correct_option` varchar(255)
);

CREATE TABLE `HardModeData` (
  `id` integer PRIMARY KEY,
  `question` varchar(255),
  `options` varchar(255),
  `correct_option` varchar(255)
);

CREATE TABLE `RandomModeData` (
  `id` integer PRIMARY KEY,
  `question` varchar(255),
  `options` varchar(255),
  `correct_option` varchar(255)
);
