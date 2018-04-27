update li_profile
set
    summary = $2,
    experience = $3,
    skills = $4,
    education = $5,
    avatar = $6,
    profile = $7,
    project_id = $8,
    swiped_right = $9,
    swiped_left = $10,
    status_id = $11    
where
    id = $1
    
returning *
;