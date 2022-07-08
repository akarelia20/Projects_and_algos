// Create a function that, given a string, returns all of that string’s contents, but without blanks.

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

function removeBlanks (str) {
  let newstr = ''
  for (let i = 0; i < str.length; i++) {
    console.log(str[i])
    if (str[i] != ' ') {
      newstr += str[i]
    }
  }
  return newstr
}

console.log(removeBlanks(' Pl ayTha tF u nkyM usi c '))

// Create a JavaScript function that given a string, returns the integer
//  made from the string’s digits. You are allowed to use isNaN() and Number().

function getDigits (str) {
  var int = ''
  for (let i in str) {
    if (!isNaN(str[i])) {
      console.log(str[i])
      int += str[i]
    }
  }
  int = Number(int)
  return int
}

console.log(getDigits('abc8c0d1ngd0j0!8'))

// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized).
//  You are allowed to use .split() and .toUpperCase().

function acronym (str) {
  console.log(str.length)
  var final = ''
  var prev
  for (i in str) {
    if (prev == ' ') {
      final += str[i]
    }
    prev = str[i]
  }
  return final.toUpperCase()
}

console.log(acronym("Live from New York, it's Saturday Night!"))

// Create a function that, given a string, returns the number of non-space characters found in the string.

function countNonSpaces (str) {
  var count = 0
  for (i in str) {
    if (str[i] !== ' ') {
      count += 1
    }
  }
  return count
}

console.log(countNonSpaces('Hello world !'))

// Create a function that, given an array of strings and a numerical value,
// returns an array that only contains strings longer than or equal to the given value.

function removeshorterStr (arr, val) {
  var i = 0
  result = []
  for (word in arr) {
    if (arr[word].length >= val) {
      result[i] = arr[word]
      i++
    }
  }
  return result
}

console.log(
  removeshorterStr(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)
)
