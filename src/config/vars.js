const path = require('path');

// import .env variables
require('dotenv-safe').load({
  path: path.join(__dirname, '../../.env'),
  sample: path.join(__dirname, '../../.env.example')
});

module.exports = {
  port: process.env.PORT,
  secret: process.env.SECRET,
  examDB:{
    host: process.env.MYSQL_EXAM_HOST,
    user: process.env.MYSQL_EXAM_USER,
    password: process.env.MYSQL_EXAM_PASSWORD,
    database: process.env.MYSQL_EXAM_DB
  }
};
