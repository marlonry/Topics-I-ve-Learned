// Array Properties

const myArray = [2,3,5,6,2,7,5,8];
const myArray1 = ["a", "b", "c", "d", "e", "f", "g"];
const myWordArray = ["random", "hello", "word", "jiraffe", "elephant", "short", "random","cool"]
const myString = "Hello";
const myObject = {
    name: "Marlon",
    age: 23, 
    country: "Colombia"
}
const myArrayOfObjects = [
    {key: 1, value: "Marlon"},
    {key: 2, value: "Robert"},
    {key: 3, value: "Gabriela"}
]

// Array.length ------------------------------------------------------------------------------>>>>>>

// console.log(myArray.length);

// Array.prototype ------------------------------------------------------------------------------>>>>>>

// Prototype Defines all the methods and properties in the array object array.property is an array itself.

// Array Methods

// Array.isArray() ------------------------------------------------------------------------------>>>>>>

// console.log(Array.isArray(myArray));
// console.log(Array.isArray(myString));
// console.log(Array.isArray(myObject));

// Array.from() ------------------------------------------------------------------------------>>>>>>

// Creates a new Array from and array-like or iterable object

// let lis = document.querySelectorAll("li");
// console.log(lis);

// lis = Array.from(lis, li => {
//         return li.textContent = li.textContent + " Marlon";
//     });
// console.log(lis);

// const fromAString = Array.from(myString);

// Array.of() ------------------------------------------------------------------------------>>>>>>

// console.log(Array.of(7, 6, 7, 5, 4, 3));

// Array.prototype.concat() ----------------------------------------------------------------------->>>>>>

// const letters = Array.from(myString);
// const lis = Array.from(document.querySelectorAll("li"));
// const liTextcontent = [];

// lis.forEach((li)=> {
//     return liTextcontent.push(li.textContent.substring(0, 5) + " Marlon");
// });

// const combinedArrays = letters.concat(myArray, liTextcontent);

// console.log(combinedArrays);

// Array.prototype.copyWithin() ------------------------------------------------------------->>>>>>

// console.log(myArray1);
// console.log(myArray1.copyWithin(0, 3, myArray1.length - 1));
// console.log(myArray1.copyWithin(0, 3, 6));

// console.log([].copyWithin.call({length: 5, 3: 1}, 0, 3)); // Not Understood

// Array.prototype.entries() ------------------------------------------------------------->>>>>>

// const iterator = myArray1.entries();
// const letters = [];
// const indexes = [];
// const booleans = [];

// for (let i = 0; i < myArray1.length; i++) {
//     let iteratorObject = iterator.next();
//     let { value, done } = iteratorObject;
//     let [ index, letter ] = value;
//     console.log(value);

//     letters.push(letter);
//     indexes.push(index);
//     booleans.push(done);
// } 

// // .next gives us the next array iterator object and .value is a property of the array iterator object that contains the array key/value pairs specifically;
// const graphicExample = [[1, "a"],[1, "b"],[1, "c"],[1, "d"],[1, "e"]];

// console.log(iterator);
// console.log(letters, indexes, booleans);

// Array.prototype.keys() & Array.prototype.values() ------------------------------------->>>>>>

// const keys = myArray1.keys();
// const values = myArray1.values();

// const arraySparseKeys = Object.entries(myArray1);
// const arrayDenseKeys = [...myArray1.keys()];
// const arrayPairsKeyValue = [...myArray1.entries()];
// const arrayValues = [...myArray1.values()];


// console.log(arrayDenseKeys, arraySparseKeys);
// console.log(arrayPairsKeyValue);
// console.log(arrayValues);


// for (let i = 0; i < myArray.length; i++) {
//     console.log(values.next().value);
//     setTimeout(function(){
//         console.log(keys.next().value);
//     },200);
// }

// Array.prototype.every() --------------------------------------------------->>>>>>

// const myArray3 = [20,34,54,76,54,34,79,80,45,65,67,87,91,32];

