SELECT * FROM li_profile
WHERE project_id = $1 AND swiped_right = FALSE AND swiped_left = FALSE
;