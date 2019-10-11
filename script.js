const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;

function fixNav() {
console.log(topOfNav,window.scrollY);
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight +'px'; // without offsetting it would take up extra space because it leaves the flow of the document
        document.body.classList.add('fixed-nav');

    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll',fixNav);