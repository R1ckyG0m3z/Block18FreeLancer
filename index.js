/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Anakin", "Luke", "Boba", "Han", "Yoda"];
const OCCUPATIONS = ["Jedi", "Trooper", "Sith", "Mandalorian", "Imperial"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// ** State **
//Freelancer Function
const freelance = Array.from({ length: NUM_FREELANCERS }, freelancer);
function freelancer() {
  const name = Arr(NAMES);
  const occupation = Arr(OCCUPATIONS);
  const rate =
    PRICE_RANGE.min +
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min));

  return { name, occupation, rate };
}
//Average Rate Function
const averageRate = averageRates();
function averageRates() {
  const total = freelance.reduce(
    (total, freelancer) => total + freelancer.rate,
    0
  );
  return total / freelance.length;
}
//Create random Array
function Arr(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// ** Component **
function row({ name, occupation, rate }) {
  const $row = document.createElement("tr");
  //table row data in innerHTML
  $row.innerHTML = `
    <td>${name}</td>
    <td>${occupation}</td>
    <td>${rate}</td>
      `;
  return $row;
}

// ** Render **
