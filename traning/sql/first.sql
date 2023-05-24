create schema training;

create table user(
id int,
name varchar(20),
password int,
phone_no int);

insert into user values(1,"kaushik",897677,87897987),(2,"mohan",12,976789568),(3,"kiran",1676232,97889568),(4,"pavan",16232,99889568);

select * from user;

select * from user where id=1;