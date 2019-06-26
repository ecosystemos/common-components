import _objectWithoutProperties from "/Users/Tero/Projects/cra-test/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "/Users/Tero/Projects/cra-test/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/Tero/Projects/cra-test/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/Tero/Projects/cra-test/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/Tero/Projects/cra-test/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/Tero/Projects/cra-test/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import React from "react";
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

var PasswordAdornments =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PasswordAdornments, _React$Component);

  function PasswordAdornments(props, context) {
    var _this;

    _classCallCheck(this, PasswordAdornments);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PasswordAdornments).call(this, props, context));

    _this.handleMouseDownPassword = function (event) {
      event.preventDefault();
    };

    _this.handleClickShowPassword = function () {
      _this.setState(function (state) {
        return {
          showPassword: !state.showPassword
        };
      });
    };

    _this.state = {
      showPassword: false,
      error: false,
      passwordQuality: 0
    };
    return _this;
  }

  _createClass(PasswordAdornments, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          id = _this$props.id,
          label = _this$props.label,
          helper = _this$props.helper,
          rest = _objectWithoutProperties(_this$props, ["className", "id", "label", "helper"]);

      return React.createElement(FormControl, {
        "aria-describedby": "password-helper-text"
      }, React.createElement(InputLabel, {
        htmlFor: "adornment-password"
      }, label), React.createElement(Input, Object.assign({
        className: className,
        required: true,
        margin: "dense",
        id: id,
        type: this.state.showPassword ? 'text' : 'password'
      }, rest, {
        endAdornment: React.createElement(InputAdornment, {
          position: "end"
        }, React.createElement(IconButton, {
          "aria-label": "Toggle password visibility",
          onClick: this.handleClickShowPassword,
          onMouseDown: this.handleMouseDownPassword
        }, this.state.showPassword ? React.createElement(VisibilityOff, null) : React.createElement(Visibility, null)))
      })), React.createElement(FormHelperText, {
        id: "password-helper-text"
      }, helper));
    }
  }]);

  return PasswordAdornments;
}(React.Component);

export default PasswordAdornments;