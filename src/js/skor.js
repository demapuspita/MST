const btn = document.getElementById("hitung");

btn.addEventListener("click", function () {
  let num1 = document.querySelector("#num1").value;
  let num2 = document.querySelector("#num2").value;
  let num3 = document.querySelector("#num3").value;
  let num4 = document.querySelector("#num4").value;
  let num5 = document.querySelector("#num5").value;
  let num6 = document.querySelector("#num6").value;

  // menghitung skor malnutrisi

  x = 1;
  
  let skor = (num1*x) + (num2*x) + (num3*x) + (num4*x) + (num5*x) + (num6*x);

  document.querySelector("#hasil").innerHTML = skor;

  let status = "";

  if (skor <= 7) {
    status = "Malnutrisi";
  }
  if (skor > 7 && skor <= 11) {
    status = "Berisiko Malnutrisi";
  }
  if (skor > 11 && skor <= 14) {
    status = "Status gizi normal";
  }
  document.querySelector(
    ".komentar"
  ).innerHTML = `Status Anda <span id="komentar"><br>${status}</span>`;
});
