update li_profile
set
    summary = $2,
    experience = $3,
    skills = $4,
    education = $5,
    avatar = $6,
    project_id = $7,
    swiped_right = $8,
    swiped_left = $9    
where
    id = $1
    
returning *
;