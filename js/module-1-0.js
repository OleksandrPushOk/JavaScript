// "use strict"

// const productName ="Droid";
// console.log(productName);

// const pricePerItem = 2000;
// console.log(pricePerItem);


// function sayHi() {
//   // Тело функции
//   console.log("Hello, this is my first function!");
// }
// sayHi();

// // Change code below this line
// function add(x,y,z) {
//   console.log(`Результат умножения равен ${x + y + z}`);
//   // Change code above this line
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function add(a, b, c) {
//     return a + b + c;
   
// }
//     add(2, 5, 8);

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));



// function makeMessage (name, price) {
//   // Change code below this line
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   console.log(message)
//   // Change code above this line
//   return message;
// };

 
//  function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   let coast= orderedQuantity  *pricePerDroid + deliveryFee;
//   let message =`You ordered droids worth ${coast} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   // Change code above this line
//   return message;
// }

// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;
//   console.log(passed)
 
//   // Change code above this line
//   return passed;
// }

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = ;

//   // Change code above this line
//   return isMatch;
// }



// function checkAge(age) {
//   age >= 18;
  
//   if (age >= 18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   // Change code above this line
//   return message;
// }

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice <= customerCredits) {
//      message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//    } else {
//      message = `Insufficient funds!`;
//     }
//   // Change code above this line
//   return message;
// }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message ;

//   if (password === null) { 
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { 
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// if (ordered === 0) { 
//      message =  "There are no products in the order!";
//    } else if (ordered > available) { 
//      message = "Your order is too large, there are not enough items in stock!";
//    } else {
//      message = "The order is accepted, our manager will contact you";
//    }
//   // Change code above this line
//   return message;
// }

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line

//   return isInRange;
// }

// №22
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType == "pro" || subType == "vip"; // Change this line

//   return canAccessContent;
// }

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !(number >= start && number <= end); // Change this line


//   return isNotInRange;
// }

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//  if (totalSpent >= 50000) { 
//       message =  discount = 0.1;
//     } else if (totalSpent >=20000 && totalSpent <=50000) { 
//       message = discount = 0.05;
//     } else if (totalSpent >=5000 && totalSpent <=20000) { 
//       message = discount = 0.02;
//     } else if (totalSpent <  5000) { 
//       message = discount = 0;
//     }
//   // Change code above this line
//   return discount;
// }

// function checkStorage(available, ordered) {
// let message;
//   message = ordered > available ? "Not enough goods in stock!"  : "The order is accepted, our manager will contact you";
//    return message;
//  }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//  message = password === ADMIN_PASSWORD ? "Access is allowed"  : "Access denied, wrong password!";
//   // Change code above this line
//   return message;
// }

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//    case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//    case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//    case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }


// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

// switch (password) { 
//     case null: 
//        message = "Canceled by user!";
//        break;

//     case ADMIN_PASSWORD: 
//        message = "Welcome!"; 
//        break;

//    default: 
//        message = "Access denied, wrong password!";
//        break;
//    }

//   return message;
// }



// function getShippingCost(country) {
//   let message; 

//  switch (country) { 
//      case China:
//         message = `Shipping to ${China} will cost ${100} credits`;
//         break;

//      case Chile: 
//          message = `Shipping to ${Chile} will cost ${250} credits`; 
//         break;
     
//       case Australia: 
//          message = `Shipping to ${Australia} will cost ${170} credits`; 
//         break;
     
//       case Jamaica: 
//          message = `Shipping to ${Jamaica} will cost ${120} credits`; 
//         break;

//     default: 
//         message = "Sorry, there is no delivery to your country";
//         break;
//     }
  
//   // Change code above this line
//   return message;
// }


// function getShippingCost(country) {
//   let message; 
//     let price; 

//  switch (country) { 
//      case "China":
//       price = 100;
//         message = `Shipping to ${country} will cost ${price} credits`;
//         break;

//      case "Chile":
//       price = 250;
//          message = `Shipping to ${country} will cost ${price} credits`; 
//         break;
     
//       case "Australia":
//       price = 170;
//          message = `Shipping to ${country} will cost ${price} credits`; 
//         break;
     
//       case "Jamaica":
//       price = 120;
//          message = `Shipping to ${country} will cost ${price} credits`; 
//         break;

//     default: 
//         message = "Sorry, there is no delivery to your country";
//         break;
//     }
  
//   // Change code above this line
//   return message;
// }



// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }


// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Change code above this line



// function getSubstring(string, length) {
//   const substring = string.slice (0, length); // Change this line

//   return substring;
// }

// function formatMessage(message, maxLength) {
//     let result;
//     if (message.length <= maxLength) {
//         result = message;
//     } else {
//         result = message.slice(0, maxLength) + "...";
//     }
//         return result;
//     }

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }

// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// }

// function checkForSpam(message) {
//   let result;
// result = message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale");
//   return result;
// }


                        // Модуль 2 //

// function checkAge(age) {
//   if (age>=18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }




// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line


//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }

//   return "Access denied, wrong password!";
//   // Change code above this line
// }



//№3

// function checkStorage(available, ordered) {

//   if (ordered === 0) {
//     return "Your order is empty!";
    
//   }if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   } 
//     return "The order is accepted, our manager will contact you";

// }




// const fruits = ["apple", "plum", "pear", "orange"]




// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0]
// const secondElement = fruits[1]
// const lastElement = fruits[3]




// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach";
// fruits[3] = "banana";




// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;




// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];




// function getExtremeElements(array) {
//   const firstItem = array[0];
//   const lastItem = array[array.length-1];
//   const newarray = [firstItem, lastItem];
//   return newarray ;  
// }




// function splitMessage(message, delimeter) {
//   let words;
// words = message.split(delimeter); 
//   return words;
// }




// function calculateEngravingPrice(message, pricePerWord) {
// const sms = message.split (' ');
//   const price = sms.length * pricePerWord;
// return price;
// }




// function makeStringFromArray(array, delimeter) {
//   let string;
//  string = array.join(delimeter); 
//   return string;
// }




// function slugify(title) {
// let lowerString = title.toLowerCase()
// let string = lowerString.split(" ")
// let slug = string.join("-");
// return slug;
// }




// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);




// №15

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients); 




