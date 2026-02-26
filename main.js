const divHome = document.querySelector(".home");
const divOpa = document.querySelector(".opa");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
	divHome.style.display = "none";
	divOpa.style.display = "none";
});
