create schema hecto;

CREATE TABLE products (
  sl_no int auto_increment unique,
  product_id INT PRIMARY KEY,
  product_name VARCHAR(20) NOT NULL,
  total_quantity INT NOT NULL,
  discount INT,
  product_price INT,
  category VARCHAR(20),
  rating FLOAT CHECK (rating < 5.0),
  colour VARCHAR(20),
  product_brand VARCHAR(20),
  prod_desc VARCHAR(70)
);

INSERT INTO products (product_id, product_name, total_quantity, discount, product_price, category, rating, colour, product_brand, prod_desc) VALUES
(1, 'Laptop', 10, 10, 50000, 'Electronics', 4.5, 'Black', 'Dell', 'A powerful laptop with a sleek design'),
(2, 'Shoes', 20, 20, 3000, 'Footwear', 4.0, 'Blue', 'Nike', 'A pair of comfortable and stylish shoes'),
(3, 'Shirt', 15, 15, 1500, 'Clothing', 3.5, 'White', 'Levi''s', 'A casual shirt made of cotton fabric'),
(4, 'Book', 50, NULL , 500 , 'Stationery', 4.2 , 'NULL' , 'Penguin' , 'A best-selling novel by a famous author');

select * from products;

CREATE TABLE user_table (
  sl_no int auto_increment unique,
  refuser_id INT PRIMARY KEY,
  email VARCHAR(20) unique,
  first_name VARCHAR(20),
  last_name VARCHAR(20),
  phone_number bigint unique,
  address VARCHAR(20),
  city VARCHAR(20),
  country VARCHAR(20),
  pincode INT,
  foreign key (refuser_id) references registration(user_id)
);
ALTER TABLE user_table
ADD COLUMN subscription VARCHAR(50);
INSERT INTO user_table (refuser_id, email, first_name, last_name, phone_number, address, city, country, pincode) VALUES
(1, 'alice@gmail.com', 'Alice', 'Smith', 1234567890, '123 Main Street', 'New York', 'USA', 10001),
(2, 'bob@yahoo.com', 'Bob', 'Jones', 2345678901, '456 Park Avenue', 'London', 'UK', 20002),
(3, 'charlie@hotmail.com', 'Charlie', 'Brown', 3456789012, '789 Elm Street', 'Paris', 'France', 30003);

select * from user_table;

CREATE TABLE orders (
  sl_no int auto_increment unique, 
  order_id INT PRIMARY KEY,
  refproduct_id INT,
  product_name VARCHAR(255),
  seller VARCHAR(255),
  ordered_date DATETIME,
  delivery_date DATETIME,
  price DECIMAL(10, 2),
  FOREIGN KEY (refproduct_id) REFERENCES products(product_id)
);

INSERT INTO orders (order_id, refproduct_id, product_name, seller, ordered_date, delivery_date, price) VALUES
(1, 1, 'Laptop', 'Dell', '2023-01-01', '2023-01-05', 50000.00),
(2, 2, 'Shoes', 'Nike', '2023-01-02', '2023-01-06', 3000.00),
(3, 3, 'Shirt', 'Levi''s', '2023-01-03', '2023-01-07', 1500.00),
(4, 4, 'Book', 'Penguin', '2023-01-04', '2023-01-08', 500.00);

CREATE TABLE wishlist (
sl_no int auto_increment unique,
  refuser_id int,
  refproduct_id INT NOT NULL,
  product_name VARCHAR(255),
  price DECIMAL(10,2),
  wishlist_id INT PRIMARY KEY,
  rating float,
  category VARCHAR(255),
  description TEXT,
  brand VARCHAR(255),
  FOREIGN KEY (refproduct_id) REFERENCES products(product_id),
  foreign key (refuser_id) references registration(user_id)
);


INSERT INTO wishlist (refuser_id, refproduct_id, product_name, price, wishlist_id, rating, category, description, brand) VALUES
(1, 1, 'Headphones', 2000.00, 1, 4.3, 'Electronics', 'A pair of wireless headphones with noise cancellation', 'Sony'),
(2, 2, 'Bag', 1000.00, 2, 4.1, 'Accessories', 'A leather bag with multiple compartments', 'Hidesign'),
(3, 3, 'Watch', 5000.00, 3, 4.5, 'Jewellery', 'A smart watch with fitness tracker and heart rate monitor', 'Apple');

select * from wishlist;

CREATE TABLE shopping_cart (
  cart_id INT auto_increment PRIMARY KEY,
  refuser_id int NOT NULL,
  refproduct_id int NOT NULL,
  quantity INT NOT NULL CHECK (quantity > 0),
  FOREIGN KEY (refproduct_id) REFERENCES products(product_id),
  FOREIGN KEY (refuser_id) REFERENCES registration(user_id)
);


INSERT INTO shopping_cart (refuser_id, refproduct_id, quantity) VALUES
( 1, 1, 2),
( 2, 2, 1),
( 3, 3, 3);

create table registration(
user_id int auto_increment primary key,
email varchar(20) check(length(email)>0),
password varchar(20) check(length(password)>0)
);
drop table registration;
drop table wishlist;
drop table user_table;
drop table shopping_cart;


INSERT INTO registration ( email, password)
VALUES
('ali@example.com', '123456'),
('bo@example.com', 'abcdef'),
('cha@example.com', 'qwerty');


select * from registration;
select * from shopping_cart;
insert into shopping_cart(refuser_id,refproduct_id, quantity)values((select user_id from registration where email='alice@example.com'),
(select product_id from products where product_name='laptop'),3);

select p.product_name,p.ordered_date,p.price,s.quantity from products p join  shopping_cart s on s.refproduct_id=p.product_id and s.refuser_id="1"