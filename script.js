class Employee {
    constructor(name, salary, hireDate) {
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }
    getName() {
        console.log(this.name.toUpperCase());
    }
    getSalary() {
        console.log(this.salary);
    }
    getHireDate() {
        console.log(this.hireDate);
    }

}

class Manager extends Employee {
    constructor( degree, name, salary, hireDate) {
        super(name, salary, hireDate); 
        this.degree = degree;   
    }
    
    
    managerEducation() {
        console.log (this.name + " " + "has a"+ " " + this.degree + ".")
    }
    
}

let sup = new Manager("Associates", "Mario Torres", "50,000", "10/25/98" );
    

sup.managerEducation();

class Designer extends Employee {
    constructor(type,name, salary, hireDate) {
        super(name, salary, hireDate)
        this.type = type;

    }
  designerDescription(){
      console.log(this.name + " " + "is a" + " " + this.type  + " " +  "designer.");
      

  }
  
}

let Employee1 = new Designer("Fashion", "Susan Lupe", "100,000", "10/25/1982" );
Employee1.designerDescription();


class SalesAssociate extends Employee {
    constructor(location, name, salary, hireDate){
        super(name, salary, hireDate);
        this.location = location;
    }
  
  storeLocation() {
      console.log(this.name + "" + "works at our" + " " + this.location)
  }
}

let Employee2 = new SalesAssociate(" 1234 s 5th ave Mesa,AZ 85002 ", "Margeret Knowls", "30,000", "10/30/1998" );

Employee2.storeLocation();