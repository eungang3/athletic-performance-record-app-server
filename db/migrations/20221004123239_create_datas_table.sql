-- migrate:up
CREATE TABLE datas(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    record_id INT NOT NULL,
    type_id INT NOT NULL,
    figure INT NOT NULL,
    FOREIGN KEY (record_id) REFERENCES records(id),
    FOREIGN KEY (type_id) REFERENCES types(id) ON DELETE CASCADE,
    CONSTRAINT PK_datas_record_id_type_id UNIQUE KEY (record_id, type_id)
);

-- migrate:down
DROP TABLE datas;
