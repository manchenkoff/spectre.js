/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */

import Widget from '../classes/widget'

export default class Slider extends Widget {
    static register() {
        document
            .querySelectorAll('[data-slider]')
            .forEach((elem) => {
                new Slider(elem);
            })
    }

    init() {
        //
    }
}