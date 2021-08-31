const menu = document.querySelector("#menu");
const list = document.querySelector("#list");
const listli = document.querySelector("#menuli");
const listsub = document.querySelector("#listsub");
const slider = [...document.querySelector(".sliders").children];
const btn = document.querySelector("#bton");
const by = document.querySelector("#by");
const container = document.querySelector(".container");
const table = document.querySelector(".buying");
// const price = document.querySelector("h4");
const namep = document.querySelector("h2");
const option = document.querySelector("#optional");
const cont = document.querySelector("#cont");
const product = document.querySelector("#product");
const select = document.querySelector("select");
const price = document.querySelector("#price");
const sum = document.querySelector("#sum");
const total = document.querySelector("#total");
console.log(by);
listli.addEventListener("click", menuli);
menu.addEventListener("click", menulist);
btn.addEventListener("click", buy);
by.addEventListener("click", buying);
let check = true;
let lisub = true;
let contby = 1;

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
  cont.innerHTML = by.innerHTML;
  product.innerHTML = select.value;
  if (select.value == "one+5T") {
    price.innerHTML = 120000000;
  }
  if (select.value == "one+6") {
    price.innerHTML = 150000000;
  }
  sum.innerHTML = cont.innerHTML * price.innerHTML;
  total.innerHTML = sum.innerHTML;
}

function buying() {
  let sum = 0;
  container.style.filter = "blur(5px)";
  table.style.display = "block";
  const rows = document.querySelector(".rows");
  const close = document.querySelector("#exit");
  close.addEventListener("click", outdoor);
  function outdoor() {
    table.style.display = "none";
    container.style.filter = "blur(0px)";
  }
  const dele = document.querySelector(".delete");
  const subtract = document.querySelector(".subtract");
  subtract.addEventListener("click", sub);
  dele.addEventListener("click", del);
  function sub(e) {
    console.log(e.target.classList);
    if (e.target.classList == "subtract") {
      by.innerHTML--;
      // buying();
      if (by.innerHTML < 1) {
        by.innerHTML = 0;
        // e.target.parentElement.parentElement.remove();
      }
    }
  }
  function del(e) {
    if (e.target.classList) {
      e.target.parentElement.parentElement.remove();
      by.innerHTML = 0;
      console.log(e.target.classList);
    }
  }
}
