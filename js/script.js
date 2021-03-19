/* Creare un array di oggetti:
ogni oggetto descriverà una bici da corsa
con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore */

const arrayBici = [
  {
    nome:'Atala',
    peso: '2500',
  },
  {
    nome:'Bianchi',
    peso: '2200',
  },
  {
    nome:'Girardengo',
    peso: '2100',
  }
];

let pesoRiferimento = arrayBici[0].peso;

for ( let i = 0; i < arrayBici.length; i++ ) {

  if ( arrayBici[i].peso < pesoRiferimento) {

    pesoRiferimento = arrayBici[i].peso;

  }

}

console.log(pesoRiferimento);
