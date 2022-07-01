CREATE DATABASE ng_app_library;

use ng_app_library;

CREATE TABLE books(
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    synopsis VARCHAR(200) NOT NULL,
    cover VARCHAR(200) NOT NULL,
    autor VARCHAR(40) NULL,
    category VARCHAR(20) NULL,
    editorial VARCHAR(40) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER $$
CREATE PROCEDURE SP_InsertBook(in _title varchar(50), in _synopsis varchar(200), in _cover varchar(200), _autor varchar(40))
BEGIN
INSERT INTO books (title, synopsis, cover, autor)
VALUES (_title, _synopsis, _cover, _autor);
END $$

DELIMITER $$
CREATE PROCEDURE SP_SelectBook(in _title VARCHAR(50))
BEGIN
SELECT * FROM books WHERE title = _title;
END $$


DELIMITER $$
CREATE PROCEDURE SP_UpdateBook(in _title VARCHAR(50), in _synopsis varchar(200), in _cover varchar(200))
BEGIN
UPDATE books 
SET title = title, synopsis = _synopsis, cover= _cover
WHERE title = _title;
END $$

DELIMITER $$
CREATE PROCEDURE SP_DeleteBook(in _title VARCHAR(50))
BEGIN
DELETE FROM books WHERE title = _title;
END $$

