create table students(
id int auto_increment primary key,
name varchar(20),
marks int
);

insert into students(name,marks) values('Neha',90),
('Sahil',50),
('Rohan',70),
('Ankita',80),
('Swati',55);

select * from students;

select function_test(marks),name,marks from students;

select function_test(90);