update users
set
    status_id = 2
where id = $1
returning *
;