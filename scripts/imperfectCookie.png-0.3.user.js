// ==UserScript==
// @name         imperfectCookie.png
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  changes the good old cookie for this imperfect cookie i found in the game files.
// @author       porc
// @match        https://orteil.dashnet.org/cookieclicker/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dashnet.org
// @grant        none
// ==/UserScript==

await new Promise(resolve => setTimeout(resolve, 5000));

Game.Loader.Replace('perfectCookie.png','imperfectCookie.png');