// Add active class to the current button (highlight it)
var header = document.getElementById("link");
var btns = header.getElementsByClassName("header_link");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}



function changeBg() {
    var navbar = document.getElementById('link');
    var scrollValue = window.scrollY;
    if (scrollValue < 610) {
        navbar.classList.remove('bgColor');
    } else {
        navbar.classList.add('bgColor');
    }
}

window.addEventListener('scroll', changeBg);