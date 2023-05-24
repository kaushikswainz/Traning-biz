CREATE DEFINER=`root`@`localhost` FUNCTION `total`(sub1 int,sub2 int,sub3 int)
 RETURNS varchar(20) CHARSET utf8mb4
    DETERMINISTIC
BEGIN
declare value int;
 set value=sub1+sub2+sub3;
RETURN (value);
END