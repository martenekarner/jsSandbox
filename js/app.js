console.log("Hello");

const name = 'Harry Potter';
const age = 31;
const job = 'Wizard';
const city = 'London';
const gender = 'Male';

console.log(typeof(name));
console.log(typeof(age));

function hello(){
    return 'hello';
}



//arrays
const fruit = ['apple', 'banana', 'orange', 'pear'];
console.log(fruit);
//add an element to the array
fruit.push('lemon');
console.log(fruit);
//to sort an array
console.log(fruit.sort());
//delete the very first element
fruit.shift();
console.log(fruit);
//delete the very last element
fruit.pop();
console.log(fruit);

//loop through the array
fruit.forEach(item => {
    console.log("Fruit from array: ", item);
});

//Date and time
const today = new Date();
let todayDate = today.getDate();
console.log(todayDate);
let todayMonth = today.getMonth();
console.log(todayMonth+1);
let todayYear = today.getFullYear();
console.log(todayYear);
//let fullDate = today.toLocaleDateString("en-US");
let option = {weekday: 'long', year: 'numeric', month:'long', day: 'numeric'}
let fullDate = today.toLocaleDateString("en-US", option);
console.log(fullDate);

//template literals
const html = `
    <h1> ${fullDate} </h1>
    <ul>
        <li>${name}</li>
        <li>${age}</li>
        <li>${job}</li>
        <li>${city}</li>
        <li>${gender}</li>
        <li>${name} says ${hello()}</li> 
    </ul>
`;

document.body.innerHTML = html;