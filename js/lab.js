let searchBar = document.querySelector(".search__bar");
let searchIcon = document.querySelector(".fa-search");
let navBarIcon = document.querySelector(".fa-bars");
let navBar = document.querySelector("header nav");
searchIcon.addEventListener("click", () => {
	searchBar.classList.toggle("active");
	searchIcon.classList.toggle("active");
	navBar.classList.remove("active");
});

navBarIcon.addEventListener("click", () => {
	navBar.classList.toggle("active");
	searchBar.classList.remove("active");
	searchIcon.classList.remove("active");
});
