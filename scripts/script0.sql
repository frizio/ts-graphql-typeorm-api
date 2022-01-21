CREATE USER 'user_nodeapp'@'localhost' IDENTIFIED BY 'user_nodeapp';
GRANT ALL PRIVILEGES ON * . * TO 'user_nodeapp'@'localhost';
ALTER USER 'user_nodeapp'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password1;';

CREATE SCHEMA `graphql-demo-db` ;

