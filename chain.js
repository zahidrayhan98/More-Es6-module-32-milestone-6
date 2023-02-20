const names = [{ name:'jahid rayhan rupo' , id : 2018000000096, profession : "student"}];

// console.log(names[0].id);

 const data ={
    data:6000,
    count:[
        {name:"rupo", id:201999999,job:'student'},
        {name: 'jahid', id: 20188888, job:"jobless"}
    ]
 }
//  console.log(data.count[1].job);

const user = {
    id:2018,
    name:'jahid rayhan rupo',
    address:{
        street:{
            first:'nikhuja-2',
            second:'third floor',
            third: 'right side'
        },
        postoffice:'khilket',
        district :'dhaka',
    }
}
// const search = user.address.stret?.second; nested error
const search = user.address.street.second;
console.log(search);