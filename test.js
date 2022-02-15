// slice-
// splice-
// map-
// for-
// forEach-
// filter-
// reduce-
// sort-
// some
// every

function arr() {
return [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve"
];
}

// Slice
let arrSlice = arr().slice(3, 5);
console.log("arrSlice: ", arrSlice);



// Splice
let arrSplice = arr().splice(4, 1);
console.log("arrSplice: ", arrSplice);

let arrSpliceNew = arr().splice(0, 2, "newOne", "newTwo");
console.log("arrSpliceNew: ", arrSpliceNew, "arr: ", arr);



// Map
let arrMap = arr().map((item) => item.length);
console.log("arrMap: ", arrMap);

let arrMapNew = arr().map((item) => item + "New");
console.log("arrMapNew: ", arrMapNew);


// for
for (let number of arr()) {
console.log(number);
}


// forEach
arr().forEach(console.log);

arr().forEach((item, index, array) => {
console.log(`${item} имеет позицию ${index} в ${array}`);
});

arr().forEach((item) => {
item = "hello";
console.log("item: ", item);
});


// Filter

let users = [
{ id: 1, name: "Вася" },
{ id: 2, name: "Петя" },
{ id: 3, name: "Маша" }
];

let someUsers = users.filter((item) => item.id < 3);
let isSeven = arr().filter((item) => item === "seven");

console.log("someUsers", someUsers);
console.log("isSeven", isSeven);


// Reduce

let numbers = [5, 6, 3, 6, 9, 1, 2, 7, 8];
let sumNumbers = numbers.reduce((sum, current) => sum + current)
console.log("sumNumbers: ",sumNumbers)

let toLine = arr().reduce((item, current) => {
return item + " " + current
})
console.log(toLine)



// sort

let sortedNumbers = numbers.sort((a, b) => a - b)
console.log("sortedNumbers: ",sortedNumbers)



//  some

let isSome = numbers.some(item => 8 )
console.log(isSome)

let isBiggerThen10 = numbers.some(item => item > 10 )
console.log(isBiggerThen10)



// every
let everyNumberIs6 = numbers.every(item => item == 6)
console.log('everyNumberIs6: ', everyNumberIs6)

let everyNumberNot66 = numbers.every(item => item !== 66)
console.log('everyNumberNot66: ', everyNumberNot66)