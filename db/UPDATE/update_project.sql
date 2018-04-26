update projects
set
    user_id = $2,
    name = $3,
    date = $4
where
    id = $1
    
returning *
;