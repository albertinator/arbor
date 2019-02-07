"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _Flex = _interopRequireDefault(require("../Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxLabel = (
/*#__PURE__*/
0, _styledBase.default)(_Flex.default.withComponent('label', {
  target: "eqny7xp1",
  label: "CheckboxLabel"
}), {
  target: "eqny7xp0",
  label: "CheckboxLabel"
})("cursor:", function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
}, ";line-height:", function (_ref) {
  var theme = _ref.theme;
  return theme.lineHeights.small;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DaGVja2JveC9DaGVja2JveExhYmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUl5RCIsImZpbGUiOiIuLi8uLi9zcmMvQ2hlY2tib3gvQ2hlY2tib3hMYWJlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IEZsZXggZnJvbSAnLi4vRmxleCc7XG5cbmNvbnN0IENoZWNrYm94TGFiZWwgPSBzdHlsZWQoRmxleC53aXRoQ29tcG9uZW50KCdsYWJlbCcpKWBcbiAgY3Vyc29yOiAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcicpfTtcbiAgbGluZS1oZWlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubGluZUhlaWdodHMuc21hbGx9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3hMYWJlbDtcbiJdfQ== */"));
var _default = CheckboxLabel;
exports.default = _default;