"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _iconSettings = _interopRequireDefault(require("../../../../components/icon-settings"));

var _input = _interopRequireDefault(require("../../../../components/input"));

var _inputIcon = _interopRequireDefault(require("../../../../components/icon/input-icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// `~` is replaced with design-system-react at runtime
var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example() {
    _classCallCheck(this, Example);

    return _possibleConstructorReturn(this, _getPrototypeOf(Example).apply(this, arguments));
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_iconSettings.default, {
        iconPath: "/assets/icons"
      }, _react.default.createElement("div", {
        className: "slds-grid slds-grid_pull-padded slds-grid_vertical-align-center"
      }, _react.default.createElement("h1", {
        className: "slds-text-title_caps slds-p-vertical_medium"
      }, "Input with Icons"), _react.default.createElement("div", {
        className: "slds-col_padded"
      }, _react.default.createElement(_input.default, {
        iconLeft: _react.default.createElement(_inputIcon.default, {
          assistiveText: {
            icon: 'Search'
          },
          name: "search",
          category: "utility"
        }),
        id: "unique-id-1",
        label: "Input Label",
        placeholder: "Static Icon on the left"
      })), _react.default.createElement("div", {
        className: "slds-col_padded"
      }, _react.default.createElement(_input.default, {
        iconLeft: _react.default.createElement(_inputIcon.default, {
          assistiveText: {
            icon: 'Search'
          },
          name: "search",
          category: "utility",
          onClick: function onClick() {
            console.log('Icon Clicked');
          }
        }),
        iconRight: _react.default.createElement(_inputIcon.default, {
          assistiveText: {
            icon: 'Clear'
          },
          name: "clear",
          category: "utility",
          onClick: function onClick() {
            console.log('Icon Clicked');
          }
        }),
        id: "unique-id-2",
        label: "Input Label",
        placeholder: "Clickable Icons (Left and Right)"
      })), _react.default.createElement("div", {
        className: "slds-col_padded"
      }, _react.default.createElement(_input.default, {
        iconRight: _react.default.createElement(_inputIcon.default, {
          assistiveText: {
            icon: 'Clear'
          },
          name: "clear",
          category: "utility",
          onClick: function onClick() {
            console.log('Icon Clicked');
          }
        }),
        id: "unique-id-3",
        label: "Input Label",
        placeholder: "Clickable Icon on the right"
      })), _react.default.createElement("div", {
        className: "slds-col_padded"
      }, _react.default.createElement(_input.default, {
        assistiveText: {
          spinner: 'Field data is loading'
        },
        iconRight: _react.default.createElement(_inputIcon.default, {
          assistiveText: {
            icon: 'Clear'
          },
          name: "clear",
          category: "utility",
          onClick: function onClick() {
            console.log('Icon Clicked');
          }
        }),
        hasSpinner: true,
        id: "unique-id-4",
        label: "Input Label",
        placeholder: "Loading Spinner Icon on the right"
      }))));
    }
  }]);

  return Example;
}(_react.default.Component);

_defineProperty(Example, "displayName", 'InputExample');

var _default = Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime

exports.default = _default;