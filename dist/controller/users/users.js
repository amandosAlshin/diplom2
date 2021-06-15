"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _bluebird = require("bluebird");

var _express = require("express");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _require = require('../../config/vars'),
    secret = _require.secret;

var router = (0, _express.Router)();
router.post('/signin', /*#__PURE__*/function () {
  var _ref = (0, _bluebird.coroutine)( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(req.body.password != "admin" || req.body.login != "admin")) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(200).send({
              type: 'error',
              msg: 'Не правильный пароль'
            }));

          case 4:
            token = _jsonwebtoken["default"].sign({
              login: "admin"
            }, secret, {
              expiresIn: '1d'
            });
            return _context.abrupt("return", res.json({
              type: 'ok',
              token: token
            }));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/info', /*#__PURE__*/function () {
  var _ref2 = (0, _bluebird.coroutine)( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", res.status(200).send({
              type: 'ok',
              name: "admin",
              role: "admin"
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.post('/logout', /*#__PURE__*/function () {
  var _ref3 = (0, _bluebird.coroutine)( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", res.status(200).send({
              type: 'ok'
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;