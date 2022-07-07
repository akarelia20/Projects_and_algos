//  Given an array and an additional value, insert this value at the beginning of the array.
//  You may use .push(), you are able do this without it though!

function pushInFront (arr, int) {
  for (let i = arr.length; i >= 0; i--) {
    arr[i] = arr[i - 1]
  }
  arr[0] = int
  return arr
}

console.log(pushInFront([5, 7, 2, 9], 8))

// Given an array, remove and return the value at the beginning of the array.
// Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

function popFront (arr) {
  let val = arr[0]
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1]
  }
  arr.length = arr.length - 1
  return arr
}

console.log(popFront([0, 5, 10, 15]))

// Given an array, index, and additional value, insert the value into array at given index.
//  You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(),
//  you are able do this without it though

function insertAt (arr, idx, val) {
  arr.length = arr.length + 1
  for (let i = 0; i < arr.length; i++) {
    if (i == idx) {
      arr[i + 1] = arr[i]
      arr[i] = val
    }
  }
  return arr
}

console.log(insertAt([100, 200, 5], 2, 311))

// Given an array and an index into array, remove and return the array value at that index.
//  Prove the value is removed from the array by printing it.
//   Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt (arr, idx) {
  console.log(idx)
  for (let i = 0; i < arr.length; i++) {
    if (i == idx) {
      arr[i] = arr[i + 1]
    }
    if (i > idx) {
      arr[i] = arr[i + 1]
    }
    console.log(arr[i])
  }
  arr.length = arr.length - 1
  return arr
}

console.log(removeAt([8, 20, 55, 44, 98], 3))

// Swap positions of successive pairs of values of given array.
// If length is odd, do not change the final element.

function swapPairs (arr) {
  for (let i = 0; i < arr.length; i += 2) {
    temp = arr[i]
    if (arr[i + 1] != undefined) {
      arr[i] = arr[i + 1]
      arr[i + 1] = temp
    }
  }
  return arr
}

console.log(swapPairs(['Brendan', true, 42]))

// Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together.
// If you already made the Remove At function, you are welcome to use that! If you solved this using nested loops, for an extra challenge,
//  try to do it without any nested loops!

//__________ UNFINISHED_______________________
function reoveDups (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) {
      continue
    } else {
      arr[i - 1] = arr[i]
      console.log(arr)
      i--
      arr.length = arr.length - 1
    }
  }
  return arr
}

console.log(reoveDups([-2, -2, 3.14, 5, 5, 10]))
