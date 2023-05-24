create schema react;

CREATE TABLE udetails (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(50) unique,
  password VARCHAR(50)
);

select * from udetails;

insert into udetails(email,password) values("pavan@gmail.com","1234");

call login_f("kaushik@gmail.com","123456");