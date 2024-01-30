// ==UserScript==
// @name         CC *10 market profit
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  let him cook!
// @author       porc
// @match        https://orteil.dashnet.org/cookieclicker/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dashnet.org
// @grant        none
// ==/UserScript==

await new Promise(resolve => setTimeout(resolve, 30000));
let ticks = 1;
console.log(ticks + " ===")

var autoMarket = setInterval(function() {
let market = Game.ObjectsById[5].minigame.goodsById;
for (let i = 0; i < market.length; i++){
    if(market[i].val <= 3){
        let stocks = market[i].stock;
        Game.ObjectsById[5].minigame.buyGood(i, 10000);
        if(market[i].stock != stocks){
            console.log("Em comprat " + (market[i].stock - stocks) + " " + market[i].name + " a $" + market[i].val.toString().slice(0, 4));
        }
    }
    if(market[i].val >= 30 && market[i].stock != 0){
        let preu = market[i].val.toString().slice(0, 5);
        let quantitat = market[i].stock;
        let total = quantitat * preu;
        Game.ObjectsById[5].minigame.sellGood(i, 10000);
        console.log("Em vengut " + quantitat + " " + market[i].name);
    }
}
ticks += 1;
console.log(ticks + " ===")
;}, 1000 * 60);
