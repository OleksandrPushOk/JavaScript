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



// Module-3//


// const apartment = {
// imgUrl: "https://via.placeholder.com/640x480",
// descr: "Spacious apartment in the city center",
// rating: 4,
// price: 2153,
// tags: ["premium", "promoted", "top"]
// };




// const apartment = {
//   owner: {
// name: "Henry",
// phone: "982-126-1588",
// email: "henry.carter@aptmail.com" 
// },
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };




// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;




// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];




// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"]




// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");




// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country:"Jamaica",
//   city:"Kingston",
// }




// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
// name,
// price,
// image,
// tags 
// };




// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
// [emailInputName]:"henry.carter@aptmail.com",
// [passwordInputName]:"jqueryismyjam"
// };




// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = ['descr', 'rating', 'price'];
// const values = ['Spacious apartment in the city center', 4, 2153];
// for (const keys in apartment) {
// }
// for (const values in apartment) {
// }




// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//  if (apartment.hasOwnProperty(key)) {

//   keys.push(key);
//   values.push(apartment[key]);
//  }
// }




// function countProps(object) {
//   let propCount = 0;

// for (const key in object) {
//   if (object.hasOwnProperty(key)){
//     propCount += 1;
//   }
// }
//   return propCount;
// }




// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//  values.push(apartment[key]);
// }




// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
  
//     const keys = Object.keys(object);
//     for(let key of keys) {
  
//     }
  
//     // for (const key in object) {
//     //   if (object.hasOwnProperty(key)) {
//     //     propCount += 1;
//     //   }
//     // }
  
//     return propCount;
//     // Change code above this line
//   }


// function countProps(object) {
//   let propCount = 0;
//   let keys = Object.keys(object);
//   for (let key of keys) {
//     propCount += 1;
//   }
//   return propCount;
// }




// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);



// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const values = Object.values(salaries)
// for (const value of values) {
//   totalSalary += value;
// }
//   return totalSalary;
// }




// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"];
// const rgbColors = [];
// for (const color of colors) {
//   if (color.name === 'hex') {
//     hexColors.push(color.hex)
//   } else (color.name ==='rgb')
//   rgbColors.push(color.rgb)
//   }




// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
// for(const product of products){
//   if (product["name"] === productName){
//   return product["price"];
//   }
//   }
//  return null;
// }




// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   const value = [];
//   for (const product of products) {
//     value.push(product[propName]);
//     if (!product[propName]) {
//       return [];
//     }
//   }
//   return value;
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));




// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//  let = totalPrice = 0;
//   for (const product of products) {
//     if (product['name'] === productName) {
//       totalPrice = product['price'] * product['quantity'];
//     }
//   } 
//     return  totalPrice; 
// }




// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const { yesterday, today, tomorrow } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;




// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;





// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;




// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }




// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//   today: {low: lowToday, high: highToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg'},
//    tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}
// } = forecast;




// function calculateMeanTemperature(forecast) {

//   const {
//   today: {low: todayLow, high: todayHigh},
//    tomorrow: {low: tomorrowLow, high: tomorrowHigh}
// } = forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }




// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);




// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);




// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// const finalSettings = {...defaultSettings, ...overrideSettings};




// function makeTask(data) {
//   const final = {
//   category:category = 'General',
//   priority:priority = 'Normal',
//   completed:completed = false,
//   ...data
//   }
//   return final;
// }




// function add(...args) {
//  let total = 0;
//   for (let arg of args) {
//     total += arg;
//   }
//   return total;
// }
// console.log(add(15, 27))
// console.log(add(12, 4, 11, 48))
// console.log(add(32, 6, 13, 19, 8))
// console.log(add(74, 11, 62, 46, 12, 36))
// console.log(add(74, 11, 62, 46, 12, 36))




// function addOverNum(firstNumber, ...args) {
//     let total = 0;
//     for (const arg of args) {
//         if (arg > firstNumber) {
//             total += arg;
//         }
//     }
//     return total;
// }




// function findMatches(args, ...otherArgs) {
//   const matches = []; 
//      for (i = 0; i < otherArgs.length; i += 1) {
//          if (args.includes(otherArgs[i])) {
//            matches.push(otherArgs[i]);
//          }
//        }
//   return matches;
// }




// const bookShelf = {

