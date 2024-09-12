CREATE TABLE `tb_goal` (
	`id` varchar(255) NOT NULL,
	`title` varchar(255) NOT NULL,
	`desired_weekly_frequency` int NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `tb_goal_id` PRIMARY KEY(`id`),
	CONSTRAINT `tb_goal_id_unique` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE TABLE `tb_goal_completions` (
	`id` varchar(255) NOT NULL,
	`goal_id` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `tb_goal_completions_id` PRIMARY KEY(`id`),
	CONSTRAINT `tb_goal_completions_id_unique` UNIQUE(`id`)
);
--> statement-breakpoint
ALTER TABLE `tb_goal_completions` ADD CONSTRAINT `tb_goal_completions_goal_id_tb_goal_id_fk` FOREIGN KEY (`goal_id`) REFERENCES `tb_goal`(`id`) ON DELETE no action ON UPDATE no action;