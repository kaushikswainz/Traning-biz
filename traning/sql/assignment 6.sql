CREATE TABLE workers (
    WORKER_ID INT AUTO_INCREMENT PRIMARY KEY,
    FIRST_NAME CHAR(20),
    LAST_NAME CHAR(20),
    SALARY INT,
    JOINING_DATE DATE,
    DEPARTMENT CHAR(20)
);

INSERT INTO workers (FIRST_NAME, LAST_NAME, SALARY, JOINING_DATE, DEPARTMENT)
VALUES ('Monika', 'Arora', 100000, '2014-02-20', 'HR'),
       ('Niharika', 'Verma', 80000, '2014-06-11', 'Admin'),
       ('Vishal', 'Singhal', 300000, '2014-02-20', 'HR'),
       ('Amitabh', 'Singh', 500000, '2014-02-20', 'Admin'),
       ('Vivek', 'Bhati', 500000, '2014-06-11', 'Admin'),
       ('Vipul', 'Diwan', 200000, '2014-06-11', 'Account'),
       ('Satish', 'Kumar', 75000, '2014-01-20', 'Account'),
       ('Geetika', 'Chauhan', 90000, '2014-04-11', 'Admin');
       
CREATE TABLE bonus (
    worker_ref_id INT,
    bonus_date DATE,
    bonus_amount INT,
    FOREIGN KEY(worker_ref_id) REFERENCEs workers(WORKER_ID)
);

INSERT INTO  bonus(worker_ref_id, bonus_date, bonus_amount)
VALUES (1, '2016-02-20', 5000),
       (2, '2016-06-11', 3000),
       (3, '2016-02-20', 4000),
       (1, '2016-02-20', 4500),
       (2, '2016-06-11', 3500);
       
CREATE TABLE title (
    worker_ref_id INT,
    worker_title VARCHAR(255),
    affected_from DATE,
    FOREIGN KEY(worker_ref_id) REFERENCEs workers(WORKER_ID)
);

INSERT INTO title(worker_ref_id, worker_title, affected_from)
VALUES (1, 'Manager', '2016-02-20'),
       (2, 'Executive', '2016-06-11'),
       (8, 'Executive', '2016-06-11'),
       (5, 'Manager', '2016-06-11'),
       (4, 'Asst. Manager', '2016-06-11'),
       (7, 'Executive', '2016-06-11'),
       (6, 'Lead', '2016-06-11'),
       (3, 'Lead', '2016-06-11');
       
-- 1
SELECT SUBSTR(FIRST_NAME, 1, 3) FROM Workers;
-- 2
SELECT INSTR(FIRST_NAME,'a') FROM Workers WHERE FIRST_NAME = 'Amitabh';
-- 3
SELECT RTRIM(FIRST_NAME) FROM Workers;
-- 4
SELECT DISTINCT DEPARTMENT, LENGTH(DEPARTMENT) FROM Workers;
-- 5
SELECT REPLACE(FIRST_NAME,'a','A') FROM Workers;
-- 6
SELECT CONCAT(FIRST_NAME, ' ', LAST_NAME) AS 'COMPLETE_NAME' FROM Workers;
-- 7
SELECT * FROM Workers WHERE FIRST_NAME IN ('Vipul', 'Satish');
-- 8
SELECT * FROM Workers WHERE FIRST_NAME LIKE '_____h';
-- 9
SELECT * FROM workers w join title t on w.WORKER_ID=t.worker_ref_id and  worker_title='manager';
-- 10
SELECT first_name, COUNT(*)
FROM workers
GROUP BY first_name
HAVING COUNT(*) > 1;
-- 11
select * from workers WHERE worker_id % 2 = 1;
-- 12
create table new_table as select * from workers;

select * from new_table;
-- 13
SELECT w.* FROM workers w JOIN bonus b ON w.WORKER_ID = b.worker_ref_id WHERE w.worker_id IS NULL;
-- 14
SELECT CURRENT_DATE AS Date, CURRENT_TIME AS Time;
-- 15
SELECT salary FROM workers ORDER BY salary DESC LIMIT 1 OFFSET 4;
-- 16
SELECT FIRST_NAME, salary FROM workers
WHERE salary IN (
  SELECT salary FROM workers
  GROUP BY salary
  HAVING COUNT(*) > 1
);
-- 17
SELECT FIRST_NAME, salary FROM workers
WHERE FIRST_NAME = 'Monika'
UNION ALL
SELECT FIRST_NAME, salary FROM workers
WHERE FIRST_NAME = 'Monika';
-- 18
SELECT * FROM workers
WHERE WORKER_ID <= (
  SELECT MAX(WORKER_ID) / 2 FROM workers
);
-- 19
SELECT * FROM workers
WHERE WORKER_ID = (
  SELECT MAX(WORKER_ID) FROM workers
);
-- 20
SELECT first_name FROM workers
WHERE salary = (
  SELECT MAX(salary) FROM workers
);



