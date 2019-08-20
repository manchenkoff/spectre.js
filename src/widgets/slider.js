/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */

import Widget from '../classes/widget'

export default class Slider extends Widget {
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