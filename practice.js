///// problem --1 ///

const  oddNumber = [1,3,5,7,9];
const output = [];
for ( const numbers of oddNumber ){
    const even = numbers +1 ;
   output.push(even);
}
const output2= output.find(z=>z%2===0);
// console.log(output2)
// console.log(output);

const even =[2,4,6,8,22,44,66];
const oddNumber1 =[];
for (const number of even ){
    const odd = number + 1 ;
    // oddNumber1.push (odd);
}
// console.log(oddNumber1);

// problem--2////
const num = [33,45,23,56,78,40,30,10,45,34,67];
const divide = num.filter(x=>x%5===0);
// console.log(divide);

///// problem-3///
const array=[3,45,34,34,23,12,23,1,4];
const sum = array.reduce((previous,current)=>previous+current,0);
// console.log(sum);

// problem-3///
 const person =[{
     name:'mena', age:20},
     {name:'rina',age:15},
    {name:"jahid",age:22}
 ];
 const age =person.reduce(function(previous , current){
    return previous + current.age ;
 },0);
//  console.log(age);



   function adding(x,y){
    const result =x+2 *2
    const result2 =y+2*2
   return result , result2;

   }
   const value =adding(1,1);
   console.log(value);