// function makeArray(firstArray, secondArray, maxLength) {
//   const takeArray = firstArray.concat(secondArray).slice(0, maxLength);
//   return takeArray
//  }




// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i += 1 ) { // Change this line
//   console.log(i);
// }




// function calculateTotal(number) { 
// let result = 0
// for (let i = 0; i <= number; i += 1 )
// result += i
//   { 
//   return result
//   console.log(i);
// }
// }




// const fruits = ['apple', 'plum', 'pear', 'orange'];
// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i]; 
//   console.log(fruit);
// }




// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1){
//    total += order[i];
//   }
//   return total;
// }




// function findLongestWord(string) {
//   let longestWord = "";
//   const redstring = string.split(" ");
//   for(let i = 0; i < redstring.length; i += 1){
//     if (redstring[i].length > longestWord.length){
//       longestWord = redstring[i];
//     }
//   } 
//   return longestWord; 
// }




// function createArrayOfNumbers(min, max) {
 
//   const numbers = [];
//   for(let i = min; i <= max; i +=1)
//    numbers.push(i) 
//   return numbers;
// }




// function filterArray(numbers, value) {
//   const num = [];
//   for(let i = 0; i <= numbers.length; i += 1){
//     if (numbers[i] > value) {
//     num.push(numbers[i]);
//      }
//   }
//   return num;
// }




// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"]; 
//   return fruits.includes(fruit);
// }
  



// function getCommonElements(array1, array2) {
//   const seeArray = [];
//   for (let i = 0; i < array1.length; i+= 1) {
//     if (array2.includes(array1[i])) {
//     seeArray.push(array1[i]);  
//     }
//   }
//   return seeArray;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
  



// function calculateTotalPrice(order) {
//   let total = 0;
//    for (let value of order) {
//    total += value
//   }
//   return total;
// }




// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (const number of numbers) {  
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }




// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;




// function getEvenNumbers(start, end) {
//   const see = [];
//   for (let i = start; i <= end; i += 1) {
//    if (i % 2 === 0) { 
//      see.push (i)} 
//   } 
//   return see;
//   }
// console.log(getEvenNumbers (2, 5));
// console.log(getEvenNumbers (3, 11));
// console.log(getEvenNumbers (6, 12));
// console.log(getEvenNumbers (8, 8));
// console.log(getEvenNumbers (7, 7));




// const start = 6;
// const end = 27;
// let number;
// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break
//   }
// }




// function findNumber(start, end, divisor) {
//   let number;
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return i;
//     }
//   }
//   return number;
// }




// function includes(array, value) {
//   for (let see of array) {
//     if (see === value)
//       return true;
//   }
//   return false; 
// }














