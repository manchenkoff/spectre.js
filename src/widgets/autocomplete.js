/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */

import Widget from '../classes/widget'

/**
 * Auto-complete component
 * @property {string[]} options
 * @property {object} config
 * @property {HTMLElement} optionList
 * @property {HTMLElement} input
 *
 * @property {function} onchange
 */
export default class Autocomplete extends Widget {
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