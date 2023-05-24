create table det(
id int auto_increment primary key,
firstname varchar(20) NOT NULL,
lastname varchar(20),
email varchar(40) unique not null,
passwd varchar(30) not null
);


INSERT INTO det (firstname, lastname, email, passwd)
VALUES ('Alice', 'Smith', 'alice.smith@example.com', 'password123'),
       ('Bob', 'Johnson', 'bob.johnson@example.com', 'password456'),
       ('Charlie', 'Lee', 'charlie.lee@example.com', 'password789'),
       ('David', 'Nguyen', 'david.nguyen@example.com', 'passwordabc');
       
select * from det;
INSERT INTO det (firstname, lastname, email, passwd)
VALUES ('', 'Smith', '666.smith@example.com', 'password123');

drop table det;

call check_user("kaushik@gmail.com","kaushik");
