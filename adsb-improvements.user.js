// ==UserScript==
// @name         ADS-B Improvements
// @description  A modification for adsbexchange.com that makes the UI slightly more modern and easier to look at.
// @updateURL    https://raw.githubusercontent.com/QuarTheDev/userscripts/main/adsb-improvements.user.js
// @downloadURL  https://raw.githubusercontent.com/QuarTheDev/userscripts/main/adsb-improvements.user.js
// @version      0.2.0
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

    // FlightAware Redirect
    // Special thanks to @pony-pasture-aviation
    let callsignElement = document.getElementById('selected_callsign');
    callsignElement.style.cursor = 'pointer';
    callsignElement.onclick = function(e) {
        GM.openInTab('https://flightaware.com/live/flight/'+callsignElement.textContent, false);
    };

    // Branding
    const elementTitle = document.getElementById('dump1090_version');
    if (elementTitle) {
        elementTitle.textContent = 'ADS-B Exchange';
        elementTitle.removeAttribute('href');
    }

    // Mature sidebar names
    const sidebar_titles = document.getElementsByClassName('section-title-content');
    sidebar_titles[7].textContent = 'Miscellaneous';

    // Main CSS modifications
    GM_addStyle(`
        * {
            border-radius: 8px !important;
        }

        div.ol-attribution.ol-unselectable.ol-control.ol-uncollapsible {
            display: none !important;
        }

        div#credits {
            display: none !important;
        }

        td#adsbexchange_header.infoblock_row.hidden {
            display: none !important;
        }
        
        .ol-scale-line-inner {
            border: none !important;
        }

        div#splitter {
            display: none !important;
        }

        div#creditsSelected {
            display: none !important
        }

        tr#adsbexchange_header.infoblock_row.hidden {
            display: none !important;
        }

        .adsbx-selected-bg::before {
            background-image: none !important;
        }

        div#settingsCog {
            background-image: url('https://github.com/QuarTheDev/userscripts/blob/main/assets/settings.png?raw=true') !important;
        }

       .settingsCog {
            filter: drop-shadow(-2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
        }
        
        .button {
            box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.3) !important;
        }
        
        .highlightedTitle {
            border-bottom: calc(1px * var(--SCALE)) solid var(--BGCOLOR2) !important;
        }

        .ol-zoom {
            left: calc(100% - calc(35px * var(--SCALE))) !important;
            top: calc(100% - calc(65px * var(--SCALE))) !important;
        }

        .sidebar_button {
            background-color: var(--ACCENT) !important;
        }

        button#toggle_sidebar_button.sidebar_button.show_sidebar {
            background-image: url('https://github.com/QuarTheDev/userscripts/blob/main/assets/hide_sidebar.png?raw=true') !important;
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3) !important;
        }

        button#expand_sidebar_button.sidebar_button {
            background-image: url('https://github.com/QuarTheDev/userscripts/blob/main/assets/hide_sidebar.png?raw=true') !important;
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3) !important;
        }

        button#toggle_sidebar_button.sidebar_button.hide_sidebar {
            background-image: url('https://github.com/QuarTheDev/userscripts/blob/main/assets/hide_sidebar.png?raw=true') !important;
            transform: scaleX(1);
            box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.3) !important;
        }

        button#shrink_sidebar_button.shrink_sidebar.hidden.sidebar_button {
            background-image: url('https://github.com/QuarTheDev/userscripts/blob/main/assets/hide_sidebar.png?raw=true') !important;
            transform: scaleX(1) !important;
        }

        .ol-unselectable.ol-control.layer-switcher.layer-switcher-group-select-style-none.layer-switcher-activation-mode-click.activationModeClick {
            background-color: var(--ACCENT) !important;
        }

        .layer-switcher button {
            background-color: var(--ACCENT) !important;
            color: #fff !important;
            cursor: pointer !important;
        }

        .layer-switcher button:focus,
        .layer-switcher button:hover {
            background-color: var(--ACCENT) !important;
        }

        .layer-switcher.shown.layer-switcher-activation-mode-click > button {
            background-color: var(--ACCENT) !important;
        }

        .activeButton {
            color: #fff !important;
        }

        .inActiveButton {
            color: #888 !important;
        }

        #dump1090_version {
            font-size: large !important;
            font-weight: bold !important;
            text-decoration: none !important;
        }

        td.link {
            text-align: center !important;
            text-decoration: none !important;
        }
    `);
})();