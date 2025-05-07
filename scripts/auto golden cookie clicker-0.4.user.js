// ==UserScript==
// @name         auto golden cookie clicker
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  clicks you all golden cookies on screen, also reindeers. Adds a button to toggle at the top, before twitter.
// @author       porc
// @match        https://orteil.dashnet.org/cookieclicker/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dashnet.org
// @grant        none
// ==/UserScript==

var autoGoldenCookieInterval = null;
var autoReindeerInterval = null;
var isAutoClickEnabled = true; // Initial state: ON

function startAutoGoldenCookie() {
    autoGoldenCookieInterval = setInterval(function () {
        for (var h in Game.shimmers) {
            if (Game.shimmers[h].type === "golden") {
                Game.shimmers[h].pop();
            }
        }
    }, 1000);
}

function stopAutoGoldenCookie() {
    if (autoGoldenCookieInterval) {
        clearInterval(autoGoldenCookieInterval);
        autoGoldenCookieInterval = null;
    }
}

function startAutoReindeer() {
    autoReindeerInterval = setInterval(function () {
        for (var h in Game.shimmers) {
            if (Game.shimmers[h].type === "reindeer") {
                Game.shimmers[h].pop();
            }
        }
    }, 1000);
}

function stopAutoReindeer() {
    if (autoReindeerInterval) {
        clearInterval(autoReindeerInterval);
        autoReindeerInterval = null;
    }
}

function toggleAutoClick() {
    if (isAutoClickEnabled) {
        stopAutoGoldenCookie();
        stopAutoReindeer();
        isAutoClickEnabled = false;
        toggleDiv.textContent = "Click Golden Cookies: OFF";
    } else {
        startAutoGoldenCookie();
        startAutoReindeer();
        isAutoClickEnabled = true;
        toggleDiv.textContent = "Click Golden Cookies: ON";
    }
}

var toggleDiv = document.createElement("div");
toggleDiv.textContent = "Click Golden Cookies: ON"; // Initial state
toggleDiv.style.cursor = "pointer";
toggleDiv.onclick = toggleAutoClick;

var topBar = document.querySelector("#topBar");
if (topBar) {
    var secondChild = topBar.children[1];
    if (secondChild) {
        topBar.insertBefore(toggleDiv, secondChild);
    } else {
        topBar.appendChild(toggleDiv);
    }
    // Start auto-clicking by default
    startAutoGoldenCookie();
    startAutoReindeer();
} else {
    console.error("Top bar not found!");
}