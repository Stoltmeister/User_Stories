/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application

function app(people) {
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch (searchType) {
    case 'yes':
      // TO DO
      let nameFound = searchByName(data);
      mainMenu(nameFound, data);
      break;
    case 'no':
      searchByTraits(people);
      break;
    default:
      alert("Wrong! Please try again, following the instructions dummy. :)");
      app(people); // restart app
      break;
  }
}

function searchByTraits(people) {
  let filteredPeople = [];
  do {

    let userSearchChoice = prompt("What would you like to search by? 'height', 'weight', 'eye color', 'gender', 'age', 'occupation', 'multiple'.");
    let searchInput;

    switch (userSearchChoice) {
      case "height":
        filteredPeople = searchByHeight(people);
        console.log(filteredPeople);
        break;
      case "weight":
        filteredPeople = searchByWeight(people);
        console.log(filteredPeople);
        break;
      case "eye color":
        filteredPeople = searchByEyeColor(people);
        console.log(filteredPeople);
        break;
      case "gender":
        filteredPeople = searchByGender(people);
        console.log(filteredPeople);
        break;
      case "age":
        filteredPeople = searchByAge(people);
        console.log(filteredPeople);
        break;
      case "occcupation":
        searchInput = promptFor("What is their occupation?", chars);
        filteredPeople = searchByOccupation(searchInput, people);
        console.log(filteredPeople);
        break;
      case "multiple":
        let height;
        let weight;
        let eyeColor;
        let gender;
        let age;
        let occupation;

        alert("Type 'y' for yes or 'n' for no for the following questions");
        promptFor()

        break;
      default:
        alert("You entered an invalid search type! Please try again.");
        searchByTraits(people);
        break;
    }

    if (filteredPeople.length > 1) {
      alert("There is more than one person who fits this criteria. Please narrow further");
      people = filteredPeople;
    }

  } while (filteredPeople.length > 1);

  let foundPerson = filteredPeople[0];

  mainMenu(foundPerson, people);

}

function searchByWeight(people) {
  let newArray = [];
  do {
    let userInputWeight = prompt("How much does the person weigh?");

    newArray = people.filter(function (el) {
      if (el.weight == userInputWeight) {
        return true;
      }
    });

    if (newArray.length < 1) {
      alert("No results. Make sure your input is valid! Please try again.");
    }

  } while (newArray.length < 1);

  return newArray;
}


function searchByEyeColor(people) {
  let newArray = [];
  do {

    let userInputEyeColor = prompt("What is the person's eye color?");

    newArray = people.filter(function (el) {
      if (el.eyeColor === userInputEyeColor) {
        return true;
      }
      else {
        return false;
      }
    });

    if (newArray.length < 1) {
      alert("No results. Make sure your input is valid! Please try again.");
    }

  } while (newArray.length < 1);

  return newArray;
}

function searchByOccupation(people) {
  let newArray = [];
  do {
    let userInputOccupation = prompt("What is the person's occupation?");

    newArray = people.filter(function (el) {
      if (el.occupation === userInputOccupation) {
        return true;
      }
    });

    if (newArray.length < 1) {
      alert("No results. Make sure your input is valid! Please try again.");
    }

  } while (newArray.length < 1);

  return newArray;
}

function searchByGender(people) {
  let newArray = [];
  do {
    let userInputGender = prompt("What is this person's gender?");

    newArray = people.filter(function (el) {
      if (el.gender === userInputGender) {
        return true;
      }
    });

    if (newArray.length < 1) {
      alert("No results. Make sure your input is valid! Please try again.");
    }

  } while (newArray.length < 1);
  return newArray;
}

function searchByHeight(people) {
  let newArray = [];
  do {
    let userInputHeight = prompt("What is this person's height?");

    newArray = people.filter(function (el) {
      if (el.height.toString() === userInputHeight) {
        return true;
      }
    });

    if (newArray.length < 1) {
      alert("No results. Make sure your input is valid! Please try again.");
    }

  } while (newArray.length < 1);

  return newArray;
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people) {

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if (!person) {
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch (displayOption) {
    case "info":
      // TODO: get person's info
      displayPerson(person);
      mainMenu(person, people);
      break;
    case "family":
      // TODO: get person's family
      let children = people.filter(function (el) {
        if (el.parents.includes(person.id)) {
          return true;
        }
      });

      let grandkids = "";

      if (children.length > 0) {

        grandkids = people.filter(function (el) {
          for (let i = 0; i < children.length; i++) {
            if (el.parents.includes(children[i].id)) {
              return true;
            }
          }

        });

        children = children.map(function (el) {
          return ' ' + el.firstName;
        });


      }

      if (grandkids.length > 0) {
        grandkids = grandkids.map(function (el) {
          return ' ' + el.firstName;
        });
      }

      let spouse = people.filter(function (el) {
        if (el.id === person.currentSpouse) {
          return true;
        }
      });
      if (spouse.length > 0) {
        spouse = spouse[0].firstName;
      }


      var personFamily = "Parents: " + person.parents + "\n";
      personFamily += "Children: " + children + "\n";
      personFamily += "Current Spouse: " + spouse + "\n";
      personFamily += "Grandkids: " + grandkids + "\n";


      alert(personFamily);

      break;
    case "descendants":
      // TODO: get person's descendants *Use Recursion Function* 
      // people who have this current person as a parent
      break;
    case "restart":
      app(people); // restart
      break;
    case "quit":
      return; // stop execution
    default:
      return mainMenu(person, people); // ask again
  }
}

function searchByName(people) {
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);

  // TODO: find the person using the name they entered
  var result = people.filter(function (el) {
    if (el.firstName === firstName && el.lastName === lastName) {
      return true;
    }
  });

  if (result.length === 1) {
    let person = result[0];
    return person;
  }
  else {
    alert("More than one person!");
    app(people); // restart app
    return;
  }
}

// alerts a list of people
function displayPeople(people) {
  alert(people.map(function (person) {
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person) {
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "Date of Birth: " + person.dob + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  personInfo += "Parents: " + person.parents + "\n";
  personInfo += "Current Spouse: " + person.currentSpouse + "\n";

  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, callback) {
  do {
    var response = prompt(question).trim();
  } while (!response || !callback(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input) {
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input) {
  return true; // default validation only
}

