// ==UserScript==
// @name         automatic stocks
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  buys low when it can (< $3) and sells high (> $30). Can be toggled with a button at the right of the brokers.
// @author       porc
// @match        https://orteil.dashnet.org/cookieclicker/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dashnet.org
// @grant        none
// ==/UserScript==

// change at your will
let buyValue = 3;
let sellValue = 30;

function getCurrentTime() {
    let currentDate = new Date();
    let hours = String(currentDate.getHours()).padStart(2, '0');
    let minutes = String(currentDate.getMinutes()).padStart(2, '0');
    let seconds = String(currentDate.getSeconds()).padStart(2, '0');
    return `[${hours}:${minutes}:${seconds}]`;
}

await new Promise(resolve => setTimeout(resolve, 5000));

var autoStock = null;

const firstChild = document.getElementById("bankHeader")?.firstElementChild;
let market = Game.ObjectsById[5].minigame;

function startAutoStocks() {
    let goods = Game.ObjectsById[5].minigame.goodsById;
    autoStock = setInterval(function() {
        for (let i = 0; i < goods.length; i++) {
            if (goods[i].val <= buyValue) {
                let stocks = goods[i].stock;
                Game.ObjectsById[5].minigame.buyGood(i, 10000);
                if (goods[i].stock != stocks) {
                    console.log(getCurrentTime() + " Bought " + (goods[i].stock - stocks) + " " + goods[i].name + " at $" + goods[i].val.toString().slice(0, 4) + " per unit.");
                }
            }
            if (goods[i].val >= sellValue && goods[i].stock != 0) {
                let preu = goods[i].val.toString().slice(0, 5);
                let quantitat = goods[i].stock;
                let total = quantitat * preu;
                Game.ObjectsById[5].minigame.sellGood(i, 10000);
                console.log(getCurrentTime() + " Sold " + quantitat + " " + goods[i].name + " at $" + goods[i].val.toString().slice(0, 4) + " per unit.");
            }
        }
    }, 1000 * market.secondsPerTick);
}

if (firstChild) {
    let div = document.createElement("div");
    div.textContent = "Disable AutoStocks";
    div.classList.add("bankButton", "bankButtonBuy");

    div.onclick = function() {
        if (autoStock) {
            clearInterval(autoStock);
            autoStock = null;
            div.textContent = "Enable AutoStocks";
        } else {
            startAutoStocks();
            div.textContent = "Disable AutoStocks";
        }
    };

    let beforeLast = firstChild.children[firstChild.children.length - 1];

    if (beforeLast) {
        firstChild.insertBefore(div, beforeLast);
    } else {
        firstChild.appendChild(div);
    }

    // Auto-start the AutoStocks
    startAutoStocks();
}