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