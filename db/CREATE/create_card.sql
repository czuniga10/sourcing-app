INSERT INTO li_profile ( summary, experience, skills, education, avatar, project_id, swiped_right, swiped_left )
VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8)
returning *
;