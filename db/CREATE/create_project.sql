INSERT INTO projects(user_id, name, date)
VALUES ($1, $2, $3)
returning *
;