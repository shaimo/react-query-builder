'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tree = require('../stores/tree');

var _tree2 = _interopRequireDefault(_tree);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _bindActionCreators = require('../utils/bindActionCreators');

var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stringify = require('json-stringify-safe');

var ConnectedQuery = function (_Component) {
  _inherits(ConnectedQuery, _Component);

  function ConnectedQuery() {
    _classCallCheck(this, ConnectedQuery);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ConnectedQuery).apply(this, arguments));
  }

  _createClass(ConnectedQuery, [{
    key: 'render',
    value: function render() {
      //        console.log("In ConnectedQuery:render. state="+this.props.store.getState().toString()+" props="+stringify(this.props));
      //        console.log("get_children="+stringify(this.props.get_children));
      //        console.log("dispatch="+stringify(this.props.dispatch));
      var _props = this.props;
      var config = _props.config;
      var tree = _props.tree;
      var get_children = _props.get_children;
      var dispatch = _props.dispatch;

      var props = _objectWithoutProperties(_props, ['config', 'tree', 'get_children', 'dispatch']);

      return _react2.default.createElement(
        'div',
        null,
        get_children({
          tree: tree,
          actions: (0, _bindActionCreators2.default)(_extends({}, actions.tree, actions.group, actions.rule), config, dispatch),
          config: config,
          dispatch: dispatch
        })
      );
    }
  }]);

  return ConnectedQuery;
}(_react.Component);

var QueryContainer = (0, _reactRedux.connect)(function (tree) {
  console.log("connect:State=" + tree.toString());return { tree: tree };
})(
/*                                (dispatch, props) => {
                                    const { conjunctions, fields, operators, widgets, settings, children } = props;
                                    const config = { conjunctions, fields, operators, widgets, settings };
                                    return bindActionCreators({ ...actions.tree, ...actions.group, ...actions.rule }, config, dispatch);
                                  },*/
ConnectedQuery);

var Query = function (_Component2) {
  _inherits(Query, _Component2);

  function Query(props, context) {
    _classCallCheck(this, Query);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Query).call(this, props, context));

    var config = {
      conjunctions: props.conjunctions,
      fields: props.fields,
      operators: props.operators,
      widgets: props.widgets,
      settings: props.settings
    };

    var tree = (0, _tree2.default)(config);

    _this2.state = {
      store: (0, _redux.createStore)(tree)
    };
    //    console.log("Query:constructor. state="+stringify(this.state.store.getState()));
    return _this2;
  }

  _createClass(Query, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var conjunctions = _props2.conjunctions;
      var fields = _props2.fields;
      var operators = _props2.operators;
      var widgets = _props2.widgets;
      var settings = _props2.settings;
      var children = _props2.children;
      var get_children = _props2.get_children;

      var props = _objectWithoutProperties(_props2, ['conjunctions', 'fields', 'operators', 'widgets', 'settings', 'children', 'get_children']);

      var config = { conjunctions: conjunctions, fields: fields, operators: operators, widgets: widgets, settings: settings };

      //    console.log("In Query:render. state="+stringify(this.state.store.getState())+" props="+stringify(this.props));
      //    console.log("children="+stringify(this.props.children));
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: this.state.store },
        _react2.default.createElement(QueryContainer, { store: this.state.store, get_children: get_children, config: config })
      );
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: this.state.store },
        function () {
          return _react2.default.createElement(
            _reactRedux.Connector,
            { select: function select(_ref) {
                var tree = _ref.tree;
                return { tree: tree };
              } },
            function (_ref2) {
              var tree = _ref2.tree;
              var dispatch = _ref2.dispatch;

              return children({
                tree: tree,
                actions: (0, _bindActionCreators2.default)(_extends({}, actions.tree, actions.group, actions.rule), config, dispatch),
                config: config
              });
            }
          );
        }
      );
    }
  }]);

  return Query;
}(_react.Component);

exports.default = Query;