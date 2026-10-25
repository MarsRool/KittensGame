// ==UserScript==
// @name         Autoload ScriptKitties
// @namespace    http://sagefault.net/
// @version      1.1
// @description  See name
// @match        http*://bloodrizer.ru/games/kittens/
// @match        http*://kittensgame.com/web/
// @match        http*://kittensgame.com/beta/
// @match        http*://kittensgame.com/alpha/
// @grant        none
// ==/UserScript==
function loadScriptKitties() {
    var script=document.createElement('script');
    script.src='https://cdn.jsdelivr.net/gh/MarsRool/KittensGame/ScriptKitties.js';
    script.id='SK_origin';
    document.body.appendChild(script);
}
if (document.readyState === "complete") {
    loadScriptKitties();
} else {
    window.addEventListener("load", loadScriptKitties, {once: true});
}
