name = 'Cory Cunningham';
var name;
console.log(name);

setName();

function setName() {
  var name = 'Cory Cunningham';
  console.log(name);

};

console.log('Here first');
let avg = findAvg(2, 2);
console.log('Now second', avg);

function findAvg(a, b) {
  console.log('Finally third');
  var answer = (a + b) / 2;
  return answer;
};

let fruits = [
  'pineapple',
  'watermelon',
  'apple'
];

let favFruit;

function printFruits() {
  let favFruit = fruits[1];
  console.log(fruits[0]);

  function printFavFruit() {
    console.log(favFruit);
  };

  printFavFruit();
  // console.log(leastFav);
  
};

printFruits();
// let leastFav;

sayHello();
function sayHello() {
  console.log('Hello Cory Cunningham!');
  
};

let showAlert = function () {
  alert('Tell me more.');
};

showAlert();