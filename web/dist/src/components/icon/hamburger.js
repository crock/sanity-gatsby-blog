"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var strokeStyle = {
  vectorEffect: 'non-scaling-stroke'
};

var HamburgerIcon = function HamburgerIcon() {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    width: "1em",
    height: "1em"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5 7.5H20",
    stroke: "currentColor",
    style: strokeStyle
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5 12.5H20",
    stroke: "currentColor",
    style: strokeStyle
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5 17.5H20",
    stroke: "currentColor",
    style: strokeStyle
  }));
};

var _default = HamburgerIcon;
exports["default"] = _default;

//# sourceMappingURL=hamburger.js.map