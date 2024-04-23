let toggleNavStatus = false;

let toggleNav = function() {
    let getMenubar = document.querySelector(".menu-nav");
    let getMenubarlinks = document.querySelectorAll(".menu-nav a");


if (toggleNavStatus === false) {
    getMenubar.style.position = "fixed";
    getMenubar.style.left = "0";
    getMenubar.style.top = "100";
    getMenubar.style.backgroundColor = "white";
    getMenubar.style.display = "block";
    getMenubar.style.height = "200px";
    getMenubar.style.width = "200px";

    let arrayLength = getMenubarlinks.length;

    for (let i=0; i < arrayLength; i++) {
        getMenubarlinks[i].style.visibility = "visible";
    }
    toggleNavStatus = true;
}
 else if (toggleNavStatus === true) {
    getMenubar.style.display = "none";

    let arrayLength = getMenubarlinks.length;

    for (let i=0; i < arrayLength; i++) {
        getMenubarlinks[i].style.visibility = "visible";
    }
    toggleNavStatus = false;
}

}