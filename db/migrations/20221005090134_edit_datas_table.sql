-- migrate:up
ALTER TABLE datas DROP FOREIGN KEY `datas_ibfk_1`;
ALTER TABLE datas 
    ADD CONSTRAINT `datas_ibfk_1` 
    FOREIGN KEY (record_id) REFERENCES records(id) ON DELETE CASCADE;

-- migrate:down
ALTER TABLE datas DROP FOREIGN KEY `datas_ibfk_1`;
ALTER TABLE datas
   ADD CONSTRAINT `datas_ibfk_1`
   FOREIGN KEY (record_id)
   REFERENCES records(id)

