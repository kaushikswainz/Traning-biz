CREATE DEFINER=`root`@`localhost` TRIGGER `registration_BEFORE_INSERT` BEFORE INSERT ON `registration` FOR EACH ROW BEGIN
if new.gender="male" and new.age<50 or
new.gender="female" and new.age<45 then
signal sqlstate '50001' set message_text='not qualified to register';
else
 SET NEW.time = NOW();
 set new.action="inserted";
end if;
END