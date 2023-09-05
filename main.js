"use strict";

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const label = document.querySelectorAll("label");
const input = document.querySelectorAll("input");
const showResult = document.querySelector(".icon_down");
const p = document.querySelectorAll("p");
const outputDate = document.querySelector(".current_day");
const outputMonth = document.querySelector(".current_month");
const outputYear = document.querySelector(".current_year");
console.log(p);
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("input", () => {
    if (input[i].value.length > input[i].maxLength)
      input[i].value = input[i].value.slice(0, input[i].maxLength);
  });
}
let valid = false;
input[0].addEventListener("input", () => {
  if (day.value > 31) {
    p[0].textContent = "Must be valid date";
  } else {
    p[0].textContent = "";
    valid = true;
  }
});

input[1].addEventListener("input", () => {
  if (month.value > 12) {
    p[1].textContent = "Must be a valid month";
  } else {
    p[1].textContent = "";
    valid = true;
  }
});
input[2].addEventListener("input", () => {
  if (year.value > 2023) {
    p[2].textContent = "Must be in the past";
  } else {
    p[2].textContent = "";
    valid = true;
  }
});

// showResult.addEventListener("click", () => {
//   let birthday = `${month.value},${day.value},${year.value}`;
//   console.log(birthday);
//   let birthdayObj = new Date(birthday);
//   console.log(birthdayObj);
//   let ageDiffMill = Date.now() - birthdayObj;
//   console.log(ageDiffMill);
//   let ageDate = new Date(ageDiffMill);
//   console.log(ageDate);
//   let ageYears = ageDate.getUTCFullYear() - 1970;
//   console.log(ageYears);
//   let ageMonth = ageDate.getUTCMonth();
//   console.log(ageMonth);
//   let ageDay = ageDate.getUTCDay();
//   console.log(ageDay);

//   outputDate.textContent = ageDay;
//   outputMonth.textContent = ageMonth;
//   outputYear.textContent = ageYears;
// });

// const today = new Date();
// const thisDay = today.getDate();
// const thisMonth = today.getMonth();
// const thisYear = today.getFullYear();
// const time = today.getTime();
// console.log(time);

// showResult.addEventListener("click", () => {
//   if (day.vlaue > 31 || month.value > 12 || year.value > thisYear) {
//     for (let i = 0; i < p.length; i++) {
//       p[i].classList.toggle("hidden");
//       input[i].style.borderColor = "red";
//       label[i].style.color = "red";
//     }
//   } else {
//     const calc = [
//       thisYear - year.value,
//       thisMonth + 1 - month.value,
//       thisDay - day.value,
//     ];
//     for (let i = 0; i < span.length; i++) {
//       span[i].textContent = calc[i];
//     }
//   }
// });

// // console.log(thisMonth - 4);

const age = function () {
  if (day.value === "" && month.value === "" && year.value === "") {
    p[0].textContent = "field is required";
    p[1].textContent = "field is required";
    p[2].textContent = "field is required";
    valid = false;
  } else if (valid === true) {
    let date = new Date();
    let d2 = date.getDate();
    let m2 = 1 + date.getMonth();
    let y2 = date.getFullYear();
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (day.value > d2) {
      d2 = d2 + months[m2 - 1];
      m2 = m2 - 1;
    } else if (month.value > m2) {
      m2 = m2 + 12;
      y2 = y2 - 1;
    }
    let d = d2 - day.value;
    let m = m2 - month.value;
    let y = y2 - year.value;

    outputDate.textContent = d;
    outputMonth.textContent = m;
    outputYear.textContent = y;
  } else {
    console.log("doing nothing");
  }
};

showResult.addEventListener("click", age);
