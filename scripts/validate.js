//Deborah Lacerda
//lace0115@algonquinlive.com

//validate module

function submitProfile(e) {
  const isFormValid = validateProfile();

  if (!isFormValid) {
    e.preventDefault();
  }
}

function validateProfile() {
  const isNameValid = validateDName();
  const isQuantityValid = validateQuantity();
  const isDateValid = validateDate();
  const isColorValid = validateColor();
  const isEyeValid = validateEye();

  return isColorValid && isEyeValid;
}

///a) Text (min and max length)

function validateDName() {
  const textbox = document.getElementById("dname");
  let isValid = true;
  if (textbox.value.length > 10 || textbox.value.length < 2) {
    document.querySelector("#dnameError").textContent =
      "*Please make sure the Name is between 2-10 characters long*";
    isValid = false;
  } else {
    document.querySelector("#dnameError").textContent = "";
  }
  return isValid;
}

///b) Number (min and max of your choice)

function validateQuantity() {
  const quantityField = document.getElementById("quantity");
  let isValid = true;
  if (
    quantityField.value === "" ||
    quantityField.value > 10 ||
    quantityField.value < 2
  ) {
    document.querySelector("#quantityError").textContent =
      "*Please enter a quantity between 2 and 10.*";
    isValid = false;
  } else {
    document.querySelector("#quantityError").textContent = "";
  }
  return isValid;
}

///c) Date ( verify input to be after specific date

function validateDate() {
  const monthIndex = 1;
  const today = new Date(2022, 10, 29);
  let isValid = true;

  const day = document.getElementById("date");
  const dateParts = day.value.split("-").map((datePart, index) => {
    let value = parseInt(datePart);
    if (index === monthIndex) {
      value -= 1; // because months are base 0.... for reasons
    }

    return value;
  });

  let userDate = new Date(dateParts[0], dateParts[1], dateParts[2]);

  if (day.value === "" || userDate <= today) {
    document.querySelector("#dateError").textContent =
      "*Please pick a date after 29-Nov-2022*";
    isValid = false;
  } else {
    document.querySelector("#dateError").textContent = "";
  }

  return isValid;
}

///d) A List that allows editing input and single selection (Required)

function validateColor() {
  var ccolor = document.getElementById("color").value;
  let isValid = true;
  if (ccolor === "") {
    document.querySelector("#colorError").textContent =
      "*Please input the color*";
    isValid = false;
  } else {
    document.querySelector("#colorError").textContent = "";
  }
  return isValid;
}

//check radio was check

function validateEye() {
  var eyes = document.profile.eyes.value; // chech is this has value or not
  let isValid = true;
  if (eyes === "") {
    document.querySelector("#eyesError").textContent =
      "*Please select the eye type*";
    isValid = false;
  } else {
    document.querySelector("#eyesError").textContent = "";
  }
  return isValid;
}

function clearAll(e) {
  document.querySelector("#dnameError").textContent = "";
  document.querySelector("#quantityError").textContent = "";
  document.querySelector("#dateError").textContent = "";
  document.querySelector("#colorError").textContent = "";
  document.querySelector("#eyesError").textContent = "";
}
