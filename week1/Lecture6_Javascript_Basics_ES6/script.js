var x=15;

{
    let x=10;
    console.log(x);

    const z=10;
    console.log(z);
    // z=12;        /* it will give error */
    // console.log(z);
}

console.log(x);


// function

var X = function(y,z){
    return y+z;
};

console.log(X(5,4));

// // arrow function
var X = (x,y)=>{
    return x+y;
} 

console.log(X(3,4));


const q1=["Jan", "Feb", "Mar"];
const q2=["Apr", "May", "Jun"];
const q3=["Jul", "Aug", "Sep"];
const q4=["Oct", "Nov", "Dec"];

const year = [...q1,...q1,...q3,...q4];

console.log(year);


const myNumber=[21,3,2,-12];

const max=Math.max(...myNumber);
console.log(max);


let sum=0;
for(let i of myNumber){
    sum+=i;
}

console.log(sum);


/* Map */

const fruits = new Map([["apples",200],["bananas",100],["oranges",250]]);

console.log(fruits);

console.log(fruits.get("oranges"));


/* Set */

const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("a");


console.log(letters);


/* Class */

class Car{
    constructor(name,mfgYear){
        this.name=name;
        this.mfgYear=mfgYear;
    }
}

const myCar1= new Car("Mercedes",2000);
const myCar2= new Car("Porsche",2100);

console.log(myCar1,myCar2);


/* Promise */

const fun= ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("In side promise");
            resolve();
        },2000);
    });
}

fun().then(()=>{
    console.log("Resolve");
}).catch(()=>{
    console.log("Reject");
})


const person={
    fname:"Satyam",
    lname:"Singh",
    age:20,
    eyeColor:"Blue"
};

const id = Symbol("id");

person[id] = 14011;

console.log(person);


const add=(a,b=10)=>a+b;

console.log(add(10));

/* when we have to give array of parameter */

const add1=(...args)=>{
    let sum=0;
    for(let i of args){
        sum+=i;
    }
    return sum;
}

console.log(add1(10,20,30));