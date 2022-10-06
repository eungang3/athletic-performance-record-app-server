const request = require("supertest");

const { createApp } = require("../app");
const myDataSource = require("../models/db.config");

describe("Get Record", () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    await myDataSource.initialize();

    await myDataSource.query(
      "INSERT INTO `users` (`id`,`name`,`birth`,`phone_number`,`height`) VALUES (1,'김고양','2000-01-01','01012341234','220');"
    );
    await myDataSource.query("INSERT INTO `types` (`id`,`name`) VALUES (1,'손목 가동성');");
    await myDataSource.query("INSERT INTO `types` (`id`,`name`) VALUES (2,'어깨 굴곡');");
    await myDataSource.query("INSERT INTO `types` (`id`,`name`) VALUES (3,'어깨 신전');");
    await myDataSource.query("INSERT INTO `types` (`id`,`name`) VALUES (4,'보행');");
    await myDataSource.query("INSERT INTO `types` (`id`,`name`) VALUES (5,'호흡 균형');");
    await myDataSource.query(
      "INSERT INTO `records` (`id`,`user_id`,`weight`,`measured_at`) VALUES (1,1,'100.5','2022-10-04');"
    );
    await myDataSource.query(
      "INSERT INTO `datas` (`record_id`, `type_id`, `figure`) VALUES ('1', '1', '50');"
    );
    await myDataSource.query(
      "INSERT INTO `datas` (`record_id`, `type_id`, `figure`) VALUES (1,2,150);"
    );
    await myDataSource.query(
      "INSERT INTO `datas` (`record_id`, `type_id`, `figure`) VALUES (1,3,-50);"
    );
    await myDataSource.query(
      "INSERT INTO `datas` (`record_id`, `type_id`, `figure`) VALUES (1,4,80);"
    );
    await myDataSource.query(
      "INSERT INTO `datas` (`record_id`, `type_id`, `figure`) VALUES (1,5,-10);"
    );
  });

  afterAll(async () => {
    await myDataSource.query(`SET FOREIGN_KEY_CHECKS = 0;`);
    await myDataSource.query(`TRUNCATE datas;`);
    await myDataSource.query(`SET FOREIGN_KEY_CHECKS = 1;`);
    await myDataSource.query(`SET FOREIGN_KEY_CHECKS = 0;`);
    await myDataSource.query(`TRUNCATE types;`);
    await myDataSource.query(`SET FOREIGN_KEY_CHECKS = 1;`);
    await myDataSource.query(`SET FOREIGN_KEY_CHECKS = 0;`);
    await myDataSource.query(`TRUNCATE records;`);
    await myDataSource.query(`SET FOREIGN_KEY_CHECKS = 1;`);
    await myDataSource.query(`SET FOREIGN_KEY_CHECKS = 0;`);
    await myDataSource.query(`TRUNCATE users;`);
    await myDataSource.query(`SET FOREIGN_KEY_CHECKS = 1;`);
    await myDataSource.destroy();
  });

  test("SUCCESS: get user record", async () => {
    await request(app).get("/records/users/1").expect(200);
  });

  test("SUCCESS: get record", async () => {
    await request(app).get("/records/1").expect(200);
  });
});
