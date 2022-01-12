function Myfuc() {
    var x = document.getElementById("acc");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("Dn").innerHTML = "Kapat";
    } else {
      x.style.display = "none";
      document.getElementById("Dn").innerHTML = "5/A Sınıfı";
    }
  }