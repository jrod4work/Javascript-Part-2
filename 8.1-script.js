let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("example").innerHTML = myObj.name;
    document.getElementById("example2").innerHTML = myObj.age;
    for (var i = 0; i < myObj.cars.length; i++ ) {
       document.getElementById("example" + (i + 3)).innerHTML = myObj.cars[i].make + " " + myObj.cars[i].model;
    };

    document.getElementById("example").innerHTML = myObj.bio;


  }
};
newRequest.open("GET", "8.1-new.json", true);
newRequest.send();



// "cars": [
//     { "make": "dodge", "model": "caravan" },
//     { "make": "honda", "model": "civic" },
//     { "make": "ford", "model": "mustang" }
//   ]

// var i;
// for (i = 0; i < cars.length; i++) { 
//     text += cars[i] + "<br>";
// }

// let cars = document.createElement("example4");
// cars.innerHTML = myObj.cars[i].make;