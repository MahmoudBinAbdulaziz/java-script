// Assignment 1
// Note: AI was used only to extract the questions from the PDF and organize them into regions.
// All solutions and answers are my own work.

// ===================== Part 1: Coding Questions =====================

//#region Q1
// Convert the string "123" to a number and add 7.
// Output: 130

let str = "123";
let num = Number(str);
let result = num + 7;
// console.log(result);

//#endregion

//#region Q2
// Check if the given variable is falsy and return "Invalid" if it is.
// Input: 0
// Output: "Invalid"

function isValid(val)
{
    if(!Boolean(val))
        return "Invalid";
}
// console.log(isValid(0));

//#endregion

//#region Q3
// Use for loop to print all numbers between 1 and 10, skipping even numbers using continue.
// Output: 1, 3, 5, 7, 9

for(let i=1;i<=10;i++){
    if(!(i&1)) // bits
        continue;
    // console.log(i);
}

//#endregion

//#region Q4
// Create an array of numbers and return only the even numbers using filter method.
// Input: [1, 2, 3, 4, 5]
// Output: [2, 4]

let arr = [1,2,3,4,5];
let res = arr.filter(a=>!(a&1));
// console.log(res);

//#endregion

//#region Q5
// Use the spread operator to merge two arrays, then return the merged array.
// Input: [1, 2, 3], [4, 5, 6]
// Output: [1, 2, 3, 4, 5, 6]

let firstArr = [1, 2, 3];
let secondArr = [4, 5, 6];

function mergArr(firstArr,secondArr){
    return [...firstArr,...secondArr];
}
let resArr=mergArr(firstArr,secondArr);
// console.log(resArr)

//#endregion

//#region Q6
// Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday).
// Input: 2
// Output: "Monday"

let dayNumber = 2;
let days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
function whichDay(dayNumber)
{
    switch(dayNumber){
        case 1:
            return days[0];
        case 2:
            return days[1];
        case 3:
            return days[2];
        case 4:
            return days[3];
        case 5:
            return days[4];
        case 6:
            return days[5];
        case 7:
            return days[6];
        default:
            return "Invalid day number";
    }
}
// console.log(whichDay(dayNumber));
// الريترن كدا وا كدا هيقفل الفانكشن كاملة

//#endregion

//#region Q7
// Create an array of strings and return their lengths using map method.
// Input: ["a", "ab", "abc"]
// Output: [1, 2, 3]

let words = ["a", "ab", "abc"];
let lengths = words.map(word=>word.length)
// console.log(lengths);

//#endregion

//#region Q8
// Write a function that checks if a number is divisible by 3 and 5.
// Input: 15
// Output: "Divisible by both"

let divNumber = 15;
function checkDivisibility(divNumber){
    if(divNumber%15==0){
        return "Divisible by both";
    }
}
// console.log(checkDivisibility(divNumber));

//#endregion

//#region Q9
// Write a function using arrow syntax to return the square of a number.
// Input: 5
// Output: 25

let squareNumber = 5;
// console.log((num=>num*num)(squareNumber));

//#endregion

//#region Q10
// Write a function that destructures an object to extract values and returns a formatted string.
// Input: const person = {name: 'John', age: 25}
// Output: 'John is 25 years old'

let person = { name: 'John', age: 25 };
function formatPerson(person) {
    let { name, age } = person;
    return `${name} is ${age} years old`;
}
let formattedString = formatPerson(person);
// console.log(formattedString);

//#endregion

//#region Q11
// Write a function that accepts multiple parameters (two or more) and returns their sum.
// Input: 1, 2, 3, 4, 5
// Output: 15

function sum(...numbers) {
    let total = numbers.reduce((acc,curr,index)=>acc+curr,0);
    return total;
}
// console.log(sum(1, 2, 3, 4, 5));

//#endregion

//#region Q12
// Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.
// Output: "Success"

function delay3s() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    });
}
delay3s().then(message => {
    // console.log(message);
});

//#endregion

//#region Q13
// Write a function to find the largest number in an array.
// Input: [1, 3, 7, 2, 4]
// Output: 7

let numbersList = [1, 3, 7, 2, 4];
let largestNumber = Math.max(...numbersList);
// console.log(largestNumber);
let largestNum = -Infinity;
for(let i=0;i<numbersList.length;i++){
    if(numbersList[i]>largestNum)
        largestNum=numbersList[i];
}
// console.log(largestNum);

//#endregion

