"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormField = _interopRequireDefault(require("../FormField"));

var _StyledInput = _interopRequireDefault(require("./StyledInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Input = _react["default"].forwardRef(function (_ref, ref) {
  var caption = _ref.caption,
      label = _ref.label,
      labelAside = _ref.labelAside,
      id = _ref.id,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      validate = _ref.validate,
      props = _objectWithoutProperties(_ref, ["caption", "label", "labelAside", "id", "onBlur", "onChange", "validate"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      touched = _useState2[0],
      setTouched = _useState2[1];

  var _useState3 = (0, _react.useState)(props.value),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var errorMessage = touched && validate(value);

  var handleBlur = function handleBlur(event) {
    setTouched(true);

    if (onBlur) {
      onBlur(event);
    }
  };

  var handleChange = function handleChange(event) {
    setValue(event.target.value);

    if (onChange) {
      onChange(event);
    }
  };

  return _react["default"].createElement(_FormField["default"], {
    caption: errorMessage || caption,
    id: id,
    label: label,
    labelAside: labelAside
  }, _react["default"].createElement(_StyledInput["default"], _extends({}, _objectSpread({}, props, {
    id: id,
    ref: ref
  }), {
    isInvalid: !!errorMessage,
    onBlur: handleBlur,
    onChange: handleChange
  })));
});

Input.propTypes = {
  /**
   * The actualy HTML element tag to use when rendering.
   */
  as: _propTypes["default"].string,

  /**
   * Optional text to be displayed underneath the input.
   */
  caption: _propTypes["default"].string,

  /**
   * HTML ID for the input to be used in conjunction with the label for
   * accessiblity.
   */
  id: _propTypes["default"].string.isRequired,

  /**
   * Label text for the form field
   */
  label: _propTypes["default"].string,

  /**
   * Component that goes to the right of the label. Does not have to only be text.
   */
  labelAside: _propTypes["default"].node,

  /**
   * Function called when input loses focus.
   */
  onBlur: _propTypes["default"].func,

  /**
   * Function called when state changes.
   */
  onChange: _propTypes["default"].func,

  /**
   * HTML Input type
   */
  type: _propTypes["default"].string,

  /**
   * Optional validate function.
   */
  validate: _propTypes["default"].func,

  /**
   * HTML Input value
   */
  value: _propTypes["default"].string
};
Input.defaultProps = {
  as: 'input',
  caption: '',
  label: '',
  labelAside: null,
  onBlur: undefined,
  onChange: undefined,
  type: 'text',
  validate: function validate() {
    return undefined;
  },
  value: undefined
};
var _default = Input;
exports["default"] = _default;