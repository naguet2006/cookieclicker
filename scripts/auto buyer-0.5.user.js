// ==UserScript==
// @name         auto buyer
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  buys you upgrades and buildings, adds a button under the store title.
// @author       porc
// @match        https://orteil.dashnet.org/cookieclicker/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dashnet.org
// @grant        none
// ==/UserScript==

(function() {
    var isAutoBuyEnabled = false;
    var intervals = [];

    function buyCheapestBuilding() {
        var buildings = [];
        Game.ObjectsById.forEach(function(building) {
            if (building.price < Game.cookies)
                buildings.push({ id: building.id, price: building.price });
        });
        if (buildings.length > 0) Game.ObjectsById[buildings.sort((a, b) => a.price - b.price)[0].id].buy();
    }

    function autoBuyUpgrade() {
        let element = document.getElementById("upgrades").querySelector("*[data-id]");
        if (element) {
            let id = element.getAttribute("data-id");
            if (Game.UpgradesById[id]) Game.UpgradesById[id].click();
        }
    }

    function autoBuyTech() {
        let element = document.getElementById("techUpgrades").querySelector("*[data-id]");
        if (element) {
            let id = element.getAttribute("data-id");
            if (Game.UpgradesById[id]) Game.UpgradesById[id].click();
        }
    }

    function toggleAutoBuy() {
        isAutoBuyEnabled = !isAutoBuyEnabled;
        if (isAutoBuyEnabled) {
            intervals.push(setInterval(buyCheapestBuilding, 100));
            intervals.push(setInterval(autoBuyUpgrade, 100));
            intervals.push(setInterval(autoBuyTech, 100));
            button.textContent = "Disable AutoBuy";
        } else {
            intervals.forEach(clearInterval);
            intervals = [];
            button.textContent = "Enable AutoBuy";
        }
    }

    var button = document.createElement("button");
    button.textContent = "Enable AutoBuy";
    button.classList.add("inset", "title", "zoneTitle");
    button.style.backgroundColor = "black";
    button.style.fontSize = "15px";
    button.style.color = "white";
    button.style.padding = "5px 10px";
    button.style.margin = "5px";
    button.style.cursor = "pointer";
    button.style.border = "none";
    button.style.outline = "none";
    button.style.boxShadow = "none";
    button.onclick = toggleAutoBuy;

    var titleStore = document.getElementById("storeTitle");
    if (titleStore) {
        titleStore.appendChild(button);
    }
})();