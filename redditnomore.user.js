// ==UserScript==
// @name         RedditNoMore
// @description  Redirects reddit.com to Lemmy, and redirects reddit.com/* links to Libreddit.
// @updateURL    https://raw.githubusercontent.com/QuarTheDev/userscripts/main/redditnomore.user.js
// @downloadURL  https://raw.githubusercontent.com/QuarTheDev/userscripts/main/redditnomore.user.js
// @version      0.1.0
// @author       QuarTheDev
// @match        *://*.reddit.com/*
// @run-at       document-start
// @icon         https://raw.githubusercontent.com/QuarTheDev/userscripts/main/assets/logos/redditnomore-512.png
// @license      GPL-3.0
// @grant        none
// @namespace    https://quar.pages.dev/
// ==/UserScript==

(function() {
    'use strict';

    // Set your custom Lemmy instance
    var lemmyURL = 'https://lemmy.world/';
    
    // Set your custom Libreddit instance
    var libredditURL = 'https://libreddit.tux.pizza/';

    
    var currentURL = window.location.href;
    if (currentURL === 'https://www.reddit.com/') {
        window.location.href = lemmyURL;
    } else if (currentURL.startsWith('https://www.reddit.com/')) {
        var path = currentURL.replace('https://www.reddit.com/', '');
        window.location.href = libredditURL + path;
    }

})();