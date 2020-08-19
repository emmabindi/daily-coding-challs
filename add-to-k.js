// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

// const array = [10, 15, 3, 7];
// const k = 17;

function addToK(array, k) {
  for (let i = 0; array.length > i; i++) {
    if (
      array.find((el) => {
        return k - array[i] === el;
      })
    )
      return true;
  }
  return false;
}

console.log(addToK([10, 15, 3, 7], 117));

// const bingo = array.some(function(element) {
//   k - array[i] === element
//   console.log(`ar:${array[i]} el:${element}`)
// });
// console.log(bingo)

// My Ruby solution:
// 1. total together all possible combinations
// - use sum, count thru with index+1 ??

// 2. throw them into an array
// 3. run thru the array to check if 17 is present

// def add_to_k(array, k)
//   options = array.combination(2).to_a;
//   # p options

//   result = []

//   options.each do | val |
//     sum = val.sum
//     # p sum
//     result.push(sum)
//   end

//   # p result

//   if result.include?(17)
//     return true
//   end
// end

// puts add_to_k([10, 15, 3, 7], 17)

// # if any combination of the 2 letters summed together equals 17
// # sum the number going through by index
// # return true

// HASH MAPS SOLUTION:

// function hasSumK(arr, k) {
//   hashMap = {};
//   for (let value of arr) {
//     if (hashMap[value]) {
//       return true;
//     } else {
//       hashMap[k - value] = true;
//     }
//   }
//   return false;
// }

// const arr = [10, 15, 3, 7];
// const array = [10, 15, 3, 7];
// const k = 17;

// console.log(hasSumK(arr,k));

// Binary Search: SUPER COOL
// const findPair = (array, k) => {
//   array.sort((a, b) => a - b);
//   let left = 0;
//   let right = array.length - 1;

//   while (left < right) {
//     const sum = array[left] + array[right];
//     console.log(`left: ${array[left]} right: ${array[right]}`)
//     if (sum === k) {
//       return true;
//     } else if (sum < k) {
//       left += 1;
//     } else {
//       right -= 1;
//     }
//   }

//   return false;
// }

// console.log(findPair([10, 15, 3, 7], 17));

// someone else really cool solution, stops when it's found

// const array = [10, 15, 3, 7];
// console.log(findPair(array, k));

function ProblemOne_Solve() {
  const k = 17;
  const values = [10, 15, 3, 8, 2];
  for (i = 0; i < values.length; i++) {
    if (
      values.find((sum) => {
        // console.log(`sum: ${sum}`)
        // console.log("")
        // console.log(` values[i]: ${values[i]}`)
        // console.log(`${k - values[i]}`)
        return k - values[i] === sum;
      })
    )
      return true;
  }
  return false;
}

// console.log(ProblemOne_Solve());