//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//   return `Deleting book ${bookName}`
//   },
//   updateBook(oldName, newName) {
//   return`Updating book ${oldName} to ${newName}`
//   }

// };




// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//  let oldNameIndex = this.books.indexOf(oldName);
//     if (oldNameIndex >= 0) {
//       this.books.splice(oldNameIndex, 1, newName)
//     }
//     console.log(this.books);
//     return this.books
//   }
// }




// const atTheOldToad = {
// potions: []
// }




// const atTheOldToad = {
// potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   getPotions() {
//   return this.potions
//   }
// }




// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//   this.potions.push(potionName);
//   }
// }




// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//   this.potions.splice(this.potions.indexOf(potionName), 1); 
//   }
// }




// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {      this.potions.splice(this.potions.indexOf(oldName),1,newName);
//   }
// }




// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//       for (const potion of this.potions) {
//         if (potion.name === newPotion.name) {
//           return `Error! Potion ${newPotion.name} is already in your inventory!`;
//         }
//       }
//       this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//       for (const potion of this.potions) {
//         if (potion.name === potionName) {
//           const potionIndex = this.potions.indexOf(potion);
//           if (potionIndex === -1) {
//             return `Potion ${potionName} is not in inventory!`;
//           }
//           this.potions.splice(potionIndex, 1);
//         }
//       }
//     },
//     updatePotionName(oldName, newName) {
//       for (const potion of this.potions) {
//         if (potion.name === oldName) {
//           potion.name = newName;
//         }
//       }
//     },
//     // Change code above this line
//   }; 


                                    // 4 //




// function makePizza() {
//   return 'Ваша пицца готовится, ожидайте.';
// }
// const result = makePizza('Ваша пицца готовится, ожидайте.');
// const pointer = makePizza;




// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }
// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }




// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }
// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// makePizza('Ультрасыр', function eatPizza(pizzaName){
// console.log(`Едим пиццу ${pizzaName}`)
// });




// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, makePizza, onOrderError) {
//   for (const pizza of this.pizzas){
//   if (pizza === pizzaName){
//   return makePizza(pizzaName)
//   }
//   }
//     return onOrderError (`В ассортименте нет пиццы с названием ${pizzaName}.`);
//   }
// };

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);





// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   // Пиши код ниже этой строки
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
//   // Пиши код выше этой строки
// };




// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Пиши код ниже этой строки
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Пиши код выше этой строки
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']




// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
// return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];
// for (let i = 0; i < orders.length; i+=1) {
//   messages.push(composeMessage.call(orders[i], i+1));
// }





// const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];
// for (let i = 0; i < orders.length; i++) {
//   const msg = composeMessage.apply(orders[i], [i + 1]);
//   messages.push(msg);
// }




// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');




// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']





                              // Module_5 //




// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;



// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// // Пиши код выше этой строки




// function Car(brand,model,price) {
//    this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// const mango = new Car('Audi', 'Q3', 36000);




// function Car({brand, model, price}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// const mango = new Car({brand: 'Audi', model: 'Q3', price: 36000});




// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// Car.prototype.getPrice = function () {
//   return this.price;
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = (newPrice);
// };




// function Storage(items) {
// this.items = items;
// };
// Storage.prototype.getItems = function(items){
// return this.items;
// };
// Storage.prototype.addItem = function(newItem){
// this.items.push(newItem);
// };
// Storage.prototype.removeItem = function(item){
// this.items.splice(this.items.indexOf(item), 1);
// };

// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]







//  function StringBuilder(baseValue) {
//  this.value = baseValue;
//  };
//  StringBuilder.prototype.getValue = function(){
//  return this.value};
//  StringBuilder.prototype.padEnd = function(str){
//  this.value = this.value + str};
//  StringBuilder.prototype.padStart = function(str){
//  this.value = str + this.value};
//  StringBuilder.prototype.padBoth = function(str){
//  this.value = str + this.value + str};

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='




// class Car {
// }
// const mango = new Car();





// class Car {
// brand;
// model;
// price;

//   constructor({ brand, model, price  }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }




// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }





// class Car {
// #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//   return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }




// class Storage {
// #items;
//   constructor(items) {
//   this.#items = items;
//   }
//   getItems() {
//   return this.#items;
//   }
//   addItem(newItem) {
//   this.#items.push(newItem); 
//   }
//   removeItem(item) {
//   const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
//   }  
// }


// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]





// class StringBuilder {
// #value;
//   constructor(baseValue) {
//   this.#value = baseValue;;
//   }
//   getValue () {
//   return this.#value;;
//   }
//   padEnd(str) {
//   this.#value += str;; 
//   }
//   padStart(str) {
//   this.#value = str + this.#value;
//   }  
//   padBoth(str) {
//   this.padStart(str);
//   this.padEnd(str);;
//   } 
// }

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='




// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }




// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if(Car.MAX_PRICE < newPrice){
//       console.log('Увага! Ціна перевищує допустиму.')
//       return;
//     }
//     this.#price = newPrice;
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000





// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//   static checkPrice(price) {
//     if(price > Car.#MAX_PRICE){
//     return 'Внимание! Цена превышает допустимую.';
//     }
//     return 'Всё хорошо, цена в порядке.'; 
//   }

//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.




// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки
// class Admin extends User {
//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };
// }




// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Пиши код ниже этой строки
// accessLevel;
//     constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser




// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   accessLevel;
//   blacklistedEmails = [];

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   blacklist(email){
//   this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email){
//   if(this.blacklistedEmails.includes(email)){
//   return true;
//   }
//     return false;
//   }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 






                                // Module-6 //

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => (totalPrice += item));
//   return totalPrice;
// }




// function filterArray(numbers, value) {
//     const filteredNumbers = [];
 
//       numbers.forEach((numbers) => { 
//        if (numbers > value ) {
//        filteredNumbers.push(numbers);
//        }
//        })
//     return filteredNumbers;
//   }





// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
         
//      firstArray.forEach(number => { 
//       if (secondArray.includes(number)) {
//       commonElements.push(number)
//       }
//   }) 
//     return commonElements;
//     // Пиши код выше этой строки
// }





//   const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// }





// const calculateTotalPrice = (quantity, pricePerItem) => 
//   quantity * pricePerItem;






// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((orderedItems) => {
//     totalPrice += orderedItems;
//   });

//   return totalPrice;
// }




              // #7
// // Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach(number => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }




// // Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach(element => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return commonElements;
//   }




// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//     const newArray = [];
//     numbers.forEach(number => {
//         if (number % 2 === 0) {
//             number += value;
//         }
//         newArray.push(number);
//     });
//     return newArray;
//     // Пиши код выше этой строки
// }




// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// const planetsLengths = planets.map(planet => {
//     return planet.length 
// });




// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
  
//   const titles = books. map((books) => {
//   return books.title
//   });




// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки
  
//   const genres = books.flatMap((books) => {
//   return books. genres
//   });





// // Пиши код ниже этой строки
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUserNames = users => users.map(user => user.name);
    
//   // Пиши код выше этой строки





// // Пиши код ниже этой строки
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUserEmails = users => users.map(user => user.email);

//   // Пиши код выше этой строки




// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter((numbers) => {
// return numbers % 2 == 0
// });
// const oddNumbers = numbers.filter((numbers) => {
// return numbers % 2 != 0
// });





// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
//   const allGenres = books.flatMap((books) => { return books.genres });
//   const uniqueGenres = allGenres.filter((genre, index, array) => { return array.indexOf(genre) === index});





// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((books) => { return books.rating >= MIN_RATING });
// const booksByAuthor = books.filter((books) => { return books.author === AUTHOR });





// #18

// // Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => {
// return users.filter(user => user.eyeColor === color)

// };
// // Пиши код выше этой строки

// #19

// // Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => {
//  return users.filter(user => user.age >= minAge && user.age <= maxAge)

// };
// // Пиши код выше этой строки

// #20
// // Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => {
//    return users.filter(user => user.friends.includes(friendName))

// };
// // Пиши код выше этой строки

// #21
// // Пиши код ниже этой строки
// const getFriends = (users) => {
//   return (users.flatMap(user => user.friends)).filter((friend, index, array)=> array.indexOf(friend) === index);
// };
// // Пиши код выше этой строки


// #22

// // Пиши код ниже этой строки
// const getActiveUsers = (users) => {
//   return users.filter(user => user.isActive === true) 
// };
// // Пиши код выше этой строки

