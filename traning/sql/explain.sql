create table tb_order(
 
 orderid int auto_increment primary key,
 quantity int,
 orderdate date,
 shipdate date,
 productname varchar(20),
 deliverydate date,
 price int,
 index(quantity,productname,price)
);

insert into tb_order(quantity,
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

create table tb_customer(
customerid int auto_increment primary key,
orderid  int,
name varchar(20),
phonenumber int,
address varchar(20),
foreign key(orderid) references tbl_order(orderid),
index(orderid,name)
);

insert into tb_customer(orderid,name,phonenumber,address) values(1,"kiran",887,"xyz"),
(2,"mohan",9979,"abc"),
(3,"anu",999,"klm"),
(4,"tommy",977,"ugh"),
(5,"shiva",990,"ijhj"),
(6,"visu",995,"fgh");

explain select * from tb_customer;

explain update tb_order set quantity=10 where orderid=1;

alter table tb_customer add dob date;

select c.name,o.productname from tb_order o join tb_customer c on c.orderid=o.orderid and o.productname="Laptop";

explain select c.name,o.productname from tb_order o join tb_customer c on c.orderid=o.orderid and o.productname="Laptop" and o.productname="mobile";

explain select sum(price) from tb_order;

explain select name,phonenumber from tb_customer;

alter table tb_customer modify phonenumber varchar(20);

alter table tb_customer rename column phonenumber to customernumber;

alter table tb_customer drop dob;

explain select count(c.customerid),o.productname from tb_order o join tb_customer c on c.orderid=o.orderid group by productname;

explain select * from tb_customer limit 2;

explain select * from tb_customer limit 4;

