// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.
// Create pseudocode

// create function which takes strings named fruit1 and fruit2 and returns the output of the string with the most characters. 
// if fruit1 has more character than fruit2 return output with string for fruit1
//if fruit2 has more character than fruit1 return output with string for fruit2
// if fruit3 has more character than fruit4 return output with string for fruit3
//if fruit4 has more character than fruit3 return output with string for fruit4
// 
// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"
const longFruit = (value1,value2) =>  {
    if(value1.length > value2.length){
        return(value1)
    }else {
        return(value2)
    }
}
console.log(longFruit(fruit1,fruit2))

// output: banana

const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"
console.log(longFruit(fruit3,fruit4))
// output: cherry

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// create a function that takes in a number(value) and compares it to the boiling point of 212. 
// if value is above boiling point,output will print value is above boiling point.
// if value is below boiling point,output will print value is below boiling point.
// if value is at boiling point,output should print value is at boiling point.

const tempAnalyzer = (value) => {
    if(value > 212){
        return `${value} is above boiling point`
    }else if(value < 212){
        return `${value} is below boiling point`
    } else {
        return `${value} is at boiling point`
    }
}

const temp1 = 42
// Expected output: "42 is below boiling point"
console.log(tempAnalyzer(temp1))
// Output: 42 is below boiling point

const temp2 = 350
// Expected output: "350 is above boiling point"
console.log(tempAnalyzer(temp2))
// Output:350 is above boiling point

const temp3 = 212
// Expected output: "212 is at boiling point"
console.log(tempAnalyzer(temp3))
// Output: 212 is at boiling point


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: create a variable padresTotalRuns that adds the values of array padres1984WorldSeriesRuns to values of array 2 padres1998WorldSeriesRuns. 
// take the length method and apply it to padresTotalRuns and the expected output should return the length of characters of the combined array.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9
// Output: 9

let padresTotalRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(padresTotalRuns)
console.log(padresTotalRuns.length)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: Create a function that takes the variable provided below and splits the string to make it into an array. Reverse the array and then use the join() method to take the array and make it back into a string.
// 
const currentCohort = "Hotel 2022"
// Expected output: "2202 letoH"
function revCurrentCohort() {
    splitCurrentCohort = currentCohort.split("")
    revArray = splitCurrentCohort.reverse()
    joinArray = revArray.join("")
    return joinArray
}

console.log(revCurrentCohort())
// Output: 2202 letoH
// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code: console log the array given and take the built in method for finding the last index of the provided givenValue.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7
// Output:7
console.log(myNumbers.lastIndexOf(42))
const givenValue2 = 10
// Expected output: 8
// Output:8
console.log(myNumbers.lastIndexOf(10))
// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code: Take the Array provided and use the sort built in method in order for the numbers to sort from smallest to largest. Followed with the reverse built in method to sort them from largest to smallest.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

function largeToSmall() {
    sortArray = sanDiegoSummerTemperatures.sort((a,b) => b - a)
    revArray = sortArray.reverse()
    return revArray
} 
console.log(largeToSmall())
// Output: [82, 80, 79, 77, 76, 73, 72]
const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

function bigToSmall() {
    sortArray = sanDiegoWinterTemperatures.sort((a,b) => a - b)
    revArray = sortArray.reverse()
    return revArray
} 
console.log(bigToSmall())
// Output:[68, 67, 66, 66, 62, 59, 59]