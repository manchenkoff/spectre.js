/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */

import Widget from '../classes/widget'

export default class Autocomplete extends Widget {
    static get selector() {
        return '[data-autocomplete]';
    }

    static get class() {
        return Autocomplete;
    }

    init() {
        //
    }
}