// Code your solution here
const drivers = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 }
];

function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}


function fuzzyMatch(drivers, searchTerm) {
  return drivers.filter(driver => driver.startsWith(searchTerm));
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}
