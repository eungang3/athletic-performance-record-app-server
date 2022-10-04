-- migrate:up
INSERT INTO `users` (`name`,`birth`,`phone_number`,`height`) VALUES ('김고양','2000-01-01','01012341234','220');

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE users;
SET FOREIGN_KEY_CHECKS = 1;

