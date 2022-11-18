import * as functions from "./modules/functions.js";
const width = window.screen.availWidth;


functions.isWebp()

window.onload = function () {
    if (width <= 768) {
        functions.menuPress(document.querySelector('.nav__btn'));
    }
    functions.scrolTo();
}


