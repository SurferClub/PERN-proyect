CREATE DATABASE taskdb;

\l

\c taskdb;

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(40) UNIQUE,
    description VARCHAR(255)
);

INSERT INTO tasks (title, description)
    VALUES ('task1', 'joe@ibm.com'),
    ('task2', 'ryan@faztweb.com');



select * from tasks;

