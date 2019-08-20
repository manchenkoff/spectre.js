/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */

const path = require('path');
const fs = require('fs');

const dirName = path.join(__dirname, './pages');

let pages = [];

// build pages list to compile into HTML
fs.readdirSync(dirName)
    .forEach(f => {
        pages.push(
            f.replace(
                '.pug',
                ''
            )
        );
    });

module.exports = pages;