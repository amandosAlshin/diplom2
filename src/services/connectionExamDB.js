import mysql from 'mysql';
const util = require('util');
import {examDB} from '../config/vars.js';
const db = mysql.createConnection({
    host: examDB.host,
    user:  examDB.user,
    password:  examDB.password,
    database:  examDB.database,
});

// connect to database
db.connect((err) => {
    if (err) {
        console.log('error mysql connect',err);
        return err;
    }
    console.log('exam db connected');
});
db.query = util.promisify(db.query);
export default db;
