/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */

import Widget from '../classes/widget'

export default class Toast extends Widget {
    static get selector() {
        return '[data-toast]';
    }

    static get class() {
        return Toast;
    }

    init() {
        //
    }
}