//#region Q14
// Write a function that takes an object and returns an array containing only its keys.
// Input: {name: "John", age: 30}
// Output: ["name", "age"]

let user = { name: "John", age: 30 };
function getObjectKeys(obj) {
    return Object.keys(obj);
}
let keysArray = getObjectKeys(user);
// console.log(keysArray);
let keysArr = [];
for(let key in user){
    keysArr.push(key);
}
// console.log(keysArr);

//#endregion

//#region Q15
// Write a function that splits a string into an array of words based on spaces.
// Input: "The quick brown fox"
// Output: ["The", "quick", "brown", "fox"]

let sentence = "The quick brown fox";
function splitString(str) {
    return str.split(" ");
}
let wordsArray = splitString(sentence);
// console.log(wordsArray);

//#endregion

// ===================== Part 2: Essay Questions =====================

//#region Essay 1
// What is the difference between forEach and for...of? When would you use each?
/*
forEach  هي ميثود من كلاس ارراي
for of هي لوب من جافا سكريبت
for Each بتاخد فانكشن كبراميتر وبتنفذها علي كل عنصر في الارراي
for of بتاخد ايترابل وبتنفذ كود علي كل عنصر في الايترابل
forEach مش بتقدر تعمل بريك او كونتينيو في النص
for of بتقدر تعمل بريك او كونتينيو في النص
بالتالي لو عايز اعمل اجزيت من لوب بدري او لأي شرط هستخدم for of
اما لو عايز اعمل فانكشن علي كل عنصر في الارراي من غير ما اعمل بريك او كونتينيو هستخدم forEach
*/
//#endregion

//#region Essay 2
// What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.

// hoisting ,معناها ان التعريف بتاع المتغيرات والفانكشنز بتطلع لأول الفايل وقت الكومبايل ودا معناه اقدر بكل بساطة اكتب التعريف بعد الاستدعاء او الاستخدام
// بيحصل مع var و function declarations بس مش بيحصل مع let و const

//مثال على hoisting
console.log(x); // undefined
var x = 5;
console.log(x); // 5

// مثال 2: الفانكشن العادية بتتنقل كاملة، فأقدر أناديها قبل تعريفها
sayHi(); // "Hi"
function sayHi() {
  console.log("Hi");
}

// TDZ هي الفترة الي بيكون فيها المتغير معرف بس مش متهيأ للاستخدام، ودا بيحصل مع let و const

/*

*/
//#endregion

//#region Essay 3
// What are the main differences between == and ===?

// == بنقارن القميم مش النوع يعني لو قيمتين متساويين بس مش نفس النوع هترجع true
// === بنقارن القيم والنوع يعني لو قيمتين متساويين بس مش نفس النوع هترجع false

/*

*/
//#endregion

//#region Essay 4
// Explain how try-catch works and why it is important in async operations.
/*
// try-catch
// بستخدمها لو حاسس إن ممكن يحصل ايرور في جزء معين من الكود،
// فبحط الجزء المشتبه فيه جوه
// try
// بحيث لو عمل أي ايرور أمسكه في
// catch
// وأول ما الايرور يحصل باقي السطور اللي جوه
// try
// مش بتتنفذ والتنفيذ بينط على طول على
// catch

// catch
// هي اللي بنتعامل فيها مع الايرور سواء هنظهر رسالة معينة لليوزر
// أو هنتعامل وفق بروتوكول معين وبتستقبل الايرور نفسه كأوبجكت
// نقدر نعرف منه نوع الغلط ورسالته

// finally
// معناها نفذلي ده مهما حصل سواء الكود رمى اكسبشن أو اشتغل سليم，
// وبنستخدمها في التنضيف زي إننا نقفل الـ
// loading

// الفايدة الأساسية إن البرنامج ما يقعش من غيرها أي ايرور بيوقف باقي الكود
*/
//#endregion

//#region Essay 5
// What's the difference between type conversion and coercion? Provide examples of each.
/*
// type conversion هو ان انا عندي نوع بيانات معين وعايز احوله لنوع تاني فبعمله كاستنج
// مثال
let num = 123;
let str = String(num); // type conversion from number to string
console.log(str); // "123"

// coercion هو ان انا عندي نوع بيانات معين وعايز اعمله عملية مع نوع تاني فالجافا سكريبت بتحاول تحول النوع التاني لنوع الاول عشان العملية تتم
// مثال
let num2 = 123;
let str2 = "456";
let result2 = num2 + str2; // coercion from number to string
console.log(result2); // "123456"
*/
//#endregion
