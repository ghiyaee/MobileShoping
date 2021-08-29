const menu = document.querySelector("#menu");
const list = document.querySelector("#list");
const listli = document.querySelector("#menuli");
const listsub = document.querySelector("#listsub");
const slider = [...document.querySelector(".sliders").children];
const btn = document.querySelector("#bton");
const by = document.querySelector("#by");
listli.addEventListener("click", menuli);
menu.addEventListener("click", menulist);
btn.addEventListener("click", buy);
let check = true;
let lisub = true;
let contby = 1;
console.log(by.innerText);
function menulist() {
  if (check == true) {
    list.style.display = "block";
    check = false;
  } else {
    list.style.display = "none";
    listsub.style.display = "none";
    check = true;
    lisub = true;
  }
}

function menuli() {
  if (lisub == true) {
    listsub.style.display = "block";
    lisub = false;
  } else {
    listsub.style.display = "none";
    lisub = true;
  }
}

let next = 0;
function show() {
  if (next < slider.length) {
    slider.forEach((list) => {
      list.classList.remove("active");
      slider[next].classList.add("active");
    });
    next++;
  } else {
    next = 0;
  }
}

setInterval(show, 4000);

function buy() {
  by.innerHTML = +by.innerHTML + contby;
}
