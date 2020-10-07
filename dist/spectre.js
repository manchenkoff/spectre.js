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
/******/ 	return __webpack_require__(__webpack_require__.s = "./spectre.js");
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
     */
    constructor(element) {
        // remember HTML element
        this.element = element;

        // call implemented methods
        this.init();
    }

    /**
     * Merges widget configuration by loading data-* params
     * @param params
     */
    loadDataParams(params) {
        let data = Object.getOwnPropertyNames(params);

        data.forEach(
            (key) => {
                if (key in this.element.dataset) {
                    try {
                        params[key] = JSON.parse(this.element.dataset[key]);
                    } catch (e) {
                        params[key] = this.element.dataset[key];
                    }
                }
            }
        );
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
     * Automatic registers widgets on the page by query selector
     * @param selector
     */
    static register(selector = false) {
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
                    new this.class(elem)
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

/***/ "./spectre.js":
/*!********************!*\
  !*** ./spectre.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _widgets_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets/autocomplete */ "./widgets/autocomplete.js");
/* harmony import */ var _widgets_chips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets/chips */ "./widgets/chips.js");
/* harmony import */ var _widgets_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets/tabs */ "./widgets/tabs.js");
/* harmony import */ var _widgets_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets/toast */ "./widgets/toast.js");
/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */

// import and register components





const Spectre = {
    Autocomplete: _widgets_autocomplete__WEBPACK_IMPORTED_MODULE_0__["default"],
    Chips: _widgets_chips__WEBPACK_IMPORTED_MODULE_1__["default"],
    Tabs: _widgets_tabs__WEBPACK_IMPORTED_MODULE_2__["default"],
    Toast: _widgets_toast__WEBPACK_IMPORTED_MODULE_3__["default"]
};

/* harmony default export */ __webpack_exports__["default"] = (Spectre);

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



/**
 * Auto-complete component
 * @property {string[]} options
 * @property {object} config
 * @property {HTMLElement} optionList
 * @property {HTMLElement} input
 *
 * @property {function} onchange
 */
