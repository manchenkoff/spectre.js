/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./classes/widget.js":
/*!***************************!*\
  !*** ./classes/widget.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Widget; });
/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */

/**
 * Base widget class
 *
 * @property {HTMLElement} element
 */
class Widget {
    /**
     * Base widget constructor
     * @param element
     * @param config
     */
    constructor(element, config = {}) {
        // remember HTML element
        this.element = element;

        // merge widget configuration
        this._buildConfig(config);

        // call implemented methods
        this.init();
        this.log();
    }

    /**
     * Returns current widget query selector
     * @returns {string}
     */
    static get selector() {
        console.error('selector() getter not implemented yet');

        return '';
    }

    /**
     * Returns current widget class name
     * @returns {string}
     */
    static get class() {
        console.error('class() getter not implemented yet');

        return '';
    }

    /**
     * Automatic registers widgets on the page by query selector and config
     * @param selector
     * @param config
     */
    static register(selector = false, config = {}) {
        // initialize an instances list
        this.class["instances"] = [];

        // set query selector
        if (selector === false) {
            selector = this.selector;
        }

        // finds all items on the page
        document
            .querySelectorAll(selector)
            .forEach((elem) => {
                this.class["instances"].push(
                    // creates a new instance of the widget
                    new this.class(elem, config)
                );
            })
    }

    /**
     * Returns a widget instance by query selector
     * @param selector
     * @returns {Widget}
     */
    static get(selector) {
        let element = document.querySelector(selector);

        return this.class["instances"].find(
            (widget) => {
                return widget.element === element;
            }
        );
    }

    /**
     * Returns default widget configuration
     * @returns {{}}
     */
    get defaultConfig() {
        return {
            // config params
        };
    }

    /**
     * Merges widget configuration with default and user params
     * @param config
     * @private
     */
    _buildConfig(config) {
        if (config) {
            this.config = {
                ...this.defaultConfig,
                ...config
            };
        }
    }

    /**
     * Prints information about current widget
     */
    log() {
        console.info(this);
    }

    /**
     * Base initialize method for child classes
     */
    init() {
        console.error('init() method not implemented yet');
    }
}

/***/ }),

/***/ "./docs/app.js":
/*!*********************!*\
  !*** ./docs/app.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _widgets_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../widgets/autocomplete */ "./widgets/autocomplete.js");
/* harmony import */ var _widgets_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widgets/calendar */ "./widgets/calendar.js");
/* harmony import */ var _widgets_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets/chips */ "./widgets/chips.js");
/* harmony import */ var _widgets_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgets/slider */ "./widgets/slider.js");
/* harmony import */ var _widgets_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/tabs */ "./widgets/tabs.js");
/* harmony import */ var _widgets_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widgets/toast */ "./widgets/toast.js");
/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */

// import and register components







window.Spectre = {
    Autocomplete: _widgets_autocomplete__WEBPACK_IMPORTED_MODULE_0__["default"],
    Calendar: _widgets_calendar__WEBPACK_IMPORTED_MODULE_1__["default"],
    Chips: _widgets_chips__WEBPACK_IMPORTED_MODULE_2__["default"],
    Slider: _widgets_slider__WEBPACK_IMPORTED_MODULE_3__["default"],
    Tabs: _widgets_tabs__WEBPACK_IMPORTED_MODULE_4__["default"],
    Toast: _widgets_toast__WEBPACK_IMPORTED_MODULE_5__["default"]
};

function init() {
    Object
        .getOwnPropertyNames(Spectre)
        .forEach((className) => {
            Spectre[className].register();
        });
}

window.onload = () => {
    init();
};

/***/ }),

/***/ "./docs/style.scss":
/*!*************************!*\
  !*** ./docs/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./widgets/autocomplete.js":
/*!*********************************!*\
  !*** ./widgets/autocomplete.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Autocomplete; });
/* harmony import */ var _classes_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/widget */ "./classes/widget.js");
/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */



class Autocomplete extends _classes_widget__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get selector() {
        return '[data-autocomplete]';
    }

    static get class() {
        return Autocomplete;
    }

    init() {
        //
    }
}

/***/ }),

/***/ "./widgets/calendar.js":
/*!*****************************!*\
  !*** ./widgets/calendar.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calendar; });
/* harmony import */ var _classes_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/widget */ "./classes/widget.js");
/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */



class Calendar extends _classes_widget__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get selector() {
        return '[data-calendar]';
    }

    static get class() {
        return Calendar;
    }

    init() {
        //
    }
}

