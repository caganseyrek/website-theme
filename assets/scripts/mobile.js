var mobileMenu = false;

function menu() {
    if (mobileMenu === false) {
        document.getElementById("mobile-menu").style.maxHeight = "216px";
        setTimeout(() => {
            document.getElementById("mobile-home").style.visibility = "visible";
            document.getElementById("mobile-articles").style.visibility = "visible";
            document.getElementById("mobile-projects").style.visibility = "visible";
            document.getElementById("mobile-github").style.visibility = "visible";
            document.getElementById("mobile-home").style.opacity = "1";
            document.getElementById("mobile-articles").style.opacity = "1";
            document.getElementById("mobile-projects").style.opacity = "1";
            document.getElementById("mobile-github").style.opacity = "1";
        }, 50);
        mobileMenu = true;
    } else {
        setTimeout(() => {        
            document.getElementById("mobile-menu").style.maxHeight = "0px";
        }, 50);
        document.getElementById("mobile-home").style.visibility = "hidden";
        document.getElementById("mobile-articles").style.visibility = "hidden";
        document.getElementById("mobile-projects").style.visibility = "hidden";
        document.getElementById("mobile-github").style.visibility = "hidden";
        document.getElementById("mobile-home").style.opacity = "0";
        document.getElementById("mobile-articles").style.opacity = "0";
        document.getElementById("mobile-projects").style.opacity = "0";
        document.getElementById("mobile-github").style.opacity = "0";
        mobileMenu = false;
    }
}