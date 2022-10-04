-- migrate:up
INSERT INTO `records` (`user_id`,`weight`,`measured_at`) VALUES (1,'100.5','2022-10-04');

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE records;
SET FOREIGN_KEY_CHECKS = 1;
