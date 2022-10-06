-- migrate:up
CREATE TRIGGER tr_bi_check_limitations
  BEFORE INSERT ON datas
  FOR EACH ROW
  BEGIN
  IF NOT EXISTS ( 
    SELECT NULL
    FROM types_limits
    WHERE type_id = NEW.type_id
      AND NEW.figure BETWEEN figure_from AND figure_till
    ) THEN
    SIGNAL SQLSTATE '45015' 
    SET message_text = 'The entered figure is out of the allowed range.' ;
  END IF;
  END

-- migrate:down
DROP TRIGGER tr_bi_check_limitations;