// function biggerThan40(currentValue) {
//     return currentValue >= 40;
// }

// console.log(myArray3.every(biggerThan40));

// Array.prototype.fill() --------------------------------------------------->>>>>>

// console.log(myArray.fill(0, -1));

// var arr = Array(3).fill({})

// console.log(arr);

// arr[0].hello = "hi";

// console.log(arr);

// Array.prototype.filter() ----------------------------------------------------->>>>>>

// function condition(item) {
//     return item.length > 6;
// }

// myWordArrayResult = myWordArray.filter(condition);
// Returns true of false, true if item passed the condition and adds those items to a new array;
// combines with indexof you can search elements in the array
// console.log(myWordArrayResult);

// Array.prototype.find() and Array.prototype.findIndex()------------------------------------->>>>>>

// let foundItem = myArray.find((item) => item > 5); // returns the first item that passes the function
// let foundIndex = myArray.findIndex(item => item > 5); // returns index of the first item that passes the function

// console.log(`the Item is ${foundItem}`, `the Index is ${foundIndex}`);

// Array.prototype.forEach() -------------------------------------------------------------->>>>>>

// const lis = document.querySelectorAll("ul li");

// console.log(lis)

// lis.forEach((item) => {
//     item.innerHTML += " Person";
// });

// class Counter {
//     constructor() {
//         this.sum = 0;
//         this.counter = 0;
//     }
//     add(array) {
//         array.forEach(function(element) {
//             this.sum += element;
//             this.counter += 1; 
//             console.log(`counting ${this.counter}`);
//         },this);
//         console.log(`the sum is ${this.sum}`);
//     }
// }

// const myCounter = new Counter();

// myCounter.add(myArray);

// var words = ['one', 'two', 'three', 'four'];

// words.forEach(function(word) {
//   console.log(word);
//   if (word === 'two') {
//     words.shift();
//   }
// });

// Array.prototype.includes() ------------------------------------------------------->>>>>>

// console.log(myWordArray.includes("jiraffe", 4)); // checks if an element is included in the array
// a start index can be provided
// returns true or false

// Array.prototype.indexOf() ----------------------------------------------------------->>>>>>

// console.log(myWordArray.indexOf("jiraffe", 4)); // return the index of the element and -1 if its not present

// Array.prototype.join() ----------------------------------------------------------->>>>>>

// function addNumbers(array) {
//     let sum = 0;
//     array.forEach(element => {
//         sum += element;
//     });
//     return `${array.join("+")} = ${sum}`;
// }

// console.log(addNumbers(myArray));

// Array.prototype.lastIndexOf() ----------------------------------------------------------->>>>>>

// console.log(myWordArray.lastIndexOf('random', -3));
// console.log(myWordArray.lastIndexOf('random'));

// Array.prototype.map() -------------------------------------------------------------------->>>>>>

// const addString = myWordArray.map((item) => {
//     console.log( `I am ${item}`);
// })

// const passString = myArray.map(number => console.log(Math.sqrt(number)));

// const trial = myArray.map(() => "hello");
// const trial1 = myArray.map(() => Math.floor(Math.random() * 10 + 1));
// const trial2 = myArray.map(Math.sqrt);

// console.log(trial);
// console.log(trial1);
// console.log(trial2);

// const refomartedObjects = myArrayOfObjects.map((Obj) => {
//     rObj = {}
//     rObj[Obj.key] = Obj.value;
//     return rObj;
// });

// console.log(refomartedObjects);

// myObject['happy'] = `Hello I am ${myObject.name} and I am happy`;

// console.log(myObject);

// Understanding Objects

// var myObj = new Object(),
//     str = 'myString',
//     rand = Math.random(),
//     obj = new Object();

// myObj.type              = 'Dot syntax';
// myObj['date created']   = 'String with space';
// myObj[str]              = 'String value';
// myObj[rand]             = 'Random Number';
// myObj[obj]              = 'Object';
// myObj['']               = 'Even an empty string';

// console.log(myObj);

