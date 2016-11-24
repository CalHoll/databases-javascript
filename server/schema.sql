DROP DATABASE chat;
CREATE DATABASE IF NOT EXISTS chat;

USE chat;

DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,

  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS rooms;
CREATE TABLE IF NOT EXISTS rooms (
  id int NOT NULL AUTO_INCREMENT,
  roomname varchar(255) NOT NULL,

  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS messages;
CREATE TABLE IF NOT EXISTS messages (
  id int NOT NULL AUTO_INCREMENT,
  text varchar(200) NOT NULL,
  userid varchar(255) REFERENCES users(id),
  roomname varchar(255) REFERENCES rooms(id),

  PRIMARY KEY (id)
  -- FOREIGN KEY (user_id) REFERENCES users(id),
  -- FOREIGN KEY (room_id) REFERENCES rooms(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
