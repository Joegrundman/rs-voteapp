module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Navbar = __webpack_require__(2);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Signup = __webpack_require__(7);

	var _Signup2 = _interopRequireDefault(_Signup);

	var _Footer = __webpack_require__(10);

	var _Footer2 = _interopRequireDefault(_Footer);

	__webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App() {
	        _classCallCheck(this, App);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	    }

	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_Navbar2.default, null),
	                _react2.default.createElement(_Signup2.default, null),
	                _react2.default.createElement(_Footer2.default, null)
	            );
	        }
	    }]);

	    return App;
	}(_react2.default.Component);

	exports.default = App;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Navbar = function (_React$Component) {
	    _inherits(Navbar, _React$Component);

	    function Navbar() {
	        _classCallCheck(this, Navbar);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).apply(this, arguments));
	    }

	    _createClass(Navbar, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'nav',
	                { className: 'navbar navbar-default' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'container-fluid' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'navbar-header' },
	                        _react2.default.createElement(
	                            'a',
	                            { className: 'navbar-brand', href: '#' },
	                            'VotePal'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'ul',
	                        { className: 'nav navbar-nav navbar-right' },
	                        _react2.default.createElement(
	                            'li',
	                            { className: 'active' },
	                            _react2.default.createElement(
	                                'a',
	                                { href: '#' },
	                                'Home'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            _react2.default.createElement(
	                                'a',
	                                { href: '#' },
	                                'Signup'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            _react2.default.createElement(
	                                'a',
	                                { href: '#' },
	                                'Login'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Navbar;
	}(_react2.default.Component);

	exports.default = Navbar;

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Signup = function (_React$Component) {
	    _inherits(Signup, _React$Component);

	    function Signup(props) {
	        _classCallCheck(this, Signup);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Signup).call(this, props));

	        _this.state = {
	            email: '',
	            password: '',
	            confirmPassword: ''
	        };

	        _this.handleEmailChange = _this.handleEmailChange.bind(_this);
	        _this.handlePasswordChange = _this.handlePasswordChange.bind(_this);
	        _this.handleConfirmPasswordChange = _this.handleConfirmPasswordChange.bind(_this);
	        _this.handleSubmit = _this.handleSubmit.bind(_this);
	        return _this;
	    }

	    _createClass(Signup, [{
	        key: 'handleEmailChange',
	        value: function handleEmailChange(e) {
	            this.setState({
	                email: e.target.value
	            });
	        }
	    }, {
	        key: 'handlePasswordChange',
	        value: function handlePasswordChange(e) {
	            this.setState({
	                password: e.target.value
	            });
	        }
	    }, {
	        key: 'handleConfirmPasswordChange',
	        value: function handleConfirmPasswordChange(e) {
	            this.setState({
	                confirmPassword: e.target.value
	            });
	        }
	    }, {
	        key: 'handleSubmit',
	        value: function handleSubmit(e) {
	            e.preventDefault();

	            $.ajax({
	                url: 'signup',
	                method: 'post',
	                data: JSON.stringify(this.state),
	                success: function success(data) {
	                    console.log('success');
	                },
	                error: function error(data) {
	                    console.log('error');
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'form',
	                            { onSubmit: this.handleSubmit },
	                            _react2.default.createElement(
	                                'h1',
	                                null,
	                                'Signup form'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'col-lg-6' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'well well-sm' },
	                                    _react2.default.createElement(
	                                        'strong',
	                                        null,
	                                        _react2.default.createElement('span', { className: 'fa fa-asterisk' }),
	                                        'Required Field'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'form-group' },
	                                    _react2.default.createElement(
	                                        'label',
	                                        { htmlFor: 'InputEmail' },
	                                        'Enter Email'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'input-group' },
	                                        _react2.default.createElement('input', { type: 'email',
	                                            className: 'form-control',
	                                            value: this.state.email,
	                                            onChange: this.handleEmailChange,
	                                            name: 'InputEmail', id: 'InputEmail',
	                                            placeholder: 'Enter Email', required: true }),
	                                        _react2.default.createElement(
	                                            'span',
	                                            { className: 'input-group-addon' },
	                                            _react2.default.createElement('span', { className: 'fa fa-asterisk' })
	                                        )
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'form-group' },
	                                    _react2.default.createElement(
	                                        'label',
	                                        { htmlFor: 'InputPassword' },
	                                        'Enter Password'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'input-group' },
	                                        _react2.default.createElement('input', { type: 'password',
	                                            className: 'form-control',
	                                            onChange: this.handlePasswordChange,
	                                            name: 'InputPassword', id: 'InputPassword',
	                                            placeholder: 'Enter Password', required: true }),
	                                        _react2.default.createElement(
	                                            'span',
	                                            { className: 'input-group-addon' },
	                                            _react2.default.createElement('span', { className: 'fa fa-asterisk' })
	                                        )
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'form-group' },
	                                    _react2.default.createElement(
	                                        'label',
	                                        { htmlFor: 'ConfirmPassword' },
	                                        'Confirm Password'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'input-group' },
	                                        _react2.default.createElement('input', { type: 'password',
	                                            className: 'form-control',
	                                            onChange: this.handleConfirmPasswordChange,
	                                            name: 'ConfirmEmail', id: 'ConfirmEmail',
	                                            placeholder: 'Confirm Password', required: true }),
	                                        _react2.default.createElement(
	                                            'span',
	                                            { className: 'input-group-addon' },
	                                            _react2.default.createElement('span', { className: 'fa fa-asterisk' })
	                                        )
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement('input', { type: 'submit', className: 'btn btn-large btn-primary', value: 'Submit' })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-lg-5 col-md-push-1' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'col-md-12' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'alert alert-success' },
	                                    _react2.default.createElement(
	                                        'strong',
	                                        null,
	                                        _react2.default.createElement('span', { className: 'fa fa-check' }),
	                                        ' Success! Message sent.'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'alert alert-danger' },
	                                    _react2.default.createElement('span', { className: 'fa fa-remove' }),
	                                    _react2.default.createElement(
	                                        'strong',
	                                        null,
	                                        ' Error! Please check all page inputs.'
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Signup;
	}(_react2.default.Component);

	exports.default = Signup;

/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Footer = function (_React$Component) {
	    _inherits(Footer, _React$Component);

	    function Footer() {
	        _classCallCheck(this, Footer);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
	    }

	    _createClass(Footer, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'footer',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'container footer-container' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'row' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-sm-5' },
	                            _react2.default.createElement(
	                                'h3',
	                                null,
	                                ' Votepal '
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                '© 2016 Joe Grundman'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Footer;
	}(_react2.default.Component);

	exports.default = Footer;

/***/ },
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);