create schema studentmanagement;

create table department(
dep_id int auto_increment primary key,
dep_name varchar(20)
);

create table studentinfo(
st_id int auto_increment primary key,
st_name varchar(20),
dep_id int,
maths int,
science int,
english int,
foreign key(dep_id) references department(dep_id),
index(st_id,dep_id)
);

insert into department(dep_name) values('cse'),('mech'),('civil'),('ece');

insert into studentinfo(st_name,dep_id,maths,science,english) values
("John Doe",1,90,85,95),
("Jane Smith",2,80,75,85),
("Bob Johnson",3,95,90,100),
("Sarah Lee",1,85,80,90),
("Tom Brown",2,75,70,80),
("Brown roy",4,70,60,90),
("shiva",4,78,79,40);

select * from department;

select * from studentinfo;

select total(maths,science,english) total,percentage(english,maths,science) percentage from studentinfo;



