/*
 * I wrote this code but decided not to use it and didn’t want to delete it either,
 * so here it stays…
 */
window.addEventListener("DOMContentLoaded", function () {
    var pageContents = document.getElementById("page-contents");
    var headings = pageContents.querySelectorAll("h2,h3,h4");

    for (i = 0; i <= headings.length - 1; i++) {
        var id = headings[i].innerHTML.toLowerCase().replace(/ /g, "-");
        var type = headings[i].localName;
        var text = headings[i].innerHTML;

        var newHeading = document.createElement(type);
        var anchor = document.createElement("a");
        anchor.setAttribute("class", "headings-anchor");
        anchor.setAttribute("href", "#" + id);
        anchor.setAttribute("onclick", "copyAnchorLink('#" + id + "')")
        anchor.textContent = text;

        newHeading.appendChild(anchor);
        headings[i].replaceWith(newHeading);
        console.log(anchor);
        console.log(newHeading);
        console.log(headings[i]);
    }
});
