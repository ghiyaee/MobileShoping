const menu = document.querySelector("#menu");
const list = document.querySelector("#list");
const listli = document.querySelector("#menuli");
const listsub = document.querySelector("#listsub");
// const one8 = document.querySelector("#one8");

// one8.addEventListener("click", show);
listli.addEventListener("click", menuli);
menu.addEventListener("click", menulist);
let check = true;
let lisub = true;

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
