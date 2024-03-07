let date = new Date();
let fullDay = date.getDay();
let fullMonth = date.getMonth()+1;
let fullYear = date.getFullYear();
const day = document.getElementById("inputDay");
const month = document.getElementById("inputMonth");
const year = document.getElementById("inputYear");

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
      if(year.value == fullYear){
        if(month.value > fullMonth || month.value < 1){
          month.parentElement.classList.add('error');
          month.nextElementSibling.innerHTML = 'Must be a valid month';
        }else{
          hideError(month);
        }
      }else if(year.value < fullYear){
        if(month.value > 12 || month.value < 1){
          month.parentElement.classList.add('error');
          month.nextElementSibling.innerHTML = 'Must be a valid month';
        }else{
          hideError(month);
        }
      }else{
        hideError(month);
      }
  }

  if (!year.value) {
    showError(year);
  } else if (year.value > fullYear || year.value < 1) {
      year.parentElement.classList.add('error');
      year.nextElementSibling.innerHTML = 'Must be in the past';
    } else{
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
