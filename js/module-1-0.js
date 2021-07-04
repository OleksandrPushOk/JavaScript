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
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     for(const potion of this.potions) {
//     if (potion ===this.potionName) {
//       return `Potion ${potionName} is already equipped!`;
//     }
//       }
//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     for (const potion of potions) {
//       if (potion.name === potionName) {
//         potions.splice(potions.indexOf(potion), 1);
//         return potion;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {   
// const { potions } = this;
//     for (const potion of potions) {
//       if (potion.name === oldName) {
//         potion.name = newName
//         ;
//         return potion;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };




































































