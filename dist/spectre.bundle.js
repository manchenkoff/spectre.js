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
/* harmony import */ var _spectre__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spectre */ "./spectre.js");
/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */



window.onload = () => {
    window.Spectre = _spectre__WEBPACK_IMPORTED_MODULE_0__["default"];

    Object
        .getOwnPropertyNames(_spectre__WEBPACK_IMPORTED_MODULE_0__["default"])
        .forEach((className) => {
            _spectre__WEBPACK_IMPORTED_MODULE_0__["default"][className].register();
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnVuZGxlLmpzIiwid2VicGFjazovLy8uL2NsYXNzZXMvd2lkZ2V0LmpzIiwid2VicGFjazovLy8uL3NwZWN0cmUuanMiLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9hdXRvY29tcGxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9jaGlwcy5qcyIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL3RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy90b2FzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVnQzs7QUFFaEM7QUFDQSxxQkFBcUIsZ0RBQU87O0FBRTVCO0FBQ0EsNkJBQTZCLGdEQUFPO0FBQ3BDO0FBQ0EsWUFBWSxnREFB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QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEMiLCJmaWxlIjoic3BlY3RyZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4uL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2J1bmRsZS5qc1wiKTtcbiIsIi8qXG4gKiBDcmVhdGVkIGJ5IEFydHlvbSBNYW5jaGVua292XG4gKiBhcnR5b21AbWFuY2hlbmtvZmYubWVcbiAqIG1hbmNoZW5rb2ZmLm1lIMKpIDIwMTlcbiAqL1xuXG5pbXBvcnQgU3BlY3RyZSBmcm9tICcuL3NwZWN0cmUnO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIHdpbmRvdy5TcGVjdHJlID0gU3BlY3RyZTtcblxuICAgIE9iamVjdFxuICAgICAgICAuZ2V0T3duUHJvcGVydHlOYW1lcyhTcGVjdHJlKVxuICAgICAgICAuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgICAgICBTcGVjdHJlW2NsYXNzTmFtZV0ucmVnaXN0ZXIoKTtcbiAgICAgICAgfSk7XG59OyIsIi8qXG4gKiBDcmVhdGVkIGJ5IEFydHlvbSBNYW5jaGVua292XG4gKiBhcnR5b21AbWFuY2hlbmtvZmYubWVcbiAqIG1hbmNoZW5rb2ZmLm1lIMKpIDIwMTlcbiAqL1xuXG4vKipcbiAqIEJhc2Ugd2lkZ2V0IGNsYXNzXG4gKlxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQge1xuICAgIC8qKlxuICAgICAqIEJhc2Ugd2lkZ2V0IGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIC8vIHJlbWVtYmVyIEhUTUwgZWxlbWVudFxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIC8vIGNhbGwgaW1wbGVtZW50ZWQgbWV0aG9kc1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXJnZXMgd2lkZ2V0IGNvbmZpZ3VyYXRpb24gYnkgbG9hZGluZyBkYXRhLSogcGFyYW1zXG4gICAgICogQHBhcmFtIHBhcmFtc1xuICAgICAqL1xuICAgIGxvYWREYXRhUGFyYW1zKHBhcmFtcykge1xuICAgICAgICBsZXQgZGF0YSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHBhcmFtcyk7XG5cbiAgICAgICAgZGF0YS5mb3JFYWNoKFxuICAgICAgICAgICAgKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgaW4gdGhpcy5lbGVtZW50LmRhdGFzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtc1trZXldID0gSlNPTi5wYXJzZSh0aGlzLmVsZW1lbnQuZGF0YXNldFtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zW2tleV0gPSB0aGlzLmVsZW1lbnQuZGF0YXNldFtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgY3VycmVudCB3aWRnZXQgcXVlcnkgc2VsZWN0b3JcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgc2VsZWN0b3IoKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3NlbGVjdG9yKCkgZ2V0dGVyIG5vdCBpbXBsZW1lbnRlZCB5ZXQnKTtcblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBjdXJyZW50IHdpZGdldCBjbGFzcyBuYW1lXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IGNsYXNzKCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdjbGFzcygpIGdldHRlciBub3QgaW1wbGVtZW50ZWQgeWV0Jyk7XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF1dG9tYXRpYyByZWdpc3RlcnMgd2lkZ2V0cyBvbiB0aGUgcGFnZSBieSBxdWVyeSBzZWxlY3RvclxuICAgICAqIEBwYXJhbSBzZWxlY3RvclxuICAgICAqL1xuICAgIHN0YXRpYyByZWdpc3RlcihzZWxlY3RvciA9IGZhbHNlKSB7XG4gICAgICAgIC8vIGluaXRpYWxpemUgYW4gaW5zdGFuY2VzIGxpc3RcbiAgICAgICAgdGhpcy5jbGFzc1tcImluc3RhbmNlc1wiXSA9IFtdO1xuXG4gICAgICAgIC8vIHNldCBxdWVyeSBzZWxlY3RvclxuICAgICAgICBpZiAoc2VsZWN0b3IgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBzZWxlY3RvciA9IHRoaXMuc2VsZWN0b3I7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaW5kcyBhbGwgaXRlbXMgb24gdGhlIHBhZ2VcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgICAgICAgICAgLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzW1wiaW5zdGFuY2VzXCJdLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIHdpZGdldFxuICAgICAgICAgICAgICAgICAgICBuZXcgdGhpcy5jbGFzcyhlbGVtKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSB3aWRnZXQgaW5zdGFuY2UgYnkgcXVlcnkgc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3JcbiAgICAgKiBAcmV0dXJucyB7V2lkZ2V0fVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQoc2VsZWN0b3IpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jbGFzc1tcImluc3RhbmNlc1wiXS5maW5kKFxuICAgICAgICAgICAgKHdpZGdldCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aWRnZXQuZWxlbWVudCA9PT0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmludHMgaW5mb3JtYXRpb24gYWJvdXQgY3VycmVudCB3aWRnZXRcbiAgICAgKi9cbiAgICBsb2coKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaWRnZXQgYmFzZSBpbml0aWFsaXphdGlvblxuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2luaXQoKSBtZXRob2Qgbm90IGltcGxlbWVudGVkIHlldCcpO1xuICAgIH1cbn0iLCIvKlxuICogQ3JlYXRlZCBieSBBcnR5b20gTWFuY2hlbmtvdlxuICogYXJ0eW9tQG1hbmNoZW5rb2ZmLm1lXG4gKiBtYW5jaGVua29mZi5tZSDCqSAyMDE5XG4gKi9cblxuLy8gaW1wb3J0IGFuZCByZWdpc3RlciBjb21wb25lbnRzXG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gJy4vd2lkZ2V0cy9hdXRvY29tcGxldGUnXG5pbXBvcnQgQ2hpcHMgZnJvbSAnLi93aWRnZXRzL2NoaXBzJ1xuaW1wb3J0IFRhYnMgZnJvbSAnLi93aWRnZXRzL3RhYnMnXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi93aWRnZXRzL3RvYXN0J1xuXG5jb25zdCBTcGVjdHJlID0ge1xuICAgIEF1dG9jb21wbGV0ZSxcbiAgICBDaGlwcyxcbiAgICBUYWJzLFxuICAgIFRvYXN0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVjdHJlOyIsIi8qXG4gKiBDcmVhdGVkIGJ5IEFydHlvbSBNYW5jaGVua292XG4gKiBhcnR5b21AbWFuY2hlbmtvZmYubWVcbiAqIG1hbmNoZW5rb2ZmLm1lIMKpIDIwMTlcbiAqL1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJy4uL2NsYXNzZXMvd2lkZ2V0J1xuXG4vKipcbiAqIEF1dG8tY29tcGxldGUgY29tcG9uZW50XG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBvcHRpb25zXG4gKiBAcHJvcGVydHkge29iamVjdH0gY29uZmlnXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBvcHRpb25MaXN0XG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBpbnB1dFxuICpcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG9uY2hhbmdlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9jb21wbGV0ZSBleHRlbmRzIFdpZGdldCB7XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IHNlbGVjdG9yKCkge1xuICAgICAgICByZXR1cm4gJ1tkYXRhLWF1dG9jb21wbGV0ZV0nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgc3RhdGljIGdldCBjbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIEF1dG9jb21wbGV0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdXRvLWNvbXBsZXRlIHdpZGdldCBpbml0aWFsaXphdGlvblxuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuX2J1aWxkQ29uZmlndXJhdGlvbigpO1xuXG4gICAgICAgIHRoaXMuX2J1aWxkT3B0aW9uTGlzdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBhdXRvY29tcGxldGUgc2V0dGluZ3MgYW5kIHNldHMgdXAgY2FsbGJhY2tzXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfYnVpbGRDb25maWd1cmF0aW9uKCkge1xuICAgICAgICAvLyBjcmVhdGUgYW4gZW1wdHkgb3B0aW9ucyBsaXN0XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuXG4gICAgICAgIGxldCBhdXRvY29tcGxldGUgPSB0aGlzLmVsZW1lbnQuZGF0YXNldC5hdXRvY29tcGxldGU7XG5cbiAgICAgICAgaWYgKGF1dG9jb21wbGV0ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gdHJ5IHRvIGxvYWQgYXJyYXkgZnJvbSBkYXRhLWF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IEpTT04ucGFyc2UoYXV0b2NvbXBsZXRlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0cnkgdG8gZ2V0IGNhbGxiYWNrIGZ1bmN0aW9uIGlmIGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2FsbGJhY2sgPSBldmFsKGF1dG9jb21wbGV0ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2FkIGRhdGEgZnJvbSBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gY2FsbGJhY2soKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3IgbG9hZCBkYXRhIGZyb20gUHJvbWlzZSAoaWYgc3VwcG9ydHMpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRoZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgXCJhdXRvY29tcGxldGVcIiBjYWxsYmFjaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGJpbmQgaGFuZGxlciBjYWxsYmFjayB0byB1cGRhdGUgaW5wdXQgdmFsdWVcbiAgICAgICAgaWYgKCdvbmNoYW5nZScgaW4gdGhpcy5lbGVtZW50LmRhdGFzZXQpIHtcbiAgICAgICAgICAgIHRoaXMub25jaGFuZ2UgPSBldmFsKHRoaXMuZWxlbWVudC5kYXRhc2V0Lm9uY2hhbmdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gb3B0aW9ucyBsaXN0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfYnVpbGRPcHRpb25MaXN0KCkge1xuICAgICAgICB0aGlzLm9wdGlvbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICB0aGlzLm9wdGlvbkxpc3QuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgICAgICB0aGlzLm9wdGlvbkxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICB0aGlzLmlucHV0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0LmZvcm0taW5wdXQnKTtcblxuICAgICAgICB0aGlzLmlucHV0Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRDaGFuZ2VkKGV2ZW50LnRhcmdldC52YWx1ZSwgZmFsc2UpXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5pbnB1dC5vbmlucHV0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlucHV0Q2hhbmdlZChldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgIH07XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IHRoaXMuaW5wdXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMub3B0aW9uTGlzdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBvcHRpb25zIGxpc3QgaXRlbVxuICAgICAqIEBwYXJhbSBvcHRpb25cbiAgICAgKiBAcmV0dXJucyB7SFRNTExJRWxlbWVudH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9idWlsZE9wdGlvbkl0ZW0ob3B0aW9uKSB7XG4gICAgICAgIGxldCBvcHRpb25JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgb3B0aW9uSXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICAgICAgICBsZXQgb3B0aW9uTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgICAgICBsZXQgb3B0aW9uVGlsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvcHRpb25UaWxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RpbGUnLCAndGlsZS1jZW50ZXJlZCcpO1xuXG4gICAgICAgIGxldCBvcHRpb25UaWxlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvcHRpb25UaWxlQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0aWxlLWNvbnRlbnQnKTtcbiAgICAgICAgb3B0aW9uVGlsZUNvbnRlbnQuaW5uZXJUZXh0ID0gb3B0aW9uO1xuICAgICAgICBvcHRpb25UaWxlQ29udGVudC5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gZXZlbnQudGFyZ2V0LmlubmVyVGV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICBvcHRpb25UaWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wdGlvblRpbGVDb250ZW50KTtcbiAgICAgICAgb3B0aW9uTGluay5hcHBlbmRDaGlsZChvcHRpb25UaWxlQ29udGFpbmVyKTtcbiAgICAgICAgb3B0aW9uSXRlbS5hcHBlbmRDaGlsZChvcHRpb25MaW5rKTtcblxuICAgICAgICByZXR1cm4gb3B0aW9uSXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIGhhbmRsZXIgb2YgdGhlIGlucHV0IGNoYW5nZSBldmVudFxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEBwYXJhbSByZWxvYWRcbiAgICAgKi9cbiAgICBpbnB1dENoYW5nZWQodmFsdWUsIHJlbG9hZCA9IHRydWUpIHtcbiAgICAgICAgLy8gcmFpc2UgY2FsbGJhY2sgZnVuY3Rpb24gaWYgZXhpc3RzXG4gICAgICAgIGlmICh0aGlzLm9uY2hhbmdlICYmIChyZWxvYWQgfHwgdGhpcy5vcHRpb25zLmxlbmd0aCA8IDEpKSB7XG4gICAgICAgICAgICB0aGlzLm9uY2hhbmdlKHZhbHVlLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgbGlzdFxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBjdXJyZW50IG9wdGlvbnMgbGlzdCB0byB0aGUgbmV3IHZhbHVlc1xuICAgICAqL1xuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIGxldCB2YWx1ZXMgPSB0aGlzLmZpbHRlcih0aGlzLmlucHV0LnZhbHVlKTtcblxuICAgICAgICB0aGlzLm9wdGlvbkxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRoaXMub3B0aW9uTGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25MaXN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uTGlzdC5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2J1aWxkT3B0aW9uSXRlbShvcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbHRlcnMgdGhlIG9wdGlvbnMgYnkgcXVlcnkgc3RyaW5nXG4gICAgICogQHBhcmFtIHF1ZXJ5XG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGZpbHRlcihxdWVyeSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihcbiAgICAgICAgICAgIHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUubWF0Y2goXG4gICAgICAgICAgICAgICAgICAgIG5ldyBSZWdFeHAoYCR7cXVlcnl9YCwgJ2d1aScpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG59IiwiLypcbiAqIENyZWF0ZWQgYnkgQXJ0eW9tIE1hbmNoZW5rb3ZcbiAqIGFydHlvbUBtYW5jaGVua29mZi5tZVxuICogbWFuY2hlbmtvZmYubWUgwqkgMjAxOVxuICovXG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnLi4vY2xhc3Nlcy93aWRnZXQnXG5cbi8qKlxuICogQ2hpcHMgY29tcG9uZW50XG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBjaGlwc1xuICogQHByb3BlcnR5IHtIVE1MRm9ybUVsZW1lbnR9IGlucHV0XG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBjaGlwc0Jsb2NrXG4gKiBAcHJvcGVydHkge29iamVjdH0gY29uZmlnXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoaXBzIGV4dGVuZHMgV2lkZ2V0IHtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgc2VsZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiAnW2RhdGEtY2hpcHNdJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgY2xhc3MoKSB7XG4gICAgICAgIHJldHVybiBDaGlwcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuY2hpcHMgPSBbXTtcblxuICAgICAgICB0aGlzLl9idWlsZENvbmZpZygpO1xuXG4gICAgICAgIHRoaXMuX2J1aWxkQ29udGFpbmVyKCk7XG5cbiAgICAgICAgdGhpcy5fYnVpbGRJbnB1dCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyB3aWRnZXQgY29uZmlndXJhdGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2J1aWxkQ29uZmlnKCkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgICAgIGNoaXBzRW50ZXI6IHRydWUsXG4gICAgICAgICAgICBjaGlwc0NvbW1hOiB0cnVlLFxuICAgICAgICAgICAgY2hpcHNDbGFzc2VzOiBbXSxcbiAgICAgICAgICAgIGNoaXBzQ29udGFpbmVyQ2xhc3NlczogWydtYi0zJ10sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5sb2FkRGF0YVBhcmFtcyh0aGlzLmNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGRzIGNvbnRhaW5lciBmb3IgdGhlIGNoaXAgaXRlbXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9idWlsZENvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5jaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRoaXMuY2hpcHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgIC4uLnRoaXMuY29uZmlnLmNoaXBzQ29udGFpbmVyQ2xhc3Nlc1xuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcy5jaGlwc0NvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGRzIGFuIGlucHV0IHRvIHN0b3JlIHZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfYnVpbGRJbnB1dCgpIHtcbiAgICAgICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRoaXMuaW5wdXQudHlwZSA9ICdoaWRkZW4nO1xuICAgICAgICB0aGlzLmlucHV0Lm5hbWUgPSBgJHt0aGlzLmVsZW1lbnQubmFtZX1gO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMuaW5wdXQpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5vbmtleXVwID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgdXNlQ29tbWEgPSAoZXZlbnQua2V5ID09PSBcIixcIiAmJiB0aGlzLmNvbmZpZy5jaGlwc0NvbW1hKTtcbiAgICAgICAgICAgIGxldCB1c2VFbnRlciA9IChldmVudC5rZXkgPT09IFwiRW50ZXJcIiAmJiB0aGlzLmNvbmZpZy5jaGlwc0VudGVyKTtcblxuICAgICAgICAgICAgaWYgKHVzZUNvbW1hIHx8IHVzZUVudGVyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAodXNlQ29tbWEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgnLCcsICcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFkZChjb250ZW50KTtcblxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgY2hpcCBpdGVtIHRvIGFwcGVuZCB0byB0aGUgY29udGFpbmVyXG4gICAgICogQHBhcmFtIGxhYmVsXG4gICAgICogQHJldHVybnMge0hUTUxTcGFuRWxlbWVudH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9idWlsZENoaXAobGFiZWwpIHtcbiAgICAgICAgLy8gY2hpcCBpdGVtXG4gICAgICAgIGxldCBjaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgIGNoaXAuY2xhc3NMaXN0LmFkZCgnY2hpcCcpO1xuICAgICAgICBjaGlwLmlubmVyVGV4dCA9IGxhYmVsO1xuICAgICAgICBjaGlwLmRhdGFzZXQuY2hpcCA9IGxhYmVsO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5jaGlwc0NsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY2hpcC5jbGFzc0xpc3QuYWRkKC4uLnRoaXMuY29uZmlnLmNoaXBzQ2xhc3Nlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjbG9zZSBidXR0b25cbiAgICAgICAgbGV0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tY2xlYXInKTtcbiAgICAgICAgY2xvc2VCdXR0b24ucm9sZSA9ICdidXR0b24nO1xuICAgICAgICBjbG9zZUJ1dHRvbi5ocmVmID0gJyMnO1xuXG4gICAgICAgIGNsb3NlQnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuY2hpcCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY2hpcC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgICAgICAgcmV0dXJuIGNoaXA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIFVJIHZhbHVlcyB0byB1cGRhdGUgdGhlIGxhdGVzdCBjaGFuZ2VzXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuY2hpcHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIFVJIHRvIHRoZSBsYXRlc3QgY2hhbmdlc1xuICAgICAqL1xuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMuX3Jlc2V0KCk7XG5cbiAgICAgICAgdGhpcy5jaGlwcy5mb3JFYWNoKFxuICAgICAgICAgICAgKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNoaXAgPSB0aGlzLl9idWlsZENoaXAobGFiZWwpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSArPSBgJHtsYWJlbH0sYDtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlLnN1YnN0cihcbiAgICAgICAgICAgIDAsIHRoaXMuaW5wdXQudmFsdWUubGVuZ3RoIC0gMVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBuZXcgY2hpcCB2YWx1ZVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIGFkZCh2YWx1ZSkge1xuICAgICAgICAvLyBjaGVjayB2YWx1ZSBpcyBub3QgZW1wdHlcbiAgICAgICAgaWYgKHZhbHVlICE9PSAnJyAmJiB2YWx1ZSAhPT0gJyAnKSB7XG4gICAgICAgICAgICAvLyByZXBsYWNlIFwiIHRvICdcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXCIvZywgXCInXCIpO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBkdXBsaWNhdGVzXG4gICAgICAgICAgICBsZXQgZXhpc3RzID0gdGhpcy5jaGlwcy5maW5kKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPT09IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlwcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBjaGlwIGJ5IHZhbHVlXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgZGVsZXRlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2hpcHMgPSB0aGlzLmNoaXBzLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gIT09IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG59IiwiLypcbiAqIENyZWF0ZWQgYnkgQXJ0eW9tIE1hbmNoZW5rb3ZcbiAqIGFydHlvbUBtYW5jaGVua29mZi5tZVxuICogbWFuY2hlbmtvZmYubWUgwqkgMjAxOVxuICovXG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnLi4vY2xhc3Nlcy93aWRnZXQnXG5cbi8qKlxuICogVGFicyBjb21wb25lbnRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lXG4gKiBAcHJvcGVydHkge2ludH0gaW5kZXhcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnRbXX0gcGFnZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFicyBleHRlbmRzIFdpZGdldCB7XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IHNlbGVjdG9yKCkge1xuICAgICAgICByZXR1cm4gJ1tkYXRhLXRhYnNdJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgY2xhc3MoKSB7XG4gICAgICAgIHJldHVybiBUYWJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5lbGVtZW50LmRhdGFzZXQudGFicztcblxuICAgICAgICB0aGlzLl9idWlsZEJ1dHRvbnMoKTtcblxuICAgICAgICB0aGlzLl9idWlsZFBhZ2VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGRzIGJpbmRpbmcgZm9yIG5hdmlnYXRpb24gYnV0dG9uc1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2J1aWxkQnV0dG9ucygpIHtcbiAgICAgICAgdGhpcy5idXR0b25zID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWItaXRlbScpO1xuXG4gICAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKFxuICAgICAgICAgICAgKGJ1dHRvbiwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmRhdGFzZXQudGFiID0gaWR4O1xuXG4gICAgICAgICAgICAgICAgLy8gc2F2ZXMgY3VycmVudCBhY3RpdmUgcGFnZSBpbmRleFxuICAgICAgICAgICAgICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ID0gaWR4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC50YWIpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGRzIHN0eWxlIHJ1bGVzIGZvciBjb250ZW50IHBhZ2VzXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfYnVpbGRQYWdlcygpIHtcbiAgICAgICAgdGhpcy5wYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXRhYnMtY29udGVudD1cIiR7dGhpcy5uYW1lfVwiXSBsaWApO1xuXG4gICAgICAgIHRoaXMucGFnZXMuZm9yRWFjaChcbiAgICAgICAgICAgIChwYWdlLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICBwYWdlLnN0eWxlLmRpc3BsYXkgPSAoaWR4ICE9PSB0aGlzLmluZGV4KVxuICAgICAgICAgICAgICAgICAgICA/ICdub25lJ1xuICAgICAgICAgICAgICAgICAgICA6ICdibG9jayc7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVmcmVzaGVzIHRhYnMgdG8gdGhlIGxhdGVzdCBjaGFuZ2VzXG4gICAgICovXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgLy8gc2V0IGFjdGl2ZSBuYXZpZ2F0aW9uIGJ1dHRvblxuICAgICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChcbiAgICAgICAgICAgIChidXR0b24sIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpZHggPT09IHRoaXMuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gc2hvdyBhY3RpdmUgY29udGVudCBwYWdlXG4gICAgICAgIHRoaXMucGFnZXMuZm9yRWFjaChcbiAgICAgICAgICAgIChwYWdlLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICBwYWdlLnN0eWxlLmRpc3BsYXkgPSAoaWR4ID09PSB0aGlzLmluZGV4KVxuICAgICAgICAgICAgICAgICAgICA/ICdibG9jaydcbiAgICAgICAgICAgICAgICAgICAgOiAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlcyBhY3RpdmUgcGFnZSBhbmQgYnV0dG9uIGJ5IHNlbGVjdGVkIGluZGV4XG4gICAgICogQHBhcmFtIGlkeFxuICAgICAqL1xuICAgIGFjdGl2ZShpZHgpIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IHBhcnNlSW50KGlkeCk7XG5cbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxufSIsIi8qXG4gKiBDcmVhdGVkIGJ5IEFydHlvbSBNYW5jaGVua292XG4gKiBhcnR5b21AbWFuY2hlbmtvZmYubWVcbiAqIG1hbmNoZW5rb2ZmLm1lIMKpIDIwMTlcbiAqL1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJy4uL2NsYXNzZXMvd2lkZ2V0J1xuXG4vKipcbiAqIFRvYXN0IGNvbXBvbmVudFxuICpcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGJ1dHRvblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2FzdCBleHRlbmRzIFdpZGdldCB7XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IHNlbGVjdG9yKCkge1xuICAgICAgICByZXR1cm4gJ1tkYXRhLXRvYXN0XSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IGNsYXNzKCkge1xuICAgICAgICByZXR1cm4gVG9hc3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBhbGVydCB0b2FzdHMgb24gdGhlIHBhZ2VcbiAgICAgKi9cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uYnRuLWNsZWFyJyk7XG5cbiAgICAgICAgdGhpcy5idXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgYWN0aXZlIGFsZXJ0IG9uIHRoZSBwYWdlXG4gICAgICovXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hbmltYXRlKFtcbiAgICAgICAgICAgIHtvcGFjaXR5OiAxfSxcbiAgICAgICAgICAgIHtvcGFjaXR5OiAwfSxcbiAgICAgICAgXSwge2R1cmF0aW9uOiAzMDB9KTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfSwgMjkwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBuZXcgbm90aWZpY2F0aW9uIHRvYXN0IGluIHRoZSB0b3Agb2YgdGhlIHBhZ2VcbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICovXG4gICAgc3RhdGljIHNob3cocGFyYW1zKSB7XG4gICAgICAgIC8vIGJhc2ljIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnVGVzdCB0b2FzdCcsXG4gICAgICAgICAgICBtZXNzYWdlOiAnU2ltcGxlIHRvYXN0IHRleHQgbWVzc2FnZScsXG4gICAgICAgICAgICB0aW1lb3V0OiAzMDAwLFxuICAgICAgICAgICAgYXV0b0Nsb3NlOiB0cnVlLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIG1lcmdlIHdpdGggY3VzdG9tIHBhcmFtc1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAuLi5jb25maWcsXG4gICAgICAgICAgICAuLi5wYXJhbXNcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBjcmVhdGUgYSBuZXcgdG9hc3QgZWxlbWVudFxuICAgICAgICBsZXQgdG9hc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAvLyBzZXQgYmFzaWMgc3R5bGVzIHRvIHRoZSB0b2FzdFxuICAgICAgICB0b2FzdC5jbGFzc0xpc3QuYWRkKCd0b2FzdCcsICdwLWZpeGVkJyk7XG4gICAgICAgIHRvYXN0LnN0eWxlLndpZHRoID0gJ2F1dG8nO1xuICAgICAgICB0b2FzdC5zdHlsZS5taW5XaWR0aCA9ICczMDBweCc7XG4gICAgICAgIHRvYXN0LnN0eWxlLm1heFdpZHRoID0gJzYwMHB4JztcblxuICAgICAgICAvLyBjZW50ZXIgdGhlIHRvYXN0XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdG9hc3Quc3R5bGUubWFyZ2luTGVmdCA9IGBjYWxjKDUwJSAtICR7dG9hc3Qub2Zmc2V0V2lkdGggLyAyfXB4KWA7XG4gICAgICAgICAgICB0b2FzdC5zdHlsZS50b3AgPSBgLSR7dG9hc3Qub2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICAgICAgfSwgMSk7XG5cbiAgICAgICAgLy8gc2V0IG5vdGlmaWNhdGlvbiBzdHlsZSBieSB0eXBlXG4gICAgICAgIGlmICgndHlwZScgaW4gY29uZmlnKSB7XG4gICAgICAgICAgICB0b2FzdC5jbGFzc0xpc3QuYWRkKGB0b2FzdC0ke2NvbmZpZy50eXBlfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2VuZXJhdGUgdGhlIHRpdGxlIGJ5IHBhcmFtIHZhbHVlXG4gICAgICAgIGlmICgndGl0bGUnIGluIGNvbmZpZyAmJiBjb25maWcudGl0bGUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpO1xuICAgICAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gY29uZmlnLnRpdGxlO1xuICAgICAgICAgICAgdG9hc3QuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IHVwIGNvbnRlbnQgdGV4dFxuICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBjb25maWcubWVzc2FnZTtcbiAgICAgICAgdG9hc3QuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICAgICAgLy8gZnVuY3Rpb24gdG8gY2xvc2UgdG9hc3QgYnkgY2xpY2sgb24gdGhlIGJ1dHRvblxuICAgICAgICBsZXQgY2xvc2VUb2FzdEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0b2FzdC5hbmltYXRlKFtcbiAgICAgICAgICAgICAgICB7b3BhY2l0eTogMX0sXG4gICAgICAgICAgICAgICAge29wYWNpdHk6IDB9LFxuICAgICAgICAgICAgXSwge2R1cmF0aW9uOiAzMDB9KTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9hc3QucmVtb3ZlKCk7XG4gICAgICAgICAgICB9LCAyOTApO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgY2xvc2UgYnV0dG9uXG4gICAgICAgIGxldCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLWNsZWFyJywgJ2Zsb2F0LXJpZ2h0Jyk7XG4gICAgICAgIGNsb3NlQnV0dG9uLm9uY2xpY2sgPSBjbG9zZVRvYXN0SGFuZGxlcjtcbiAgICAgICAgdG9hc3QucHJlcGVuZChjbG9zZUJ1dHRvbik7XG5cbiAgICAgICAgLy8gYXBwZW5kIHRoZSB0b2FzdCB0byB0aGUgcGFnZSBjb250ZW50XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9hc3QpO1xuXG4gICAgICAgIC8vIGZhZGUtaW4gb2YgdGhlIHRvYXN0XG4gICAgICAgIHRvYXN0LmFuaW1hdGUoW1xuICAgICAgICAgICAge3RvcDogYC0ke3RvYXN0Lm9mZnNldEhlaWdodH1weGB9LFxuICAgICAgICAgICAge3RvcDogYDI1cHhgfSxcbiAgICAgICAgXSwge2R1cmF0aW9uOiAzMDAsIGVhc2luZzogJ2Vhc2UnLCBmaWxsOiBcImZvcndhcmRzXCJ9KTtcblxuICAgICAgICAvLyBjb25maWd1cmUgYXV0by1jbG9zZSBwYXJhbVxuICAgICAgICBpZiAoY29uZmlnLmF1dG9DbG9zZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChjbG9zZVRvYXN0SGFuZGxlciwgY29uZmlnLnRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3Mgbm90aWZpY2F0aW9uIHdpdGggcHJpbWFyeSBzdHlsZVxuICAgICAqIEBwYXJhbSBtZXNzYWdlXG4gICAgICogQHBhcmFtIHRpdGxlXG4gICAgICogQHBhcmFtIHBhcmFtc1xuICAgICAqL1xuICAgIHN0YXRpYyBpbmZvKG1lc3NhZ2UsIHRpdGxlID0gZmFsc2UsIHBhcmFtcyA9IHt9KSB7XG4gICAgICAgIFRvYXN0LnNob3coe1xuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIHR5cGU6ICdwcmltYXJ5JyxcbiAgICAgICAgICAgIC4uLnBhcmFtc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBub3RpZmljYXRpb24gd2l0aCBzdWNjZXNzIHN0eWxlXG4gICAgICogQHBhcmFtIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gdGl0bGVcbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICovXG4gICAgc3RhdGljIHN1Y2Nlc3MobWVzc2FnZSwgdGl0bGUgPSBmYWxzZSwgcGFyYW1zID0ge30pIHtcbiAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgLi4ucGFyYW1zXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIG5vdGlmaWNhdGlvbiB3aXRoIHdhcm5pbmcgc3R5bGVcbiAgICAgKiBAcGFyYW0gbWVzc2FnZVxuICAgICAqIEBwYXJhbSB0aXRsZVxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgd2FybmluZyhtZXNzYWdlLCB0aXRsZSA9IGZhbHNlLCBwYXJhbXMgPSB7fSkge1xuICAgICAgICBUb2FzdC5zaG93KHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICB0eXBlOiAnd2FybmluZycsXG4gICAgICAgICAgICAuLi5wYXJhbXNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3Mgbm90aWZpY2F0aW9uIHdpdGggZXJyb3Igc3R5bGVcbiAgICAgKiBAcGFyYW0gbWVzc2FnZVxuICAgICAqIEBwYXJhbSB0aXRsZVxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZXJyb3IobWVzc2FnZSwgdGl0bGUgPSBmYWxzZSwgcGFyYW1zID0ge30pIHtcbiAgICAgICAgVG9hc3Quc2hvdyh7XG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIC4uLnBhcmFtc1xuICAgICAgICB9KTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==