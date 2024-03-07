function computeAge() {
  const day = document.getElementById("inputDay");
  const month = document.getElementById("inputMonth");
  const year = document.getElementById("inputYear");

  day.value ? hideError(day) : showError(day);
  month.value ? hideError(month) : showError(month);
  year.value ? hideError(year) : showError(year);
  
  let date = new Date();
  let fullDay = date.getDay();
  let fullMonth = date.getMonth();
  let fullYear = date.getFullYear();
}

const showError = (getDate) => {
  getDate.parentElement.classList.add("error");
  getDate.nextElementSibling.innerHTML = "This field is required";
}

const hideError = (getDate) => {
  getDate.nextElementSibling.innerHTML = "";
  getDate.parentElement.classList.remove("error");
}
