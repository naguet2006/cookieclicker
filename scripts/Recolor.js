// ==UserScript==
// @name         Recolor
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  let him cook!
// @author       porc
// @match        https://orteil.dashnet.org/cookieclicker/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dashnet.org
// @grant        none
// ==/UserScript==

await new Promise(resolve => setTimeout(resolve, 1000));

document.getElementById("bankGraphBox").querySelectorAll("div")[0].remove();
document.getElementById("bankGraphBox").querySelectorAll("div")[0].innerHTML = "PORC INC.";
document.getElementById("bankGraphBox").querySelectorAll("div")[0].style.opacity = "1";
document.getElementById("bankGraphBox").querySelectorAll("div")[0].style.padding = "2px";
document.getElementById("bankGraphBox").querySelectorAll("div")[0].style.backgroundColor = "black";
document.getElementById("bankGraphBox").querySelectorAll("div")[0].style.border = "2px solid red";
document.getElementById("bankGraphBox").querySelectorAll("div")[0].style.borderRadius = "2px";
document.getElementById("bankGraphBox").style.color = "red";

Game.Loader.Replace('perfectCookie.png','imperfectCookie.png');