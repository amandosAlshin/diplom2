"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _bluebird = require("bluebird");

var _express = require("express");

var _connectionExamDB = _interopRequireDefault(require("../../services/connectionExamDB"));

var router = (0, _express.Router)();
router.post('/add', /*#__PURE__*/function () {
  var _ref = (0, _bluebird.coroutine)( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var trueAnswer;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            trueAnswer = 0;

            if (req.body.answer) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(200).send({
              type: "error",
              msg: 'Заполните ответ'
            }));

          case 3:
            if (req.body.questionId) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(200).send({
              type: "error",
              msg: 'Выберите вопрос'
            }));

          case 5:
            if (req.body.trueAnswer) {
              trueAnswer = req.body.trueAnswer;
            }

            _context.prev = 6;
            _context.next = 9;
            return _connectionExamDB["default"].query('INSERT INTO `answers` SET ' + 'answer="' + req.body.answer + '",' + '`true`=' + trueAnswer + ',' + 'questionid="' + req.body.questionId + '"');

          case 9:
            return _context.abrupt("return", res.status(200).send({
              type: "ok",
              msg: 'Ваш ответ добавлен в базу'
            }));

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](6);
            return _context.abrupt("return", res.status(401).send({
              type: "error",
              msg: _context.t0.message
            }));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 12]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/list', /*#__PURE__*/function () {
  var _ref2 = (0, _bluebird.coroutine)( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var question, answers;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (req.body.questionId) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", res.status(200).send({
              type: "error",
              msg: 'Выберите вопрос'
            }));

          case 2:
            _context2.prev = 2;
            _context2.next = 5;
            return _connectionExamDB["default"].query('SELECT id,question FROM questions WHERE id = "' + req.body.questionId + '"');

          case 5:
            question = _context2.sent;
            _context2.next = 8;
            return _connectionExamDB["default"].query('SELECT id,answer,`true` FROM answers WHERE questionid = "' + req.body.questionId + '"');

          case 8:
            answers = _context2.sent;
            return _context2.abrupt("return", res.status(200).send({
              type: "ok",
              answers: answers,
              question: question[0].question
            }));

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](2);
            return _context2.abrupt("return", res.status(401).send({
              type: "error",
              msg: _context2.t0.message
            }));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 12]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.post('/delete', /*#__PURE__*/function () {
  var _ref3 = (0, _bluebird.coroutine)( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            if (req.body.answerId) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return", res.status(200).send({
              type: "error",
              msg: 'Выберите ответ'
            }));

          case 3:
            _context3.next = 5;
            return _connectionExamDB["default"].query('DELETE FROM `answers` WHERE id="' + req.body.answerId + '"');

          case 5:
            return _context3.abrupt("return", res.status(200).send({
              type: "ok",
              msg: ''
            }));

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(401).send({
              type: "error",
              msg: _context3.t0.message
            }));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;