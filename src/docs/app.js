/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */

import Spectre from '../spectre';

window.onload = () => {
    window.Spectre = Spectre;

    Object
        .getOwnPropertyNames(Spectre)
        .forEach((className) => {
            Spectre[className].register();
        });
};