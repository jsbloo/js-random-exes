'use strict';

const blackJack = (a,b) => {
    if(a > 21 && b > 21){
        return 0;
    }
    if(a > 21){
        return b;
    }
    if(b > 21){
        return a;
    }

    if(a > b){
        return a;
    }

    return b;
}

//console.log(blackJack(21,1));

const uniSum = (a, b, c) => {
    if (a == b && a == c && b == c) {
        return 0;
    }
    if (a == b) {
        return c;
    }
    if (a == c) {
        return b;
    }
    if (b == c) {
        return a;
    }

    return a + b + c;
}

//console.log(uniSum(1,1,2));

class Taxes{
    tax(sal) {

        if (sal <= 14999) {
            return 0;
        }
        if (sal > 14999 && sal <= 19999) {
            return 0.10;
        }
        if (sal > 19999 && sal <= 29999) {
            return 0.15;
        }
        if (sal > 29999 && sal <= 44999) {
            return 0.20;
        } else {
            return 0.25;
        }
    }

    calc(sal){
        return sal - (sal * this.tax(sal));
    }
}

let a = new Taxes();
console.log(a.calc(21000));

const fizzBuss = i =>{
    if(i%5==0 && i%3==0){return "fizzbuzz";}
    if(i%5==0){return "buzz";}
    return "fizz";   
}

console.log(fizzBuss(31));

let darthVader = 
{
    allegiance:"empire",
    weapon:"lightsabre",
    sith:true
};

//console.log(darthVader);
//console.log("");
//console.log("Darth Vader's allegiance is to the " + darthVader.allegiance);
//console.log("Darth Vader's weapon of choice is a " + darthVader.weapon);
//console.log("Darth Vader is a sith? " + darthVader.sith);
//console.log("Darth vader is a Jedi? " + !darthVader.sith);
//console.log("");
let myArray = ["hello","everyone"];
//console.log(myArray.length);
myArray.push("josh","apple","door");
//console.log(myArray.length);
myArray.shift();
//myArray.forEach(e => console.log(e));   
//console.log("");


//Object.entries(darthVader).forEach(e => console.log(e));

//console.log(JSON.stringify(darthVader));


let massiveJSON = {
    "smallerJSON": {
        "students": [{
            "name": "Dan",
            "dob": "128412",
            "location": "Barcelona"
        }, {
            "name": "Cansu",
            "dob":"1839128",
            "location": "Peru"
        }
    ]}
}

//massiveJSON.smallerJSON.students.forEach(e => console.log(e.name));//get all names
let getCansu = massiveJSON.smallerJSON.students.filter(e => e.name == "Cansu");//get student where name = cansu
//console.log(getCansu);

//console.log(true + true == 2);

let age = 49;

let check = age > 50 ? console.log("over") : console.log("under");

const search = (nums, target) => {
    let mid = Math.floor(nums.length/2);
    let start = 0;
    let end = mid;
    if(target == nums[mid]) return mid;
    if(target > nums[mid]){
        start = mid;
        end = nums.length;
    }

    while(start < end){
        if(nums[start]==target){
            return start;
        }
        start++;
    }

    return -1;
};

//console.log(search([1,2,3,4,5,6,7,8,9],8));



