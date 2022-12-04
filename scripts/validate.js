//Deborah Lacerda
//lace0115@algonquinlive.com

//validate module
function validateProfile(e) {
  // e.preventDefault();

  validateDName();
  validateQuantity();
  validateDate();
  validateColor();
  validateEye();
}

///a) Text (min and max length)

function validateDName() {
  const textbox = document.getElementById("dname");
  if (textbox.value.length <= 10 && textbox.value.length >= 2) {
  } else if (dname.value === "") {
    document.querySelector("#dnameError").textContent =
      "*Please make sure the Name is between 2-10 characters long*";
  }
  document.querySelector("#dnameError").textContent =
    "*Please make sure the Name is between 2-10 characters long*";
}

///b) Number (min and max of your choice)

function validateQuantity() {
  const textbox = document.getElementById("quantity");
  if (textbox.value <= 10 && textbox.value >= 2) {
  } else if (quantity.value === "") {
    document.querySelector("#quantityError").textContent =
      "*Please enter a quantity between 2 and 10.*";
  } else {
    document.querySelector("#quantityError").textContent =
      "*Please enter a quantity between 2 and 10.*";
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
  } else {
    document.querySelector("#dateError").textContent = "";
  }
}

///d) A List that allows editing input and single selection (Required)

function validateColor() {
  var ccolor = document.getElementById("color").value;
  if (ccolor === "") {
    document.querySelector("#colorError").textContent =
      "*Please make sure the input the color*";
  } else {
    document.querySelector("#colorError").textContent = "";
  }
}

//check radio was check

function validateEye() {
  var eyes = document.profile.eyes.value; // chech is this has value or not
  if (eyes === "") {
    document.querySelector("#eyesError").textContent =
      "*Please make sure the input the color*";
  } else {
    document.querySelector("#eyesError").textContent = "";
  }
}

const elements1 = document.querySelectorAll('[name="eyes"]');
console.log(elements1);

function clearAll(e) {
  document.querySelector("#dnameError").textContent = "";
  document.querySelector("#quantityError").textContent = "";
  document.querySelector("#dateError").textContent = "";
  document.querySelector("#colorError").textContent = "";
  document.querySelector("#eyesError").textContent = "";
}
