select * from tbl_customer;

alter table tbl_customer add lastname varchar(20);

select * from tbl_customer where lastname is null;

insert into tbl_customer(customerid,orderid,name,phonenumber,address,lastname) values(17,3,"tom",776,"bnm","reddy");

update tbl_customer set lastname="kumar" where customerid=11;

SET SQL_SAFE_UPDATES = 0;

select * from tbl_customer where lastname is not null;

select * from tbl_customer where lastname like 'a%';

select * from tbl_customer where lastname like '%a';

select * from tbl_customer where lastname like '%a%';

select * from tbl_customer where lastname like 'a%a';

SET SQL_SAFE_UPDATES = 0;