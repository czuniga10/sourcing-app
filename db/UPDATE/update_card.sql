update li_profile
set
    name = $2,
    summary = $3,
    company = $4,
    experience = $5,
    years = $6,
    past_company = 7$,
    past_experience = 8$,
    past_years = 9$,
    skill1 = 10$,
    skill2 = 11$,
    skill3 = 12$,
    degree = 13$,
    school = 14$,    
    school_years = 15$,
    avatar = 16$,
    profile = 17$,
    project_id = 18$,
    swiped_right = 19$,
    swiped_left = 20$,
    status_id = 21$
where
    id = $1
    
returning *
;