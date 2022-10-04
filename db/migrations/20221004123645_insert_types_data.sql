-- migrate:up
INSERT INTO `types` (`name`) VALUES ('손목 가동성');
INSERT INTO `types` (`name`) VALUES ('어깨 굴곡');
INSERT INTO `types` (`name`) VALUES ('어깨 신전');
INSERT INTO `types` (`name`) VALUES ('보행');
INSERT INTO `types` (`name`) VALUES ('호흡 균형');

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE types;
SET FOREIGN_KEY_CHECKS = 1;
