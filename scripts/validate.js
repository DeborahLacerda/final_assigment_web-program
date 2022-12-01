//Deborah Lacerda
//lace0115@algonquinlive.com

//validate module
function validateProfile(e) {
  e.preventDefault();
  var valid = true;

  //duckName
  valid &= validatedname();
  //size
  valid &= validatesize();

  validateDate();
  validatecolor();
  if (valid == false) {
    return false;
  }
  //Alert if form is valid and return true.

  if (valid) {
    alert("Thank you");
  }
  return true;
}

///a) Text (min and max length)

function validatedname() {
  const textbox = document.getElementById("dname");
  if (textbox.value.length <= 10 && textbox.value.length >= 5) {
  } else if (dname.value === "") {
    document.querySelector("#dnameError").textContent =
      "*Please make sure the Name is between 5-10 characters long*";
  } else {
    document.querySelector("#dnameError").textContent =
      "*Please make sure the Name is between 5-10 characters long*";
  }
}
///b) Number (min and max of your choice)

function validatesize() {
  const textbox = document.getElementById("size");
  if (textbox.value <= 10 && textbox.value >= 5) {
  } else if (size.value === "") {
    document.querySelector("#sizeError").textContent =
      "*Please enter a size between 10 and 5.*";
  } else {
    document.querySelector("#sizeError").textContent =
      "*Please enter a size between 10 and 5.*";
  }
}

///c) Date ( verify input to be after specific date

function validateDate() {
  const monthIndex = 1;
  const today = new Date(2022, 10, 29);

  const day = document.getElementById("date");
  const dateParts = day.value.split("-").map((datePart, index) => {
    let value = parseInt(datePart);
    if (index === monthIndex) {
      value -= 1; // because months are base 0.... for reasons
    }

    return value;
  });

  // let userDate = new Date(...dateParts);
  let userDate = new Date(dateParts[0], dateParts[1], dateParts[2]);

  if (userDate <= today) {
    document.querySelector("#dateError").textContent =
      "*Please make sure the input is date after 29-Nov-2022*";
  } else if (day.value === "") {
    document.querySelector("#dateError").textContent =
      "*Please make sure the input is date after 29-Nov-2022*";
  }
}
///d) A List that allows editing input and single selection (Required)

// let text = document.getElementById("color").nextElementSibling.onchange;
// nextElementSibling.value = value;

function validatecolor() {
  const cor = document.getElementById("color");
  const value = cor.value;
  const a = value;
  const ocor = document.getElementById("other");
  if (a.value === "") {
    document.querySelector("#colorError").textContent =
      "*Please choose or write the color.*";
  } else if (ocor.value === "") {
    document.querySelector("#colorError").textContent =
      "*Please choose or write the color.*";
  }
}

function clearAll(e) {
  document.querySelector("#dnameError").textContent = "";
  document.querySelector("#sizeError").textContent = "";
  document.querySelector("#dateError").textContent = "";
  document.querySelector("#colorError").textContent = "";
}
