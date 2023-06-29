// ==UserScript==
// @name         OverlayKiller
// @description  Eliminates annoying overlays on certain sites.
// @updateURL    https://raw.githubusercontent.com/QuarTheDev/userscripts/main/overlay-killer.user.js
// @downloadURL  https://raw.githubusercontent.com/QuarTheDev/userscripts/main/overlay-killer.user.js
// @version      0.1.0
// @author       QuarTheDev
// @match        *://*/*
// @run-at       document-end
// @icon         https://raw.githubusercontent.com/QuarTheDev/userscripts/main/assets/logos/overlay-killer-512.png
// @license      GPL-3.0
// @grant        none
// @namespace    https://quar.pages.dev/
// ==/UserScript==

(function() {
    var elementsToRemove = [
        "div.grecaptcha-badge",
        "credential_picker_container"
    ];
  
    elementsToRemove.forEach(function(selector) {
        var elements = document.querySelectorAll(selector);
        elements.forEach(function(element) {
            element.remove();
        });
    });
})();