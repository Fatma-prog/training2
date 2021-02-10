// side navbar
var close = document.getElementById("close"),
    sideNav = document.getElementById("side-nav"),
    btnNav = document.getElementById("btn-nav");
close.onclick = function () {
    sideNav.style.display = "none"
}
btnNav.onclick = function () {
    sideNav.style.display = "block"
}

// image filter
var filterBtn = document.getElementsByClassName("filter-btn"),
    filterImg = document.getElementsByClassName("filter-img"),
    i,
    j,
    k;
for (i = 0; i < filterBtn.length; i++) {
    filterBtn[i].onclick = function () {
        for (j = 0; j < filterImg.length; j++) {
            if (filterImg[j].getAttribute("data-target") == this.getAttribute("data-target") ||
                this.getAttribute("data-target") == "all") {
                filterImg[j].classList.add("show");
                filterImg[j].classList.remove("delete")
            } else {
                filterImg[j].classList.add("delete");
                filterImg[j].classList.remove("show")
            }
        }
    }
}
// Start add/remove class active
var activLink = document.querySelectorAll(".side-nav ul a li"),
    m,
    z;
for (m = 0; m < activLink.length; m++) {

    activLink[m].onclick = function () {
        for (z = 0; z < activLink.length; z++) {
            activLink[z].classList.remove("active");
        }
        this.classList.add("active");
    }
}

//Show / Hide up arrow
var upBtn = document.getElementById("up");
window.onscroll = function () {
    if (window.scrollY > 900) {
        upBtn.style.display = "block";
    } else {
        upBtn.style.display = "none";
    }
}
