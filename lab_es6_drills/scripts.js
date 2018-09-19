let favMovie = (name = 'world', movie = 'The Room') => { console.log(`My name is ${name}, and my favorite movie is ${movie}!`); };

favMovie();

let name = "Harry Potter"
let words = name.split(' ');

let getFirstName = (name) => {
  console.log(`${name[0]} is my name.`);
};

let getGivenName = (name) => { console.log(`${name[0]} is my name.`); };

getFirstName(words);
getGivenName(words);

let myArr = [
  'Cory',
  'Bham',
  'Pineapple'
];

function myFunc(name, location, food) {
  console.log(name);
  console.log(location);
  console.log(food);
};

myFunc(...myArr);

let myName = "Cory Cunningham";

function nameParsed(name) {
  let parse = name.split('');

  for (let i = 0; i < parse.length; i++) {
    console.log(parse[i]);
  };
};

nameParsed(myName);