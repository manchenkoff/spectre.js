/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */

import Widget from '../classes/widget'

/**
 * Toast component
 *
 * @property {HTMLElement} button
 */
export default class Toast extends Widget {
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