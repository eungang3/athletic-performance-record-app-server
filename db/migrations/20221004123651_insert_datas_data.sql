-- migrate:up
INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (1,1,50);
INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (1,2,150);
INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (1,3,-50);
INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (1,4,80);
INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (1,5,-10);
INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (2,1,55);
INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (2,2,155);
INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (2,3,-55);
INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (2,4,85);
INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (2,5,-5);
INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (3,1,45);
INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (3,2,145);
INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (3,3,-45);
INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (3,4,75);
INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (3,5,-5);

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE datas;
SET FOREIGN_KEY_CHECKS = 1;
