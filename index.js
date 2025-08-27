const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let inpColor = document.querySelector(".inp-color").value;
  let inpText = document.querySelector(".inp-text").value;

  document.querySelector(".div").style.backgroundColor = inpColor;

  document.querySelector(".tx").style.color = inpText;
});
