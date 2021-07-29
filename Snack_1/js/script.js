const bikesArray = [
  {
    name:'Atala',
    weight: '2500',
  },
  {
    name:'Bianchi',
    weight: '2200',
  },
  {
    name:'Girardengo',
    weight: '2100',
  }
];
var referenceWeight = bikesArray[0].weight;
for ( let i = 0; i < bikesArray.length; i++ ) {
  if ( bikesArray[i].weight < referenceWeight) {
    referenceWeight = bikesArray[i].weight;
  }
}
console.log(referenceWeight);
