/* Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare,
le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array
i cui elementi contengono solo nomi e falli subiti
e stampiamo tutto in console */

/* Creo un array di oggetti di squadre di calcio */
const arreySquadre = [
  {
    nome:'Palermo',
    puntiFatti:'0',
    falliSubiti:'0'
  },
  {
    nome:'Catania',
    puntiFatti:'0',
    falliSubiti:'0'
  },
  {
    nome:'Messina',
    puntiFatti:'0',
    falliSubiti:'0'
  }
];

/* Creo la mia funzione randomizzatore */
function randomizzatore (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/* Cambio i valori assegnando numeri random
al posto di Punti fatti e falli subiti */

for (let i = 0; i < arreySquadre.length; i++) {

  arreySquadre[i].puntiFatti = randomizzatore (0, 10);

  arreySquadre[i].falliSubiti = randomizzatore (0, 10);

}

console.log(arreySquadre);


/* Uso la destrutturazione per creare un nuovo array
i cui elementi contengono solo nomi e falli subiti
e stampo tutto in console */

const nuovoArreySquadre = [];

for (var i = 0; i < arreySquadre.length; i++) {

  var obj = {

    nome: arreySquadre[i].nome,
    falliSubiti: arreySquadre[i].falliSubiti

  };

  nuovoArreySquadre.push(obj);

}

console.log(nuovoArreySquadre);
