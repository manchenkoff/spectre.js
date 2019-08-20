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
export default class Widget {
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