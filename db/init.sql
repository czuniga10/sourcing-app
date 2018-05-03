--Drops current tables in DB and re-adds tables over again on Server restart

DROP TABLE IF EXISTS 
    status,
    users, 
    projects,
    li_profile;

--Please keep the order of the CREATE TABLE inserts the same

CREATE TABLE status (
    id SERIAL PRIMARY KEY,
    status TEXT
 );

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT unique,
    first_name TEXT,
    last_name TEXT,
    email TEXT unique, 
    password TEXT,
    company TEXT,
    status_id int references status(id)
 );

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    user_id int references users(id),
    name TEXT,
    date TEXT
);

CREATE TABLE li_profile (
    id SERIAL PRIMARY KEY,
    name TEXT,
    summary TEXT,
    company TEXT,
    experience TEXT,
    years TEXT,
    past_company TEXT,
    past_experience TEXT,
    past_years TEXT,
    skill1 TEXT,
    skill2 TEXT,
    skill3 TEXT,
    degree TEXT,
    school TEXT,
    school_years TEXT,
    avatar TEXT,
    profile TEXT,
    project_id int references projects(id),
    swiped_right BOOLEAN,
    swiped_left BOOLEAN,
    status_id int references status(id)
);



-----------Start of Test user info---------------

--Status Table

INSERT INTO status ( status )
VALUES
    ('active'),
    ('inactive')

;
--User Table

INSERT INTO users ( username, first_name, last_name, email, password, company, status_id )
VALUES
    ('Rec0', 'Chad', 'Zuniga', 'czuniga@thumbtack.com', 'password1', 'Thumbtack', 1),
    ('Rec1', 'Cam', 'Crump', 'ccrump@thumbtack.com', 'password1', 'Thumbtack', 1),
    ('Rec2', 'James', 'Adams', 'jadams@thumbtack.com', 'password1', 'Thumbtack', 1),
    ('Rec3', 'Jeremy', 'Oslund', 'joslund@thumbtack.com', 'password1', 'Thumbtack', 1),
    ('Rec4', 'Jacob', 'Gibson', 'jgibson@thumbtack.com', 'password1', 'Thumbtack', 1),
    ('Rec5', 'Sarah', 'Paulson', 'spaulson@thumbtack.com', 'password1', 'Thumbtack', 1),
    ('Rec6', 'Steven', 'Pollock', 'spollock@thumbtack.com', 'password1', 'Thumbtack', 1),
    ('Rec7', 'Noah', 'Lee', 'nlee@thumbtack.com', 'password1', 'Thumbtack', 1),
    ('Rec8', 'Sabrina', 'Parry', 'sparry@thumbtack.com', 'password1', 'Thumbtack', 1),
    ('Rec9', 'Joe', 'Mero', 'jmero@thumbtack.com', 'password1', 'Thumbtack', 1)


;

--Projects

INSERT INTO projects (user_id, name, date)
VALUES
    (1, 'Full Stack Software Engineers', '4/18/2018'),
    (1, 'Front End Software Engineers', '4/20/2018'),
    (1, 'Back End Software Engineers', '4/28/2018'),
    (1, 'Site Reliablility Engineers', '5/1/2018'),
    (1, 'Data Scientist', '5/1/2018'),

;

--LinkedIn Profiles

INSERT INTO li_profile ( name, summary, company, experience, years, past_company, past_experience, past_years, skill1, skill2, skill3, degree, school, school_years, avatar, profile, project_id, swiped_right, swiped_left, status_id )
VALUES
    ('Chad Zuniga', 'Aspiring full stack developer currently recruiting Software Engineers for Thumbtack', 'Sr. Techincal Sourcer @ Thumbtack', 'Recruiting Software Engineers', '2015-Present', 'Student Developer @ Dev Mountain', 'Student Developer', '2017-2018', 'Node.js', 'PostgreSQL', 'React', 'BA Business Management', 'Kansas Welseyan University', '2011-2013', 'https://www.goaltos.com/wp-content/uploads/sites/4559/2018/01/avatar-1577909_960_720.png', 'www.linkedin.com/in/chad-zuniga-425735bb/', 1, FALSE, FALSE, 1),

    
;