/*
 * I wrote this code but decided not to use it and didn’t want to delete it either,
 * so here it stays…
 */
var frameworkToggle = false;

function toggleFrameworks() {
    if (frameworkToggle == false) {
        document.getElementById("frameworks-preview").style.height = "166px";
        document.getElementById("frameworks-preview").style.padding = "0px 20px 15px 20px";
        document.getElementById("frameworks-preview").style.marginBottom = "10px";
        document.getElementById("frameworks-arrow").style.transform = "rotate(180deg)";
        document.getElementById("frameworks").classList.add("toggled");
        frameworkToggle = true;
    } else {
        document.getElementById("frameworks-preview").style.height = "0px";
        document.getElementById("frameworks-preview").style.padding = "0px 20px";
        document.getElementById("frameworks-preview").style.marginBottom = "0px";
        document.getElementById("frameworks-arrow").style.transform = "none";
        document.getElementById("frameworks").classList.remove("toggled");
        frameworkToggle = false;
    }
}

window.onclick = function (e) {
    if (e.target !== document.getElementById("frameworks")) {
        if (frameworkToggle === true) toggleFrameworks();
    }
}