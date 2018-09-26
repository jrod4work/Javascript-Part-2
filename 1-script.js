// ES6

//Arrow
const hello = () => console.log("Hello World!");

//Switch
function days1() {
  var dayName;
  var day2 = parseInt(Dia.value);
  switch (day2) {
    case 1:
      dayName = "Sunday";
      break;
    case 2:
      dayName = "Monday";
      break;
    case 3:
      dayName = "Tuesday";
      break;
    case 4:
      dayName = "Wednesday";
      break;
    case 5:
      dayName = "Thursday";
      break;
    case 6:
      dayName = "Friday";
      break;
    case 7:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid day";
  }
  document.getElementById("message").innerHTML = dayName;
}

//Error handling chapter 4 lesson 3
// try {
//   console.log("Start of try block"); // #1 This line executes

//   randomVariable; // error, variable is not defined!

//   console.log("End of try (never reached)"); // #2 This line is never reached
// } catch (err) {
//   console.log("Error has occurred!"); // #3 This is line executed since an error has occurred.
// }

// console.log("...Then the execution continues"); // #4 Finally, this is executed.


//Throw handling chapter 4 lesson 3

function myFunction() {
  let message = document.getElementById("message1");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if (x == "") throw "Please input a number";
    if (x < 10) throw "Your number is too low!";
    if (x > 25) throw "Your number is too high!";
    if (x >= 10) throw "There you go!"
  } catch (err) {
    message.innerHTML = err;
  } finally {
    document.getElementById("demo").value = "";
  }
}

//Ternary

function Age () {
 
let age1 = parseInt(age.value);

const good = age1 >= 18 ? 'Welcome to our site.' : 'Sorry; you must be 18 or older to enter.';

document.getElementById("message2").innerHTML = good;
}

// Classes

// Define the class
class aClass {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    // Method assigned to class
    sayName() {
      alert(this.name);
    }
    // Method assigned to class
    sayAge() {
      alert(this.age);
    }
  }
  // Instantiating the aClass with the 'new' keyword
  const myInstance = new aClass("andrew", 30);
//   myInstance.sayName();
//   myInstance.sayAge();

function car() {

  class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  }
  
  let myCar = new Vehicle("Nissan", "Rogue", 2017);

  console.log(myCar);
}


//Methods 

function people() {

    class Person {
        constructor(firstName, lastName) {
          this.firstName = firstName;
          this.lastName = lastName;
        }
      
        run() {
          console.log(this.firstName + " " + this.lastName + " is running.");
        }
      }
      
      let rose = new Person("Rose", "Dawson");
      rose.run();
}

//More Methods

function people2() {

class Person2 {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    run() {
      console.log(this.firstName + " " + this.lastName + " is running.");
    }
    walk() {
      console.log(this.firstName + " " + this.lastName + " is walking.");
    }
    greeting() {
      console.log("Hello, my name is " + this.firstName + ".");
    }
  }
  
  let rose = new Person2 ("Rose", "Dawson");
  rose.run();
  rose.walk();
  rose.greeting();

}

//Getter

function car2() {
class Car {
    constructor(make, model, year) {
      this._make = make;
      this._model = model;
      this._year = year;
    }
  
    get make() {
      return this._make;
    }
  
  }
  
  let myCar = new Car("Nissan", "Rogue", 2017);
  myCar.make;
}


// Instantiating & Instances
//NEW CODE

function persona3 () {

class Person3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(
      "Hello, my name is " + this.name + " and I am " + this.age + "."
    );
  }
}

// instantiating
let andrew = new Person3 ("Andrew", 30);
let mike = new Person3 ("Mike", 24);
let frank = new Person3 ("Frank", 29);

andrew.greeting();
mike.greeting();
frank.greeting();
}
// Inheritance

function Persona4() {

class Person4 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    console.log("Hello, my name is " + this.firstName + ".");
  }
}

class NewStudent extends Person4 {
  constructor(studentID, firstName, lastName) {
    super(firstName, lastName);
    this.studentID = studentID;
  }
  studentInfo() {
    console.log(this.studentID + " " + this.firstName + ", " + this.lastName);
  }
}

let student = new NewStudent(12, "John", "Smith");
student.greeting();
student.studentInfo();
}

//Hands on

class Employee {
  constructor(name, salary, hireDate) {
    this.name = name;
    this.salary = salary;
    this.hireDate = hireDate;
  }
  getName() {
    console.log("My name is " + this.name);
  }
  getSalary() {
    console.log("I am asking for $" + this.salary + " for salary");
  }
  getHireDate() {
    console.log("I am available to start on " + this.hireDate);
  }
}
//Subclass
class Manager extends Employee {
  constructor(experience, name, salary, hireDate) {
      super(name, salary, hireDate);
      this.experience = experience;
  }
yearsExperience() {
  console.log("I have " + this.experience + " years of experience");
  }
}

let Man = new Manager("50", "Peter", "22k", "Nov 2017");
Man.getName();
Man.getSalary();
Man.getHireDate();
Man.yearsExperience();

//2nd Subclass
class Designer extends Employee {
  constructor (degree, name, salary, hireDate) {
      super(name, salary, hireDate);
      this.degree = degree;
  }
  degreeCompleted() {
      console.log("I have completed my degree on " + this.degree);
  } 

}

let Des = new Designer("Development","Peter2","100k","10/12/1990"); //This is the order of line 281
Des.getName();
Des.getSalary();
Des.getHireDate();
Des.degreeCompleted();

// 3rd Subclass

class SalesAssociate extends Employee {
  constructor (job, name, salary, hireDate){
      super(name, salary, hireDate);
      this.job = job;
  }
  jobDescription() {
      console.log("I am applying for the position of " + this.job);
  }
}


let sales = new SalesAssociate("Selling","Maria","20k","ASAP!");
//Order of how they will appear
sales.getName();
sales.getSalary();
sales.getHireDate();
sales.jobDescription();
