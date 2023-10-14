"use strict";

const categorys = document.querySelector(".categorys");

categorys.addEventListener("click", (e) => {
  const fatherCategory = e.target.closest("div");

  if (fatherCategory.classList.contains("category")) {
    const category = document.querySelectorAll(".category");

    category.forEach((cat) => {
      if (cat.classList.contains("category_active")) {
        cat.classList.remove("category_active");
      }
    });

    fatherCategory.classList.add("category_active");
  }
});
