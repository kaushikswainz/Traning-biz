CREATE DEFINER=`root`@`localhost` FUNCTION `percentage`(sub1 int,sub2 int,sub3 int) RETURNS varchar(20) CHARSET utf8mb4
    DETERMINISTIC
BEGIN
declare value int;
declare per int;
 set value=sub1+sub2+sub3;
 set per=(value/300)*100;
RETURN (per);
END