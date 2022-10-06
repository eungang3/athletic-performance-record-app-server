const request = require("supertest");

const { createApp } = require("../app");
const myDataSource = require("../models/db.config");

describe("Delete Record", () => {
  let app;

  beforeEach(async () => {
    app = createApp();
    await myDataSource
      .initialize()
      .then(() => {
        console.log("테스트 데이터베이스 연결 성공");
      })
      .catch((err) => {
        console.log(err);
      });

    await myDataSource.query(
      "INSERT INTO `records` (`user_id`,`weight`,`measured_at`) VALUES (1,'100.5','2022-10-04');"
    );
    await myDataSource.query("INSERT INTO `types` (`name`) VALUES ('손목 가동성');");
    await myDataSource.query("INSERT INTO `types` (`name`) VALUES ('어깨 굴곡');");
    await myDataSource.query("INSERT INTO `types` (`name`) VALUES ('어깨 신전');");
    await myDataSource.query("INSERT INTO `types` (`name`) VALUES ('보행');");
    await myDataSource.query("INSERT INTO `types` (`name`) VALUES ('호흡 균형');");
    await myDataSource.query(
      "INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (1,1,50);"
    );
    await myDataSource.query(
      "INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (1,2,150);"
    );
    await myDataSource.query(
      "INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (1,3,-50);"
    );
    await myDataSource.query(
      "INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (1,4,80);"
    );
    await myDataSource.query(
      "INSERT INTO `datas` (`record_id`,`type_id`,`figure`) VALUES (1,5,-10);"
    );
  });

  afterEach(async () => {
    await myDataSource.query(`SET FOREIGN_KEY_CHECKS = 0;`);
    await myDataSource.query(`TRUNCATE datas;`);
    await myDataSource.query(`SET FOREIGN_KEY_CHECKS = 1;`);
    await myDataSource.query(`SET FOREIGN_KEY_CHECKS = 0;`);
    await myDataSource.query(`TRUNCATE types;`);
    await myDataSource.query(`SET FOREIGN_KEY_CHECKS = 1;`);
    await myDataSource.query(`SET FOREIGN_KEY_CHECKS = 0;`);
    await myDataSource.query(`TRUNCATE records;`);
    await myDataSource.query(`SET FOREIGN_KEY_CHECKS = 1;`);
    await myDataSource.destroy();
  });

  test("SUCCESS: deleted record", async () => {
    await request(app).delete("/records/1").expect(200);
  });

  test("FAILED: non-existing record", async () => {
    await request(app).delete("/records/2").expect(404);
  });
});
