//Deborah Lacerda
//lace0115@algonquinlive.com

//form element events

//call the funtion validateProfile
document.profile.addEventListener("submit", submitProfile);

//call the funtion clearAll
document.profile.addEventListener("reset", clearAll);

/// any change
document.profile.addEventListener("change", validateProfile);
