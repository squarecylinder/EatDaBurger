CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS burgers;

-- Create the burgers table which will contain     id(int and is the primarykey), burger_name(varchar), devoured(boolean)
CREATE TABLE burgers (
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
burger_name VARCHAR(100),
devoured BOOLEAN DEFAULT false    
);
