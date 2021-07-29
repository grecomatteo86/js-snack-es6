const teamsArray = [
  {
    name:'Palermo',
    score:'0',
    fauls:'0'
  },
  {
    name:'Catania',
    score:'0',
    fauls:'0'
  },
  {
    name:'Messina',
    score:'0',
    fauls:'0'
  }
];
// Using Destructuring
/*
const newTeamsArray = [];
for (let i = 0; i < teamsArray.length; i++) {
  const {name,fauls} = teamsArray[i];
  newTeamsArray.push({
    name,
    fauls
  });
}
/* Using MAP */
const newTeamsArray = teamsArray.map((item) => {
  item.score = randomizer (0, 10);
  item.fauls = randomizer (0, 10);
  const {name,fauls} = item;
  return {name,fauls};
});
console.log(newTeamsArray);
// Function - randomizer
function randomizer (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
