alert('Najpierw wprowadz obwód i nacisnij "średnica"')
function Calculate(){
    var obwod = Number(document.getElementById("obwod").value);
    var centyMniejsze = Number(document.getElementById("mniejsza wartosc").value);
    var centyWieksze = Number(document.getElementById("wieksza wartosc centymetrow").value);
    var mniejszeLata = Number(document.getElementById("dolna granica lat").value);
    

    var srednica = (obwod / 3.14);
    var wartosc = srednica - centyMniejsze;
    var roznica = centyWieksze - centyMniejsze;
    var stosunek = wartosc * 100 / roznica;
    var lataDodania = stosunek / 10;
     
    var wynik = lataDodania + mniejszeLata;
    

    parseInt(document.getElementById("SUM").innerHTML = wynik.toFixed(2));
    
    console.log(srednica, wartosc, roznica, stosunek, lataDodania,);
    console.log(obwod, centyMniejsze, centyWieksze);
}
function sred(){
    var obwod = Number(document.getElementById("obwod").value);
    var srednica = (obwod / 3.14);
    parseInt(document.getElementById("sred").innerHTML = srednica.toFixed(2));
    alert("teraz wprowadź resztę danych");
}