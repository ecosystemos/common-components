import _classCallCheck from "/Users/Tero/Projects/cra-test/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/Tero/Projects/cra-test/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/Tero/Projects/cra-test/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/Tero/Projects/cra-test/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/Tero/Projects/cra-test/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';

var SharedComp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SharedComp, _React$Component);

  function SharedComp() {
    _classCallCheck(this, SharedComp);

    return _possibleConstructorReturn(this, _getPrototypeOf(SharedComp).apply(this, arguments));
  }

  _createClass(SharedComp, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        style: {
          padding: 30,
          backgroundColor: "red"
        }
      }, React.createElement("h1", null, "Testing"));
    }
  }]);

  return SharedComp;
}(React.Component);

export default SharedComp;