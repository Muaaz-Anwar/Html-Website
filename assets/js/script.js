let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");
let hill1 = document.getElementById("hill1");

window.addEventListener('scroll', () => {
    let val = window.scrollY;
    text.style.marginTop = val * 1.1 + "px";
    leaf.style.marginTop = val * "-1.2" + "px";
    leaf.style.marginLeft = val * "1.2" + "px";
    hill4.style.marginLeft = val * "-1.2" + "px";
    hill5.style.marginLeft = val * "0.8" + "px";
    hill1.style.marginTop = val * "0.3" + "px";
});
