INSERT INTO li_profile ( name, summary, company, experience, years, past_company, past_experience, past_years, skill1, skill2, skill3, degree, school, school_years, avatar, profile, project_id, swiped_right, swiped_left, status_id )
VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)
returning *
;