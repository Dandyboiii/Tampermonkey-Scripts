// ==UserScript==
// @name        GitHub Delete Repo Bypass
// @description A script that elegantly bypasses the verification code menu, useful for if you're mass-deleting repos.
// @updateURL   https://raw.githubusercontent.com/QuarTheDev/userscripts/main/github-bypass.user.js
// @downloadURL https://raw.githubusercontent.com/QuarTheDev/userscripts/main/github-bypass.user.js
// @version     0.2.3
// @author      QuarTheDev
// @match       *://*.github.com/*/settings
// @icon        https://github.githubassets.com/favicons/favicon-dark.png
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    function bypass() {
        var deleteButton = document.querySelector('button[id="repo-delete-proceed-button"]');
        var primerTextField = document.querySelector('primer-text-field');

        // Enable button
        if (deleteButton) {
            deleteButton.removeAttribute('disabled');
        }

        // Remove unneccesary form
        if (primerTextField) {
            primerTextField.remove();
        }
    }

    // execute every 50ms (This is only temporary until I find a better solution.)
    setInterval(bypass, 50);
})();