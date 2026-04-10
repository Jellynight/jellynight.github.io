/** @format */

function getAge() {
 const age = prompt(`How old are you?`);
 return parseFloat(age) || 0;
}

function getYear() {
 const year = prompt("What year do you want to check?");
 return parseFloat(year);
}

const thisYear = new Date.getFullYear();

const howOld = () => {
 const age = getAge();
 const year = getYear();
 let yearBorn = thisYear - age;
 let message = ""
 if (year >= thisYear) {
  message = `You will be ${year - yearBorn} in the year ${year}`;
 } else if (year < yearBorn) {
  message = `The year ${year} was ${yearBorn - year} years before you were born`;
 } else if (year > yearBorn) {
  message = `You were ${year - yearBorn} in the year ${year}`;
 }

 const resultDiv = document.getElementById("result");
  if (resultDiv) {
    resultDiv.innerHTML = `<>${message}</>`
  }
};
