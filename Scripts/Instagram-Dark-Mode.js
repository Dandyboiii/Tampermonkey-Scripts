// ==UserScript==
// @name        Instagram DarkMode
// @description Automatically input
// @updateURL   https://github.com/QuarTheDev/Tampermonkey-Scripts/blob/main/Scripts/Instagram-Dark-Mode.js
// @downloadURL https://github.com/QuarTheDev/Tampermonkey-Scripts/blob/main/Scripts/Instagram-Dark-Mode.js
// @version     1.0.0
// @match       *://*.instagram.com/*
// @run-at      document-start
// @grant       none
// ==/UserScript==

var oldUrlSearch = window.location.search;

if ( ! /\?theme=dark$/.test (oldUrlSearch) ) {

    var newURL = window.location.protocol + "//"
               + window.location.host
               + window.location.pathname
               + oldUrlSearch + "?theme=dark"
               + window.location.hash
               ;
    window.location.replace (newURL);
}
