
// A. Q + A
// Q.How do we assign a value to a variable?
// a. by initializing the variable and giving it an assignment operator (=) 
 let myName = "kenny";
// //Q. How do we change the value of a variable?
//A.
myName = "Kenny Rakentine";
// // Q. How do we assign an existing variable to a new variable?
let newVariable = myName;
// // Q.Remind me, what are declare, assign, and define?
// // A.
// declare = creating a new variable with "let" or "const", assign = giving the variable a value with an assignment operator

// Q. What is pseudocoding and why should you do it?
//  A. wireframing to structure the  outline of your containers without using actual code syntax in order to understand how the code will function

//Q. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// A. 60% solving the problem & 40% typing the code to solve it

// B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
let firstVariable;
// // Assign it the value of the string "Hello World"
firstVariable = "Hello World";
// // Change the value of this variable to some number
firstVariable = 4;
// // Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;
// // Change the value of secondVariableto any string.
secondVariable = "any string";
// // What is the value of firstVariable?
console.log(firstVariable);
// // Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
let yourName = "Kenny";
console.log("Hello, my name is " + yourName);
// ex: Hello, my name is Jean Valjean




// C. Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a != b);
console.log(c >= d);
console.log('Name' === 'Name');

console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a < b + c); // 
console.log(a > a - d); //  
console.log(48 == '48');

// D. The farm

let animal = "bird";
if (animal === "cow" ){
    console.log("mooooo");
} else {
    console.log("Hey! You're not a cow.")
};

// E. Driver's Ed

let age = 22;
if (age > 16){
    console.log("Here are the keys!")
} else {
    console.log("Sorry, you're too young.")
};


// II. Loops

// A. The basics
// 1.
for(let i = 0; i <= 10; i++) {
    console.log(i);
};
// 2.
for( let i = 10; i <= 400; i++ ){
    console.log(i);
};
// 3.
for (let i = 12; i <= 4000; i += 3) {
    console.log(i);
  };

// B. Get even
// 1.
for (let i = 1; i <= 100; i++) {
    console.log(i);
  };

// 2.
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i + "<-- is an even number");
    } else {
      console.log(i);
    }
  };


// C. Give me Five

// 1.
for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0) {
      console.log("I found a " + i + ". High five!");
    } else {
      console.log(i);
    }
  };

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("I found a "  + i + ". Three is a crowd");
  } else if (i % 5 === 0) {
    console.log("I found a " + i + ". High five!");
  } else if (i % 3 === 0) {
    console.log("I found a "  + i + ". Three is a crowd");
  } else {
    console.log(i);
  }
};

for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("I found a " + i + ". High five!" + ". Three is a crowd");
    } else {
      console.log(i);
    }
  };

// D. Savings account

let bank_account = 0;

for (let i = 1; i <= 10; i++) {
  bank_account += i;
};

console.log(bank_account);

let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i * 2;
};

console.log(sum);


// III. Arrays & Control flow

// A. Talk about it:
// 1. Q.What are the things in an array called?
// A. elements
// // 2. Do Arrays guarantee those things will be in order?
//A. No
// // 3. What real-life thing could you model with an array?
//A. a collection of student names in a classroom


// B. Easy Does It
// 1. Create an array that contains three quotes and store it in a variable called quotes
let quotes = ["That's one small step for a man, a giant leap for mankind.", "The love of money is the root of all evil.", "The only thing we have to fear is fear itself."];

// C. Accessing elements
// 1. Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true];
const elementOne = randomThings[0];
randomThings[2] = "World";
console.log(elementOne);
console.log(randomThings);

// D. Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
const thirdElement = ourClass[2];
console.log(thirdElement);
ourClass[4] = "Octocat";
console.log(ourClass);
ourClass.push("Cloud City");
console.log(ourClass);

// E. Mix It Up
const myArray = [5, 10, 500, 20];
myArray.push("Aegon");
myArray.push("newString");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();
Array.prototype.reverse();
console.log(myArray);

