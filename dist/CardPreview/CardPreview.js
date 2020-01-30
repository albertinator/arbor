"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CardPreview = (
/*#__PURE__*/
0, _styledBase["default"])(_Box["default"], {
  target: "e181cw5e0",
  label: "CardPreview"
})("background:url(", function (props) {
  return props.image;
}, ") center center no-repeat ", function (props) {
  return props.theme.colors.monochrome.black;
}, ";background-size:contain;", _utils.ratio, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DYXJkUHJldmlldy9DYXJkUHJldmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNK0IiLCJmaWxlIjoiLi4vLi4vc3JjL0NhcmRQcmV2aWV3L0NhcmRQcmV2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHJhdGlvIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5pbXBvcnQgQm94IGZyb20gJy4uL0JveCc7XG5cbmNvbnN0IENhcmRQcmV2aWV3ID0gc3R5bGVkKEJveClgXG4gIGJhY2tncm91bmQ6IHVybCgke3Byb3BzID0+IHByb3BzLmltYWdlfSkgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcbiAgICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5tb25vY2hyb21lLmJsYWNrfTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAke3JhdGlvfTtcbmA7XG5cbkNhcmRQcmV2aWV3LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEltYWdlIHRvIGJlIHJlbmRlcmVkIGFzIHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSBDYXJkUHJldmlld1xuICAgKi9cbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgLi4ucmF0aW8ucHJvcFR5cGVzXG59O1xuXG5DYXJkUHJldmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gIHJhdGlvOiA5IC8gMTZcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRQcmV2aWV3O1xuIl19 */"));
CardPreview.propTypes = _objectSpread({
  /**
   * Image to be rendered as the background of the CardPreview
   */
  image: _propTypes["default"].string.isRequired
}, _utils.ratio.propTypes);
CardPreview.defaultProps = {
  ratio: 9 / 16
};
var _default = CardPreview;
exports["default"] = _default;