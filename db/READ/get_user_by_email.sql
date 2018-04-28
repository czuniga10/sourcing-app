SELECT * FROM users
    WHERE email = $1
    ORDER BY id
;