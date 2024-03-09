function computeAge() {
  const day = document.getElementById("inputDay");
  const month = document.getElementById("inputMonth");
  const year = document.getElementById("inputYear");
  const inputDate = new Date(
    Number(year.value),
    Number(month.value) - 1,
    Number(day.value)
    );
    const timeDiff = new Date() - inputDate;
    let date = new Date(timeDiff);
    const fullYear = date.getFullYear();
    const fullMonth = date.getUTCMonth();
    const fullDay = date.getUTCDate() - 1;
    const numberOfDays = getNumberOfDaysInMonth(year.value, month.value);
  
    
    if (!day.value) {
      showError(day);
    } else if (
      month.value == fullMonth &&
      year.value == fullYear &&
    day.value > 0 &&
    day.value <= fullDay
  ) {
    hideError(day);
  } else if (
    day.value > 0 &&
    day.value <= numberOfDays &&
    (year.value != fullYear || month.value != fullMonth)
  ) {
    hideError(day);
  } else {
    day.parentElement.classList.add("error");
    day.nextElementSibling.textContent = "Must be a valid day";
  }

  if (!month.value) {
    showError(month);
  } else {
    if (
      (year.value == fullYear &&
        (month.value > fullMonth || month.value < 1)) ||
      (year.value < fullYear && (month.value > 12 || month.value < 1))
    ) {
      Notvalid(month);
    } else {
      hideError(month);
    }
  }

  if (!year.value) {
    showError(year);
  }else if(year.value < 1970){
    year.parentElement.classList.add("error");
    year.nextElementSibling.textContent = "Year Must be greater than 1970";
  }else if (year.value > fullYear + 1970 || year.value < 1) {
    year.parentElement.classList.add("error");
    year.nextElementSibling.textContent = "Must be in the past";
  } else {
    hideError(year);
  }

  const yearElement = document.querySelector('#years .yearCount');
  const monthElement = document.querySelector('#months .monthCount');
  const dayElement = document.querySelector('#days .dayCount');

  animateCounter(dayElement, fullDay);
  animateCounter(monthElement, fullMonth);
  animateCounter(yearElement, fullYear-1970);

}

function showError(getDate) {
  getDate.parentElement.classList.add("error");
  getDate.nextElementSibling.textContent = "This field is required";
}

function hideError(getDate) {
  getDate.nextElementSibling.textContent = "";
  getDate.parentElement.classList.remove("error");
}

function Notvalid(isValid) {
  isValid.parentElement.classList.add("error");
  isValid.nextElementSibling.textContent = "Must be a valid month";
}

function getNumberOfDaysInMonth(year, month) {
  let date = new Date(year, month, 0);
  return date.getDate();
}

function animateCounter(element, targetValue) {
  const duration = 5000;
  const interval = 50;
  const increment = Math.ceil(targetValue / (duration / interval));
  let currentValue = 0;
  let intervalId;

  function updateValue() {
      element.textContent = currentValue;

      if (currentValue >= targetValue) {
          clearInterval(intervalId);
      } else {
          currentValue += increment;
      }
  }
  intervalId = setInterval(updateValue, interval);
}