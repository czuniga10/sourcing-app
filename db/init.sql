--Drops current tables in DB and re-adds tables over again on Server restart

DROP TABLE IF EXISTS 
    click_status,
    duplicate_status,
    swipe_status,
    users, 
    li_profile;

--Please keep the order of the CREATE TABLE inserts the same


CREATE TABLE click_status (
    id SERIAL PRIMARY KEY,
    is_clicked TEXT
 );

CREATE TABLE duplicate_status (
    id SERIAL PRIMARY KEY,
    is_duplicate TEXT
 );

CREATE TABLE swipe_status (
    id SERIAL PRIMARY KEY,
    swipe_status TEXT
 );

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT unique,
    first_name TEXT,
    last_name TEXT,
    email TEXT unique, 
    password TEXT,
    company TEXT
 );

CREATE TABLE project (
    id SERIAL PRIMARY KEY,
    user_id int references users(id),
    name TEXT,
    date DATE
)

CREATE TABLE li_profile (
    id SERIAL PRIMARY KEY,
    summary TEXT,
    experience TEXT,
    skills TEXT,
    education TEXT,
    img_url TEXT
    click_status_id int references click_status(id),
    dup_status_id int references duplicate_status(id),
    can_view int references status(id),
    swipe_status int references swipe_status(id),
    project_id int references project(id)
);




-----------Start of Test user info---------------

--Status Table

INSERT INTO click_status ( is_clicked )
VALUES
    ('seen'),
    ('not seen'),
;

INSERT INTO duplicate_status ( is_duplicate )
VALUES
    ('yes'),
    ('no'),
;

INSERT INTO swipe_status ( swipe_status )
VALUES
    ('center')
    ('right'),
    ('left'),
;

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

--LinkedIn Profiles

INSERT INTO li_profile ( summary, experience, skills, education, img_url, click_status_id, dup_status_id swipe_status )
VALUES
    ('summary example', 'experience example', 'skills example', 'education example', 'img url example', 2, 2, 1)
;

