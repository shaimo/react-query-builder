'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Date = (_temp = _class = function (_Component) {
  _inherits(Date, _Component);

  function Date() {
    _classCallCheck(this, Date);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Date).apply(this, arguments));
  }

  _createClass(Date, [{
    key: 'handleChange',
    value: function handleChange() {
      //    const node = ReactDOM.findDOMNode(this.refs.date);
      this.props.setValue(this.refs.date.getValue());
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      console.log("In Date:handleClick");
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Col,
        { xs: 3 },
        _react2.default.createElement(
          'label',
          null,
          'Value'
        ),
        _react2.default.createElement(_reactBootstrap.Input, { autoFocus: this.props.delta === 0, type: 'date', ref: 'date', value: this.props.value, onInput: this.handleClick(this), onChange: this.handleChange.bind(this) })
      );
    }
  }]);

  return Date;
}(_react.Component), _class.propTypes = {
  setValue: _react.PropTypes.func.isRequired,
  delta: _react.PropTypes.number.isRequired
}, _temp);
exports.default = Date;