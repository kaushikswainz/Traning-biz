create table registration(
reg_id int auto_increment primary key,
gender varchar(20),
age int,
reg_date date
);

select * from registration;

insert into registration(gender,age,reg_date,time) values("male",80,'2000-11-12',null);

alter table registration add action varchar(20);