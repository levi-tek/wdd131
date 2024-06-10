const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();
const year = today.getFullYear();
const dateAndTime = today.toLocaleString("en-Us");



currentYear.innerHTML = year;

lastModified.innerHTML = dateAndTime;