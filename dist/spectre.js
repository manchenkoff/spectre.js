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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Widget; });
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
     * Widget base initialization
     */
    init() {
        console.error('init() method not implemented yet');
    }
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Autocomplete; });
/* harmony import */ var _classes_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */



class Autocomplete extends _classes_widget__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] {
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calendar; });
/* harmony import */ var _classes_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */



class Calendar extends _classes_widget__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] {
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chips; });
/* harmony import */ var _classes_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */



/**
 * Chips component
 * @property {string[]} chips
 * @property {HTMLFormElement} input
 * @property {HTMLElement} chipsBlock
 */
class Chips extends _classes_widget__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] {
    /**
     * @inheritDoc
     */
    static get selector() {
        return '[data-chips]';
    }

    /**
     * @inheritDoc
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
     * @inheritDoc
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Slider; });
/* harmony import */ var _classes_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */



class Slider extends _classes_widget__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] {
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabs; });
/* harmony import */ var _classes_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */



/**
 * Tabs component
 * @property {string} name
 * @property {int} index
 * @property {HTMLElement[]} pages
 */
class Tabs extends _classes_widget__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] {
    /**
     * @inheritDoc
     */
    static get selector() {
        return '[data-tabs]';
    }

    /**
     * @inheritDoc
     */
    static get class() {
        return Tabs;
    }

    /**
     * @inheritDoc
     */
    init() {
        this.name = this.element.dataset.tabs;

        this._buildButtons();

        this._buildPages();
    }

    /**
     * Builds binding for navigation buttons
     * @private
     */
    _buildButtons() {
        this.buttons = this.element.querySelectorAll('.tab-item');

        this.buttons.forEach(
            (button, idx) => {
                button.dataset.tab = idx;

                // saves current active page index
                if (button.classList.contains('active')) {
                    this.index = idx;
                }

                button.onclick = (event) => {
                    event.preventDefault();

                    this.active(event.target.parentElement.dataset.tab);
                };
            }
        );
    }

    /**
     * Builds style rules for content pages
     * @private
     */
    _buildPages() {
        this.pages = document.querySelectorAll(`[data-tabs-content="${this.name}"] li`);

        this.pages.forEach(
            (page, idx) => {
                page.style.display = (idx !== this.index)
                    ? 'none'
                    : 'block';
            }
        );
    }

    /**
     * Refreshes tabs to the latest changes
     */
    refresh() {
        // set active navigation button
        this.buttons.forEach(
            (button, idx) => {
                if (idx === this.index) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            }
        );

        // show active content page
        this.pages.forEach(
            (page, idx) => {
                page.style.display = (idx === this.index)
                    ? 'block'
                    : 'none';
            }
        );
    }

    /**
     * Changes active page and button by selected index
     * @param idx
     */
    active(idx) {
        this.index = parseInt(idx);

        this.refresh();
    }
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toast; });
/* harmony import */ var _classes_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */



class Toast extends _classes_widget__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] {
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _widgets_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _widgets_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _widgets_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _widgets_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _widgets_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _widgets_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */

// import and register components







const Spectre = {
    Autocomplete: _widgets_autocomplete__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    Calendar: _widgets_calendar__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    Chips: _widgets_chips__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
    Slider: _widgets_slider__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
    Tabs: _widgets_tabs__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
    Toast: _widgets_toast__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]
};

module.exports = Spectre;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);
//# sourceMappingURL=spectre.js.map