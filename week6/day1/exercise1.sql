CREATE TABLE items (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100),
	price INTEGER
);
INSERT INTO items (name,price)
VALUES ('Small Desk', 100), 
		('Large Desk', 300),
		('Fan',80);
SELECT * FROM items;

CREATE TABLE customers (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(20),
	last_name VARCHAR(20)
);

INSERT INTO "untitled_schema"."untitled_name" ("id", "first_name", "last_name") VALUES
(1, 'Greg', 'Jones'),
(2, 'Sandra', 'Jones'),
(4, 'Trevor', 'Green'),
(5, 'Melanie', 'Johnson');

SELECT * FROM customers;

SELECT * FROM items 
WHERE price > 80;

SELECT * FROM items
WHERE price <= 300;

SELECT * FROM customers
WHERE last_name = 'Smith'

SELECT * FROM customers
WHERE last_name = 'Jones'

SELECT * FROM customers
WHERE first_name != 'Scott'