// Array.prototype.pop() & Array.prototype.push()--------------------------------------------->>>>>>

// console.log(myWordArray);

// const value = myWordArray.pop();

// const newString = value + " MY BUNS";

// const pushed = myWordArray.push(newString, "Hello");

// console.log(value);
// console.log(newString);
// console.log(pushed);
// console.log(myWordArray);

// var vegetables = ['parsnip', 'potato'];
// var moreVegs = ['celery', 'beetroot'];

// // Merge the second array into the first one
// // Equivalent to vegetables.push('celery', 'beetroot');
// Array.prototype.push.apply(vegetables, moreVegs);

// newArray = [...vegetables, ...moreVegs];

// console.log(newArray, vegetables);

// var obj = {
//     length: 0,

//     addElem: function addElem(elem) {
//         // obj.length is automatically incremented 
//         // every time an element is added.
//         [].push.call(this, elem);
//     }
// };

// // Let's add some empty objects just to illustrate.
// obj.addElem({});
// obj.addElem({});
// console.log(obj);

// Array.prototype.reduce() ---------------------------------------------------------------->>>>>>

// function reducer(accumulator, currentValue, index) {
//     return accumulator + currentValue;
// }

// const result = myArray.reduce(reducer, 0);

// console.log(result);


// // var maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
// var maxCallback2 = ( max, cur ) => Math.max( max, cur );

// // reduce() without initialValue
// // [ { x: 22 }, { x: 42 } ].reduce( maxCallback); // 42
// // console.log([ { x: 22 }            ].reduce( maxCallback )); // { x: 22 }
// // [                     ].reduce( maxCallback ); // TypeError

// // map/reduce; better solution, also works for empty or larger arrays
// console.log([ { x: 22 }, { x: 42 } ].map( el => el.x )
//                         .reduce( maxCallback2, -Infinity ));

//                         console.log(-Infinity);

// var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

// var countedNames = names.reduce(function (allNames, name) { 
//     console.log(allNames);
//   if (name in allNames) {
//     allNames[name]++;
//   }
//   else {
//     allNames[name] = 1;
//   }
//   return allNames;
// }, {});

// console.log(countedNames);
// // countedNames is:
// // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

// var people = [
//     { name: 'Alice', age: 21 },
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 },
//     { name: 'Jane', age: 21}
//   ];
  
//   function groupBy(objectArray, property) {
//     return objectArray.reduce(function (acc, obj) { //acc = empty object // obj = each object
//       var key = obj[property]; // creates a new variable and sets the key to the objects property e.g. 21
//                                 // key = property 21
//       if (!acc[key]) { // checks if there is not a key with that name passed in the arguments which is 21
//         acc[key] = []; // if there is not , it sets the new key of 21 inside that object with a value of                     an empty array
//       }
//       acc[key].push(obj); //pushes current value object into specific array regarding the accumulator key
//                     // if the key is 21 i will push that object there
//       return acc;
//     }, {});
//   }
  
//   var groupedPeople = groupBy(people, 'age');

//   console.log(groupedPeople);

// Array.prototype.reduceRight() ---------------------------------------------------------------->>>>>>

// var a = ['1', '2', '3', '4', '5']; 
// var left  = a.reduce(function(prev, cur)      { return prev + cur; }); 
// var right = a.reduceRight(function(prev, cur) { return prev + cur; }); 

// console.log(left);  // "12345"
// console.log(right); // "54321"

// Array.prototype.reverse() ---------------------------------------------------------------->>>>>>


// console.log(myArray);

// const reversed = myArray.reverse();

// console.log(reversed);

// console.log(myArray);

// Array.prototype.shift() ---------------------------------------------------------------->>>>>>

// console.log(myArray);

// const element = myArray.shift();

// console.log(element);

// console.log(myArray);

// var names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

// while( (i = names.shift()) !== undefined ) {
//     console.log(i);
// }

// console.log(names);

// Array.prototype.slice() ---------------------------------------------------------------->>>>>>


