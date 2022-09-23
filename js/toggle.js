toggleBtn = document.querySelector(".toggle-btn");
navList = document.querySelector(".nav-container ul.nav-list");
toggleBtn.addEventListener("click", function () {
  navList.classList.toggle("active");
});