// F. Biggie Smalls
// .1
let integer = 5;
if (integer >= 100) {
    console.log("big number");
  } else {
    console.log("little number");
  };


//G. Monkey in the Middle
// .1
let number = 6;
if (number <5){
console.log("little number")
} else {
    console.log("big number")
};


// H. What's in Your Closet?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  const thomsCloset = [
    [
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  
  console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

kristynsCloset.splice(6, 0, "raybans");

kristynsCloset.splice(5, 6, "stained knit hat");
kristynsCloset.push("raybans", "marshmallow peeps");

console.log(kristynsCloset);

const thomShirt = thomsCloset[0][0];
console.log(thomShirt);

const thomPant = thomsCloset[1][3];
console.log(thomPant);

const thomAcc = thomsCloset[2][0];
console.log(thomAcc);

console.log("Thom looks nice in a " + thomShirt + ", " + thomPant + ", and " + thomAcc + "!");

thomsCloset[1].splice(2, 3, "Footie Pajamas");

console.log("Thom looks nice in a " + thomShirt + ", " + thomPant + ", and " + thomAcc + "!");

// IV. Functions

// A
console.log(printGreeting("Slimer"));

// B 
function printCool(name) {
  console.log(name + " is cool!");
}

printCool("kenny");

// C
function calculateCube(num) {
  let volume = num ** 3; 
  console.log(calculateCube(5));
};

// D 
function isVowel(char) {
  let lower = char.toLowerCase(); 
  return lower === 'a' || lower === 'e' || lower === 'i' || lower === 'o' || lower === 'u';
};
console.log(isAVowel('a'));

// E 
function getTwoLengths(string1, string2) {
  let lengths = [string1.length, string2.length];
  return lengths;
}

// F 
function getMultipleLengths(stringArray) {
 let lengths = [];

  for (let i = 0; i < stringArray.length; i++) {
    lengths.push(stringArray[i].length);
  }

  return lengths;
};
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G 
function maxOfThree(num1, num2, num3) {
  let max = num1;  

  if (num2 > max) {
    max = num2; 
  }
  if (num3 > max) {
    max = num3; 
  }
  return max;
};

console.log(maxOfThree(6, 9, 1));

// H 
const printLongestWord = (stringArray) =>{
  let longestWord = "";

  for (let i = 0; i < stringArray.length; i++) {
    let currentWord = stringArray[i];

    if (currentWord.length > longestWord.length || longestWord === "") {
      longestWord = currentWord;
    }
  }

  return longestWord;
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// Objects

// A 
const user = {
  name: "kenny",
  email: "kenny@hotmail.com",
  age: "35",
  purchased: [],
};

console.log(user);

//B
user.email = "kenny2@hotmail.com";
console.log(user);

const birthday = () =>{
  user.age += 1;
  return user
}

const newAge = birthday();
console.log(newAge);


//C 
const addLocation = () =>{
  user.location = "Pittsburgh"
  return user
}


const newLocation = addLocation(newLocation);
console.log(newLocation);

// D
const addingItems = () =>{
  user.purchasedarray = [];
  user.purchasedarray.push("carbohydrates")
  user.purchasedarray.push("peace of mind")
  user.purchasedarray.push("Merino jodhpurs")
  return user
};

console.log(user.purchasedarray[2]);


// E 
user.friend = {
  name: "Grace Hopper",
  age: 85,
  location: "pittsburgh",
  purchased: []
};

console.log(user.friend.name);  
console.log(user.friend.location); 

user.friend.age = 55;

const friendPurchase = ()=>{
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");
return user.friend
}

const newItems = friendPurchase();
console.log(user.friend.purchased[1]);  

// F
for ( i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]);
};

for (i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i]);
};

//G

const updateUser = ()=>{
  user.age += 1;
  user.name = user.name.toUpperCase();
};

const age1 = updateUser()
console.log(user);

const oldAndLoud = (person) =>{
  person.age += 1;
  person.email = "newuser@hotmail.com" 
  person.name = user.name.toUpperCase();
  
  }
  oldAndLoud(user);
  console.log(user);
