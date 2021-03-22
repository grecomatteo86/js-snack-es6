/* Scrivere una funzione che accetti tre argomenti,
un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori
che hanno la posizione compresa tra i due numeri */

/* 1. Mi creo una funzione a cui gli passo un array e due numeri;
questa funzione mi cicla l'array prendendo come estremi i numeri che gli passo
e me fa il push in un nuovo array */
function arrayInterval (array,min,max) {
  const newArray = [];

  for (let i = min; i <= max; i++) {
    newArray.push(i);
  }

  return newArray;
}
/* 2. Mi creo un array di dieci numeri */
const array = [1,2,3,4,5,6,7,8,9,10];
/* 3. Evoco la funzione per assegnare i valori che gli passo in un secondo array */
const arrayDue = arrayInterval (array,6,9);
/* 4. Stampo il secondo array */
console.log(arrayDue);
