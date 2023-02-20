//////syntatic sugar ////

class Instructor {
    name ;
    desgination = 'web course' ;
    team = 'web team';
    location;
    constructor(name,location){
        this.name =name ;
        this.location =location;
    }
    startsupportsession (time){
    console.log(` start the suport session ${time}`);
    }
    createquiz (module){
        console.log(`please release the module ${module}`);
    }
}
const amir = new Instructor ('jahid', "dhaka");
console.log(amir);
amir.startsupportsession('9.00');
amir.createquiz(34);
