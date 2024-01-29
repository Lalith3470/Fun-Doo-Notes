"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newUser = exports.get1user = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _winston = require("winston");
var _user = _interopRequireDefault(require("../models/user.model"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
// registration function
var get1user = exports.get1user = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var hashedPassword, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _bcrypt["default"].hash(body.password, 10);
        case 2:
          hashedPassword = _context.sent;
          body.password = hashedPassword;
          _context.next = 6;
          return _user["default"].create(body);
        case 6:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function get1user(_x) {
    return _ref.apply(this, arguments);
  };
}();

//login function
var newUser = exports.newUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var existingUser, isPasswordMatch;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _user["default"].findOne({
            email_id: body.email_id
          });
        case 3:
          existingUser = _context2.sent;
          if (!existingUser) {
            _context2.next = 11;
            break;
          }
          _context2.next = 7;
          return _bcrypt["default"].compare(body.password, existingUser.password);
        case 7:
          isPasswordMatch = _context2.sent;
          return _context2.abrupt("return", isPasswordMatch);
        case 11:
          return _context2.abrupt("return", false);
        case 12:
          _context2.next = 17;
          break;
        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", false);
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 14]]);
  }));
  return function newUser(_x2) {
    return _ref2.apply(this, arguments);
  };
}();