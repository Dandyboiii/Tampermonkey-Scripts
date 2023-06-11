// ==UserScript==
// @name         ADS-B Improvements
// @description  A modification for adsbexchange.com that makes the UI slightly more modern and easier to look at.
// @updateURL    https://raw.githubusercontent.com/QuarTheDev/userscripts/main/adsb-improvements.user.js
// @downloadURL  https://raw.githubusercontent.com/QuarTheDev/userscripts/main/adsb-improvements.user.js
// @version      0.1.1
// @author       QuarTheDev
// @match        *://*.adsbexchange.com/*
// @run-at       document-end
// @icon         https://globe.adsbexchange.com/images/cropped-Stealth-1-270x270.png
// @license      GPL-3.0
// @namespace    https://quar.pages.dev/
// @grant        GM.openInTab
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // flightaware hyperlink
    // special thanks to @pony-pasture-aviation
    let callsignElement = document.getElementById('selected_callsign');
    callsignElement.style.cursor = 'pointer';
    callsignElement.onclick = function(e) {
        GM.openInTab('https://flightaware.com/live/flight/'+callsignElement.textContent, false);
    };

    // main css ui modification
    GM_addStyle(`
        * {
            border-radius: 8px !important;
        }

        div#settingsCog {
            background-image: url('https://github.com/QuarTheDev/userscripts/blob/main/assets/settings.png?raw=true') !important;
        }

       .settingsCog {
            filter: drop-shadow(-2px 2px 2px rgba(0, 0, 0, 0.3));
        }

        .button {
            box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.3);
        }

        .highlightedTitle {
            border-bottom: calc(1px * var(--SCALE)) solid var(--BGCOLOR2);
        }

        .ol-scale-line-inner {
            border: none !important;
        }

        .ol-zoom {
            left: calc(100% - calc(35px * var(--SCALE)));
            top: calc(100% - calc(65px * var(--SCALE)));
        }
    `);

    // mark for deletion
    var selectors = [
        'div#credits',
        'div.ol-attribution.ol-unselectable.ol-control.ol-uncollapsible'
    ];

    // remove each in list
    selectors.forEach(function(selector) {
        var elements = document.querySelectorAll(selector);
        elements.forEach(function(element) {
            element.remove();
        });
    });
})();