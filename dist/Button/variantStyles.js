"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _polished = require("polished");

var _themeGet = require("@styled-system/theme-get");

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var variants = function variants(_ref) {
  var intent = _ref.intent,
      variant = _ref.variant,
      paletteColor = _ref.paletteColor,
      props = _objectWithoutProperties(_ref, ["intent", "variant", "paletteColor"]);

  var colorIntent = (0, _themeGet.themeGet)("colors.intent.".concat(intent, ".default"))(props);
  var colorWhite = (0, _themeGet.themeGet)('colors.monochrome.white')(props);
  var colorGrey = (0, _themeGet.themeGet)("colors.monochrome.grey10")(props);

  var color = function color() {
    if (paletteColor) {
      return (0, _themeGet.themeGet)("colors.palette.".concat(paletteColor, ".default"))(props);
    }

    if (variant === 'primary') {
      return intent === 'brand' ? (0, _themeGet.themeGet)("colors.intent.".concat(intent, ".lighter"))(props) : colorWhite;
    }

    return colorIntent;
  };

  var colorActive = (0, _polished.shade)(0.16, colorIntent);
  var colorFocus = (0, _themeGet.themeGet)("colors.intent.".concat(intent, ".light"))(props);
  var colorHover = (0, _polished.tint)(0.16, colorIntent);

  var colorIcon = function colorIcon() {
    if (paletteColor) {
      return (0, _themeGet.themeGet)("colors.palette.".concat(paletteColor, ".default"))(props);
    }

    if (variant !== 'primary' && intent === 'brand') {
      return (0, _themeGet.themeGet)("colors.icon.default")(props);
    }

    return 'inherit';
  };

  var common = /*#__PURE__*/(0, _core.css)("&::-moz-focus-inner{border:0;}&:focus{border:1px solid transparent;}&:focus:hover{border:1px solid transparent;}i{color:", colorIcon(), ";};label:common;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vdmFyaWFudFN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ29CIiwiZmlsZSI6Ii4uLy4uL3NyYy9CdXR0b24vdmFyaWFudFN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgc2hhZGUsIHRpbnQgfSBmcm9tICdwb2xpc2hlZCc7XG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XG5cbmNvbnN0IHZhcmlhbnRzID0gKHsgaW50ZW50LCB2YXJpYW50LCBwYWxldHRlQ29sb3IsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgY29sb3JJbnRlbnQgPSB0aGVtZUdldChgY29sb3JzLmludGVudC4ke2ludGVudH0uZGVmYXVsdGApKHByb3BzKTtcbiAgY29uc3QgY29sb3JXaGl0ZSA9IHRoZW1lR2V0KCdjb2xvcnMubW9ub2Nocm9tZS53aGl0ZScpKHByb3BzKTtcbiAgY29uc3QgY29sb3JHcmV5ID0gdGhlbWVHZXQoYGNvbG9ycy5tb25vY2hyb21lLmdyZXkxMGApKHByb3BzKTtcbiAgY29uc3QgY29sb3IgPSAoKSA9PiB7XG4gICAgaWYgKHBhbGV0dGVDb2xvcikge1xuICAgICAgcmV0dXJuIHRoZW1lR2V0KGBjb2xvcnMucGFsZXR0ZS4ke3BhbGV0dGVDb2xvcn0uZGVmYXVsdGApKHByb3BzKTtcbiAgICB9XG4gICAgaWYgKHZhcmlhbnQgPT09ICdwcmltYXJ5Jykge1xuICAgICAgcmV0dXJuIGludGVudCA9PT0gJ2JyYW5kJ1xuICAgICAgICA/IHRoZW1lR2V0KGBjb2xvcnMuaW50ZW50LiR7aW50ZW50fS5saWdodGVyYCkocHJvcHMpXG4gICAgICAgIDogY29sb3JXaGl0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9ySW50ZW50O1xuICB9O1xuXG4gIGNvbnN0IGNvbG9yQWN0aXZlID0gc2hhZGUoMC4xNiwgY29sb3JJbnRlbnQpO1xuICBjb25zdCBjb2xvckZvY3VzID0gdGhlbWVHZXQoYGNvbG9ycy5pbnRlbnQuJHtpbnRlbnR9LmxpZ2h0YCkocHJvcHMpO1xuICBjb25zdCBjb2xvckhvdmVyID0gdGludCgwLjE2LCBjb2xvckludGVudCk7XG4gIGNvbnN0IGNvbG9ySWNvbiA9ICgpID0+IHtcbiAgICBpZiAocGFsZXR0ZUNvbG9yKSB7XG4gICAgICByZXR1cm4gdGhlbWVHZXQoYGNvbG9ycy5wYWxldHRlLiR7cGFsZXR0ZUNvbG9yfS5kZWZhdWx0YCkocHJvcHMpO1xuICAgIH1cblxuICAgIGlmICh2YXJpYW50ICE9PSAncHJpbWFyeScgJiYgaW50ZW50ID09PSAnYnJhbmQnKSB7XG4gICAgICByZXR1cm4gdGhlbWVHZXQoYGNvbG9ycy5pY29uLmRlZmF1bHRgKShwcm9wcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuICdpbmhlcml0JztcbiAgfTtcblxuICBjb25zdCBjb21tb24gPSBjc3NgXG4gICAgJjo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOmZvY3VzOmhvdmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIGkge1xuICAgICAgY29sb3I6ICR7Y29sb3JJY29uKCl9O1xuICAgIH1cbiAgYDtcblxuICBzd2l0Y2ggKHZhcmlhbnQpIHtcbiAgICBjYXNlICdwcmltYXJ5JzpcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JJbnRlbnR9O1xuICAgICAgICBjb2xvcjogJHtjb2xvcigpfTtcblxuICAgICAgICAmOmVuYWJsZWQge1xuICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JBY3RpdmV9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4ICR7Y29sb3JGb2N1c307XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ySG92ZXJ9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICR7Y29tbW9ufTtcbiAgICAgIGA7XG4gICAgY2FzZSAnc2Vjb25kYXJ5JzpcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JXaGl0ZX07XG4gICAgICAgIGNvbG9yOiAke2NvbG9yKCl9O1xuXG4gICAgICAgICY6ZW5hYmxlZCB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZUdldChgY29sb3JzLmJvcmRlci5kZWZhdWx0YCkocHJvcHMpfTtcblxuICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yQWN0aXZlfTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JHcmV5fTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCAke2NvbG9yRm9jdXN9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvckhvdmVyfTtcblxuICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yKCl9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICR7Y29tbW9ufTtcbiAgICAgIGA7XG4gICAgY2FzZSAnbWluaW1hbCc6XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAke2NvbG9yKCl9O1xuXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KGBjb2xvcnMudGV4dC5kaXNhYmxlZGApKHByb3BzKX07XG5cbiAgICAgICAgICAvKiBxdWlldCBhbiBpbnZhbGlkIGxpbnQgZXJyb3IgLSBidXR0b24gY2Fubm90IGJlIGRpc2FibGVkIGFuZCBlbmFibGVkIGF0IHRoZSBzYW1lIHRpbWUgKi9cbiAgICAgICAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZGVzY2VuZGluZy1zcGVjaWZpY2l0eSAqL1xuICAgICAgICAgIGkge1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoYGNvbG9ycy5pY29uLmRpc2FibGVkYCkocHJvcHMpfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmOmVuYWJsZWQge1xuICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JHcmV5fTtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yQWN0aXZlfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCAke2NvbG9yRm9jdXN9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvckdyZXl9O1xuXG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3IoKX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJHtjb21tb259O1xuICAgICAgYDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB2YXJpYW50cztcbiJdfQ== */"));

  switch (variant) {
    case 'primary':
      return /*#__PURE__*/(0, _core.css)("background-color:", colorIntent, ";color:", color(), ";&:enabled{&:active{background-color:", colorActive, ";}&:focus{box-shadow:0 0 0 3px ", colorFocus, ";}&:hover{background-color:", colorHover, ";}}", common, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vdmFyaWFudFN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RGdCIiwiZmlsZSI6Ii4uLy4uL3NyYy9CdXR0b24vdmFyaWFudFN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgc2hhZGUsIHRpbnQgfSBmcm9tICdwb2xpc2hlZCc7XG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XG5cbmNvbnN0IHZhcmlhbnRzID0gKHsgaW50ZW50LCB2YXJpYW50LCBwYWxldHRlQ29sb3IsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgY29sb3JJbnRlbnQgPSB0aGVtZUdldChgY29sb3JzLmludGVudC4ke2ludGVudH0uZGVmYXVsdGApKHByb3BzKTtcbiAgY29uc3QgY29sb3JXaGl0ZSA9IHRoZW1lR2V0KCdjb2xvcnMubW9ub2Nocm9tZS53aGl0ZScpKHByb3BzKTtcbiAgY29uc3QgY29sb3JHcmV5ID0gdGhlbWVHZXQoYGNvbG9ycy5tb25vY2hyb21lLmdyZXkxMGApKHByb3BzKTtcbiAgY29uc3QgY29sb3IgPSAoKSA9PiB7XG4gICAgaWYgKHBhbGV0dGVDb2xvcikge1xuICAgICAgcmV0dXJuIHRoZW1lR2V0KGBjb2xvcnMucGFsZXR0ZS4ke3BhbGV0dGVDb2xvcn0uZGVmYXVsdGApKHByb3BzKTtcbiAgICB9XG4gICAgaWYgKHZhcmlhbnQgPT09ICdwcmltYXJ5Jykge1xuICAgICAgcmV0dXJuIGludGVudCA9PT0gJ2JyYW5kJ1xuICAgICAgICA/IHRoZW1lR2V0KGBjb2xvcnMuaW50ZW50LiR7aW50ZW50fS5saWdodGVyYCkocHJvcHMpXG4gICAgICAgIDogY29sb3JXaGl0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9ySW50ZW50O1xuICB9O1xuXG4gIGNvbnN0IGNvbG9yQWN0aXZlID0gc2hhZGUoMC4xNiwgY29sb3JJbnRlbnQpO1xuICBjb25zdCBjb2xvckZvY3VzID0gdGhlbWVHZXQoYGNvbG9ycy5pbnRlbnQuJHtpbnRlbnR9LmxpZ2h0YCkocHJvcHMpO1xuICBjb25zdCBjb2xvckhvdmVyID0gdGludCgwLjE2LCBjb2xvckludGVudCk7XG4gIGNvbnN0IGNvbG9ySWNvbiA9ICgpID0+IHtcbiAgICBpZiAocGFsZXR0ZUNvbG9yKSB7XG4gICAgICByZXR1cm4gdGhlbWVHZXQoYGNvbG9ycy5wYWxldHRlLiR7cGFsZXR0ZUNvbG9yfS5kZWZhdWx0YCkocHJvcHMpO1xuICAgIH1cblxuICAgIGlmICh2YXJpYW50ICE9PSAncHJpbWFyeScgJiYgaW50ZW50ID09PSAnYnJhbmQnKSB7XG4gICAgICByZXR1cm4gdGhlbWVHZXQoYGNvbG9ycy5pY29uLmRlZmF1bHRgKShwcm9wcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuICdpbmhlcml0JztcbiAgfTtcblxuICBjb25zdCBjb21tb24gPSBjc3NgXG4gICAgJjo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOmZvY3VzOmhvdmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIGkge1xuICAgICAgY29sb3I6ICR7Y29sb3JJY29uKCl9O1xuICAgIH1cbiAgYDtcblxuICBzd2l0Y2ggKHZhcmlhbnQpIHtcbiAgICBjYXNlICdwcmltYXJ5JzpcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JJbnRlbnR9O1xuICAgICAgICBjb2xvcjogJHtjb2xvcigpfTtcblxuICAgICAgICAmOmVuYWJsZWQge1xuICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JBY3RpdmV9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4ICR7Y29sb3JGb2N1c307XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ySG92ZXJ9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICR7Y29tbW9ufTtcbiAgICAgIGA7XG4gICAgY2FzZSAnc2Vjb25kYXJ5JzpcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JXaGl0ZX07XG4gICAgICAgIGNvbG9yOiAke2NvbG9yKCl9O1xuXG4gICAgICAgICY6ZW5hYmxlZCB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZUdldChgY29sb3JzLmJvcmRlci5kZWZhdWx0YCkocHJvcHMpfTtcblxuICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yQWN0aXZlfTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JHcmV5fTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCAke2NvbG9yRm9jdXN9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvckhvdmVyfTtcblxuICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yKCl9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICR7Y29tbW9ufTtcbiAgICAgIGA7XG4gICAgY2FzZSAnbWluaW1hbCc6XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAke2NvbG9yKCl9O1xuXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KGBjb2xvcnMudGV4dC5kaXNhYmxlZGApKHByb3BzKX07XG5cbiAgICAgICAgICAvKiBxdWlldCBhbiBpbnZhbGlkIGxpbnQgZXJyb3IgLSBidXR0b24gY2Fubm90IGJlIGRpc2FibGVkIGFuZCBlbmFibGVkIGF0IHRoZSBzYW1lIHRpbWUgKi9cbiAgICAgICAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZGVzY2VuZGluZy1zcGVjaWZpY2l0eSAqL1xuICAgICAgICAgIGkge1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoYGNvbG9ycy5pY29uLmRpc2FibGVkYCkocHJvcHMpfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmOmVuYWJsZWQge1xuICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JHcmV5fTtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yQWN0aXZlfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCAke2NvbG9yRm9jdXN9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvckdyZXl9O1xuXG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3IoKX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJHtjb21tb259O1xuICAgICAgYDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB2YXJpYW50cztcbiJdfQ== */"));

    case 'secondary':
      return /*#__PURE__*/(0, _core.css)("background-color:", colorWhite, ";color:", color(), ";&:enabled{border:1px solid ", (0, _themeGet.themeGet)("colors.border.default")(props), ";&:active{color:", colorActive, ";background-color:", colorGrey, ";}&:focus{box-shadow:0 0 0 3px ", colorFocus, ";}&:hover{border:1px solid ", colorHover, ";i{color:", color(), ";}}}", common, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vdmFyaWFudFN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RWdCIiwiZmlsZSI6Ii4uLy4uL3NyYy9CdXR0b24vdmFyaWFudFN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgc2hhZGUsIHRpbnQgfSBmcm9tICdwb2xpc2hlZCc7XG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XG5cbmNvbnN0IHZhcmlhbnRzID0gKHsgaW50ZW50LCB2YXJpYW50LCBwYWxldHRlQ29sb3IsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgY29sb3JJbnRlbnQgPSB0aGVtZUdldChgY29sb3JzLmludGVudC4ke2ludGVudH0uZGVmYXVsdGApKHByb3BzKTtcbiAgY29uc3QgY29sb3JXaGl0ZSA9IHRoZW1lR2V0KCdjb2xvcnMubW9ub2Nocm9tZS53aGl0ZScpKHByb3BzKTtcbiAgY29uc3QgY29sb3JHcmV5ID0gdGhlbWVHZXQoYGNvbG9ycy5tb25vY2hyb21lLmdyZXkxMGApKHByb3BzKTtcbiAgY29uc3QgY29sb3IgPSAoKSA9PiB7XG4gICAgaWYgKHBhbGV0dGVDb2xvcikge1xuICAgICAgcmV0dXJuIHRoZW1lR2V0KGBjb2xvcnMucGFsZXR0ZS4ke3BhbGV0dGVDb2xvcn0uZGVmYXVsdGApKHByb3BzKTtcbiAgICB9XG4gICAgaWYgKHZhcmlhbnQgPT09ICdwcmltYXJ5Jykge1xuICAgICAgcmV0dXJuIGludGVudCA9PT0gJ2JyYW5kJ1xuICAgICAgICA/IHRoZW1lR2V0KGBjb2xvcnMuaW50ZW50LiR7aW50ZW50fS5saWdodGVyYCkocHJvcHMpXG4gICAgICAgIDogY29sb3JXaGl0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9ySW50ZW50O1xuICB9O1xuXG4gIGNvbnN0IGNvbG9yQWN0aXZlID0gc2hhZGUoMC4xNiwgY29sb3JJbnRlbnQpO1xuICBjb25zdCBjb2xvckZvY3VzID0gdGhlbWVHZXQoYGNvbG9ycy5pbnRlbnQuJHtpbnRlbnR9LmxpZ2h0YCkocHJvcHMpO1xuICBjb25zdCBjb2xvckhvdmVyID0gdGludCgwLjE2LCBjb2xvckludGVudCk7XG4gIGNvbnN0IGNvbG9ySWNvbiA9ICgpID0+IHtcbiAgICBpZiAocGFsZXR0ZUNvbG9yKSB7XG4gICAgICByZXR1cm4gdGhlbWVHZXQoYGNvbG9ycy5wYWxldHRlLiR7cGFsZXR0ZUNvbG9yfS5kZWZhdWx0YCkocHJvcHMpO1xuICAgIH1cblxuICAgIGlmICh2YXJpYW50ICE9PSAncHJpbWFyeScgJiYgaW50ZW50ID09PSAnYnJhbmQnKSB7XG4gICAgICByZXR1cm4gdGhlbWVHZXQoYGNvbG9ycy5pY29uLmRlZmF1bHRgKShwcm9wcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuICdpbmhlcml0JztcbiAgfTtcblxuICBjb25zdCBjb21tb24gPSBjc3NgXG4gICAgJjo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOmZvY3VzOmhvdmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIGkge1xuICAgICAgY29sb3I6ICR7Y29sb3JJY29uKCl9O1xuICAgIH1cbiAgYDtcblxuICBzd2l0Y2ggKHZhcmlhbnQpIHtcbiAgICBjYXNlICdwcmltYXJ5JzpcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JJbnRlbnR9O1xuICAgICAgICBjb2xvcjogJHtjb2xvcigpfTtcblxuICAgICAgICAmOmVuYWJsZWQge1xuICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JBY3RpdmV9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4ICR7Y29sb3JGb2N1c307XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ySG92ZXJ9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICR7Y29tbW9ufTtcbiAgICAgIGA7XG4gICAgY2FzZSAnc2Vjb25kYXJ5JzpcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JXaGl0ZX07XG4gICAgICAgIGNvbG9yOiAke2NvbG9yKCl9O1xuXG4gICAgICAgICY6ZW5hYmxlZCB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZUdldChgY29sb3JzLmJvcmRlci5kZWZhdWx0YCkocHJvcHMpfTtcblxuICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yQWN0aXZlfTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JHcmV5fTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCAke2NvbG9yRm9jdXN9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvckhvdmVyfTtcblxuICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yKCl9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICR7Y29tbW9ufTtcbiAgICAgIGA7XG4gICAgY2FzZSAnbWluaW1hbCc6XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAke2NvbG9yKCl9O1xuXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KGBjb2xvcnMudGV4dC5kaXNhYmxlZGApKHByb3BzKX07XG5cbiAgICAgICAgICAvKiBxdWlldCBhbiBpbnZhbGlkIGxpbnQgZXJyb3IgLSBidXR0b24gY2Fubm90IGJlIGRpc2FibGVkIGFuZCBlbmFibGVkIGF0IHRoZSBzYW1lIHRpbWUgKi9cbiAgICAgICAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZGVzY2VuZGluZy1zcGVjaWZpY2l0eSAqL1xuICAgICAgICAgIGkge1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoYGNvbG9ycy5pY29uLmRpc2FibGVkYCkocHJvcHMpfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmOmVuYWJsZWQge1xuICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JHcmV5fTtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yQWN0aXZlfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCAke2NvbG9yRm9jdXN9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvckdyZXl9O1xuXG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3IoKX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJHtjb21tb259O1xuICAgICAgYDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB2YXJpYW50cztcbiJdfQ== */"));

    case 'minimal':
      return /*#__PURE__*/(0, _core.css)("background-color:transparent;border:1px solid transparent;color:", color(), ";&:disabled{background-color:transparent;color:", (0, _themeGet.themeGet)("colors.text.disabled")(props), ";i{color:", (0, _themeGet.themeGet)("colors.icon.disabled")(props), ";}}&:enabled{&:active{background-color:", colorGrey, ";color:", colorActive, ";}&:focus{box-shadow:0 0 0 3px ", colorFocus, ";}&:hover{background-color:", colorGrey, ";i{color:", color(), ";}}}", common, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vdmFyaWFudFN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3R2dCIiwiZmlsZSI6Ii4uLy4uL3NyYy9CdXR0b24vdmFyaWFudFN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgc2hhZGUsIHRpbnQgfSBmcm9tICdwb2xpc2hlZCc7XG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XG5cbmNvbnN0IHZhcmlhbnRzID0gKHsgaW50ZW50LCB2YXJpYW50LCBwYWxldHRlQ29sb3IsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgY29sb3JJbnRlbnQgPSB0aGVtZUdldChgY29sb3JzLmludGVudC4ke2ludGVudH0uZGVmYXVsdGApKHByb3BzKTtcbiAgY29uc3QgY29sb3JXaGl0ZSA9IHRoZW1lR2V0KCdjb2xvcnMubW9ub2Nocm9tZS53aGl0ZScpKHByb3BzKTtcbiAgY29uc3QgY29sb3JHcmV5ID0gdGhlbWVHZXQoYGNvbG9ycy5tb25vY2hyb21lLmdyZXkxMGApKHByb3BzKTtcbiAgY29uc3QgY29sb3IgPSAoKSA9PiB7XG4gICAgaWYgKHBhbGV0dGVDb2xvcikge1xuICAgICAgcmV0dXJuIHRoZW1lR2V0KGBjb2xvcnMucGFsZXR0ZS4ke3BhbGV0dGVDb2xvcn0uZGVmYXVsdGApKHByb3BzKTtcbiAgICB9XG4gICAgaWYgKHZhcmlhbnQgPT09ICdwcmltYXJ5Jykge1xuICAgICAgcmV0dXJuIGludGVudCA9PT0gJ2JyYW5kJ1xuICAgICAgICA/IHRoZW1lR2V0KGBjb2xvcnMuaW50ZW50LiR7aW50ZW50fS5saWdodGVyYCkocHJvcHMpXG4gICAgICAgIDogY29sb3JXaGl0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9ySW50ZW50O1xuICB9O1xuXG4gIGNvbnN0IGNvbG9yQWN0aXZlID0gc2hhZGUoMC4xNiwgY29sb3JJbnRlbnQpO1xuICBjb25zdCBjb2xvckZvY3VzID0gdGhlbWVHZXQoYGNvbG9ycy5pbnRlbnQuJHtpbnRlbnR9LmxpZ2h0YCkocHJvcHMpO1xuICBjb25zdCBjb2xvckhvdmVyID0gdGludCgwLjE2LCBjb2xvckludGVudCk7XG4gIGNvbnN0IGNvbG9ySWNvbiA9ICgpID0+IHtcbiAgICBpZiAocGFsZXR0ZUNvbG9yKSB7XG4gICAgICByZXR1cm4gdGhlbWVHZXQoYGNvbG9ycy5wYWxldHRlLiR7cGFsZXR0ZUNvbG9yfS5kZWZhdWx0YCkocHJvcHMpO1xuICAgIH1cblxuICAgIGlmICh2YXJpYW50ICE9PSAncHJpbWFyeScgJiYgaW50ZW50ID09PSAnYnJhbmQnKSB7XG4gICAgICByZXR1cm4gdGhlbWVHZXQoYGNvbG9ycy5pY29uLmRlZmF1bHRgKShwcm9wcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuICdpbmhlcml0JztcbiAgfTtcblxuICBjb25zdCBjb21tb24gPSBjc3NgXG4gICAgJjo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOmZvY3VzOmhvdmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIGkge1xuICAgICAgY29sb3I6ICR7Y29sb3JJY29uKCl9O1xuICAgIH1cbiAgYDtcblxuICBzd2l0Y2ggKHZhcmlhbnQpIHtcbiAgICBjYXNlICdwcmltYXJ5JzpcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JJbnRlbnR9O1xuICAgICAgICBjb2xvcjogJHtjb2xvcigpfTtcblxuICAgICAgICAmOmVuYWJsZWQge1xuICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JBY3RpdmV9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4ICR7Y29sb3JGb2N1c307XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ySG92ZXJ9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICR7Y29tbW9ufTtcbiAgICAgIGA7XG4gICAgY2FzZSAnc2Vjb25kYXJ5JzpcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JXaGl0ZX07XG4gICAgICAgIGNvbG9yOiAke2NvbG9yKCl9O1xuXG4gICAgICAgICY6ZW5hYmxlZCB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZUdldChgY29sb3JzLmJvcmRlci5kZWZhdWx0YCkocHJvcHMpfTtcblxuICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yQWN0aXZlfTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JHcmV5fTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCAke2NvbG9yRm9jdXN9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvckhvdmVyfTtcblxuICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yKCl9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICR7Y29tbW9ufTtcbiAgICAgIGA7XG4gICAgY2FzZSAnbWluaW1hbCc6XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAke2NvbG9yKCl9O1xuXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KGBjb2xvcnMudGV4dC5kaXNhYmxlZGApKHByb3BzKX07XG5cbiAgICAgICAgICAvKiBxdWlldCBhbiBpbnZhbGlkIGxpbnQgZXJyb3IgLSBidXR0b24gY2Fubm90IGJlIGRpc2FibGVkIGFuZCBlbmFibGVkIGF0IHRoZSBzYW1lIHRpbWUgKi9cbiAgICAgICAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZGVzY2VuZGluZy1zcGVjaWZpY2l0eSAqL1xuICAgICAgICAgIGkge1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoYGNvbG9ycy5pY29uLmRpc2FibGVkYCkocHJvcHMpfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmOmVuYWJsZWQge1xuICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JHcmV5fTtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yQWN0aXZlfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCAke2NvbG9yRm9jdXN9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvckdyZXl9O1xuXG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3IoKX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJHtjb21tb259O1xuICAgICAgYDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB2YXJpYW50cztcbiJdfQ== */"));

    default:
      return '';
  }
};

var _default = variants;
exports["default"] = _default;