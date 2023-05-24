create schema ecommerce;

create table tbl_order(
 
 orderid int auto_increment primary key,
 quantity int,
 orderdate date,
 shipdate date,
 productname varchar(20),
 deliverydate date,
 price int
);

insert into tbl_order(quantity,
orderdate,
shipdate,
productname,
deliverydate,
price) values(1,"2023-01-27","2023-01-31","Shirt","2023-02-10",1500),
(3,"2023-01-02","2023-01-11","Laptop","2023-02-11",40000),
(6,"2023-01-12","2023-01-18","Mobile","2023-02-12",25000),
(5,"2023-01-25","2023-01-30","Smart Watch","2023-02-13",9000),
(4,"2023-02-10","2023-02-16","Shoes","2023-02-14",2000),
(2,"2023-02-28","2023-03-15","Bag","2023-02-15",1500);

select * from tbl_order;

create table tbl_customer(
customerid int primary key,
orderid  int,
name varchar(20),
phonenumber int,
address varchar(20),
foreign key(orderid) references tbl_order(orderid)
);


insert into tbl_customer values(11,1,"kiran",887,"xyz"),
(12,2,"mohan",9979,"abc"),
(13,3,"anu",999,"klm"),
(14,4,"tommy",977,"ugh"),
(15,5,"shiva",990,"ijhj"),
(16,6,"visu",995,"fgh");

select * from tbl_customer;

update tbl_order set quantity=10 where orderid=1;

alter table tbl_customer add dob date;

alter table tbl_order drop dob;

select c.name,o.productname from tbl_order o join tbl_customer c on c.orderid=o.orderid and o.productname="Laptop";

select c.name,o.productname from tbl_order o join tbl_customer c on c.orderid=o.orderid and o.productname="Laptop" and o.productname="mobile";

select sum(price) from tbl_order;

select name,phonenumber from tbl_customer;

alter table tbl_customer modify phonenumber varchar(20);

alter table tbl_customer rename column phonenumber to customernumber;

alter table tbl_customer drop dob;

select count(c.customerid),o.productname from tbl_order o join tbl_customer c on c.orderid=o.orderid group by productname;

select * from tbl_customer limit 2;

select * from tbl_customer limit 4;