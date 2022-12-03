//Deborah Lacerda
//lace0115@algonquinlive.com

//form element events

///////remove warning////

//remove warning if dName has input
document.querySelector("#dname").addEventListener("blur", function () {
  const textbox = document.getElementById("dname");
  if (textbox.value.length <= 10 && textbox.value.length >= 5) {
    dnameError.textContent = "";
  }
});

//remove warning if age has input
document.querySelector("#quantity").addEventListener("blur", function () {
  const textbox = document.getElementById("quantity");
  if (textbox.value <= 10 && textbox.value >= 5) {
    quantityError.textContent = "";
  }
});

document.querySelector("#date").addEventListener("blur", function () {
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
  let userDate = new Date(...dateParts);

  if (userDate > today) {
    dateError.textContent = "";
  }
});

//call the funtion validateProfile

document.profile.addEventListener("submit", validateProfile);

//call the funtion clearAll

document.profile.addEventListener("reset", clearAll);

/// any change

document.profile.addEventListener("change", validateEye);
document.profile.addEventListener("change", validateDate);
document.profile.addEventListener("change", validateColor);
document.profile.addEventListener("change", validateDName);
document.profile.addEventListener("change", validateQuantity);
