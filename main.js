let date = new Date();
let fullDay = date.getDay()+3;
let fullMonth = date.getMonth() + 1;
let fullYear = date.getFullYear();
const day = document.getElementById("inputDay");
const month = document.getElementById("inputMonth");
const year = document.getElementById("inputYear");
const numberOfDays = getNumberOfDaysInMonth(year, month);


function computeAge() {
  if (!day.value) {
    showError(day);
  }else if(day.value > fullDay){
    day.parentElement.classList.add('error');
    day.nextElementSibling.innerHTML = 'Must be a valid day';
  }else{
    hideError(day);
  }

  if (!month.value) {
    showError(month);
  }else{
    if((year.value == fullYear && (month.value > fullMonth || month.value < 1))||(year.value < fullYear && (month.value > 12 || month.value < 1))){
      isvalid(month);
    }else{
      hideError(month);
    }
  }

  if (!year.value) {
    showError(year);
  }else if (year.value > fullYear || year.value < 1) {
    year.parentElement.classList.add('error');
    year.nextElementSibling.innerHTML = 'Must be in the past';
  }else{
    hideError(year);
  }
}

function showError(getDate) {
  getDate.parentElement.classList.add("error");
  getDate.nextElementSibling.innerHTML = "This field is required";
}

function hideError(getDate) {
  getDate.nextElementSibling.innerHTML = "";
  getDate.parentElement.classList.remove("error");
}

function isvalid(isValid){
  isValid.parentElement.classList.add('error');
  isValid.nextElementSibling.innerHTML = `Must be a valid month`;
}

function getNumberOfDaysInMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

// code to get date of spacific month.
// var year = 2024; // Change to the desired year
//     var month = 5; // Change to the desired month (0-indexed, so 2 is March)
//     var numberOfDays = getNumberOfDaysInMonth(year, month);
//     console.log("Number of days in the month:", numberOfDays);