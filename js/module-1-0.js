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



