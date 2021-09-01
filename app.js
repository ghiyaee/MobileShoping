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

const product = document.querySelector("#product");
const select = document.querySelector("select");
const price = document.querySelector("#price");
const sum = document.querySelector("#sum");
let total = document.querySelector("#total");
const box = document.querySelector("#check");
const product1 = document.querySelector("#product1");

const price1 = document.querySelector("#price1");
const sum1 = document.querySelector("#sum1");
const cont = document.querySelector("#cont");
const cont1 = document.querySelector("#cont1");
const mid1 = document.querySelector("#mid-1");
const mid2 = document.querySelector("#mid-2");
console.log(by);
listli.addEventListener("click", menuli);
menu.addEventListener("click", menulist);
btn.addEventListener("click", buy);
by.addEventListener("click", buying);
let check = true;
let lisub = true;
let con1 = 1;
let con2 = 1;
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

function checkok() {
  box.style.display = "block";
  box.innerHTML = "کالا به سبد خرید  اضافه شد";
  box.style.background = ` linear-gradient(to right, #41a029, #0ca168)`;
  box.style.color = "white";
}
function checknot() {
  box.style.display = "block";
  box.innerHTML = "شما کالایی انتخاب نکردید";
  box.style.background = `background: linear-gradient(to right, #fb5283, #ff3527);`;
  box.style.color = "white";
}

function buy() {
  if (select.value == "") {
    checknot();
    setTimeout(() => {
      box.style.display = "none";
    }, 2500);
  } else {
    if (select.value == "one+5T") {
      mid1.style.display = "block";
      price.innerHTML = 120000000;
      cont.innerHTML = +cont.innerHTML + con1;
      console.log(cont);
      by.style.color = ` rgb(99,231,99)`;
      by.style.fontSize = "25px";

      product.innerHTML = select.value;
      sum.innerHTML = cont.innerHTML * price.innerHTML;
      // total.innerHTML = sum.innerHTML;
      checkok();
      setTimeout(() => {
        box.style.display = "none";
      }, 2500);
      select.value = "";
    }
    if (select.value == "one+6") {
      mid2.style.display = "block";
      price1.innerHTML = 150000000;
      cont1.innerHTML = +cont1.innerHTML + con2;
      by.style.color = ` linear-gradient(to right, #41a029, #0ca168)`;
      product1.innerHTML = select.value;
      sum1.innerHTML = cont1.innerHTML * price1.innerHTML;
      // total.innerHTML = sum1.innerHTML;
      checkok();
      setTimeout(() => {
        box.style.display = "none";
      }, 2500);
      select.value = "";
    }
    total.innerHTML = Number(sum.innerHTML) + Number(sum1.innerHTML);
  }
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
