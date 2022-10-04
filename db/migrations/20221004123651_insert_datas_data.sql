-- migrate:up
INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (1,1,50);
INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (1,2,150);
INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (1,3,-50);
INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (1,4,80);
INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (1,5,-10);


-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE datas;
SET FOREIGN_KEY_CHECKS = 1;
