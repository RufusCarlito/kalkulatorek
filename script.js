function Calculate(){
    var obwod = Number(document.getElementById("obwod").value);
    var centyMniejsze = Number(document.getElementById("mniejsza wartosc").value);
    var centyWieksze = Number(document.getElementById("wieksza wartosc centymetrow").value);
    var interwal = Number(document.getElementById("interwal lat").value);

    var srednica = (obwod / 3.14);
    var wartosc = srednica - centyMniejsze;
    var roznica = centyWieksze - centyMniejsze;
    var stosunek = wartosc * 100 / roznica;
    var lataDodania = stosunek / interwal ;
    var wynik = centyMniejsze + lataDodania;

    parseInt(document.getElementById("SUM").innerHTML = wynik.toFixed(2));
    console.log(srednica, wartosc, roznica, stosunek, lataDodania,wynik);
    console.log(obwod, centyMniejsze, centyWieksze, interwal);
}







// function Calculate() {
//     var TotalProductionTime = document.getElementById("TotalProductionTime").value;
//     var TotalProductionTimeInMinutes = TotalProductionTime * 60;
//     var Breaks = document.getElementById("Breaks").value;
//     var Malfunctions = document.getElementById("Malfunctions").value;
//     var TheoreticalProductionTime = TotalProductionTimeInMinutes - Breaks - Malfunctions;

//     document.getElementById("test").innerHTML = TheoreticalProductionTime;
// }

// <form id="frm1" action="Calculate.html">
//     <table width="350px" border="1px">
//         <tr>
//             <th colspan="2">Availability</th>
//         </tr>
//         <tr>
//             <td>Total Production Time</td>
//             <td>
//                 <input type="number" id="TotalProductionTime" placeholder="">hours</td>
//         </tr>
//         <tr>
//             <td>Breaks</td>
//             <td>
//                 <input type="number" id="Breaks" placeholder="">minutes</td>
//         </tr>
//         <tr>
//             <td>Malfunctions</td>
//             <td>
//                 <input type="number" id="Malfunctions" placeholder="">minutes</td>
//         </tr>
//         <tr>
//             <td>Theoretical production time:</td>
//             <td>
//                 <p id="test"></p>
//             </td>
//         </tr>
//     </table>
//     <input type="button" onclick="Calculate()" value="calculate">
// </form>