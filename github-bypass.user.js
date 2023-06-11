// ==UserScript==
// @name        GitHub Delete Repo Bypass
// @description A script that elegantly bypasses the github.com verification code menu, useful for if you're mass-deleting repos.
// @updateURL   https://raw.githubusercontent.com/QuarTheDev/userscripts/main/github-bypass.user.js
// @downloadURL https://raw.githubusercontent.com/QuarTheDev/userscripts/main/github-bypass.user.js
// @version     0.2.4
// @author      QuarTheDev
// @match       *://*.github.com/*/settings
// @run-at      document-end
// @icon        https://github.githubassets.com/favicons/favicon-dark.png
// @license     GPL-3.0
// @namespace   https://quar.pages.dev/
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

    // Execute every 100ms (temporary)
    setInterval(bypass, 100);
})();