CREATE TABLE `tb_goal` (
	`id` varchar(256) NOT NULL,
	`title` varchar(256) NOT NULL,
	`desired_weekly_frequency` int NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `tb_goal_id` PRIMARY KEY(`id`),
	CONSTRAINT `tb_goal_id_unique` UNIQUE(`id`)
);
