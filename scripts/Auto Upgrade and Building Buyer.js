// ==UserScript==
// @name         Auto Upgrade and Building Buyer
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  let him cook!
// @author       porc
// @match        https://orteil.dashnet.org/cookieclicker/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dashnet.org
// @grant        none
// ==/UserScript==

function buyCheapestBuilding(){
	var buildings = [];
	Game.ObjectsById.forEach(function(building){
		if(building.price < Game.cookies)
			buildings.push({id: building.id, price: building.price});
	});
	if(buildings.length > 0) Game.ObjectsById[buildings.sort(function(a, b){return a.price-b.price})[0].id].buy();
    }
var buyCheapestBuildings = setInterval(function() { buyCheapestBuilding(); }, 100);

var autoBuy = setInterval(function() {
    let id = document.getElementById("upgrades").querySelector("*[data-id]").getAttribute("data-id");
    Game.UpgradesById[id].click(event);
;}, 100);

var autoBuyTech = setInterval(function() {
    let id = document.getElementById("techUpgrades").querySelector("*[data-id]").getAttribute("data-id");
    Game.UpgradesById[id].click(event);
;}, 100);