// ==UserScript==
// @name         Unquirks Mode
// @description  Adds <!DOCTYPE html> to the beginning of all webpages, eliminating enabling Quirks Mode.
// @updateURL    https://raw.githubusercontent.com/QuarTheDev/userscripts/main/unquirks-mode.user.js
// @downloadURL  https://raw.githubusercontent.com/QuarTheDev/userscripts/main/unquirks-mode.user.js
// @version      0.1.1
// @author       QuarTheDev
// @match        *://*/*
// @run-at       document-start
// @icon         https://raw.githubusercontent.com/QuarTheDev/userscripts/main/assets/logos/unquirks-mode-512.png
// @license      GPL-3.0
// @grant        none
// @namespace    https://quar.pages.dev/
// ==/UserScript==

(function() {
    'use strict';

    // add <!doctype html>
    document.documentElement.innerHTML = '<!DOCTYPE html>' + document.documentElement.innerHTML;
})();