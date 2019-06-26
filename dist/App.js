import _objectSpread from "/Users/Tero/Projects/cra-test/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread";
import _regeneratorRuntime from "/Users/Tero/Projects/cra-test/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/Tero/Projects/cra-test/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "/Users/Tero/Projects/cra-test/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/Tero/Projects/cra-test/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/Tero/Projects/cra-test/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/Tero/Projects/cra-test/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/Tero/Projects/cra-test/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import LoaderButton from './components/LoaderButton'; // Theme

import theme from './themes';
import overRideTheme from './themes/overrides/CircularProgress';
import { ThemeProvider } from '@material-ui/styles';

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _this.handleClick =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(event) {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                if (!_this.state.loading) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _this.setState({
                  loading: true,
                  disabled: true
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.state = {
      loading: false,
      disabled: false
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      //console.log('THEME',theme);
      var loaderButtonTheme = _objectSpread({}, theme, {
        overrides: _objectSpread({}, overRideTheme)
      });

      return React.createElement(ThemeProvider, {
        theme: loaderButtonTheme
      }, React.createElement(LoaderButton, {
        onClick: this.handleClick,
        color: "primary",
        loading: this.state.loading,
        variant: "contained"
      }, "Loading"));
    }
  }]);

  return App;
}(Component);

export { App as default };