/***/ }),

/***/ "./widgets/chips.js":
/*!**************************!*\
  !*** ./widgets/chips.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chips; });
/* harmony import */ var _classes_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/widget */ "./classes/widget.js");
/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */



/**
 * @property {string[]} chips
 * @property {HTMLFormElement} input
 * @property {HTMLElement} chipsBlock
 */
class Chips extends _classes_widget__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Chips widget query selector
     * @returns {string}
     */
    static get selector() {
        return '[data-chips]';
    }

    /**
     * Current widget class name
     * @returns {Chips}
     */
    static get class() {
        return Chips;
    }

    /**
     * Returns Chips widget configuration
     * @returns {{submitByEnter: boolean, containerClasses: string[], submitByComma: boolean}}
     */
    get defaultConfig() {
        return {
            containerClasses: ['mb-3'],
            submitByEnter: true,
            submitByComma: true,
        };
    }

    /**
     * Initializes a widget
     */
    init() {
        this.chips = [];

        this._buildContainer();

        this._buildInput();
    }

    /**
     * Builds container for the chip items
     * @private
     */
    _buildContainer() {
        this.chipsContainer = document.createElement('div');

        this.chipsContainer.classList.add(
            this.config.containerClasses
        );

        this.element.parentElement.prepend(this.chipsContainer);
    }

    /**
     * Builds an input to store value
     * @private
     */
    _buildInput() {
        this.input = document.createElement('input');
        this.input.type = 'hidden';
        this.input.name = `${this.element.name}`;

        this.element.removeAttribute('name');
        this.element.parentElement.append(this.input);

        this.element.onkeyup = (event) => {
            let useComma = (event.code === "Comma" && this.config.submitByComma);
            let useEnter = (event.code === "Enter" && this.config.submitByEnter);

            if (useComma || useEnter) {
                let content = event.target.value.replace(',', '');

                this.add(content);

                event.target.value = '';
            }
        };
    }

    /**
     * Creates a new chip item to append to the container
     * @param label
     * @returns {HTMLSpanElement}
     * @private
     */
    _buildChip(label) {
        // chip item
        let chip = document.createElement('span');

        chip.classList.add('chip');
        chip.innerText = label;
        chip.dataset.chip = label;

        // close button
        let closeButton = document.createElement('a');

        closeButton.classList.add('btn', 'btn-clear');
        closeButton.role = 'button';
        closeButton.href = '#';

        closeButton.onclick = (event) => {
            this.delete(event.target.parentElement.dataset.chip);
        };

        chip.appendChild(closeButton);

        return chip;
    }

    /**
     * Resets UI values to update the latest changes
     * @private
     */
    _reset() {
        this.chipsContainer.innerHTML = '';
        this.input.value = '';
    }

    /**
     * Updates UI to the latest changes
     */
    refresh() {
        this._reset();

        this.chips.forEach(
            (label) => {
                let chip = this._buildChip(label);

                this.input.value += `${label},`;
                this.chipsContainer.appendChild(chip);
            }
        );

        this.input.value = this.input.value.substr(
            0, this.input.value.length - 1
        );
    }

    /**
     * Adds a new chip value
     * @param value
     */
    add(value) {
        // check value is not empty
        if (value !== '' && value !== ' ') {
            // replace " to '
            value = value.replace(/"/g, "'");

            // check duplicates
            let exists = this.chips.find((item) => {
                return item === value;
            });

            if (!exists) {
                this.chips.push(value);
                this.refresh();
            }
        }
    }

    /**
     * Removes a chip by value
     * @param value
     */
    delete(value) {
        this.chips = this.chips.filter((item) => {
            return item !== value;
        });

        this.refresh();
    }
}

/***/ }),

/***/ "./widgets/slider.js":
/*!***************************!*\
  !*** ./widgets/slider.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
/* harmony import */ var _classes_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/widget */ "./classes/widget.js");
/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */



class Slider extends _classes_widget__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get selector() {
        return '[data-slider]';
    }

    static get class() {
        return Slider;
    }

    init() {
        //
    }
}

/***/ }),

/***/ "./widgets/tabs.js":
/*!*************************!*\
  !*** ./widgets/tabs.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tabs; });
/* harmony import */ var _classes_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/widget */ "./classes/widget.js");
/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */



class Tabs extends _classes_widget__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get selector() {
        return '[data-tabs]';
    }

    static get class() {
        return Tabs;
    }

    init() {
        //
    }
}

/***/ }),

