// ==UserScript==
// @name         saveCookies
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  let him cook!
// @author       porc
// @match        https://orteil.dashnet.org/cookieclicker/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dashnet.org
// @grant        none
// ==/UserScript==

await new Promise(resolve => setTimeout(resolve, 1000));

setInterval(Game.FileSave, 1800 * 1000);