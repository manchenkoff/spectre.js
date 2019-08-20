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
/******/ 	return __webpack_require__(__webpack_require__.s = "./bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bundle.js":
/*!*******************!*\
  !*** ./bundle.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _widgets_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets/autocomplete */ "./widgets/autocomplete.js");
/* harmony import */ var _widgets_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets/calendar */ "./widgets/calendar.js");
/* harmony import */ var _widgets_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets/chips */ "./widgets/chips.js");
/* harmony import */ var _widgets_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets/slider */ "./widgets/slider.js");
/* harmony import */ var _widgets_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgets/tabs */ "./widgets/tabs.js");
/* harmony import */ var _widgets_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgets/toast */ "./widgets/toast.js");
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnVuZGxlLmpzIiwid2VicGFjazovLy8uL2NsYXNzZXMvd2lkZ2V0LmpzIiwid2VicGFjazovLy8uL3dpZGdldHMvYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL3dpZGdldHMvY2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9jaGlwcy5qcyIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL3RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy90b2FzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNp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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxNQUFNO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN6TEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0M7O0FBRXZCLHFCQUFxQix1REFBTTtBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQzs7QUFFdkIsbUJBQW1CLHVEQUFNO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNDOztBQUV2QixvQkFBb0IsdURBQU07QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6InNwZWN0cmUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuLi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9idW5kbGUuanNcIik7XG4iLCIvKlxuICogQ3JlYXRlZCBieSBBcnR5b20gTWFuY2hlbmtvdlxuICogYXJ0eW9tQG1hbmNoZW5rb2ZmLm1lXG4gKiBtYW5jaGVua29mZi5tZSDCqSAyMDE5XG4gKi9cblxuLy8gaW1wb3J0IGFuZCByZWdpc3RlciBjb21wb25lbnRzXG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gJy4vd2lkZ2V0cy9hdXRvY29tcGxldGUnXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi93aWRnZXRzL2NhbGVuZGFyJ1xuaW1wb3J0IENoaXBzIGZyb20gJy4vd2lkZ2V0cy9jaGlwcydcbmltcG9ydCBTbGlkZXIgZnJvbSAnLi93aWRnZXRzL3NsaWRlcidcbmltcG9ydCBUYWJzIGZyb20gJy4vd2lkZ2V0cy90YWJzJ1xuaW1wb3J0IFRvYXN0IGZyb20gJy4vd2lkZ2V0cy90b2FzdCdcblxud2luZG93LlNwZWN0cmUgPSB7XG4gICAgQXV0b2NvbXBsZXRlLFxuICAgIENhbGVuZGFyLFxuICAgIENoaXBzLFxuICAgIFNsaWRlcixcbiAgICBUYWJzLFxuICAgIFRvYXN0XG59O1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIE9iamVjdFxuICAgICAgICAuZ2V0T3duUHJvcGVydHlOYW1lcyhTcGVjdHJlKVxuICAgICAgICAuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgICAgICBTcGVjdHJlW2NsYXNzTmFtZV0ucmVnaXN0ZXIoKTtcbiAgICAgICAgfSk7XG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgaW5pdCgpO1xufTsiLCIvKlxuICogQ3JlYXRlZCBieSBBcnR5b20gTWFuY2hlbmtvdlxuICogYXJ0eW9tQG1hbmNoZW5rb2ZmLm1lXG4gKiBtYW5jaGVua29mZi5tZSDCqSAyMDE5XG4gKi9cblxuLyoqXG4gKiBCYXNlIHdpZGdldCBjbGFzc1xuICpcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IHtcbiAgICAvKipcbiAgICAgKiBCYXNlIHdpZGdldCBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIC8vIHJlbWVtYmVyIEhUTUwgZWxlbWVudFxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIC8vIG1lcmdlIHdpZGdldCBjb25maWd1cmF0aW9uXG4gICAgICAgIHRoaXMuX2J1aWxkQ29uZmlnKGNvbmZpZyk7XG5cbiAgICAgICAgLy8gY2FsbCBpbXBsZW1lbnRlZCBtZXRob2RzXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLmxvZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgY3VycmVudCB3aWRnZXQgcXVlcnkgc2VsZWN0b3JcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgc2VsZWN0b3IoKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3NlbGVjdG9yKCkgZ2V0dGVyIG5vdCBpbXBsZW1lbnRlZCB5ZXQnKTtcblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBjdXJyZW50IHdpZGdldCBjbGFzcyBuYW1lXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IGNsYXNzKCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdjbGFzcygpIGdldHRlciBub3QgaW1wbGVtZW50ZWQgeWV0Jyk7XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF1dG9tYXRpYyByZWdpc3RlcnMgd2lkZ2V0cyBvbiB0aGUgcGFnZSBieSBxdWVyeSBzZWxlY3RvciBhbmQgY29uZmlnXG4gICAgICogQHBhcmFtIHNlbGVjdG9yXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIHN0YXRpYyByZWdpc3RlcihzZWxlY3RvciA9IGZhbHNlLCBjb25maWcgPSB7fSkge1xuICAgICAgICAvLyBpbml0aWFsaXplIGFuIGluc3RhbmNlcyBsaXN0XG4gICAgICAgIHRoaXMuY2xhc3NbXCJpbnN0YW5jZXNcIl0gPSBbXTtcblxuICAgICAgICAvLyBzZXQgcXVlcnkgc2VsZWN0b3JcbiAgICAgICAgaWYgKHNlbGVjdG9yID09PSBmYWxzZSkge1xuICAgICAgICAgICAgc2VsZWN0b3IgPSB0aGlzLnNlbGVjdG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmluZHMgYWxsIGl0ZW1zIG9uIHRoZSBwYWdlXG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICAgICAgICAgIC5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc1tcImluc3RhbmNlc1wiXS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSB3aWRnZXRcbiAgICAgICAgICAgICAgICAgICAgbmV3IHRoaXMuY2xhc3MoZWxlbSwgY29uZmlnKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSB3aWRnZXQgaW5zdGFuY2UgYnkgcXVlcnkgc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3JcbiAgICAgKiBAcmV0dXJucyB7V2lkZ2V0fVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQoc2VsZWN0b3IpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jbGFzc1tcImluc3RhbmNlc1wiXS5maW5kKFxuICAgICAgICAgICAgKHdpZGdldCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aWRnZXQuZWxlbWVudCA9PT0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGRlZmF1bHQgd2lkZ2V0IGNvbmZpZ3VyYXRpb25cbiAgICAgKiBAcmV0dXJucyB7e319XG4gICAgICovXG4gICAgZ2V0IGRlZmF1bHRDb25maWcoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBjb25maWcgcGFyYW1zXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVyZ2VzIHdpZGdldCBjb25maWd1cmF0aW9uIHdpdGggZGVmYXVsdCBhbmQgdXNlciBwYXJhbXNcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfYnVpbGRDb25maWcoY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuZGVmYXVsdENvbmZpZyxcbiAgICAgICAgICAgICAgICAuLi5jb25maWdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmludHMgaW5mb3JtYXRpb24gYWJvdXQgY3VycmVudCB3aWRnZXRcbiAgICAgKi9cbiAgICBsb2coKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCYXNlIGluaXRpYWxpemUgbWV0aG9kIGZvciBjaGlsZCBjbGFzc2VzXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignaW5pdCgpIG1ldGhvZCBub3QgaW1wbGVtZW50ZWQgeWV0Jyk7XG4gICAgfVxufSIsIi8qXG4gKiBDcmVhdGVkIGJ5IEFydHlvbSBNYW5jaGVua292XG4gKiBhcnR5b21AbWFuY2hlbmtvZmYubWVcbiAqIG1hbmNoZW5rb2ZmLm1lIMKpIDIwMTlcbiAqL1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJy4uL2NsYXNzZXMvd2lkZ2V0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvY29tcGxldGUgZXh0ZW5kcyBXaWRnZXQge1xuICAgIHN0YXRpYyBnZXQgc2VsZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiAnW2RhdGEtYXV0b2NvbXBsZXRlXSc7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBjbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIEF1dG9jb21wbGV0ZTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICAvL1xuICAgIH1cbn0iLCIvKlxuICogQ3JlYXRlZCBieSBBcnR5b20gTWFuY2hlbmtvdlxuICogYXJ0eW9tQG1hbmNoZW5rb2ZmLm1lXG4gKiBtYW5jaGVua29mZi5tZSDCqSAyMDE5XG4gKi9cblxuaW1wb3J0IFdpZGdldCBmcm9tICcuLi9jbGFzc2VzL3dpZGdldCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsZW5kYXIgZXh0ZW5kcyBXaWRnZXQge1xuICAgIHN0YXRpYyBnZXQgc2VsZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiAnW2RhdGEtY2FsZW5kYXJdJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IGNsYXNzKCkge1xuICAgICAgICByZXR1cm4gQ2FsZW5kYXI7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy9cbiAgICB9XG59IiwiLypcbiAqIENyZWF0ZWQgYnkgQXJ0eW9tIE1hbmNoZW5rb3ZcbiAqIGFydHlvbUBtYW5jaGVua29mZi5tZVxuICogbWFuY2hlbmtvZmYubWUgwqkgMjAxOVxuICovXG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnLi4vY2xhc3Nlcy93aWRnZXQnXG5cbi8qKlxuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gY2hpcHNcbiAqIEBwcm9wZXJ0eSB7SFRNTEZvcm1FbGVtZW50fSBpbnB1dFxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gY2hpcHNCbG9ja1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGlwcyBleHRlbmRzIFdpZGdldCB7XG4gICAgLyoqXG4gICAgICogQ2hpcHMgd2lkZ2V0IHF1ZXJ5IHNlbGVjdG9yXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IHNlbGVjdG9yKCkge1xuICAgICAgICByZXR1cm4gJ1tkYXRhLWNoaXBzXSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCB3aWRnZXQgY2xhc3MgbmFtZVxuICAgICAqIEByZXR1cm5zIHtDaGlwc31cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IGNsYXNzKCkge1xuICAgICAgICByZXR1cm4gQ2hpcHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBDaGlwcyB3aWRnZXQgY29uZmlndXJhdGlvblxuICAgICAqIEByZXR1cm5zIHt7c3VibWl0QnlFbnRlcjogYm9vbGVhbiwgY29udGFpbmVyQ2xhc3Nlczogc3RyaW5nW10sIHN1Ym1pdEJ5Q29tbWE6IGJvb2xlYW59fVxuICAgICAqL1xuICAgIGdldCBkZWZhdWx0Q29uZmlnKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29udGFpbmVyQ2xhc3NlczogWydtYi0zJ10sXG4gICAgICAgICAgICBzdWJtaXRCeUVudGVyOiB0cnVlLFxuICAgICAgICAgICAgc3VibWl0QnlDb21tYTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBhIHdpZGdldFxuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuY2hpcHMgPSBbXTtcblxuICAgICAgICB0aGlzLl9idWlsZENvbnRhaW5lcigpO1xuXG4gICAgICAgIHRoaXMuX2J1aWxkSW5wdXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgY29udGFpbmVyIGZvciB0aGUgY2hpcCBpdGVtc1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2J1aWxkQ29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLmNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdGhpcy5jaGlwc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgdGhpcy5jb25maWcuY29udGFpbmVyQ2xhc3Nlc1xuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcy5jaGlwc0NvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGRzIGFuIGlucHV0IHRvIHN0b3JlIHZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfYnVpbGRJbnB1dCgpIHtcbiAgICAgICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRoaXMuaW5wdXQudHlwZSA9ICdoaWRkZW4nO1xuICAgICAgICB0aGlzLmlucHV0Lm5hbWUgPSBgJHt0aGlzLmVsZW1lbnQubmFtZX1gO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMuaW5wdXQpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5vbmtleXVwID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgdXNlQ29tbWEgPSAoZXZlbnQuY29kZSA9PT0gXCJDb21tYVwiICYmIHRoaXMuY29uZmlnLnN1Ym1pdEJ5Q29tbWEpO1xuICAgICAgICAgICAgbGV0IHVzZUVudGVyID0gKGV2ZW50LmNvZGUgPT09IFwiRW50ZXJcIiAmJiB0aGlzLmNvbmZpZy5zdWJtaXRCeUVudGVyKTtcblxuICAgICAgICAgICAgaWYgKHVzZUNvbW1hIHx8IHVzZUVudGVyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBldmVudC50YXJnZXQudmFsdWUucmVwbGFjZSgnLCcsICcnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWRkKGNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBjaGlwIGl0ZW0gdG8gYXBwZW5kIHRvIHRoZSBjb250YWluZXJcbiAgICAgKiBAcGFyYW0gbGFiZWxcbiAgICAgKiBAcmV0dXJucyB7SFRNTFNwYW5FbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2J1aWxkQ2hpcChsYWJlbCkge1xuICAgICAgICAvLyBjaGlwIGl0ZW1cbiAgICAgICAgbGV0IGNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgY2hpcC5jbGFzc0xpc3QuYWRkKCdjaGlwJyk7XG4gICAgICAgIGNoaXAuaW5uZXJUZXh0ID0gbGFiZWw7XG4gICAgICAgIGNoaXAuZGF0YXNldC5jaGlwID0gbGFiZWw7XG5cbiAgICAgICAgLy8gY2xvc2UgYnV0dG9uXG4gICAgICAgIGxldCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgICAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLWNsZWFyJyk7XG4gICAgICAgIGNsb3NlQnV0dG9uLnJvbGUgPSAnYnV0dG9uJztcbiAgICAgICAgY2xvc2VCdXR0b24uaHJlZiA9ICcjJztcblxuICAgICAgICBjbG9zZUJ1dHRvbi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZShldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmNoaXApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNoaXAuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gICAgICAgIHJldHVybiBjaGlwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0cyBVSSB2YWx1ZXMgdG8gdXBkYXRlIHRoZSBsYXRlc3QgY2hhbmdlc1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3Jlc2V0KCkge1xuICAgICAgICB0aGlzLmNoaXBzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBVSSB0byB0aGUgbGF0ZXN0IGNoYW5nZXNcbiAgICAgKi9cbiAgICByZWZyZXNoKCkge1xuICAgICAgICB0aGlzLl9yZXNldCgpO1xuXG4gICAgICAgIHRoaXMuY2hpcHMuZm9yRWFjaChcbiAgICAgICAgICAgIChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjaGlwID0gdGhpcy5fYnVpbGRDaGlwKGxhYmVsKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsdWUgKz0gYCR7bGFiZWx9LGA7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZS5zdWJzdHIoXG4gICAgICAgICAgICAwLCB0aGlzLmlucHV0LnZhbHVlLmxlbmd0aCAtIDFcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgbmV3IGNoaXAgdmFsdWVcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBhZGQodmFsdWUpIHtcbiAgICAgICAgLy8gY2hlY2sgdmFsdWUgaXMgbm90IGVtcHR5XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gJycgJiYgdmFsdWUgIT09ICcgJykge1xuICAgICAgICAgICAgLy8gcmVwbGFjZSBcIiB0byAnXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1wiL2csIFwiJ1wiKTtcblxuICAgICAgICAgICAgLy8gY2hlY2sgZHVwbGljYXRlc1xuICAgICAgICAgICAgbGV0IGV4aXN0cyA9IHRoaXMuY2hpcHMuZmluZCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtID09PSB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIWV4aXN0cykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpcHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgY2hpcCBieSB2YWx1ZVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIGRlbGV0ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNoaXBzID0gdGhpcy5jaGlwcy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtICE9PSB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxufSIsIi8qXG4gKiBDcmVhdGVkIGJ5IEFydHlvbSBNYW5jaGVua292XG4gKiBhcnR5b21AbWFuY2hlbmtvZmYubWVcbiAqIG1hbmNoZW5rb2ZmLm1lIMKpIDIwMTlcbiAqL1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJy4uL2NsYXNzZXMvd2lkZ2V0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBXaWRnZXQge1xuICAgIHN0YXRpYyBnZXQgc2VsZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiAnW2RhdGEtc2xpZGVyXSc7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBjbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIFNsaWRlcjtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICAvL1xuICAgIH1cbn0iLCIvKlxuICogQ3JlYXRlZCBieSBBcnR5b20gTWFuY2hlbmtvdlxuICogYXJ0eW9tQG1hbmNoZW5rb2ZmLm1lXG4gKiBtYW5jaGVua29mZi5tZSDCqSAyMDE5XG4gKi9cblxuaW1wb3J0IFdpZGdldCBmcm9tICcuLi9jbGFzc2VzL3dpZGdldCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFicyBleHRlbmRzIFdpZGdldCB7XG4gICAgc3RhdGljIGdldCBzZWxlY3RvcigpIHtcbiAgICAgICAgcmV0dXJuICdbZGF0YS10YWJzXSc7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBjbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIFRhYnM7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy9cbiAgICB9XG59IiwiLypcbiAqIENyZWF0ZWQgYnkgQXJ0eW9tIE1hbmNoZW5rb3ZcbiAqIGFydHlvbUBtYW5jaGVua29mZi5tZVxuICogbWFuY2hlbmtvZmYubWUgwqkgMjAxOVxuICovXG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnLi4vY2xhc3Nlcy93aWRnZXQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvYXN0IGV4dGVuZHMgV2lkZ2V0IHtcbiAgICBzdGF0aWMgZ2V0IHNlbGVjdG9yKCkge1xuICAgICAgICByZXR1cm4gJ1tkYXRhLXRvYXN0XSc7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBjbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIFRvYXN0O1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIC8vXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=