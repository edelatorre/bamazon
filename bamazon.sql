CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	item_id int NOT NULL auto_increment,
    product_name varchar(255) NOT NULL,
    department_name varchar(255),
    price decimal(16,2),
    stock_quantity int,
    UNIQUE (item_id),
    PRIMARY KEY (item_id)
);

ALTER TABLE products auto_increment = 100;



INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
 ("playStation", "video_games", 6999, 15),
 ("xBox", "video_games", 6499, 10),
 ("Nintendo Switch", "video_games", 5999, 20),
 ("towels", "home", 200, 80),
 ("batteries", "electronics", 90, 200),
 ("iphoneX", "electronics", 25000, 15),
 ("samsung S9", "electronics", 18000, 20),
 ("MacBook Air", "computers", 6999, 15),
 ("Dog food", "pets", 899, 30),
 ("MacBook Pro", "computers", 29999, 10);
 
 Select * from products;
