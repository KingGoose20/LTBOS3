var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos && window.innerWidth < 1251) {
    document.getElementById("Whole").style.top = "0";
} else if ((prevScrollpos+ 20) < currentScrollPos && window.innerWidth < 1251) {
    offset = "-" + document.getElementById("Whole").offsetHeight + "px"
    document.getElementById("Whole").style.top = offset;
}
prevScrollpos = currentScrollPos;
}