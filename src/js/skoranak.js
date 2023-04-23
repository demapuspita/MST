const btn = document.getElementById("hitung");

btn.addEventListener("click", function () {
  let num1 = document.querySelector("#num1").value;
  let num2 = document.querySelector("#num2").value;
  let num3 = document.querySelector("#num3").value;
  let num4 = document.querySelector("#num4").value;
  // menghitung skor malnutrisi

  x = 1;
  
  let skor = (num1*x) + (num2*x) + (num3*x) + (num4*x);

  document.querySelector("#hasil").innerHTML = skor;

  let status = "";

  if (skor == 0) {
    status = "Risiko rendah";
  }
  if (skor >= 1 && skor <= 3) {
    status = "Risiko sedang";
  }
  if (skor >= 4 && skor <= 5) {
    status = "Risiko tinggi";
  }
  document.querySelector(
    ".komentar"
  ).innerHTML = `Status Anda <span id="komentar"><br>${status}</span>`;
});
