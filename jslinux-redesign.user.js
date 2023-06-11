// ==UserScript==
// @name        JSLinux Fullscreen
// @namespace   https://linux.new/
// @version     0.1.1
// @description A small script that completely redesigns linux.new with a fresh coat of paint and a satisfying dark mode.
// @updateURL   https://raw.githubusercontent.com/QuarTheDev/userscripts/main/jslinux-redesign.user.js
// @downloadURL https://raw.githubusercontent.com/QuarTheDev/userscripts/main/jslinux-redesign.user.js
// @author      QuarTheDev
// @match       https://linux.new/
// @icon        data:image/x-icon;base64,R0lGODlhEAAQAPEAAAAAAP///wAAAAAAACH5BAlkAAIAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAEAAQAAAC5wQAAAAAAAAAAIQQQgghhBAEQQAAAQAAAAAAAAAAQAAAAQAAAAAAAAAAAAIAQAAQAAAAAAAAAAAAAgBAAAAIAAAAAAAAAAACAEAAAAAEAAAAAAAAAAIAQAAACAAAAAAAAAAAEAAAEAAQAAAAAAAAAAAAABAAABAAAAAAEBAQEAAAAAAQAAAQAAAAAAAAAAAAAAAAEAAAEAAAAAAAAAAAAAAAABAAABAAAAAAAAAAAAAAAAAQAAAQAAAAAAAAAAAAAAAAEAAAEBAQEBAQEBAQEBAQEBAAAAAAAAAAAAAAAAAAAAAAAAAKAAAh+QQJBQACACwAAAAAEAAQAAAC5wQAAAAAAAAAAIQQQgghhBAEQQAAAQAAAAAAAAAAQAAAAQAAAAAAAAAAAAIAQAAQAAAAAAAAAAAAAgBAAAAIAAAAAAAAAAACAEAAAAAEAAAAAAAAAAIAQAAACAAAAAAAAAAAEAAAEAAQAAAAAAAAAAAAABAAABAAAAAAAAAAAAAAAAAQAAAQAAAAAAAAAAAAAAAAEAAAEAAAAAAAAAAAAAAAABAAABAAAAAAAAAAAAAAAAAQAAAQAAAAAAAAAAAAAAAAEAAAEBAQEBAQEBAQEBAQEBAAAAAAAAAAAAAAAAAAAAAAAAAKAAAh+QQJBQACACwAAAAAEAAQAAAC5wQAAAAAAAAAAIQQQgghhBAEQQAAAQAAAAAAAAAAQAAAAQAAAAAAAAAAAAIAQAAQAAAAAAAAAAAAAgBAAAAIAAAAAAAAAAACAEAAAAAEAAAAAAAAAAIAQAAACAAAAAAAAAAAEAAAEAAQAAAAAAAAAAAAABAAABAAAAAAAAAAAAAAAAAQAAAQAAAAAAAAAAAAAAAAEAAAEAAAAAAAAAAAAAAAABAAABAAAAAAAAAAAAAAAAAQAAAQAAAAAAAAAAAAAAAAEAAAEBAQEBAQEBAQEBAQEBAAAAAAAAAAAAAAAAAAAAAAAAAKAAA7
// @license     GPL-3.0
// @namespace   https://quar.pages.dev/
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle("body { background-color: #000000 !important; }");

(function() {
    'use strict';
    const inputElements = document.querySelectorAll('input[type="file"][id="files"][multiple][onchange="on_update_files(this.files)"]');

    // prepare for element removal
    inputElements.forEach(inputElement => {
        inputElement.remove();
    });

    // remove scrollbar
    var scrollbar = document.querySelector('.term_scrollbar');
    if (scrollbar) {
        scrollbar.style.display = 'none';
    }
    
    // remove progressbar
    var net_progress = document.querySelector('#net_progress');
    if (net_progress) {
        net_progress.style.display = 'none';
    }

    document.querySelector('#net_progress').style.display = 'none';

    // remove paste tool
    var term_paste = document.querySelector('#term_paste');
    if (term_paste) {
        term_paste.style.display = 'none';
    }

    // fullscreen patch
    const img = document.querySelector('img[title="Upload files"]');
    img.title = "Go fullscreen";
    img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABqSURBVDhP1ZKBCsAgCESt//9n18EOXB0NNhF6IImKnWJzd8uk328aZzbEUqO1YQT+nH9QOjLUUBGBz7gkXaG6Q/6+JCZk3ZmHvV16QNapkRl4ayrrSu8QCmBRAXzGJSV3+IvSHX4iuaHZBfYMIRPiKNVEAAAAAElFTkSuQmCC";
    img.addEventListener("click", function() {
        document.querySelector('div.term_content').requestFullscreen().then(() => document.querySelector('div.term_content').scrollIntoView({ behavior: "smooth", block: "center", inline: "center" }));
    });

    // find copyright text
    const copyrightDiv = document.querySelector('#copyright');

    // modern copyright text
    copyrightDiv.innerHTML = '© 2023 linux.new';

    // arial bold font
    copyrightDiv.style.fontFamily = 'Arial';
    copyrightDiv.style.fontWeight = 'Bold';
    copyrightDiv.style.color = '#FFFFFF';
})();