// #23
// // Пиши код ниже этой строки
// const getInactiveUsers = (users) => {
//    return users.filter(user => user.isActive === false) 
// };
// // Пиши код выше этой строки

// #24

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);


// #25

// // Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => {
//  return users.find((user) =>user.email === email  )
// };
// // Пиши код выше этой строки

// #26

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((value) => value %2===0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value %2!==0);

// const eachElementInSecondIsEven = secondArray.every((value) => value %2===0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value %2!==0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value %2===0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value %2!==0);

// #27

// // Пиши код ниже этой строки
// const isEveryUserActive = (users) => {
//   return users.every((user) => user.isActive) 
// };
// // Пиши код выше этой строки

// #28

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some((value) => value %2===0);
// const anyElementInFirstIsOdd = firstArray.some((value) => value %2!==0);

// const anyElementInSecondIsEven = secondArray.some((value) => value %2===0);
// const anyElementInSecondIsOdd = secondArray.some((value) => value %2!==0);

// const anyElementInThirdIsEven = thirdArray.some((value) => value %2===0);
// const anyElementInThirdIsOdd = thirdArray.some((value) => value %2!==0);

// #29

// // Пиши код ниже этой строки
// const isAnyUserActive = users => {
//   return users.some((user) => user.isActive) 
// };
// // Пиши код выше этой строки

// #30

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((acc, value)=>{
//                                       return acc+value});

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;

// #31


// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((totaltime, player) => {
//   return totaltime + player.playtime / player.gamesPlayed;
// }, 0);

// #32


// // Пиши код ниже этой строки
// const calculateTotalBalance = users => {
//   return users.reduce((total, user) => 
//    total + user.balance, 0)
// };
// // Пиши код выше этой строки

// #33

// // Пиши код ниже этой строки
// const getTotalFriendCount = users => {
//     return users.reduce((total, user) => 
//    total + user.friends.length, 0)
// };
// // Пиши код выше этой строки

// #34

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// #35

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// #36

// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки
  
//   const authorsInAlphabetOrder = [...authors].sort((a,b)=> a.localeCompare(b));
  
//   const authorsInReversedOrder = [...authors].sort((a,b)=> b.localeCompare(a));

// #37

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((a,b)=> a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a,b)=> b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((highScore, lowScore) => highScore.rating - lowScore.rating);

// const sortedByDescentingRating = [...books].sort((highScore, lowScore) => lowScore.rating - highScore.rating);


// #38

// // Пиши код ниже этой строки
// const sortByAscendingBalance = users => {
//   return [...users].sort((highScore, lowScore) => highScore.balance - lowScore.balance);

// };
// // Пиши код выше этой строки

// #39

// // Пиши код ниже этой строки
// const sortByDescendingFriendCount = users => {
//  return  [...users].sort((highScore, lowScore) => lowScore.friends.length - highScore.friends.length);
// };
// // Пиши код выше этой строки

// #40

// // Пиши код ниже этой строки
// const sortByName = users => {
//   return [...users].sort((a,b)=> a.name.localeCompare(b.name));
// };
// // Пиши код выше этой строки

// #41

// ===========================
// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map((student) => student.name)
// ==================================
// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map((student) => student.name);
// ==================================
// const uniqueSortedCourses = students
//   .flatMap((student) => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));
// ===================================

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = [...books]
// .filter((book) =>book.rating >= MIN_BOOK_RATING)
// .map((book) => book.author)
// .sort((a, b) => a.localeCompare(b))

// #42

// // Пиши код ниже этой строки
// const getNamesSortedByFriendCount = users => {
//   return [...users]
//     .sort((a,b) => a.friends.length - b.friends.length)
//   .map(user => user.name);
// };
// // Пиши код выше этой строки

// #43

// // Пиши код ниже этой строки
// const getSortedFriends = users => {
//   return [...users] 
//   .flatMap((user) => user.friends)
//   .filter((friend, index, array) => array.indexOf(friend) === index)
//   .sort((a, b) => a.localeCompare(b));
// };
// // Пиши код выше этой строки

// #44

// // Пиши код ниже этой строки
// const getTotalBalanceByGender = (users, gender) => {
//    return [...users]
//    .filter((user) =>user.gender === gender)
//    .reduce((total, user) => 
//    total + user.balance, 0)
// };
// // Пиши код выше этой строки





























































































