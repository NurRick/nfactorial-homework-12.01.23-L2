const FOOTBALL_CLUB = 'Manchester United';
const MANAGER = 'Erik ten Hag';
let season = 2023
let clubOwner = null;
console.log('Club is:', FOOTBALL_CLUB,'. Manager:', MANAGER, '. Current season:', season)


const footballer1 = {
    name: 'David de Gea',
    'player number': 1,
    age: 32,
    nationality: 'Spaniard',
    isGoalkeeper: true,
    isDefender: false,
    isMidfielder: false,
    isStriker: false,
    goals: 0,
    assists: 0,
    saves: 128,
}
const footballer2 = {
    name: 'Harry Maguire',
    'player number': 2,
    age: 29,
    nationality: 'British',
    isGoalkeeper: false,
    isDefender: true,
    isMidfielder: false,
    isStriker: false,
    goals: 11,
    assists: 8,
    saves: 0,
}
const footballer3 = {
    name: 'Raphaël Varane',
    'player number': 19,
    age: 29,
    nationality: 'Frenchman',
    isGoalkeeper: false,
    isDefender: true,
    isMidfielder: false,
    isStriker: false,
    goals: 1,
    assists: 1,
    saves: 0,
}
const footballer4 = {
    name: 'Lisandro Martínez',
    'player number': 6,
    age: 24,
    nationality: 'Argentinian',
    isGoalkeeper: false,
    isDefender: true,
    isMidfielder: false,
    isStriker: false,
    goals: 0,
    assists: 0,
    saves: 0,
}
const footballer5 = {
    name: 'Bruno Fernandes',
    'player number': 8,
    age: 28,
    nationality: 'Portuguese',
    isGoalkeeper: false,
    isDefender: false,
    isMidfielder: true,
    isStriker: false,
    goals: 38,
    assists: 28,
    saves: 0,
}
const footballer6 = {
    name: 'Fred',
    'player number': 17,
    age: 29,
    nationality: 'Brazilian',
    isGoalkeeper: false,
    isDefender: false,
    isMidfielder: true,
    isStriker: false,
    goals: 8,
    assists: 5,
    saves: 0,
}
const footballer7 = {
    name: 'Casemiro',
    'player number': 18,
    age: 30,
    nationality: 'Brazilian',
    isGoalkeeper: false,
    isDefender: false,
    isMidfielder: true,
    isStriker: false,
    goals: 2,
    assists: 2,
    saves: 0,
}
const footballer8 = {
    name: 'Donny van de Beek',
    'player number': 34,
    age: 25,
    nationality: 'Netherlands',
    isGoalkeeper: false,
    isDefender: false,
    isMidfielder: true,
    isStriker: false,
    goals: 3,
    assists: 1,
    saves: 0,
}
const footballer9 = {
    name: 'Antony',
    'player number': 21,
    age: 22,
    nationality: 'Brazilian',
    isGoalkeeper: false,
    isDefender: false,
    isMidfielder: false,
    isStriker: true,
    goals: 3,
    assists: 0,
    saves: 0,
}
const footballer10 = {
    name: 'Marcus Rashford',
    'player number': 10,
    age: 25,
    nationality: 'British',
    isGoalkeeper: false,
    isDefender: false,
    isMidfielder: false,
    isStriker: true,
    goals: 66,
    assists: 35,
    saves: 0,
}
const footballer11 = {
    name: 'Anthony Martial',
    'player number': 9,
    age: 27,
    nationality: 'Frenchman',
    isGoalkeeper: false,
    isDefender: false,
    isMidfielder: false,
    isStriker: true,
    goals: 59,
    assists: 28,
    saves: 0,
}

console.log(footballer10.name, footballer10['player number']);
console.log(footballer8);

// null
console.log(clubOwner);

//undefined
let bestManager;
console.log(bestManager);
bestManager = 'Sir Alexander Chapman Ferguson';
console.log(bestManager);

// changing variables
footballer9.goals = 15;
console.log(footballer9.name, 'goals', footballer9.goals);

//adding to object
footballer4.isWorldCupWinner = true;
console.log(footballer4);

//Delete from Object
delete footballer1.goals;
delete footballer1.assists;
console.log(footballer1);

//Iterate object
for (let key in footballer7){
    console.log(key, '=', footballer7[key]);
}