/***/ "./widgets/toast.js":
/*!**************************!*\
  !*** ./widgets/toast.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toast; });
/* harmony import */ var _classes_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/widget */ "./classes/widget.js");
/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */



class Toast extends _classes_widget__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get selector() {
        return '[data-toast]';
    }

    static get class() {
        return Toast;
    }

    init() {
        //
    }
}

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./docs/app.js ./docs/style.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./docs/app.js */"./docs/app.js");
module.exports = __webpack_require__(/*! ./docs/style.scss */"./docs/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xhc3Nlcy93aWRnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9zdHlsZS5zY3NzP2Q4ZGQiLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9hdXRvY29tcGxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9jYWxlbmRhci5qcyIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL2NoaXBzLmpzIiwid2VicGFjazovLy8uL3dpZGdldHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3dpZGdldHMvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL3RvYXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FB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QTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLE1BQU07QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3pMQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQzs7QUFFdkIscUJBQXFCLHVEQUFNO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNDOztBQUV2QixtQkFBbUIsdURBQU07QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0M7O0FBRXZCLG9CQUFvQix1REFBTTtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiLi4vZG9jcy9hc3NldHMvZG9jcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi4vXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qXG4gKiBDcmVhdGVkIGJ5IEFydHlvbSBNYW5jaGVua292XG4gKiBhcnR5b21AbWFuY2hlbmtvZmYubWVcbiAqIG1hbmNoZW5rb2ZmLm1lIMKpIDIwMTlcbiAqL1xuXG4vKipcbiAqIEJhc2Ugd2lkZ2V0IGNsYXNzXG4gKlxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQge1xuICAgIC8qKlxuICAgICAqIEJhc2Ugd2lkZ2V0IGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnID0ge30pIHtcbiAgICAgICAgLy8gcmVtZW1iZXIgSFRNTCBlbGVtZW50XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgLy8gbWVyZ2Ugd2lkZ2V0IGNvbmZpZ3VyYXRpb25cbiAgICAgICAgdGhpcy5fYnVpbGRDb25maWcoY29uZmlnKTtcblxuICAgICAgICAvLyBjYWxsIGltcGxlbWVudGVkIG1ldGhvZHNcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMubG9nKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBjdXJyZW50IHdpZGdldCBxdWVyeSBzZWxlY3RvclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGdldCBzZWxlY3RvcigpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignc2VsZWN0b3IoKSBnZXR0ZXIgbm90IGltcGxlbWVudGVkIHlldCcpO1xuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGN1cnJlbnQgd2lkZ2V0IGNsYXNzIG5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgY2xhc3MoKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NsYXNzKCkgZ2V0dGVyIG5vdCBpbXBsZW1lbnRlZCB5ZXQnKTtcblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXV0b21hdGljIHJlZ2lzdGVycyB3aWRnZXRzIG9uIHRoZSBwYWdlIGJ5IHF1ZXJ5IHNlbGVjdG9yIGFuZCBjb25maWdcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgc3RhdGljIHJlZ2lzdGVyKHNlbGVjdG9yID0gZmFsc2UsIGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIC8vIGluaXRpYWxpemUgYW4gaW5zdGFuY2VzIGxpc3RcbiAgICAgICAgdGhpcy5jbGFzc1tcImluc3RhbmNlc1wiXSA9IFtdO1xuXG4gICAgICAgIC8vIHNldCBxdWVyeSBzZWxlY3RvclxuICAgICAgICBpZiAoc2VsZWN0b3IgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBzZWxlY3RvciA9IHRoaXMuc2VsZWN0b3I7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaW5kcyBhbGwgaXRlbXMgb24gdGhlIHBhZ2VcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgICAgICAgICAgLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzW1wiaW5zdGFuY2VzXCJdLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIHdpZGdldFxuICAgICAgICAgICAgICAgICAgICBuZXcgdGhpcy5jbGFzcyhlbGVtLCBjb25maWcpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHdpZGdldCBpbnN0YW5jZSBieSBxdWVyeSBzZWxlY3RvclxuICAgICAqIEBwYXJhbSBzZWxlY3RvclxuICAgICAqIEByZXR1cm5zIHtXaWRnZXR9XG4gICAgICovXG4gICAgc3RhdGljIGdldChzZWxlY3Rvcikge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzW1wiaW5zdGFuY2VzXCJdLmZpbmQoXG4gICAgICAgICAgICAod2lkZ2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpZGdldC5lbGVtZW50ID09PSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgZGVmYXVsdCB3aWRnZXQgY29uZmlndXJhdGlvblxuICAgICAqIEByZXR1cm5zIHt7fX1cbiAgICAgKi9cbiAgICBnZXQgZGVmYXVsdENvbmZpZygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIGNvbmZpZyBwYXJhbXNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXJnZXMgd2lkZ2V0IGNvbmZpZ3VyYXRpb24gd2l0aCBkZWZhdWx0IGFuZCB1c2VyIHBhcmFtc1xuICAgICAqIEBwYXJhbSBjb25maWdcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9idWlsZENvbmZpZyhjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5kZWZhdWx0Q29uZmlnLFxuICAgICAgICAgICAgICAgIC4uLmNvbmZpZ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByaW50cyBpbmZvcm1hdGlvbiBhYm91dCBjdXJyZW50IHdpZGdldFxuICAgICAqL1xuICAgIGxvZygpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJhc2UgaW5pdGlhbGl6ZSBtZXRob2QgZm9yIGNoaWxkIGNsYXNzZXNcbiAgICAgKi9cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdpbml0KCkgbWV0aG9kIG5vdCBpbXBsZW1lbnRlZCB5ZXQnKTtcbiAgICB9XG59IiwiLypcbiAqIENyZWF0ZWQgYnkgQXJ0eW9tIE1hbmNoZW5rb3ZcbiAqIGFydHlvbUBtYW5jaGVua29mZi5tZVxuICogbWFuY2hlbmtvZmYubWUgwqkgMjAxOVxuICovXG5cbi8vIGltcG9ydCBhbmQgcmVnaXN0ZXIgY29tcG9uZW50c1xuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tICcuLi93aWRnZXRzL2F1dG9jb21wbGV0ZSdcbmltcG9ydCBDYWxlbmRhciBmcm9tICcuLi93aWRnZXRzL2NhbGVuZGFyJ1xuaW1wb3J0IENoaXBzIGZyb20gJy4uL3dpZGdldHMvY2hpcHMnXG5pbXBvcnQgU2xpZGVyIGZyb20gJy4uL3dpZGdldHMvc2xpZGVyJ1xuaW1wb3J0IFRhYnMgZnJvbSAnLi4vd2lkZ2V0cy90YWJzJ1xuaW1wb3J0IFRvYXN0IGZyb20gJy4uL3dpZGdldHMvdG9hc3QnXG5cbndpbmRvdy5TcGVjdHJlID0ge1xuICAgIEF1dG9jb21wbGV0ZSxcbiAgICBDYWxlbmRhcixcbiAgICBDaGlwcyxcbiAgICBTbGlkZXIsXG4gICAgVGFicyxcbiAgICBUb2FzdFxufTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBPYmplY3RcbiAgICAgICAgLmdldE93blByb3BlcnR5TmFtZXMoU3BlY3RyZSlcbiAgICAgICAgLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICAgICAgU3BlY3RyZVtjbGFzc05hbWVdLnJlZ2lzdGVyKCk7XG4gICAgICAgIH0pO1xufVxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIGluaXQoKTtcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcbiAqIENyZWF0ZWQgYnkgQXJ0eW9tIE1hbmNoZW5rb3ZcbiAqIGFydHlvbUBtYW5jaGVua29mZi5tZVxuICogbWFuY2hlbmtvZmYubWUgwqkgMjAxOVxuICovXG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnLi4vY2xhc3Nlcy93aWRnZXQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9jb21wbGV0ZSBleHRlbmRzIFdpZGdldCB7XG4gICAgc3RhdGljIGdldCBzZWxlY3RvcigpIHtcbiAgICAgICAgcmV0dXJuICdbZGF0YS1hdXRvY29tcGxldGVdJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IGNsYXNzKCkge1xuICAgICAgICByZXR1cm4gQXV0b2NvbXBsZXRlO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIC8vXG4gICAgfVxufSIsIi8qXG4gKiBDcmVhdGVkIGJ5IEFydHlvbSBNYW5jaGVua292XG4gKiBhcnR5b21AbWFuY2hlbmtvZmYubWVcbiAqIG1hbmNoZW5rb2ZmLm1lIMKpIDIwMTlcbiAqL1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJy4uL2NsYXNzZXMvd2lkZ2V0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxlbmRhciBleHRlbmRzIFdpZGdldCB7XG4gICAgc3RhdGljIGdldCBzZWxlY3RvcigpIHtcbiAgICAgICAgcmV0dXJuICdbZGF0YS1jYWxlbmRhcl0nO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgY2xhc3MoKSB7XG4gICAgICAgIHJldHVybiBDYWxlbmRhcjtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICAvL1xuICAgIH1cbn0iLCIvKlxuICogQ3JlYXRlZCBieSBBcnR5b20gTWFuY2hlbmtvdlxuICogYXJ0eW9tQG1hbmNoZW5rb2ZmLm1lXG4gKiBtYW5jaGVua29mZi5tZSDCqSAyMDE5XG4gKi9cblxuaW1wb3J0IFdpZGdldCBmcm9tICcuLi9jbGFzc2VzL3dpZGdldCdcblxuLyoqXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBjaGlwc1xuICogQHByb3BlcnR5IHtIVE1MRm9ybUVsZW1lbnR9IGlucHV0XG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBjaGlwc0Jsb2NrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoaXBzIGV4dGVuZHMgV2lkZ2V0IHtcbiAgICAvKipcbiAgICAgKiBDaGlwcyB3aWRnZXQgcXVlcnkgc2VsZWN0b3JcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgc2VsZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiAnW2RhdGEtY2hpcHNdJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IHdpZGdldCBjbGFzcyBuYW1lXG4gICAgICogQHJldHVybnMge0NoaXBzfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgY2xhc3MoKSB7XG4gICAgICAgIHJldHVybiBDaGlwcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIENoaXBzIHdpZGdldCBjb25maWd1cmF0aW9uXG4gICAgICogQHJldHVybnMge3tzdWJtaXRCeUVudGVyOiBib29sZWFuLCBjb250YWluZXJDbGFzc2VzOiBzdHJpbmdbXSwgc3VibWl0QnlDb21tYTogYm9vbGVhbn19XG4gICAgICovXG4gICAgZ2V0IGRlZmF1bHRDb25maWcoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb250YWluZXJDbGFzc2VzOiBbJ21iLTMnXSxcbiAgICAgICAgICAgIHN1Ym1pdEJ5RW50ZXI6IHRydWUsXG4gICAgICAgICAgICBzdWJtaXRCeUNvbW1hOiB0cnVlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGEgd2lkZ2V0XG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5jaGlwcyA9IFtdO1xuXG4gICAgICAgIHRoaXMuX2J1aWxkQ29udGFpbmVyKCk7XG5cbiAgICAgICAgdGhpcy5fYnVpbGRJbnB1dCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBjb250YWluZXIgZm9yIHRoZSBjaGlwIGl0ZW1zXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfYnVpbGRDb250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuY2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0aGlzLmNoaXBzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5jb250YWluZXJDbGFzc2VzXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzLmNoaXBzQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgYW4gaW5wdXQgdG8gc3RvcmUgdmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9idWlsZElucHV0KCkge1xuICAgICAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGhpcy5pbnB1dC50eXBlID0gJ2hpZGRlbic7XG4gICAgICAgIHRoaXMuaW5wdXQubmFtZSA9IGAke3RoaXMuZWxlbWVudC5uYW1lfWA7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5hcHBlbmQodGhpcy5pbnB1dCk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50Lm9ua2V5dXAgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGxldCB1c2VDb21tYSA9IChldmVudC5jb2RlID09PSBcIkNvbW1hXCIgJiYgdGhpcy5jb25maWcuc3VibWl0QnlDb21tYSk7XG4gICAgICAgICAgICBsZXQgdXNlRW50ZXIgPSAoZXZlbnQuY29kZSA9PT0gXCJFbnRlclwiICYmIHRoaXMuY29uZmlnLnN1Ym1pdEJ5RW50ZXIpO1xuXG4gICAgICAgICAgICBpZiAodXNlQ29tbWEgfHwgdXNlRW50ZXIpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IGV2ZW50LnRhcmdldC52YWx1ZS5yZXBsYWNlKCcsJywgJycpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGNoaXAgaXRlbSB0byBhcHBlbmQgdG8gdGhlIGNvbnRhaW5lclxuICAgICAqIEBwYXJhbSBsYWJlbFxuICAgICAqIEByZXR1cm5zIHtIVE1MU3BhbkVsZW1lbnR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfYnVpbGRDaGlwKGxhYmVsKSB7XG4gICAgICAgIC8vIGNoaXAgaXRlbVxuICAgICAgICBsZXQgY2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICBjaGlwLmNsYXNzTGlzdC5hZGQoJ2NoaXAnKTtcbiAgICAgICAgY2hpcC5pbm5lclRleHQgPSBsYWJlbDtcbiAgICAgICAgY2hpcC5kYXRhc2V0LmNoaXAgPSBsYWJlbDtcblxuICAgICAgICAvLyBjbG9zZSBidXR0b25cbiAgICAgICAgbGV0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tY2xlYXInKTtcbiAgICAgICAgY2xvc2VCdXR0b24ucm9sZSA9ICdidXR0b24nO1xuICAgICAgICBjbG9zZUJ1dHRvbi5ocmVmID0gJyMnO1xuXG4gICAgICAgIGNsb3NlQnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuY2hpcCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY2hpcC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgICAgICAgcmV0dXJuIGNoaXA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIFVJIHZhbHVlcyB0byB1cGRhdGUgdGhlIGxhdGVzdCBjaGFuZ2VzXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuY2hpcHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIFVJIHRvIHRoZSBsYXRlc3QgY2hhbmdlc1xuICAgICAqL1xuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMuX3Jlc2V0KCk7XG5cbiAgICAgICAgdGhpcy5jaGlwcy5mb3JFYWNoKFxuICAgICAgICAgICAgKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNoaXAgPSB0aGlzLl9idWlsZENoaXAobGFiZWwpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSArPSBgJHtsYWJlbH0sYDtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlLnN1YnN0cihcbiAgICAgICAgICAgIDAsIHRoaXMuaW5wdXQudmFsdWUubGVuZ3RoIC0gMVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBuZXcgY2hpcCB2YWx1ZVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIGFkZCh2YWx1ZSkge1xuICAgICAgICAvLyBjaGVjayB2YWx1ZSBpcyBub3QgZW1wdHlcbiAgICAgICAgaWYgKHZhbHVlICE9PSAnJyAmJiB2YWx1ZSAhPT0gJyAnKSB7XG4gICAgICAgICAgICAvLyByZXBsYWNlIFwiIHRvICdcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXCIvZywgXCInXCIpO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBkdXBsaWNhdGVzXG4gICAgICAgICAgICBsZXQgZXhpc3RzID0gdGhpcy5jaGlwcy5maW5kKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPT09IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlwcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBjaGlwIGJ5IHZhbHVlXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgZGVsZXRlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2hpcHMgPSB0aGlzLmNoaXBzLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gIT09IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG59IiwiLypcbiAqIENyZWF0ZWQgYnkgQXJ0eW9tIE1hbmNoZW5rb3ZcbiAqIGFydHlvbUBtYW5jaGVua29mZi5tZVxuICogbWFuY2hlbmtvZmYubWUgwqkgMjAxOVxuICovXG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnLi4vY2xhc3Nlcy93aWRnZXQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlciBleHRlbmRzIFdpZGdldCB7XG4gICAgc3RhdGljIGdldCBzZWxlY3RvcigpIHtcbiAgICAgICAgcmV0dXJuICdbZGF0YS1zbGlkZXJdJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IGNsYXNzKCkge1xuICAgICAgICByZXR1cm4gU2xpZGVyO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIC8vXG4gICAgfVxufSIsIi8qXG4gKiBDcmVhdGVkIGJ5IEFydHlvbSBNYW5jaGVua292XG4gKiBhcnR5b21AbWFuY2hlbmtvZmYubWVcbiAqIG1hbmNoZW5rb2ZmLm1lIMKpIDIwMTlcbiAqL1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJy4uL2NsYXNzZXMvd2lkZ2V0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJzIGV4dGVuZHMgV2lkZ2V0IHtcbiAgICBzdGF0aWMgZ2V0IHNlbGVjdG9yKCkge1xuICAgICAgICByZXR1cm4gJ1tkYXRhLXRhYnNdJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IGNsYXNzKCkge1xuICAgICAgICByZXR1cm4gVGFicztcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICAvL1xuICAgIH1cbn0iLCIvKlxuICogQ3JlYXRlZCBieSBBcnR5b20gTWFuY2hlbmtvdlxuICogYXJ0eW9tQG1hbmNoZW5rb2ZmLm1lXG4gKiBtYW5jaGVua29mZi5tZSDCqSAyMDE5XG4gKi9cblxuaW1wb3J0IFdpZGdldCBmcm9tICcuLi9jbGFzc2VzL3dpZGdldCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9hc3QgZXh0ZW5kcyBXaWRnZXQge1xuICAgIHN0YXRpYyBnZXQgc2VsZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiAnW2RhdGEtdG9hc3RdJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IGNsYXNzKCkge1xuICAgICAgICByZXR1cm4gVG9hc3Q7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy9cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==