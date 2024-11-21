USE mydatabase;
CREATE DATABASE mydatabase; 

CREATE TABLE employees (
  emp_id INT NOT NULL,
  first_name VARCHAR(20),
  last_name VARCHAR(20),
  job_title VARCHAR(30),
  salary INT,
  PRIMARY KEY(emp_id)
);
select * from employees;

