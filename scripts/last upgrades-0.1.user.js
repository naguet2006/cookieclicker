// ==UserScript==
// @name         last upgrades
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  shows you in console last 5 bought upgrades, to make sure you put the expensive ones in the ascension
// @author       You
// @match        https://orteil.dashnet.org/cookieclicker/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dashnet.org
// @grant        none
// ==/UserScript==

await new Promise(resolve => setTimeout(resolve, 5000));

const top5PurchasedUpgrades = Object.values(Game.UpgradesById)
.filter(upgrade => upgrade.bought === 1)
.sort((a, b) => b.basePrice - a.basePrice)
.slice(0, 5);

console.log("last 5 upgrades bought");
for (let i = 0; i < top5PurchasedUpgrades.length; i++) {
    console.log(top5PurchasedUpgrades[i].id + " | " + top5PurchasedUpgrades[i].name);
}