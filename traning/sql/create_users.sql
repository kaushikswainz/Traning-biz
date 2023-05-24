create user money@localhost identified by '123qwe';

create user honey@localhost identified by '123qwe';

create user funny@localhost identified by '123qwe';

grant all privileges on *.* to money@localhost;

flush privileges;

grant select on *.* to honey@localhost;

grant create,insert,update,select on *.* to funny@localhost;