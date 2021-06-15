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

var _lodash = _interopRequireDefault(require("lodash"));

var router = (0, _express.Router)();

var moment = require('moment');

router.post('/add', /*#__PURE__*/function () {
  var _ref = (0, _bluebird.coroutine)( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var instStudent;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (req.body.name) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", res.status(200).send({
              type: "error",
              msg: 'Поле "Имя" не заполнено'
            }));

          case 2:
            if (req.body.surname) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(200).send({
              type: "error",
              msg: 'Поле "Фамилия" не заполнено'
            }));

          case 4:
            _context.prev = 4;
            _context.next = 7;
            return _connectionExamDB["default"].query('INSERT INTO `results` SET ' + 'name="' + req.body.name + '",' + 'surname="' + req.body.surname + '",' + 'date="' + moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss") + '"');

          case 7:
            instStudent = _context.sent;
            return _context.abrupt("return", res.status(200).send({
              type: "ok",
              name: req.body.name,
              surname: req.body.surname,
              studentId: instStudent.insertId
            }));

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](4);
            return _context.abrupt("return", res.status(401).send({
              type: "error",
              msg: _context.t0.message
            }));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 11]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/question-list', /*#__PURE__*/function () {
  var _ref2 = (0, _bluebird.coroutine)( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var questions, answers, answerFilter, data, i, ans;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _connectionExamDB["default"].query('SELECT id,question FROM questions');

          case 3:
            questions = _context3.sent;
            _context3.next = 6;
            return _connectionExamDB["default"].query('SELECT id,answer,questionid FROM answers ORDER BY questionid');

          case 6:
            answers = _context3.sent;

            answerFilter = /*#__PURE__*/function () {
              var _ref3 = (0, _bluebird.coroutine)( /*#__PURE__*/_regenerator["default"].mark(function _callee2(questionId) {
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        return _context2.abrupt("return", _lodash["default"].filter(answers, function (a) {
                          return a.questionid == questionId;
                        }));

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function answerFilter(_x5) {
                return _ref3.apply(this, arguments);
              };
            }();

            data = [];
            i = 0;

          case 10:
            if (!(i < questions.length)) {
              _context3.next = 18;
              break;
            }

            _context3.next = 13;
            return answerFilter(questions[i].id);

          case 13:
            ans = _context3.sent;
            data.push({
              question: questions[i].question,
              questionId: questions[i].id,
              answers: ans
            });

          case 15:
            i++;
            _context3.next = 10;
            break;

          case 18:
            return _context3.abrupt("return", res.status(200).send({
              type: "ok",
              questions: data
            }));

          case 21:
            _context3.prev = 21;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(401).send({
              type: "error",
              msg: _context3.t0.message
            }));

          case 24:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 21]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.post('/save-result', /*#__PURE__*/function () {
  var _ref4 = (0, _bluebird.coroutine)( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var questions, answers, answerFilter, data, trueAnswerCount, i, ans, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (req.body.studentId) {
              _context5.next = 2;
              break;
            }

            return _context5.abrupt("return", res.status(200).send({
              type: "error",
              msg: 'Student is not find'
            }));

          case 2:
            if (req.body.data) {
              _context5.next = 4;
              break;
            }

            return _context5.abrupt("return", res.status(200).send({
              type: "error",
              msg: 'Student is not find'
            }));

          case 4:
            _context5.prev = 4;
            _context5.next = 7;
            return _connectionExamDB["default"].query('SELECT id,question FROM questions');

          case 7:
            questions = _context5.sent;
            _context5.next = 10;
            return _connectionExamDB["default"].query('SELECT id,answer,`true`,questionid FROM answers ORDER BY questionid');

          case 10:
            answers = _context5.sent;

            answerFilter = /*#__PURE__*/function () {
              var _ref5 = (0, _bluebird.coroutine)( /*#__PURE__*/_regenerator["default"].mark(function _callee4(answerId) {
                return _regenerator["default"].wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        return _context4.abrupt("return", _lodash["default"].filter(answers, function (a) {
                          return a.id == answerId;
                        }));

                      case 1:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function answerFilter(_x8) {
                return _ref5.apply(this, arguments);
              };
            }();

            data = req.body.data;
            trueAnswerCount = 0;
            i = 0;

          case 15:
            if (!(i < data.length)) {
              _context5.next = 23;
              break;
            }

            _context5.next = 18;
            return answerFilter(data[i]);

          case 18:
            ans = _context5.sent;

            if (ans[0]["true"] == 1) {
              trueAnswerCount++;
            }

          case 20:
            i++;
            _context5.next = 15;
            break;

          case 23:
            result = Math.ceil(trueAnswerCount * 100 / questions.length);
            _context5.next = 26;
            return _connectionExamDB["default"].query('UPDATE `results` SET result="' + result + '" where id=' + req.body.studentId);

          case 26:
            return _context5.abrupt("return", res.status(200).send({
              type: "ok",
              result: result
            }));

          case 29:
            _context5.prev = 29;
            _context5.t0 = _context5["catch"](4);
            return _context5.abrupt("return", res.status(401).send({
              type: "errors",
              msg: _context5.t0.message
            }));

          case 32:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[4, 29]]);
  }));

  return function (_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}());
router.post('/results', /*#__PURE__*/function () {
  var _ref6 = (0, _bluebird.coroutine)( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var results;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _connectionExamDB["default"].query('SELECT id,name,surname,date,result FROM results');

          case 3:
            results = _context6.sent;
            return _context6.abrupt("return", res.status(200).send({
              type: "ok",
              results: results
            }));

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", res.status(401).send({
              type: "error",
              msg: _context6.t0.message
            }));

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 7]]);
  }));

  return function (_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;