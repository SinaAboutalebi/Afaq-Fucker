// ==UserScript==
// @name         Afaq Fucker ;D
// @include      novin-system.com
// @version      0.1
// @description  Fuck afaq-Lc VisibilityChange listener;D
// @author       Fucking Great 0Power ;))))
// @icon         https://cdn.discordapp.com/attachments/852999633385816086/955378667159171092/863b1ddc4688dec7fa2a109fa264ed74.jpg
// @match        *://*/*
// @grant        none
// ==/UserScript==

for (event_name of ["visibilitychange", "webkitvisibilitychange", "blur"]) {
  window.addEventListener(event_name, function(event) {
        event.stopImmediatePropagation();
    }, true);
}
