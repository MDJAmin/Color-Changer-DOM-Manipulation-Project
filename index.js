const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let inpColor = document.querySelector(".inp-color").value;
  let inptext = document.querySelector(".inp-text").value;

  document.querySelector(".divm").style.backgroundColor = inpColor;

  document.querySelector(".tx").style.color = inptext;
});

// confirm.length.toExponential
// document.querySelector
// ('.p').style=inptext})
// <div class="divm">

// <p class="tx">
