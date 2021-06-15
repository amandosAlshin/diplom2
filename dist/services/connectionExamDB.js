"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mysql = _interopRequireDefault(require("mysql"));

var _vars = require("../config/vars.js");

var util = require('util');

var db = _mysql["default"].createConnection({
  host: _vars.examDB.host,
  user: _vars.examDB.user,
  password: _vars.examDB.password,
  database: _vars.examDB.database
}); // connect to database


db.connect(function (err) {
  if (err) {
    console.log('error mysql connect', err);
    return err;
  }

  console.log('exam db connected');
});
db.query = util.promisify(db.query);
var _default = db;
exports["default"] = _default;