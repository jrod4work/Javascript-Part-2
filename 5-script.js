//https://www.youtube.com/watch?v=buWm-b1o6RA

function validateFirstName() {
    var name = document.getElementById("commentName").value;

    if(name.length == 0)
    {
      producePrompt("First Name is Required (No special characters should be used)", "commentNamePrompt", "red");
      return false;
    }

    if(!name.match(/^[A-Z][a-z]+$/g))
    {
        producePrompt("First Name Please (more than one character)", "commentNamePrompt", "red");
        return false;
    }

    producePrompt("Welcome " + name, "commentNamePrompt", "green" );
    return true;
}

function producePrompt(message, promptLocation, color)
{
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;
}
//Second Function
function validateLastName() {
  var lastname = document.getElementById("lastName").value;

  if(lastname.length == 0)
  {
    producePrompt("Last Name is Required (No special characters should be used)", "commentLastNamePrompt", "red");
    return false;
  }

  if(!lastname.match(/^[A+-Z][a-z]+$/g))
  {
      producePrompt("Last Name Please (more than one character)", "commentLastNamePrompt", "red");
      return false;
  }

  producePrompt(  lastname, "commentLastNamePrompt", "green" );
  return true;
}

function producePrompt(message, promptLocation, color)
{
  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;
}
