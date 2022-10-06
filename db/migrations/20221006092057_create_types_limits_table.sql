-- migrate:up
CREATE TABLE types_limits (
  type_id INT PRIMARY KEY,
  figure_from INT,
  figure_till INT
);

-- migrate:down
DROP TABLE types_limits;

