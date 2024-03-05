function computeAge() {
  const day = document.getElementById("inputDay");
  const month = document.getElementById("inputMonth");
  const year = document.getElementById("inputYear");

  if (!day.value) {
    day.parentElement.classList.add('error');
    day.nextElementSibling.innerHTML = "This field is required";
  } else {
      day.nextElementSibling.innerHTML = "";
    day.parentElement.classList.remove('error');
  }
  if (!month.value) {
    month.parentElement.classList.add('error');
    month.nextElementSibling.innerHTML = "This field is required";
  } else {
      month.nextElementSibling.innerHTML = "";
    month.parentElement.classList.remove('error');
  }
  if (!year.value) {
    year.parentElement.classList.add('error');
    year.nextElementSibling.innerHTML = "This field is required";
  } else {
      year.nextElementSibling.innerHTML = "";
      year.parentElement.classList.remove('error');
  }
}
