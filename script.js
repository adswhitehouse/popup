let submitBtn = document.querySelector(".jsSubmit");
let popup = document.querySelector(".jsPopup");
let closePopupBtn = document.querySelector(".jsClosePopupBtn");

submitBtn.addEventListener("click", () => {
  popup.classList.add("animation");
});

closePopupBtn.addEventListener("click", () => {
  popup.classList.remove("animation");
});
