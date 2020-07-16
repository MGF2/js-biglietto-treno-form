var nome;
var km;
var eta;
var prezzo;
var tariffa;

//Al click appare il biglietto
document.getElementById("genera").addEventListener("click", function() {
  //Comparsa biglietto al click
  document.getElementById("biglietto").className = "show";
  //Memorizzazione dati
  nome = document.getElementById('nome').value;
  km = document.getElementById('km').value;
  eta = document.getElementById('eta').value;

  //Calcolo prezzo
  prezzo = 0.21 * km ;

  if  (eta == "Minorenne")  {

    tariffa = "Sconto Minorenne";
    prezzo = prezzo * 0.8;

  }
  else if (eta == "Over 65") {

    tariffa = "Sconto Over 65";
    prezzo = prezzo * 0.6;

  } else {

    tariffa = "Tariffa standard";
    prezzo;

  }

//Al click i dati vengono riportati sul biglietto
  document.getElementById("passeggero").innerHTML = nome;
  document.getElementById("carrozza").innerHTML = Math.floor((Math.random() * 10) + 1);
  document.getElementById("codice").innerHTML = Math.floor((Math.random() * 10000) + 90000);
  document.getElementById("tariffa").innerHTML = tariffa;
  document.getElementById('costo').innerHTML = prezzo.toFixed(2) + " " + "€";
}
);


//Al click scompaiono i dati
document.getElementById("annulla").addEventListener("click", function() {
  document.getElementById("passeggero").innerHTML = " ";
  document.getElementById("carrozza").innerHTML = " ";
  document.getElementById("codice").innerHTML = " ";
  document.getElementById("tariffa").innerHTML = " ";
  document.getElementById('costo').innerHTML =  " " ;

}
);
