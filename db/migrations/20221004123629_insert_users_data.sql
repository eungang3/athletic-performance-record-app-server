-- migrate:up
INSERT INTO `users` (`name`,`birth`,`phone_number`,`height`) VALUES ('김고양','2000-01-01','01012341234','220');
INSERT INTO `users` (`name`,`birth`,`phone_number`,`height`) VALUES ('박야옹','2002-02-02','01011112222','100');

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE users;
SET FOREIGN_KEY_CHECKS = 1;

