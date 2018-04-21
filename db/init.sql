--Drops current tables in DB and re-adds tables over again on Server restart

DROP TABLE IF EXISTS 
    users, 
    projects,
    li_profile;

--Please keep the order of the CREATE TABLE inserts the same

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT unique,
    first_name TEXT,
    last_name TEXT,
    email TEXT unique, 
    password TEXT,
    company TEXT
 );

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    user_id int references users(id),
    name TEXT,
    date TEXT
);

CREATE TABLE li_profile (
    id SERIAL PRIMARY KEY,
    summary TEXT,
    experience TEXT,
    skills TEXT,
    education TEXT,
    avatar TEXT,
    project_id int references projects(id),
    swiped_right TEXT,
    swiped_left TEXT
);



-----------Start of Test user info---------------

--Status Table


--User Table

INSERT INTO users ( username, first_name, last_name, email, password, company )
VALUES
    ('Rec0', 'Chad', 'Zuniga', 'czuniga@thumbtack.com', 'password1', 'Thumbtack'),
    ('Rec1', 'Cam', 'Crump', 'ccrump@thumbtack.com', 'password1', 'Thumbtack'),
    ('Rec2', 'James', 'Adams', 'jadams@thumbtack.com', 'password1', 'Thumbtack'),
    ('Rec3', 'Jeremy', 'Oslund', 'joslund@thumbtack.com', 'password1', 'Thumbtack'),
    ('Rec4', 'Jacob', 'Gibson', 'jgibson@thumbtack.com', 'password1', 'Thumbtack'),
    ('Rec5', 'Sarah', 'Paulson', 'spaulson@thumbtack.com', 'password1', 'Thumbtack'),
    ('Rec6', 'Steven', 'Pollock', 'spollock@thumbtack.com', 'password1', 'Thumbtack'),
    ('Rec7', 'Noah', 'Lee', 'nlee@thumbtack.com', 'password1', 'Thumbtack'),
    ('Rec8', 'Sabrina', 'Parry', 'sparry@thumbtack.com', 'password1', 'Thumbtack'),
    ('Rec9', 'Joe', 'Mero', 'jmero@thumbtack.com', 'password1', 'Thumbtack')


;

--Projects

INSERT INTO projects (user_id, name, date)
VALUES
    (1, 'Test Project', '4/18/2018'),
    (1, 'Test Project2', '4/29/2018'),
    (2, 'Test Project', '4/29/2018'),
    (3, 'Test Project', '4/29/2018'),
    (4, 'Test Project', '4/29/2018'),
    (5, 'Test Project', '4/29/2018'),
    (6, 'Test Project', '4/29/2018'),
    (7, 'Test Project', '4/29/2018'),
    (8, 'Test Project', '4/29/2018'),
    (9, 'Test Project', '4/29/2018'),
    (10, 'Test Project', '4/29/2018'),
    (10, 'Test Project1', '4/29/2018')
;

--LinkedIn Profiles

INSERT INTO li_profile ( summary, experience, skills, education, avatar, project_id, swiped_right, swiped_left )
VALUES
    ('summary example', 'experience example', 'skills example', 'education example', 'https://www.goaltos.com/wp-content/uploads/sites/4559/2018/01/avatar-1577909_960_720.png', 1, 'FALSE', 'FALSE')

;