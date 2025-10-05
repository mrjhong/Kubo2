CREATE TABLE `movies` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(80),
  `category_id` integer,
  `release_date` date,
  `created_at` datetime
);

CREATE TABLE `category` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(30)
);
CREATE TABLE `movies_view_user` (
  `id_user` integer,
  `id_movie` integer
);

CREATE TABLE `users` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255),
  `password` varchar(120),
  `created_at` datetime
);

ALTER TABLE `category` ADD FOREIGN KEY (`id`) REFERENCES `movies` (`category_id`);

ALTER TABLE `movies_view_user` ADD FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

ALTER TABLE `movies_view_user` ADD FOREIGN KEY (`id_movie`) REFERENCES `movies` (`id`);
