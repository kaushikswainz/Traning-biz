delimiter //
create procedure st_details()
begin
select * from studentinfo;
end //

call st_details();

delimiter //
create procedure st_detailsid(in zid int)
begin
select * from studentinfo where st_id=zid;
end //

call st_detailsid(2);

delimiter //
create procedure st_detailsdep(in dep varchar(20))
begin
select count(si.dep_id) from studentinfo si join department d on d.dep_id=si.dep_id and dep_name=dep;
end //

call st_detailsdep("cse");

delimiter //
create procedure st_detailsdepid(in dep varchar(20),in zid int)
begin
select * from studentinfo si join department d on d.dep_id=si.dep_id and dep_name=dep and st_id=zid;
end //

drop procedure st_detailsdepid;

call st_detailsdepid("cse",5);

delimiter //
create procedure curd(in action varchar(20),in id int,in name varchar(20))
begin
    if action='create' then 
    create table tbname(uid int,uname varchar(20));
    elseif action='insert'then
    insert into tbname(uid,uname) values(id,name);
    elseif action='update' then
    update tbname set uname=name where uid=id;
    elseif action='select' then
    select * from tbname;
    end if;
end //

drop procedure curd;

call curd("create",null,null);
