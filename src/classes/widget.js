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
    constructor(element) {
        this.element = element;

        this.init();
        this.log();
    }

    log() {
        console.info(this);
    }

    init() {
        console.error('init() method not implemented yet');
    }
}