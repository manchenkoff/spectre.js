/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */

import Widget from '../classes/widget'

/**
 * Tabs component
 * @property {string} name
 * @property {int} index
 * @property {HTMLElement[]} pages
 */
export default class Tabs extends Widget {
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