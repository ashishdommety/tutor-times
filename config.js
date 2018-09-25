const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  "development": {
    "username": process.env.DB_DEV_USER, 
    "password": process.env.DB_DEV_PASS, 
    "database": process.env.DB_DEV_NAME, 
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "tutortimesDB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_PROD_USER,
    "password": process.env.DB_PROD_PASS,
    "database": "tutortimesDB",
    "host": process.env.DB_PROD_HOST,
    "dialect": "mysql"
  }
}