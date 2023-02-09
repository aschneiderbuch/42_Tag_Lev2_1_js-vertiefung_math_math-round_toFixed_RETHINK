console.log("test");

/* 
function roundTo ( Zahl ,  Genauigkeit ) {   }
 
toFixed

Testen
console.log(roundTo(3.1415926535, 5)); // 3.14159

*/

// function 
function roundTo (a, b){
// a = Zahl
// b = Genauigkeit

console.log(a , b )

let  ergebnis = 0
ergebnis = a.toFixed(b)
console.log(ergebnis);
}

roundTo(3.1415926535, 5); // 