console.log("iftekher mahmud pervez");

// search form
let form = document.querySelector("form"),
  search_btn = document.querySelector(".search");

search_btn.onclick = () => {
  form.classList.toggle("d-none");
};

// search form

// sub menu form

let sub_menu = document.querySelector(".sub-menu"),
  nav_item = document.querySelector(".nav-item");

nav_item.onclick = () => {
  sub_menu.classList.toggle("show");
};

// sub menu form
