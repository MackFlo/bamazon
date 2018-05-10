DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (
item_id VARCHAR(3) NOT NULL,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(35),
price INTEGER (50) NOT NULL,
stock_quantity INTEGER (100) NOT NULL
);
 INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES ("AVJ", "Aloe Vera Juice", "Groceries", 10, 15);
 INSERT INTO products( item_id, product_name, department_name, price, stock_quantity) VALUES ("GHC", "Ghassoul Clay", "Health & Wellness", 15, 24);
 INSERT INTO products(item_id, product_name, department_name, price, stock_quantity) VALUES ("MDR", "Microdermabrasion Roller", "Beauty", 4, 51);
 INSERT INTO products(item_id, product_name, department_name, price, stock_quantity) VALUES ("MBP", "MacBook Pro", "Electronics", 1199, 13);
 INSERT INTO products(item_id, product_name, department_name, price, stock_quantity) VALUES ("VWP", "Volkswagen Passat", "Automobiles", 30000, 2);
 
SELECT*FROM products
