// function Go(num) {
//   let newString = "";
//   for (let i = 0; i < num; i++) {
//     newString += "-";
//   }
//   return newString;
// }

// console.log(Go(4));

// // function Go(num) {
// //   var str = '';
// //    for(var i = 0; i < num; i++){
// //    str += '-';
// //    }
// //    return str;
// //  }

// function removeNull(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === null) {
//       arr.filter(arr[i]);
//     }
//   }
// }

// console.log(removeNull(["a", null, "b", null]));

// function retrieveMajor(semver) {
//   // let arr = semver.split(".");
//   // arr = arr.map(Number);

//   // return arr[0];
//   return semver.split(".")[0];
// }

// function retrieveMinor(semver) {
//   let arr = semver.split(".");
//   arr = arr.map(Number);
//   return arr[1];
// }

// function retrievePatch(semver) {
//   let arr = semver.split(".");
//   arr = arr.map(Number);
//   return arr.pop();
// }
// console.log(retrieveMajor("16.12.97"));
// console.log(retrieveMinor("16.12.97"));
// console.log(retrievePatch("16.12.97"));

// function findLargestNum(arr) {
//   let largest = arr.sort((b, a) => {
//     return a - b;
//   });
//   return largest[0];
// }
// console.log(findLargestNum([4, 5, 1, 3]));

// function noOdds(arr) {
//   return arr.filter((num) => {
//     return num % 2 === 0;
//   });
// }

// console.log(noOdds([1, 2, 3, 4, 5, 6, 7, 8]));

// function isSubset(arr1, arr2) {
//   for (i = 0; i < arr2.length; i++) {
//     return arr2[i].includes(arr1);
//   }
//   // return arr2.includes(arr1);
// }

// function isSubset(arr1, arr2) {
//   return arr2.filter((num) => {
//     return arr1.includes(num);
//   });
// }

// console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2]));

// \W*(bomb)\W*

// function bomb(str) {
//   return /bomb/i.test(str) ? "Duck!!!" : "There is no bomb, relax.";
//   // const regex = RegExp("W*(bomb)W*", "i");

//   // if (regex.test(str)) {
//   //   return "Duck!!!";
//   // } else {
//   //   return "There is no bomb, relax.";
//   // }
// }
// console.log(bomb("Hey, did you find the BoMb?"));

// Create a simple promise and pass the resolve function a string value of your choice. Use the setTimeout function as your asynchronous operation. Your setTimeout() function should not exceed 1000ms. Store the promise inside a variable named promise.

// function filterArray(arr) {
//   return arr.filter((el) => {
//     typeof el === "Number";
//   });
// }

// console.log(filterArray([1, 2, "a", "b"]));
// function filter_list(l) {
//   return l.filter(x => typeof x === "number");
// }
// console.log(filter_list([1,2,'a','b']))

// function charCount(myChar, str) {
//   let arr = str.split("");
//   // console.log(arr);
//   let instances = [];
//   instances = arr.filter((char) => {
//     return char === myChar;
//   });
//   return instances.length;
// }
// console.log(charCount("a", "edabit"));

// function getAbsSum(arr) {
//   // let result = 0;
//   // for (let i = 0; i < arr.length; i++) {
//   //   result += Math.abs(arr[i]);
//   // }
//   // return result;
//   return arr.reduce((acc, curr) => acc + Math.abs(curr), 0);
// }
// console.log(getAbsSum([2, -1, 4, 8, 10]));

// function countVowels(str) {
//   const regex = /[aeiou]/gi;
//   const found = str.match(regex);
//   return found.length;
// }
// console.log(countVowels("Celebration"));

// return str.split("")

// for (let i = 0; i < str.length; i++) {
//   return str[i] + str[i]
// }

// for (let i = 0; i < str.length; i++) {
//   return str.charAt[i].repeat(1)
// }

function doubleChar(str) {
  var split = str.split("");
  var repeat = split.map((split) => {
    return (split += split);
  });
  var n = repeat.join("");
  return n;
}
console.log(doubleChar("String"));
