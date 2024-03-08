let date = new Date();
let fullDay = date.getDate();
let fullMonth = date.getMonth() + 1;
let fullYear = date.getFullYear();
const day = document.getElementById("inputDay");
const month = document.getElementById("inputMonth");
const year = document.getElementById("inputYear");


function computeAge() {
  const numberOfDays = getNumberOfDaysInMonth(year.value, month.value);

  if(!day.value){
    showError(day);
  }else if((month.value == fullMonth && year.value == fullYear) && (day.value > 0 && day.value <= fullDay)){
    hideError(day);
  }else if((day.value > 0 && day.value <= numberOfDays) && ( year.value != fullYear || month.value != fullMonth)){
    hideError(day);
  }else{
    day.parentElement.classList.add('error');
    day.nextElementSibling.innerHTML = 'Must be a valid day';
  }

  if (!month.value) {
    showError(month);
  }else{
    if((year.value == fullYear && (month.value > fullMonth || month.value < 1))||(year.value < fullYear && (month.value > 12 || month.value < 1))){
      Notvalid(month);
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

function Notvalid(isValid){
  isValid.parentElement.classList.add('error');
  isValid.nextElementSibling.innerHTML = 'Must be a valid month';
}

function getNumberOfDaysInMonth(year, month) {
  let date = new Date(year, month, 0);
  return date.getDate();
}