// ==UserScript==
// @name         save your cookies
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  downloads a filesave after stablished minutes, default is 30 minutes.
// @author       porc
// @match        https://orteil.dashnet.org/cookieclicker/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dashnet.org
// @grant        none
// ==/UserScript==

// time in minutes to wait till saving progress to file
let minutes = 30;

await new Promise(resolve => setTimeout(resolve, 1000));

setInterval(Game.FileSave, minutes * 60 * 1000);