/** @format */

const getSleepHours = (day) => {
  const hours = prompt(`Enter sleep hours for ${day}:`);
  return parseFloat(hours) || 0;
};

let getActualSleepHours = () => {
  return (
    getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("Thursday") +
    getSleepHours("Friday") +
    getSleepHours("Saturday") +
    getSleepHours("Sunday")
  );
};

const getIdealSleepHours = () => 8 * 7;

let calculateSleepDept = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  let hoursLacking = idealSleepHours - actualSleepHours;
  let hoursOver = actualSleepHours - idealSleepHours;
  let message = "";

  if (actualSleepHours === idealSleepHours) {
    message = "Well done! You have got enough sleep.";
  } else if (actualSleepHours > idealSleepHours) {
    message = `Wow! Great Job you have slept ${hoursOver} more hours than needed.`;
  } else {
    message = `Go to bed you need ${hoursLacking} more hours sleep for the week.`;
  }

  // Display on page
  const resultDiv = document.getElementById("result");
  if (resultDiv) {
    resultDiv.innerHTML = `<p>${message}</p><p>Actual sleep hours: ${actualSleepHours}</p><p>Ideal sleep hours: ${idealSleepHours}</p>`;
  }
};
