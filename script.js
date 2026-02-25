const tulos = document.getElementById("tulos");

const sulaminen = document.getElementById("sulaminen");
const jahmettyminen = document.getElementById("jahmettyminen");
const hoyrystyminen = document.getElementById("hoyrystyminen");

sulaminen.addEventListener("click", function (e) {
  e.preventDefault();
  tulos.textContent =
    "Sulaminen: Kiinteä aine muuttuu nesteeksi ja ottaa lämpöä vastaan.";
});

jahmettyminen.addEventListener("click", function (e) {
  e.preventDefault();
  tulos.textContent =
    "Jähmettyminen: Neste muuttuu kiinteäksi ja luovuttaa lämpöä ympäristöön.";
});

hoyrystyminen.addEventListener("click", function (e) {
  e.preventDefault();
  tulos.textContent =
    "Höyrystyminen: Neste muuttuu kaasuksi ja ottaa lämpöä vastaan.";
});