class Autocomplete extends _classes_widget__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * @inheritDoc
     */
    static get selector() {
        return '[data-autocomplete]';
    }

    /**
     * @inheritDoc
     */
    static get class() {
        return Autocomplete;
    }

    /**
     * Auto-complete widget initialization
     */
    init() {
        this._buildConfiguration();

        this._buildOptionList();
    }

    /**
     * Builds autocomplete settings and sets up callbacks
     * @private
     */
    _buildConfiguration() {
        // create an empty options list
        this.options = [];

        let autocomplete = this.element.dataset.autocomplete;

        if (autocomplete !== '') {
            try {
                // try to load array from data-autocomplete
                this.options = JSON.parse(autocomplete);
            } catch (e) {
                try {
                    // try to get callback function if exists
                    let callback = eval(autocomplete);

                    if (typeof callback == 'function') {
                        // load data from callback
                        this.options = callback();

                        // or load data from Promise (if supports)
                        if (this.options.then !== undefined) {
                            this.options.then(
                                (data) => {
                                    this.options = data;
                                }
                            );
                        }
                    }
                } catch (e) {
                    console.error('Invalid "autocomplete" callback');
                }
            }
        }

        // bind handler callback to update input value
        if ('onchange' in this.element.dataset) {
            this.onchange = eval(this.element.dataset.onchange);
        }
    }

    /**
     * Creates an options list
     * @private
     */
    _buildOptionList() {
        this.optionList = document.createElement('ul');
        this.optionList.classList.add('menu');
        this.optionList.style.display = 'none';

        this.input = this.element.querySelector('input.form-input');

        this.input.onclick = (event) => {
            this.inputChanged(event.target.value, false)
        };

        this.input.oninput = (event) => {
            this.inputChanged(event.target.value)
        };

        document.addEventListener('click', (event) => {
            if (event.target !== this.input) {
                this.optionList.style.display = 'none';
            }
        });

        this.element.appendChild(this.optionList);
    }

    /**
     * Creates an options list item
     * @param option
     * @returns {HTMLLIElement}
     * @private
     */
    _buildOptionItem(option) {
        let optionItem = document.createElement('li');
        optionItem.classList.add('menu-item');

        let optionLink = document.createElement('a');

        let optionTileContainer = document.createElement('div');
        optionTileContainer.classList.add('tile', 'tile-centered');

        let optionTileContent = document.createElement('div');
        optionTileContent.classList.add('tile-content');
        optionTileContent.innerText = option;
        optionTileContent.onclick = (event) => {
            this.input.value = event.target.innerText;
        };

        optionTileContainer.appendChild(optionTileContent);
        optionLink.appendChild(optionTileContainer);
        optionItem.appendChild(optionLink);

        return optionItem;
    }

    /**
     * A handler of the input change event
     * @param value
     * @param reload
     */
    inputChanged(value, reload = true) {
        // raise callback function if exists
        if (this.onchange && (reload || this.options.length < 1)) {
            this.onchange(value, this);
        }

        // update the list
        this.refresh();
    }

    /**
     * Updates the current options list to the new values
     */
    refresh() {
        let values = this.filter(this.input.value);

        this.optionList.innerHTML = '';
        this.optionList.style.display = 'none';

        if (values.length > 0) {
            this.optionList.style.display = 'block';

            values.forEach(
                (option) => {
                    this.optionList.appendChild(
                        this._buildOptionItem(option)
                    );
                }
            );
        }
    }

    /**
     * Filters the options by query string
     * @param query
     * @returns {string[]}
     */
    filter(query) {
        return this.options.filter(
            value => {
                return value.match(
                    new RegExp(`${query}`, 'gui')
                );
            }
        );
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
 * Chips component
 * @property {string[]} chips
 * @property {HTMLFormElement} input
 * @property {HTMLElement} chipsBlock
 * @property {object} config
 */
class Chips extends _classes_widget__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
     * @inheritDoc
     */
    init() {
        this.chips = [];

        this._buildConfig();

        this._buildContainer();

        this._buildInput();
    }

    /**
     * Builds widget configuration
     * @private
     */
    _buildConfig() {
        this.config = {
            chipsEnter: true,
            chipsComma: true,
            chipsClasses: [],
            chipsContainerClasses: ['mb-3'],
        };

        this.loadDataParams(this.config);
    }

    /**
     * Builds container for the chip items
     * @private
     */
    _buildContainer() {
        this.chipsContainer = document.createElement('div');

        this.chipsContainer.classList.add(
            ...this.config.chipsContainerClasses
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
            let useComma = (event.key === "," && this.config.chipsComma);
            let useEnter = (event.key === "Enter" && this.config.chipsEnter);

            if (useComma || useEnter) {
                let content = event.target.value;

                if (useComma) {
                    content = content.replace(',', '');
                }

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

        if (this.config.chipsClasses.length > 0) {
            chip.classList.add(...this.config.chipsClasses);
        }

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



/**
 * Tabs component
 * @property {string} name
 * @property {int} index
 * @property {HTMLElement[]} pages
 */
class Tabs extends _classes_widget__WEBPACK_IMPORTED_MODULE_0__["default"] {
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



/**
 * Toast component
 *
 * @property {HTMLElement} button
 */
class Toast extends _classes_widget__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * @inheritDoc
     */
    static get selector() {
        return '[data-toast]';
    }

    /**
     * @inheritDoc
     */
    static get class() {
        return Toast;
    }

    /**
     * Initialize alert toasts on the page
     */
    init() {
        this.button = this.element.querySelector('button.btn-clear');

        this.button.onclick = () => {
            this.close();
        };
    }

    /**
     * Closes active alert on the page
     */
    close() {
        this.element.animate([
            {opacity: 1},
            {opacity: 0},
        ], {duration: 300});

        setTimeout(() => {
            this.element.remove();
        }, 290);
    }

    /**
     * Generates a new notification toast in the top of the page
     * @param params
     */
    static show(params) {
        // basic configuration
        let config = {
            title: 'Test toast',
            message: 'Simple toast text message',
            timeout: 3000,
            autoClose: true,
        };

        // merge with custom params
        config = {
            ...config,
            ...params
        };

        // create a new toast element
        let toast = document.createElement('div');

        // set basic styles to the toast
        toast.classList.add('toast', 'p-fixed');
        toast.style.width = 'auto';
        toast.style.minWidth = '300px';
        toast.style.maxWidth = '600px';

        // center the toast
        setTimeout(() => {
            toast.style.marginLeft = `calc(50% - ${toast.offsetWidth / 2}px)`;
            toast.style.top = `-${toast.offsetHeight}px`;
        }, 1);

        // set notification style by type
        if ('type' in config) {
            toast.classList.add(`toast-${config.type}`);
        }

        // generate the title by param value
        if ('title' in config && config.title !== false) {
            let title = document.createElement('h6');
            title.innerText = config.title;
            toast.appendChild(title);
        }

        // set up content text
        let content = document.createElement('p');
        content.innerHTML = config.message;
        toast.appendChild(content);

        // function to close toast by click on the button
        let closeToastHandler = function () {
            toast.animate([
                {opacity: 1},
                {opacity: 0},
            ], {duration: 300});

            setTimeout(() => {
                toast.remove();
            }, 290);
        };

        // create the close button
        let closeButton = document.createElement('button');
        closeButton.classList.add('btn', 'btn-clear', 'float-right');
        closeButton.onclick = closeToastHandler;
        toast.prepend(closeButton);

        // append the toast to the page content
        document.body.appendChild(toast);

        // fade-in of the toast
        toast.animate([
            {top: `-${toast.offsetHeight}px`},
            {top: `25px`},
        ], {duration: 300, easing: 'ease', fill: "forwards"});

        // configure auto-close param
        if (config.autoClose) {
            setTimeout(closeToastHandler, config.timeout);
        }
    }

    /**
     * Shows notification with primary style
     * @param message
     * @param title
     * @param params
     */
    static info(message, title = false, params = {}) {
        Toast.show({
            message: message,
            title: title,
            type: 'primary',
            ...params
        });
    }

    /**
     * Shows notification with success style
     * @param message
     * @param title
     * @param params
     */
    static success(message, title = false, params = {}) {
        Toast.show({
            message: message,
            title: title,
            type: 'success',
            ...params
        });
    }

    /**
     * Shows notification with warning style
     * @param message
     * @param title
     * @param params
     */
    static warning(message, title = false, params = {}) {
        Toast.show({
            message: message,
            title: title,
            type: 'warning',
            ...params
        });
    }

    /**
     * Shows notification with error style
     * @param message
     * @param title
     * @param params
     */
    static error(message, title = false, params = {}) {
        Toast.show({
            message: message,
            title: title,
            type: 'error',
            ...params
        });
    }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xhc3Nlcy93aWRnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3BlY3RyZS5qcyIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL2F1dG9jb21wbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL2NoaXBzLmpzIiwid2VicGFjazovLy8uL3dpZGdldHMvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL3RvYXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxZQUFZO0FBQzFCO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNwSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDaUQ7QUFDZDtBQUNGO0FBQ0U7O0FBRW5DO0FBQ0EsSUFBSSwyRUFBWTtBQUNoQixJQUFJLDZEQUFLO0FBQ1QsSUFBSSwyREFBSTtBQUNSLElBQUksNkRBQUs7QUFDVDs7QUFFZSxzRUFBTyxFOzs7Ozs7Ozs7Ozs7QUNuQnRCO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNDOztBQUV0QztBQUNBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCLGNBQWMsT0FBTztBQUNyQixjQUFjLFlBQVk7QUFDMUIsY0FBYyxZQUFZO0FBQzFCO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ2UsMkJBQTJCLHVEQUFNO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsTUFBTTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2pNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQzs7QUFFdEM7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixjQUFjLGdCQUFnQjtBQUM5QixjQUFjLFlBQVk7QUFDMUIsY0FBYyxPQUFPO0FBQ3JCO0FBQ2Usb0JBQW9CLHVEQUFNO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0JBQWtCOztBQUUvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLE1BQU07QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3RNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQzs7QUFFdEM7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLElBQUk7QUFDbEIsY0FBYyxjQUFjO0FBQzVCO0FBQ2UsbUJBQW1CLHVEQUFNO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsVUFBVTs7QUFFaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDbkhBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQSxjQUFjLFlBQVk7QUFDMUI7QUFDZSxvQkFBb0IsdURBQU07QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsYUFBYSxXQUFXO0FBQ3hCLFlBQVksY0FBYzs7QUFFMUI7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRCxzQkFBc0I7QUFDekUsa0NBQWtDLG1CQUFtQjtBQUNyRCxTQUFTOztBQUVUO0FBQ0E7QUFDQSx5Q0FBeUMsWUFBWTtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFdBQVc7QUFDNUIsaUJBQWlCLFdBQVc7QUFDNUIsZ0JBQWdCLGNBQWM7O0FBRTlCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsbUJBQW1CLElBQUk7QUFDN0MsYUFBYSxZQUFZO0FBQ3pCLFlBQVksZ0RBQWdEOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQyIsImZpbGUiOiJzcGVjdHJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuLi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcGVjdHJlLmpzXCIpO1xuIiwiLypcbiAqIENyZWF0ZWQgYnkgQXJ0eW9tIE1hbmNoZW5rb3ZcbiAqIGFydHlvbUBtYW5jaGVua29mZi5tZVxuICogbWFuY2hlbmtvZmYubWUgwqkgMjAxOVxuICovXG5cbi8qKlxuICogQmFzZSB3aWRnZXQgY2xhc3NcbiAqXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCB7XG4gICAgLyoqXG4gICAgICogQmFzZSB3aWRnZXQgY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgLy8gcmVtZW1iZXIgSFRNTCBlbGVtZW50XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgLy8gY2FsbCBpbXBsZW1lbnRlZCBtZXRob2RzXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1lcmdlcyB3aWRnZXQgY29uZmlndXJhdGlvbiBieSBsb2FkaW5nIGRhdGEtKiBwYXJhbXNcbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICovXG4gICAgbG9hZERhdGFQYXJhbXMocGFyYW1zKSB7XG4gICAgICAgIGxldCBkYXRhID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocGFyYW1zKTtcblxuICAgICAgICBkYXRhLmZvckVhY2goXG4gICAgICAgICAgICAoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSBpbiB0aGlzLmVsZW1lbnQuZGF0YXNldCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zW2tleV0gPSBKU09OLnBhcnNlKHRoaXMuZWxlbWVudC5kYXRhc2V0W2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXNba2V5XSA9IHRoaXMuZWxlbWVudC5kYXRhc2V0W2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBjdXJyZW50IHdpZGdldCBxdWVyeSBzZWxlY3RvclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGdldCBzZWxlY3RvcigpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignc2VsZWN0b3IoKSBnZXR0ZXIgbm90IGltcGxlbWVudGVkIHlldCcpO1xuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGN1cnJlbnQgd2lkZ2V0IGNsYXNzIG5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgY2xhc3MoKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NsYXNzKCkgZ2V0dGVyIG5vdCBpbXBsZW1lbnRlZCB5ZXQnKTtcblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXV0b21hdGljIHJlZ2lzdGVycyB3aWRnZXRzIG9uIHRoZSBwYWdlIGJ5IHF1ZXJ5IHNlbGVjdG9yXG4gICAgICogQHBhcmFtIHNlbGVjdG9yXG4gICAgICovXG4gICAgc3RhdGljIHJlZ2lzdGVyKHNlbGVjdG9yID0gZmFsc2UpIHtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBhbiBpbnN0YW5jZXMgbGlzdFxuICAgICAgICB0aGlzLmNsYXNzW1wiaW5zdGFuY2VzXCJdID0gW107XG5cbiAgICAgICAgLy8gc2V0IHF1ZXJ5IHNlbGVjdG9yXG4gICAgICAgIGlmIChzZWxlY3RvciA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yID0gdGhpcy5zZWxlY3RvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpbmRzIGFsbCBpdGVtcyBvbiB0aGUgcGFnZVxuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgICAgICAgICAuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NbXCJpbnN0YW5jZXNcIl0ucHVzaChcbiAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgd2lkZ2V0XG4gICAgICAgICAgICAgICAgICAgIG5ldyB0aGlzLmNsYXNzKGVsZW0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHdpZGdldCBpbnN0YW5jZSBieSBxdWVyeSBzZWxlY3RvclxuICAgICAqIEBwYXJhbSBzZWxlY3RvclxuICAgICAqIEByZXR1cm5zIHtXaWRnZXR9XG4gICAgICovXG4gICAgc3RhdGljIGdldChzZWxlY3Rvcikge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzW1wiaW5zdGFuY2VzXCJdLmZpbmQoXG4gICAgICAgICAgICAod2lkZ2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpZGdldC5lbGVtZW50ID09PSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByaW50cyBpbmZvcm1hdGlvbiBhYm91dCBjdXJyZW50IHdpZGdldFxuICAgICAqL1xuICAgIGxvZygpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdpZGdldCBiYXNlIGluaXRpYWxpemF0aW9uXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignaW5pdCgpIG1ldGhvZCBub3QgaW1wbGVtZW50ZWQgeWV0Jyk7XG4gICAgfVxufSIsIi8qXG4gKiBDcmVhdGVkIGJ5IEFydHlvbSBNYW5jaGVua292XG4gKiBhcnR5b21AbWFuY2hlbmtvZmYubWVcbiAqIG1hbmNoZW5rb2ZmLm1lIMKpIDIwMTlcbiAqL1xuXG4vLyBpbXBvcnQgYW5kIHJlZ2lzdGVyIGNvbXBvbmVudHNcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSAnLi93aWRnZXRzL2F1dG9jb21wbGV0ZSdcbmltcG9ydCBDaGlwcyBmcm9tICcuL3dpZGdldHMvY2hpcHMnXG5pbXBvcnQgVGFicyBmcm9tICcuL3dpZGdldHMvdGFicydcbmltcG9ydCBUb2FzdCBmcm9tICcuL3dpZGdldHMvdG9hc3QnXG5cbmNvbnN0IFNwZWN0cmUgPSB7XG4gICAgQXV0b2NvbXBsZXRlLFxuICAgIENoaXBzLFxuICAgIFRhYnMsXG4gICAgVG9hc3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWN0cmU7IiwiLypcbiAqIENyZWF0ZWQgYnkgQXJ0eW9tIE1hbmNoZW5rb3ZcbiAqIGFydHlvbUBtYW5jaGVua29mZi5tZVxuICogbWFuY2hlbmtvZmYubWUgwqkgMjAxOVxuICovXG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnLi4vY2xhc3Nlcy93aWRnZXQnXG5cbi8qKlxuICogQXV0by1jb21wbGV0ZSBjb21wb25lbnRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IG9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBjb25maWdcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IG9wdGlvbkxpc3RcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGlucHV0XG4gKlxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gb25jaGFuZ2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b2NvbXBsZXRlIGV4dGVuZHMgV2lkZ2V0IHtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgc2VsZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiAnW2RhdGEtYXV0b2NvbXBsZXRlXSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IGNsYXNzKCkge1xuICAgICAgICByZXR1cm4gQXV0b2NvbXBsZXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF1dG8tY29tcGxldGUgd2lkZ2V0IGluaXRpYWxpemF0aW9uXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5fYnVpbGRDb25maWd1cmF0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5fYnVpbGRPcHRpb25MaXN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGRzIGF1dG9jb21wbGV0ZSBzZXR0aW5ncyBhbmQgc2V0cyB1cCBjYWxsYmFja3NcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9idWlsZENvbmZpZ3VyYXRpb24oKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBhbiBlbXB0eSBvcHRpb25zIGxpc3RcbiAgICAgICAgdGhpcy5vcHRpb25zID0gW107XG5cbiAgICAgICAgbGV0IGF1dG9jb21wbGV0ZSA9IHRoaXMuZWxlbWVudC5kYXRhc2V0LmF1dG9jb21wbGV0ZTtcblxuICAgICAgICBpZiAoYXV0b2NvbXBsZXRlICE9PSAnJykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyB0cnkgdG8gbG9hZCBhcnJheSBmcm9tIGRhdGEtYXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gSlNPTi5wYXJzZShhdXRvY29tcGxldGUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRyeSB0byBnZXQgY2FsbGJhY2sgZnVuY3Rpb24gaWYgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYWxsYmFjayA9IGV2YWwoYXV0b2NvbXBsZXRlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvYWQgZGF0YSBmcm9tIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBjYWxsYmFjaygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvciBsb2FkIGRhdGEgZnJvbSBQcm9taXNlIChpZiBzdXBwb3J0cylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudGhlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBcImF1dG9jb21wbGV0ZVwiIGNhbGxiYWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYmluZCBoYW5kbGVyIGNhbGxiYWNrIHRvIHVwZGF0ZSBpbnB1dCB2YWx1ZVxuICAgICAgICBpZiAoJ29uY2hhbmdlJyBpbiB0aGlzLmVsZW1lbnQuZGF0YXNldCkge1xuICAgICAgICAgICAgdGhpcy5vbmNoYW5nZSA9IGV2YWwodGhpcy5lbGVtZW50LmRhdGFzZXQub25jaGFuZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBvcHRpb25zIGxpc3RcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9idWlsZE9wdGlvbkxpc3QoKSB7XG4gICAgICAgIHRoaXMub3B0aW9uTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHRoaXMub3B0aW9uTGlzdC5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgICAgIHRoaXMub3B0aW9uTGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQuZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgIHRoaXMuaW5wdXQub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbnB1dENoYW5nZWQoZXZlbnQudGFyZ2V0LnZhbHVlLCBmYWxzZSlcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmlucHV0Lm9uaW5wdXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRDaGFuZ2VkKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgfTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gdGhpcy5pbnB1dCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uTGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5vcHRpb25MaXN0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIG9wdGlvbnMgbGlzdCBpdGVtXG4gICAgICogQHBhcmFtIG9wdGlvblxuICAgICAqIEByZXR1cm5zIHtIVE1MTElFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2J1aWxkT3B0aW9uSXRlbShvcHRpb24pIHtcbiAgICAgICAgbGV0IG9wdGlvbkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBvcHRpb25JdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gICAgICAgIGxldCBvcHRpb25MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgICAgIGxldCBvcHRpb25UaWxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG9wdGlvblRpbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGlsZScsICd0aWxlLWNlbnRlcmVkJyk7XG5cbiAgICAgICAgbGV0IG9wdGlvblRpbGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG9wdGlvblRpbGVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RpbGUtY29udGVudCcpO1xuICAgICAgICBvcHRpb25UaWxlQ29udGVudC5pbm5lclRleHQgPSBvcHRpb247XG4gICAgICAgIG9wdGlvblRpbGVDb250ZW50Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSBldmVudC50YXJnZXQuaW5uZXJUZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIG9wdGlvblRpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQob3B0aW9uVGlsZUNvbnRlbnQpO1xuICAgICAgICBvcHRpb25MaW5rLmFwcGVuZENoaWxkKG9wdGlvblRpbGVDb250YWluZXIpO1xuICAgICAgICBvcHRpb25JdGVtLmFwcGVuZENoaWxkKG9wdGlvbkxpbmspO1xuXG4gICAgICAgIHJldHVybiBvcHRpb25JdGVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgaGFuZGxlciBvZiB0aGUgaW5wdXQgY2hhbmdlIGV2ZW50XG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHBhcmFtIHJlbG9hZFxuICAgICAqL1xuICAgIGlucHV0Q2hhbmdlZCh2YWx1ZSwgcmVsb2FkID0gdHJ1ZSkge1xuICAgICAgICAvLyByYWlzZSBjYWxsYmFjayBmdW5jdGlvbiBpZiBleGlzdHNcbiAgICAgICAgaWYgKHRoaXMub25jaGFuZ2UgJiYgKHJlbG9hZCB8fCB0aGlzLm9wdGlvbnMubGVuZ3RoIDwgMSkpIHtcbiAgICAgICAgICAgIHRoaXMub25jaGFuZ2UodmFsdWUsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIHRoZSBsaXN0XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGN1cnJlbnQgb3B0aW9ucyBsaXN0IHRvIHRoZSBuZXcgdmFsdWVzXG4gICAgICovXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMuZmlsdGVyKHRoaXMuaW5wdXQudmFsdWUpO1xuXG4gICAgICAgIHRoaXMub3B0aW9uTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGhpcy5vcHRpb25MaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbkxpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKFxuICAgICAgICAgICAgICAgIChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25MaXN0LmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnVpbGRPcHRpb25JdGVtKG9wdGlvbilcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmlsdGVycyB0aGUgb3B0aW9ucyBieSBxdWVyeSBzdHJpbmdcbiAgICAgKiBAcGFyYW0gcXVlcnlcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZmlsdGVyKHF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKFxuICAgICAgICAgICAgdmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5tYXRjaChcbiAgICAgICAgICAgICAgICAgICAgbmV3IFJlZ0V4cChgJHtxdWVyeX1gLCAnZ3VpJylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbn0iLCIvKlxuICogQ3JlYXRlZCBieSBBcnR5b20gTWFuY2hlbmtvdlxuICogYXJ0eW9tQG1hbmNoZW5rb2ZmLm1lXG4gKiBtYW5jaGVua29mZi5tZSDCqSAyMDE5XG4gKi9cblxuaW1wb3J0IFdpZGdldCBmcm9tICcuLi9jbGFzc2VzL3dpZGdldCdcblxuLyoqXG4gKiBDaGlwcyBjb21wb25lbnRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGNoaXBzXG4gKiBAcHJvcGVydHkge0hUTUxGb3JtRWxlbWVudH0gaW5wdXRcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGNoaXBzQmxvY2tcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBjb25maWdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hpcHMgZXh0ZW5kcyBXaWRnZXQge1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgc3RhdGljIGdldCBzZWxlY3RvcigpIHtcbiAgICAgICAgcmV0dXJuICdbZGF0YS1jaGlwc10nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgc3RhdGljIGdldCBjbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIENoaXBzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5jaGlwcyA9IFtdO1xuXG4gICAgICAgIHRoaXMuX2J1aWxkQ29uZmlnKCk7XG5cbiAgICAgICAgdGhpcy5fYnVpbGRDb250YWluZXIoKTtcblxuICAgICAgICB0aGlzLl9idWlsZElucHV0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGRzIHdpZGdldCBjb25maWd1cmF0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfYnVpbGRDb25maWcoKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAgICAgY2hpcHNFbnRlcjogdHJ1ZSxcbiAgICAgICAgICAgIGNoaXBzQ29tbWE6IHRydWUsXG4gICAgICAgICAgICBjaGlwc0NsYXNzZXM6IFtdLFxuICAgICAgICAgICAgY2hpcHNDb250YWluZXJDbGFzc2VzOiBbJ21iLTMnXSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmxvYWREYXRhUGFyYW1zKHRoaXMuY29uZmlnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgY29udGFpbmVyIGZvciB0aGUgY2hpcCBpdGVtc1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2J1aWxkQ29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLmNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdGhpcy5jaGlwc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgLi4udGhpcy5jb25maWcuY2hpcHNDb250YWluZXJDbGFzc2VzXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzLmNoaXBzQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgYW4gaW5wdXQgdG8gc3RvcmUgdmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9idWlsZElucHV0KCkge1xuICAgICAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGhpcy5pbnB1dC50eXBlID0gJ2hpZGRlbic7XG4gICAgICAgIHRoaXMuaW5wdXQubmFtZSA9IGAke3RoaXMuZWxlbWVudC5uYW1lfWA7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5hcHBlbmQodGhpcy5pbnB1dCk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50Lm9ua2V5dXAgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGxldCB1c2VDb21tYSA9IChldmVudC5rZXkgPT09IFwiLFwiICYmIHRoaXMuY29uZmlnLmNoaXBzQ29tbWEpO1xuICAgICAgICAgICAgbGV0IHVzZUVudGVyID0gKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiICYmIHRoaXMuY29uZmlnLmNoaXBzRW50ZXIpO1xuXG4gICAgICAgICAgICBpZiAodXNlQ29tbWEgfHwgdXNlRW50ZXIpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICAgICAgICAgIGlmICh1c2VDb21tYSkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKCcsJywgJycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuYWRkKGNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBjaGlwIGl0ZW0gdG8gYXBwZW5kIHRvIHRoZSBjb250YWluZXJcbiAgICAgKiBAcGFyYW0gbGFiZWxcbiAgICAgKiBAcmV0dXJucyB7SFRNTFNwYW5FbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2J1aWxkQ2hpcChsYWJlbCkge1xuICAgICAgICAvLyBjaGlwIGl0ZW1cbiAgICAgICAgbGV0IGNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgY2hpcC5jbGFzc0xpc3QuYWRkKCdjaGlwJyk7XG4gICAgICAgIGNoaXAuaW5uZXJUZXh0ID0gbGFiZWw7XG4gICAgICAgIGNoaXAuZGF0YXNldC5jaGlwID0gbGFiZWw7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmNoaXBzQ2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjaGlwLmNsYXNzTGlzdC5hZGQoLi4udGhpcy5jb25maWcuY2hpcHNDbGFzc2VzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNsb3NlIGJ1dHRvblxuICAgICAgICBsZXQgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICAgICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi1jbGVhcicpO1xuICAgICAgICBjbG9zZUJ1dHRvbi5yb2xlID0gJ2J1dHRvbic7XG4gICAgICAgIGNsb3NlQnV0dG9uLmhyZWYgPSAnIyc7XG5cbiAgICAgICAgY2xvc2VCdXR0b24ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZWxldGUoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5jaGlwKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjaGlwLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblxuICAgICAgICByZXR1cm4gY2hpcDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgVUkgdmFsdWVzIHRvIHVwZGF0ZSB0aGUgbGF0ZXN0IGNoYW5nZXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9yZXNldCgpIHtcbiAgICAgICAgdGhpcy5jaGlwc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgVUkgdG8gdGhlIGxhdGVzdCBjaGFuZ2VzXG4gICAgICovXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5fcmVzZXQoKTtcblxuICAgICAgICB0aGlzLmNoaXBzLmZvckVhY2goXG4gICAgICAgICAgICAobGFiZWwpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY2hpcCA9IHRoaXMuX2J1aWxkQ2hpcChsYWJlbCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlICs9IGAke2xhYmVsfSxgO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUuc3Vic3RyKFxuICAgICAgICAgICAgMCwgdGhpcy5pbnB1dC52YWx1ZS5sZW5ndGggLSAxXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIG5ldyBjaGlwIHZhbHVlXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgYWRkKHZhbHVlKSB7XG4gICAgICAgIC8vIGNoZWNrIHZhbHVlIGlzIG5vdCBlbXB0eVxuICAgICAgICBpZiAodmFsdWUgIT09ICcnICYmIHZhbHVlICE9PSAnICcpIHtcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgXCIgdG8gJ1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cIi9nLCBcIidcIik7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGR1cGxpY2F0ZXNcbiAgICAgICAgICAgIGxldCBleGlzdHMgPSB0aGlzLmNoaXBzLmZpbmQoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbSA9PT0gdmFsdWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaXBzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGNoaXAgYnkgdmFsdWVcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBkZWxldGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jaGlwcyA9IHRoaXMuY2hpcHMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbSAhPT0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cbn0iLCIvKlxuICogQ3JlYXRlZCBieSBBcnR5b20gTWFuY2hlbmtvdlxuICogYXJ0eW9tQG1hbmNoZW5rb2ZmLm1lXG4gKiBtYW5jaGVua29mZi5tZSDCqSAyMDE5XG4gKi9cblxuaW1wb3J0IFdpZGdldCBmcm9tICcuLi9jbGFzc2VzL3dpZGdldCdcblxuLyoqXG4gKiBUYWJzIGNvbXBvbmVudFxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5hbWVcbiAqIEBwcm9wZXJ0eSB7aW50fSBpbmRleFxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudFtdfSBwYWdlc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJzIGV4dGVuZHMgV2lkZ2V0IHtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgc2VsZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiAnW2RhdGEtdGFic10nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgc3RhdGljIGdldCBjbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIFRhYnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmVsZW1lbnQuZGF0YXNldC50YWJzO1xuXG4gICAgICAgIHRoaXMuX2J1aWxkQnV0dG9ucygpO1xuXG4gICAgICAgIHRoaXMuX2J1aWxkUGFnZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgYmluZGluZyBmb3IgbmF2aWdhdGlvbiBidXR0b25zXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfYnVpbGRCdXR0b25zKCkge1xuICAgICAgICB0aGlzLmJ1dHRvbnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1pdGVtJyk7XG5cbiAgICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goXG4gICAgICAgICAgICAoYnV0dG9uLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b24uZGF0YXNldC50YWIgPSBpZHg7XG5cbiAgICAgICAgICAgICAgICAvLyBzYXZlcyBjdXJyZW50IGFjdGl2ZSBwYWdlIGluZGV4XG4gICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSBpZHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZShldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LnRhYik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgc3R5bGUgcnVsZXMgZm9yIGNvbnRlbnQgcGFnZXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9idWlsZFBhZ2VzKCkge1xuICAgICAgICB0aGlzLnBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtdGFicy1jb250ZW50PVwiJHt0aGlzLm5hbWV9XCJdIGxpYCk7XG5cbiAgICAgICAgdGhpcy5wYWdlcy5mb3JFYWNoKFxuICAgICAgICAgICAgKHBhZ2UsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgIHBhZ2Uuc3R5bGUuZGlzcGxheSA9IChpZHggIT09IHRoaXMuaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgID8gJ25vbmUnXG4gICAgICAgICAgICAgICAgICAgIDogJ2Jsb2NrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWZyZXNoZXMgdGFicyB0byB0aGUgbGF0ZXN0IGNoYW5nZXNcbiAgICAgKi9cbiAgICByZWZyZXNoKCkge1xuICAgICAgICAvLyBzZXQgYWN0aXZlIG5hdmlnYXRpb24gYnV0dG9uXG4gICAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKFxuICAgICAgICAgICAgKGJ1dHRvbiwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlkeCA9PT0gdGhpcy5pbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBzaG93IGFjdGl2ZSBjb250ZW50IHBhZ2VcbiAgICAgICAgdGhpcy5wYWdlcy5mb3JFYWNoKFxuICAgICAgICAgICAgKHBhZ2UsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgIHBhZ2Uuc3R5bGUuZGlzcGxheSA9IChpZHggPT09IHRoaXMuaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgID8gJ2Jsb2NrJ1xuICAgICAgICAgICAgICAgICAgICA6ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2VzIGFjdGl2ZSBwYWdlIGFuZCBidXR0b24gYnkgc2VsZWN0ZWQgaW5kZXhcbiAgICAgKiBAcGFyYW0gaWR4XG4gICAgICovXG4gICAgYWN0aXZlKGlkeCkge1xuICAgICAgICB0aGlzLmluZGV4ID0gcGFyc2VJbnQoaWR4KTtcblxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG59IiwiLypcbiAqIENyZWF0ZWQgYnkgQXJ0eW9tIE1hbmNoZW5rb3ZcbiAqIGFydHlvbUBtYW5jaGVua29mZi5tZVxuICogbWFuY2hlbmtvZmYubWUgwqkgMjAxOVxuICovXG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnLi4vY2xhc3Nlcy93aWRnZXQnXG5cbi8qKlxuICogVG9hc3QgY29tcG9uZW50XG4gKlxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gYnV0dG9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvYXN0IGV4dGVuZHMgV2lkZ2V0IHtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgc2VsZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiAnW2RhdGEtdG9hc3RdJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgY2xhc3MoKSB7XG4gICAgICAgIHJldHVybiBUb2FzdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIGFsZXJ0IHRvYXN0cyBvbiB0aGUgcGFnZVxuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5idG4tY2xlYXInKTtcblxuICAgICAgICB0aGlzLmJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyBhY3RpdmUgYWxlcnQgb24gdGhlIHBhZ2VcbiAgICAgKi9cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFuaW1hdGUoW1xuICAgICAgICAgICAge29wYWNpdHk6IDF9LFxuICAgICAgICAgICAge29wYWNpdHk6IDB9LFxuICAgICAgICBdLCB7ZHVyYXRpb246IDMwMH0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9LCAyOTApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIG5ldyBub3RpZmljYXRpb24gdG9hc3QgaW4gdGhlIHRvcCBvZiB0aGUgcGFnZVxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgc2hvdyhwYXJhbXMpIHtcbiAgICAgICAgLy8gYmFzaWMgY29uZmlndXJhdGlvblxuICAgICAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdUZXN0IHRvYXN0JyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdTaW1wbGUgdG9hc3QgdGV4dCBtZXNzYWdlJyxcbiAgICAgICAgICAgIHRpbWVvdXQ6IDMwMDAsXG4gICAgICAgICAgICBhdXRvQ2xvc2U6IHRydWUsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gbWVyZ2Ugd2l0aCBjdXN0b20gcGFyYW1zXG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICAgIC4uLnBhcmFtc1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhIG5ldyB0b2FzdCBlbGVtZW50XG4gICAgICAgIGxldCB0b2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIC8vIHNldCBiYXNpYyBzdHlsZXMgdG8gdGhlIHRvYXN0XG4gICAgICAgIHRvYXN0LmNsYXNzTGlzdC5hZGQoJ3RvYXN0JywgJ3AtZml4ZWQnKTtcbiAgICAgICAgdG9hc3Quc3R5bGUud2lkdGggPSAnYXV0byc7XG4gICAgICAgIHRvYXN0LnN0eWxlLm1pbldpZHRoID0gJzMwMHB4JztcbiAgICAgICAgdG9hc3Quc3R5bGUubWF4V2lkdGggPSAnNjAwcHgnO1xuXG4gICAgICAgIC8vIGNlbnRlciB0aGUgdG9hc3RcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0b2FzdC5zdHlsZS5tYXJnaW5MZWZ0ID0gYGNhbGMoNTAlIC0gJHt0b2FzdC5vZmZzZXRXaWR0aCAvIDJ9cHgpYDtcbiAgICAgICAgICAgIHRvYXN0LnN0eWxlLnRvcCA9IGAtJHt0b2FzdC5vZmZzZXRIZWlnaHR9cHhgO1xuICAgICAgICB9LCAxKTtcblxuICAgICAgICAvLyBzZXQgbm90aWZpY2F0aW9uIHN0eWxlIGJ5IHR5cGVcbiAgICAgICAgaWYgKCd0eXBlJyBpbiBjb25maWcpIHtcbiAgICAgICAgICAgIHRvYXN0LmNsYXNzTGlzdC5hZGQoYHRvYXN0LSR7Y29uZmlnLnR5cGV9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBnZW5lcmF0ZSB0aGUgdGl0bGUgYnkgcGFyYW0gdmFsdWVcbiAgICAgICAgaWYgKCd0aXRsZScgaW4gY29uZmlnICYmIGNvbmZpZy50aXRsZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2Jyk7XG4gICAgICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBjb25maWcudGl0bGU7XG4gICAgICAgICAgICB0b2FzdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgdXAgY29udGVudCB0ZXh0XG4gICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IGNvbmZpZy5tZXNzYWdlO1xuICAgICAgICB0b2FzdC5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgICAgICAvLyBmdW5jdGlvbiB0byBjbG9zZSB0b2FzdCBieSBjbGljayBvbiB0aGUgYnV0dG9uXG4gICAgICAgIGxldCBjbG9zZVRvYXN0SGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRvYXN0LmFuaW1hdGUoW1xuICAgICAgICAgICAgICAgIHtvcGFjaXR5OiAxfSxcbiAgICAgICAgICAgICAgICB7b3BhY2l0eTogMH0sXG4gICAgICAgICAgICBdLCB7ZHVyYXRpb246IDMwMH0pO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0b2FzdC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0sIDI5MCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gY3JlYXRlIHRoZSBjbG9zZSBidXR0b25cbiAgICAgICAgbGV0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tY2xlYXInLCAnZmxvYXQtcmlnaHQnKTtcbiAgICAgICAgY2xvc2VCdXR0b24ub25jbGljayA9IGNsb3NlVG9hc3RIYW5kbGVyO1xuICAgICAgICB0b2FzdC5wcmVwZW5kKGNsb3NlQnV0dG9uKTtcblxuICAgICAgICAvLyBhcHBlbmQgdGhlIHRvYXN0IHRvIHRoZSBwYWdlIGNvbnRlbnRcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b2FzdCk7XG5cbiAgICAgICAgLy8gZmFkZS1pbiBvZiB0aGUgdG9hc3RcbiAgICAgICAgdG9hc3QuYW5pbWF0ZShbXG4gICAgICAgICAgICB7dG9wOiBgLSR7dG9hc3Qub2Zmc2V0SGVpZ2h0fXB4YH0sXG4gICAgICAgICAgICB7dG9wOiBgMjVweGB9LFxuICAgICAgICBdLCB7ZHVyYXRpb246IDMwMCwgZWFzaW5nOiAnZWFzZScsIGZpbGw6IFwiZm9yd2FyZHNcIn0pO1xuXG4gICAgICAgIC8vIGNvbmZpZ3VyZSBhdXRvLWNsb3NlIHBhcmFtXG4gICAgICAgIGlmIChjb25maWcuYXV0b0Nsb3NlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGNsb3NlVG9hc3RIYW5kbGVyLCBjb25maWcudGltZW91dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBub3RpZmljYXRpb24gd2l0aCBwcmltYXJ5IHN0eWxlXG4gICAgICogQHBhcmFtIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gdGl0bGVcbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICovXG4gICAgc3RhdGljIGluZm8obWVzc2FnZSwgdGl0bGUgPSBmYWxzZSwgcGFyYW1zID0ge30pIHtcbiAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgdHlwZTogJ3ByaW1hcnknLFxuICAgICAgICAgICAgLi4ucGFyYW1zXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIG5vdGlmaWNhdGlvbiB3aXRoIHN1Y2Nlc3Mgc3R5bGVcbiAgICAgKiBAcGFyYW0gbWVzc2FnZVxuICAgICAqIEBwYXJhbSB0aXRsZVxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgc3VjY2VzcyhtZXNzYWdlLCB0aXRsZSA9IGZhbHNlLCBwYXJhbXMgPSB7fSkge1xuICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAuLi5wYXJhbXNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3Mgbm90aWZpY2F0aW9uIHdpdGggd2FybmluZyBzdHlsZVxuICAgICAqIEBwYXJhbSBtZXNzYWdlXG4gICAgICogQHBhcmFtIHRpdGxlXG4gICAgICogQHBhcmFtIHBhcmFtc1xuICAgICAqL1xuICAgIHN0YXRpYyB3YXJuaW5nKG1lc3NhZ2UsIHRpdGxlID0gZmFsc2UsIHBhcmFtcyA9IHt9KSB7XG4gICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcbiAgICAgICAgICAgIC4uLnBhcmFtc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBub3RpZmljYXRpb24gd2l0aCBlcnJvciBzdHlsZVxuICAgICAqIEBwYXJhbSBtZXNzYWdlXG4gICAgICogQHBhcmFtIHRpdGxlXG4gICAgICogQHBhcmFtIHBhcmFtc1xuICAgICAqL1xuICAgIHN0YXRpYyBlcnJvcihtZXNzYWdlLCB0aXRsZSA9IGZhbHNlLCBwYXJhbXMgPSB7fSkge1xuICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgLi4ucGFyYW1zXG4gICAgICAgIH0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9