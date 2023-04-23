const btn = document.getElementById("hitung");

btn.addEventListener("click", function () {
  let tb = document.querySelector("#tb").value;
  let bb = document.querySelector("#bb").value;

  if (tb == "" || bb == "") {
    alert("Kolom tidak boleh kosong!");
    return;
  }

  // IMT = bb dalam KG / (tb dalam m * tb dalam m)
  
  tb = tb / 100;

  let IMT = bb / (tb * tb);

  IMT = IMT.toFixed(2);

  document.querySelector("#hasil").innerHTML = IMT;

  let status = "";

  if (IMT < 18.5) {
    status = "Kurang";
  }
  if (IMT >= 18.5 && IMT < 25) {
    status = "Sehat";
  }
  if (IMT >= 25 && IMT < 30) {
    status = "Kelebihan";
  }
  if (IMT >= 30) {
    status = "Obesitas";
  }
  document.querySelector(
    ".komentar"
  ).innerHTML = `Status IMT Anda <span id="komentar"><br>${status}</span>`;
});
