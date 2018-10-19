"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Box =
/*#__PURE__*/
(0, _reactEmotion.default)("div", {
  label: "Box",
  target: "ee1vgs60"
})(_styledSystem.space, ";", _styledSystem.color, ";", _styledSystem.width, ";", _styledSystem.height, ";", _styledSystem.maxWidth, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Cb3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR3NCIiwiZmlsZSI6Ii4uL3NyYy9Cb3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3JlYWN0LWVtb3Rpb24nO1xuaW1wb3J0IHsgY29sb3IsIHNwYWNlLCB3aWR0aCwgaGVpZ2h0LCBtYXhXaWR0aCB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5jb25zdCBCb3ggPSBzdHlsZWQuZGl2YFxuICAke3NwYWNlfTtcbiAgJHtjb2xvcn07XG4gICR7d2lkdGh9O1xuICAke2hlaWdodH07XG4gICR7bWF4V2lkdGh9O1xuYDtcblxuQm94LnByb3BUeXBlcyA9IHtcbiAgLi4uc3BhY2UucHJvcFR5cGVzLFxuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLndpZHRoLnByb3BUeXBlcyxcbiAgLi4uaGVpZ2h0LnByb3BUeXBlcyxcbiAgLi4ubWF4V2lkdGgucHJvcFR5cGVzXG59O1xuXG5Cb3guc2VjdGlvbiA9IEJveC53aXRoQ29tcG9uZW50KCdzZWN0aW9uJyk7XG5cbmV4cG9ydCBkZWZhdWx0IEJveDtcbiJdfQ== */");
Box.propTypes = _objectSpread({}, _styledSystem.space.propTypes, _styledSystem.color.propTypes, _styledSystem.width.propTypes, _styledSystem.height.propTypes, _styledSystem.maxWidth.propTypes);
Box.section = Box.withComponent('section', {
  target: "ee1vgs61"
});
var _default = Box;
exports.default = _default;