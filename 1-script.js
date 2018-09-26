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

class Person {
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
  
  let rose = new Person("Rose", "Dawson");
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