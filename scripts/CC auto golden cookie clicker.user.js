// ==UserScript==
// @name         CC auto golden cookie clicker
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  let him cook!
// @author       porc
// @match        https://orteil.dashnet.org/cookieclicker/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dashnet.org
// @grant        none
// ==/UserScript==

var autoGoldenCookie = setInterval(function() { for (var h in Game.shimmers){if(Game.shimmers[h].type=="golden"){Game.shimmers[h].pop();}} }, 1000);

var autoRaeindeer = setInterval(function() { for (var h in Game.shimmers){if(Game.shimmers[h].type=="reindeer"){Game.shimmers[h].pop();}} }, 1000);