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

 if (year >= thisYear) {
  return `You will be ${year - yearBorn} in the year ${year}`;
 } else if (year < yearBorn) {
  return `The year ${year} was ${yearBorn - year} years before you were born`;
 } else if (year > yearBorn) {
  return `You were ${year - yearBorn} in the year ${year}`;
 }
};
