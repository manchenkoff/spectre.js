/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */

import Widget from '../classes/widget'

export default class Calendar extends Widget {
    static get selector() {
        return '[data-calendar]';
    }

    static get class() {
        return Calendar;
    }

    init() {
        //
    }
}