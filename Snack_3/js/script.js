/* Scrivere una funzione che accetti tre argomenti,
un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori
che hanno la posizione compresa tra i due numeri */

/* 1. Mi creo un array di dieci numeri e un array vuoto */
var array = [1,2,3,4,5,6,7,8,9,10];
var newArray = [];
/* 2. Mi creo una funzione a cui gli passo un array e due numeri;
questa funzione mi cicla l'array prendendo come estremi i numeri che gli passo
e me fa il push in un nuovo array */
function myFunction (array,a,b) {
  for (let i = a; i <= b; i++) {
    newArray.push(i);
  }
}
/* 3. Evoco la funzione e gli passo i paramentri che mi interressano */
myFunction (array,6,8);
/* 4. Stampo l'array precedentemente vuoto che adesso ha i numeri pushati */
console.log(newArray);
