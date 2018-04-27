INSERT INTO li_profile ( summary, experience, skills, education, avatar, profile, project_id, swiped_right, swiped_left, status_id )
VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
returning *
;