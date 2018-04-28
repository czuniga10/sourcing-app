UPDATE li_profile
SET 
    status_id = 2,
    project_id = 1
WHERE id = $1
;