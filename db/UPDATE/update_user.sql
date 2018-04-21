update users
set
    username = $2,
    first_name = $3,
    last_name = $4,
    email = $5,
    password = $6,
    company = $7
where
    id = $1
    
returning *
;

    