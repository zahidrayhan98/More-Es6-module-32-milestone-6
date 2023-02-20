
class Teammember {
    name ;
    location;
    constructor(){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }

}


class Instructor extends Teammember {
   
    desgination = 'web course' ;
    team = 'web team';
  
    constructor(name,location){
        super(name,location);
     
    }
    startsupportsession (time){
    console.log(` start the suport session ${time}`);
    }
    createquiz (module){
        console.log(`please release the module ${module}`);
    }
  
}


class Developer extends Teammember {
  
    desgination = 'web course' ;
    team = 'web team';
    tech ;
  
    constructor(name,location){
        super(name,location);
      
        this.tech = tech ;
    }
    developfeature (feature){
    console.log(` please develop the  ${feature}`);
    }
    release (version){
        console.log(`please release the  ${version}`);
    }
   
}

class Jobreplacement extends Teammember {
   
    desgination = 'commandos' ;
    team = 'job replacement team';
    tech ;
  
    constructor(name,location){
        super (name,location);
      
        this.tech = tech ;
    }
    provideresume (job){
    console.log(` please develop the  ${job}`);
    }
    preparestudent (version){
        console.log(`please release the  ${version}`);
    }
   
}
const rupo = new Developer('jahid',"dhaka","react");
console.log(rupo);