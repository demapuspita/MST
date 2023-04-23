const btn = document.getElementById("hitung");

btn.addEventListener("click", function () {
  let num1 = document.querySelector("#num1").value;
  let num2 = document.querySelector("#num2").value;

  // menghitung skor malnutrisi

  x = 1;
  
  let skor = (num1*x) + (num2*x);

  document.querySelector("#hasil").innerHTML = skor;

  let status = "";

  if (skor >= 2) {
    status = "Berisiko malnutrisi";
  } else {
    status = "Status gizi normal";
  }
  document.querySelector(
    ".komentar"
  ).innerHTML = `Status Anda <span id="komentar"><br>${status}</span>`;
});
