
-- Create the database
CREATE DATABASE IF NOT EXISTS restaurant_db;

-- Use the database
USE restaurant_db;

-- Create reservations table
CREATE TABLE IF NOT EXISTS reservations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    date DATE NOT NULL,
    time VARCHAR(10) NOT NULL,
    guests INT NOT NULL,
    occasion VARCHAR(50),
    special_requests TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
