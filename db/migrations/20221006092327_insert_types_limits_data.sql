-- migrate:up
INSERT INTO types_limits 
VALUES 
	(1, 0, 90),
	(2, 30, 170),
	(3, -60, -30),
	(4, 0, 100),
	(5, -100, 100);

-- migrate:down

