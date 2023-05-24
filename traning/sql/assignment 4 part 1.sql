create user tron1@localhost identified by '123qwe';

create user tron2@localhost identified by '123qwe';

grant all privileges on *.* to tron1@localhost;
flush privileges;

grant select on *.* to tron1@localhost;
flush privileges;