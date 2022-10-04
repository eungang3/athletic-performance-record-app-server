-- migrate:up
CREATE TABLE datas(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    record_id INT NOT NULL,
    type_id INT NOT NULL,
    figure INT NOT NULL,
    FOREIGN KEY (record_id) REFERENCES records(id),
    FOREIGN KEY (type_id) REFERENCES types(id)
    ON DELETE CASCADE
);

-- migrate:down
DROP TABLE datas;
