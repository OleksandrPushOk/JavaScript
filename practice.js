// const clients = ["Mango", "Poly", "Ajax"];

// // // Указывая в скобках индекс элемента мы получаем его значение
// // console.table(clients); // Mango

// // const lastClients =clients.length - 1;
// // console.log(lastClients)
// clients[1] = 'gdgdgd';
// console.log(clients);

// clients[1] = 'Poly';
// // console.log(clients);

// let a = 30;
// let b = a;
// console.log(a);
// console.log(b);
// a = 87;
// console.log(a);
// console.log(b);

// let a =[1, 2, 3];
// let b = a;
// console.log(a);
// console.log(b);

// a[1] = 90;
// console.log(a);
// console.log(b);

// console.log(a === b);
// console.log([1, 2, 3] === [1, 2, 3]);


// function findLongestWord(string) {
//   // Change code below this line
// let longWord = "";
// for(let word of string) {
// if(word > string.length) {
//   longWord += word
//   break
// }
// }
//   // Change code above this line
// }
// findLongestWord("The quick brown fox jumped over the lazy dog")


// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
// for(let i = 0; i = fruits.length; i += 1) {
  
// }
// console.log(fruits.includes(fruit))
//   return; // Change this line
// }

// checkFruit("plum")




// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArray = [];
// for(let array of array1) {
//   if(array2.includes(array)) {
// newArray.push(array);
//   }
// }
// return newArray;
//  // Change code above this line
// }

// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])


// function getEvenNumbers(start, end) {
//   // Change code below this line
// const array = [];
// for( let i = start; i <= end; i += 1) {
// if(i % 2 === 0) {
//  array.push(i);
// }
// }
// return array;
//  }
//  console.log(getEvenNumbers (2, 5));
// console.log(getEvenNumbers (3, 11));
// console.log(getEvenNumbers (6, 12));
// console.log(getEvenNumbers (8, 8));
// console.log(getEvenNumbers (7, 7));


// function includes(array, value) {
//   // Change code below this line
// const trueValue = [];

// for(let newArray of array) {
//   if(newArray === value) {
// trueValue.push(newArray);
//   }
// }
// return trueValue;
//   // Change code above this line
// }

// includes([1, 2, 3, 4, 5], 3)



// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   book.rating = 9;
//   book.isPublic = false;
//   book.genres.push("драма");
//   book.title = "one year"
  
//   console.log(book.rating); // 9
//   console.log(book.isPublic); // false
//   console.log(book.genres); // ['historical prose', 'adventures', 'драма']
// //   console.log(book.title);


// const propName = "name";
// const user = {
//   age: 25,
//   // Имя этого свойства будет взято из значения переменной propName
//   [propName]: "Oleksandr P.",
// };

// console.log(user.name); // 'Генри Сибола'


// const bookShelf = {
//     books: ["The Last Kingdom"],
//     getBooks() {
//       console.log(this);
//     },
//   };
  
//   // Перед точкой стоит объект bookShelf,
//   // поэтому при вызове метода, this будет хранить ссылку на него.
//   console.log(bookShelf.getBooks()); // {books: ['The Last Kingdom'], getBooks: f}


// const bookShelf = {
//     books: ["The Last Kingdom"],
//     getBooks() {
//       return this.books;
//     },
//     addBook(bookName) {
//       this.books.push(bookName);
//     },
//     removeBook(bookName) {
//       const bookIndex = this.books.indexOf(bookName);
//       this.books.splice(bookIndex, 1);
//     },
//   };
  
//   console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
//   bookShelf.addBook("The Mist");
//   bookShelf.addBook("Dream Guardian");
//   console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
//   bookShelf.removeBook("The Mist");
//   console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// const goods = {
//     apples: 6,
//     grapes: 3,
//     bread: 4,
//     cheese: 7,
//   };

//   const products = Object.values(goods);
  
//   let total = 0;

//   for(let product of products) {
//   total += product  ; 
//   }
//   console.log(total)

//   const entries = Object.entries(goods);
//   console.log(entries)



// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "На берегу спокойных вод",
//       author: "Роберт Шекли",
//       rating: 8.51,
//     },
//     {
//       title: "Сон смешного человека",
//       author: "Федор Достоевский",
//       rating: 7.75,
//     },
//   ];

// //   Узнаем средний рейтинг всей нашей коллекции. Для 
// //   этого сложим все рейтинги, после чего разделим это значение на количество книг в коллекции.





// //   for (const book of books) {
// //     // Объект книги
// //     // console.log(book);
// //     // // Название
// //     // console.log(book.title);
// //     // // Автор
// //     // console.log(book.author);
// //     // // Рейтинг
// //     // console.log(book.rating);
// //   }

// // const bookNames = [];

// // for (const book of books) {
// //   bookNames.push(book.title);
// // }

// // console.log(bookNames);



// // const apartment = {
// //     imgUrl: "https://via.placeholder.com/640x480",
// //     descr: "Spacious apartment in the city center",
// //     rating: 4,
// //     price: 2153,
// //     tags: ["premium", "promoted", "top"],
// //   };
  
// //   apartment.owner = {
// //     name : "Henry",
// //     phone : "982-126-1588",
// //     email : "henry.carter@aptmail.com",
// //   }
// //   console.log(apartment)




// // const book = {
// //   title: "The Last Kingdom",
// //   author: "Bernard Cornwell",
// //   genres: ["historical prose", "adventure"],
// //   isPublic: true,
// //   rating: 8.38,
// // };

// // // const bookTitle = book["title"];
// // // console.log(bookTitle); // 'The Last Kingdom'

// // // const bookGenres = book["genres"];
// // // console.log(bookGenres); // ['historical prose', 'adventurs']

// // const propKey = "genres";
// // const bookAuthor = book[propKey];
// // console.log(bookAuthor); // 'Bernard Cornwell'


// // const book = {
// //   title: "The Last Kingdom",
// //   author: "Bernard Cornwell",
// //   genres: ["historical prose", "adventure"],
// //   rating: 8.38,
// // };
// //  for(const key in book) {
// //   console.log(book[key])
// //  }


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];


// const allauthor = [];
// for(const book of books) {
//   allauthor.push(book.author)
// }

// console.log(allauthor)

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }
// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(totalRating)



// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }


// const x = {
// a: 1,
// b: 2,
// c: 56,
// h: 987,
// }

// const f = {
//   y: 76,
//   c: 90,
//   u: 45,
// }
// console.log(f)
// const t = {
//   ...x,
//   ...f,
// }
// console.log(t)


// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   const keys = Object.keys(object);

//   // Change code above this line
//   return propCount;
// }

// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });


// function countTotalSalary(salaries) {
//   let totalSalary = 0;
 
// const values = Object.values(salaries);
// for(let value of values) {
//   totalSalary += value;
//    console.log(totalSalary)
// }

//   // Change code above this line
//   return totalSalary;
 
// }

// countTotalSalary({ mango: 100, poly: 150, alfred: 80 })




// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow } = highTemperatures;
// const yesterday = yesterday;
// const today = today;
// const tomorrow = tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;


// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//   today: 
//   { 
//     low:highToday, 
//     high:lowToday, 
//     icon:todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg" 
//   },
//   tomorrow: 
//   { 
//     low:highTomorrow,
//     high:lowTomorrow, 
//     tomorrowIcon = icon 
//   }
//   } = forecast;


// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = scores.Math.max(...scores);
// const worstScore = scores.Math.min(...scores);
// console.log(bestScore)


// // ✅ Логически и синтаксически сгруппированные сущности
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Это метод объекта
//   getBooks() {
//     return this.books
//     // console.log("Этот метод будет возвращать все книги - свойство books");
//   },
//   // Это метод объекта
//   addBook(bookName) {
//     // console.log("Этот метод будет добавлять новую книгу в свойство books");
//   },
// };

// // Вызовы методов
// bookShelf.getBooks();
// bookShelf.addBook("Новая книга");

// console.log(bookShelf.getBooks());



// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     for(const book of books) { 
//       if(book === bookName) {
//         const bookDelete = books.splice(bookName)
//         return `Deleting book ${bookName}`
//       }
//     }
//   }
//     updateBook(oldName, newName) {
//     for(const book of books) { 
//       if(book === oldName) {
//         const newBook = books.splice(oldName, 0, newName)
//         return `Updating book ${oldName} to ${newName}`
//       }
//     }
//   }
//   // Change code above this line
// };



// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//    return this.potions.splice(potionName, length)


//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.removePotion("Dragon breath"))





// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//         const { potions } = this;

//         for (const potion of potions) {
//             if (potion.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }
//         potions.push(newPotion);
//     },
//   removePotion(potionName) {
//     const { potions } = this;

//     for(let i = 0; i < potions.length; i += 1) {
//   if(potions[i].name === potionName) {
//      return potions.splice(i, 1)
//      }
//     }
//     // return `Potion ${potionName} is not in inventory!`
//   },
//   updatePotionName(oldName, newName) {
//     const { potions } = this;

//       for(const potion of potions) {
//     if(potion.name === oldName) {
//     return potion.name === newName;
//      }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };
  
// const numbers = [5, 10, 15, 20, 25];

// // // Классический for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// // }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });



// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);



// const fruirs = [5, 10, 15, 20, 25];

// // Классический for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// // }

// // Перебирающий forEach
// fruirs.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });



// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

// orderedItems.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });
//   // Change code above this line
//   return totalPrice;
// }
// calculateTotalPrice([412, 371, 94, 63, 176])

// const students = ["Вика", "Андрей", "Олег", "Юля", "Борис", "Катя"];
// students.sort();
// console.log(students); // [ 'Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля' ]

// function changeEven(numbers, value) {
    // Change code below this line
  //    const newArray = [];
  //   console.log(newArray)

  //   numbers.forEach(element => {
  //     newArray.push(element + value);
  //   });
  //   return newArray;
  // }
  
  //   // for (let i = 0; i < numbers.length; i += 1) {
  //   //   if (numbers[i] % 2 === 0) {
  //   //     numbers[i] = numbers[i] + value;
  //   //   }
    
  //   // Change code above this line
  
  //   changeEven([1, 2, 3, 4, 5], 10)  

    // console.log(_.union([1, 2, 3], [3, 4]))

    // const books = [
    //   {
    //     title: "The Last Kingdom",
    //     author: "Bernard Cornwell",
    //     rating: 8.38,
    //   },
    //   {
    //     title: "Beside Still Waters",
    //     author: "Robert Sheckley",
    //     rating: 8.51,
    //   },
    //   {
    //     title: "The Dream of a Ridiculous Man",
    //     author: "Fyodor Dostoevsky",
    //     rating: 7.75,
    //   },
    //   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    //   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
    // ];
    // // Change code below this line
    
    // const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare (b.author));
    // console.log(sortedByAuthorName)
    // const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare (a.author));
    
    // const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
    
    // const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
   

//    const obj = {
//     a: 1
//    }
//  obj.console.log();
   
// function add(a, b, c) {
//   const result = a + b + c;
//   console.log(`Addition result equals ${result}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);


// function makeMessage (name, price) {
   
//   const message = You picked ${name}, price per item is ${price} credits`;
//  return message
// }

// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120


// console.log(_.union([1, 2, 3, 4], [3, 4, 5, 6]))

// function findLongestWord(string) {
//   let longWord = '';
//   console.log(longWord)
//   const newString = string.split(' ');
//   // console.log(newString)
//   for(let i = 0; i < newString.length; i += 1) {
//     // console.log(newString[i])
//   if(newString[i].length > longWord.length) {
//     longWord = newString[i]
//   }
//   }
//   return longWord
//   }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));


// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for(let i = min; i <= max; i += 1) {
//     numbers.push(i)
//   }
// //  numbers.push(min && max);
//   return numbers;
// }

// // createArrayOfNumbers(1, 3)
// console.log(createArrayOfNumbers(1, 6));

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

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Change code above this line

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
// apartment.area  = 60;
// apartment.rooms  = 3;
// apartment.location: {
//   country: "Jamaica"
//   citi:"Kingston"
// };
 
// Change code below this line
