insert into users(username, first_name, last_name, email, password, company, status_id)
values ( $1, $2, $3, $4, $5, $6, 1 )
returning *
;