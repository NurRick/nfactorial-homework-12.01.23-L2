let salaries = {
    Nurbol: 1500000,
    Daniyar: 1800000,
    Aziz: 1000000,
    Nurdan: 1100000,
}

for (let key in salaries){
    console.log(key, '=', salaries[key]);
}


function sumS(salaries){
let sum = 0;
for (let salary of Object.values(salaries)) {
    sum += salary;
    }
return sum;
};
console.log( 'Sum of salaries is:',sumS(salaries) )





