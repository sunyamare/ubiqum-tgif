// Show back to top button only when scrolling
const mybutton = document.getElementById("top-button");
window.onscroll = function() {
    scrollFunction();
};
function scrollFunction() {
    if (
        document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
