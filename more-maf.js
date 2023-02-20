const numbers =[2,4,5,6,7,8];
const makeHalf =numbers.map(n => n /2);
const makeThird = numbers.map(x => x/3);
// console.log(makeThird);
// console.log(makeHalf);

const friends =['jahid', 'rayhan' , 'rupo', 'roksana', 'rina'];
const firstLetters =friends.map(friend => friend[0]);
const lettersLength =friends.map(friend => friend.length);
// console.log(lettersLength);
// console.log(firstLetters);

const products =[
    {id:1, name:"laptop", price : 120000},
    {id:2, name:"mac", price : 220000},
    {id:3, name:"glass", price : 1200},
    {id:4, name:"phone", price : 13000},

];
//    const items = products.map(product => console.log(product.name));

const items =products.map(product=>product.name);
const items1 = products.map(product=> product.price);
console.log(items);
console.log(items1);

