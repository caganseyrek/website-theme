var mobileLeftSidebarToggle = false;
var mobileRightSidebarToggle = false;

function toggleMobile(toggleName) {
    if (toggleName === 'left') {
        if (mobileLeftSidebarToggle == false) {
            if (mobileRightSidebarToggle === true) toggleMobile('right');
            document.getElementById("left-sidebar").style.marginLeft = "0px";
            mobileLeftSidebarToggle = true;
        } else {
            document.getElementById("left-sidebar").style.marginLeft = "-300px";
            mobileLeftSidebarToggle = false;
        }
    } else if (toggleName === 'right') {
        if (mobileRightSidebarToggle == false) {
            if (mobileLeftSidebarToggle === true) toggleMobile('left');
            document.getElementById("right-sidebar").style.marginRight = "0px";
            mobileRightSidebarToggle = true;
        } else {
            document.getElementById("right-sidebar").style.marginRight = "-300px";
            mobileRightSidebarToggle = false;
        }
    }
}