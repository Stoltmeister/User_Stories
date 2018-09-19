/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application

function app(people) {
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();

  //let newArr = [];
  //newArr = 
  // let descendantsArr = [];
  // descendantsArr = getRelatives(people);
  // alert(descendantsArr.length.toString() + "   " + descendantsArr[0].lastName);


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
      case "occupation":
        filteredPeople = searchByOccupation(people);
        console.log(filteredPeople);
        break;
      case "multiple":

        alert("Answer 'yes' or 'no' for the following questions");
        let height = promptFor("Search by height? ('yes' or 'no')", yesNo);
        let weight = promptFor("Search by weight? ('yes' or 'no')", yesNo);
        let eyeColor = promptFor("Search by eye color? ('yes' or 'no')", yesNo);
        let gender = promptFor("Search by gender? ('yes' or 'no')", yesNo);
        let age = promptFor("Search by age? ('yes' or 'no')", yesNo);
        let occcupation = promptFor("Search by occcupation? ('yes' or 'no')", yesNo);
        let counter = 0;
        if (height === "yes") {
          filteredPeople = searchByHeight(people);
          counter++;
        }
        if (weight === "yes") {
          if (counter > 1) {
            filteredPeople = searchByWeight(filteredPeople);
          }
          else {
            filteredPeople = searchByWeight(people);
          }
          counter++;
        }
        if (eyeColor === "yes") {
          if (counter > 1) {
          filteredPeople = searchByEyeColor(filteredPeople);
          }
          else {
            filteredPeople = searchByEyeColor(people);
          }
          counter++;
        }
        if (gender === "yes") {
          if (counter > 1) {
          filteredPeople = searchByGender(filteredPeople);
          }
          else {
            filteredPeople = searchByGender(people);
          }
          counter++;
        }
        if (age === "yes") {
          if (counter > 1) {
          filteredPeople = searchByAge(filteredPeople);
          }
          else {
            filteredPeople = searchByAge(people);
          }
          counter++;
        }
        if (occcupation === "yes") {
          if (counter > 1) {
          filteredPeople = searchByOccupation(filteredPeople);
          }
          else {
            filteredPeople = searchByOccupation(people);
          }
          counter++;
        }
        if (counter < 1) {
          alert("You did not select any trait to search for! Please try again.");
          searchByTraits(people);
          break;
        }

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
// search by name
function getPerson(people, firstName, lastName) {
  let personArr = [];

  personArr = people.filter(function (el) {
    if (el.firstName.toLowerCase() == firstName && el.lastName.toLowerCase() == lastName) {
      return true;
    }
  });

  return personArr;
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

function searchByAge(people) {

  let newArray = [];
  let userInputAge = prompt("How old is the person?");
  do {
   
    newArray = people.filter(function (el) {

      if (calcDate(el.dob) == userInputAge) {


        return true;
      }
    });

    if (newArray.length < 1) {
      alert("No results. Make sure your input is valid! Please try again.");
    }

  } while (newArray.length < 1);

  return newArray;
}

function calcDate(bdate) {

  dateToday = new Date();
  birthdate = new Date(bdate);
  birthYear = dateToday.getFullYear() - birthdate.getFullYear();
  if (dateToday.getMonth() < birthdate.getMonth() ||
    dateToday.getMonth() == birthdate.getMonth() &&
    dateToday.getDate() < birthdate.getDate()) {
    birthYear = birthYear - 1;
  }
  return birthYear;
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
      displayPerson(person, people);
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
          return ' ' + el.firstName + ' ' + el.lastName;
        });


      }

      if (grandkids.length > 0) {
        grandkids = grandkids.map(function (el) {
          return ' ' + el.firstName + ' ' + el.lastName;
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

      var parents = getParents(person, people);

      var personFamily = "Parents: " + parents + "\n";
      personFamily += "Children: " + children + "\n";
      personFamily += "Current Spouse: " + spouse + "\n";
      personFamily += "Grandkids: " + grandkids + "\n";


      alert(personFamily);
      mainMenu(person, people);
      break;
    case "descendants":
      // TODO: get person's descendants *Use Recursion Function* 
      // people who have this current person as a parent
      alert(getDescendants(person, people, 1));
      mainMenu(person, people);
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

function getDescendants(person, allPeople, counter, children = []) {
  let grandkids;

  if (counter < 1 || person === undefined || allPeople === undefined) {
    return;
  }
  else if (counter === 1) {

    children = allPeople.filter(function (el) {
      if (el.parents.includes(person.id)) {
        return true;
      }
    });
    // no kids 
    if (children.length < 1) {
      return person.firstName + " has no descendants";
    }
    // at least one child
    children = children.map(function (el) {
      return ' ' + el.firstName + ' ' + el.lastName;
    });

    return person.firstName + "'s descendants are: " + children + getDescendants(person, allPeople, 2);

  }
  // has kids possiblly grandkids
  else if (counter === 2) {

    children = allPeople.filter(function (el) {
      if (el.parents.includes(person.id)) {
        return true;
      }
    });

    if (children.length < 1) {
      return '';
    }

    grandkids = allPeople.filter(function (el) {
      for (let i = 0; i < children.length; i++) {
        if (el.parents.includes(children[i].id)) {
          return true;
        }
      }
    });

    if (grandkids.length < 1) {
      return '';
    }

    else {
      children = grandkids;
      grandkids = grandkids.map(function (el) {
        return ', ' + el.firstName + ' ' + el.lastName;
      });
      return grandkids + getDescendants(person, allPeople, 3, children);
    }

  }

  else {
    // checking even further than grandkids
    grandkids = allPeople.filter(function (el) {
      for (let i = 0; i < children.length; i++) {
        if (el.parents.includes(children[i].id)) {
          return true;
        }
      }
    });
    // no more descendants
    if (grandkids.length < 1) {
      return '';
    }
    else {
      children = grandkids;
      grandkids = grandkids.map(function (el) {
        return ', ' + el.firstName + ' ' + el.lastName;
      });
      return grandkids + getDescendants(person, allPeople, 3, children);
    }
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
    alert("More than one result try again!");
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

function displayPerson(person, people) {
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
  var parents = getParents(person, people);
  let spouse = people.filter(function (el) {
    if (el.id === person.currentSpouse) {
      return true;
    }
  });
  if (spouse.length > 0) {
    spouse = spouse[0].firstName;
  }
  else {
    spouse = "";
  }
  personInfo += "Parents: " + parents + "\n";
  personInfo += "Current Spouse: " + spouse + "\n";

  alert(personInfo);
}

function getParents(person, people) {
  var parents = people.filter(function (el) {
    if (el.id === person.parents[0] || el.id === person.parents[1]) {
      return true;
    }
  });
  if (parents.length > 0) {
    if (parents.length > 1) {
      parents = parents[0].firstName + ", " + parents[1].firstName;
    }
    else {
      parents = parents[0].firstName;
    }
  }
  return parents;
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

