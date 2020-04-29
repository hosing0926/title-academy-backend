import dotenv from 'dotenv';
dotenv.config();

module.exports = {
  development: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'graphql-server',
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
  },
  test: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'graphql-server',
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: false,
  },
  production: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'graphql-server',
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: false,
  },
};