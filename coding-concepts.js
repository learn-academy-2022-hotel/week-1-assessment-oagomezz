// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:["tangerine", "magenta", "lilac", "daffodil", "indigo"]
// b) Verify and explain: My answer is incorrect because although the code colors.push adds the value to the end of the array, when you take the console log of the code it will output the final number of values in the array. 

// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: My answer was correct because the length built in method will count the number of characters within the string and output the total value.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: "o"
// b) Verify and explain: The brackets in the greeting variable indicate that the output is going to be the value of the requested index number. h(0) e(1) l(2) l(3) o(4) and so on therefore the correct answer is o.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: The index function was appplied to the languages array and requested the output of the value held in the 1 index. By doing so, the console log is requesting the value of Ruby to be displayed on the console since it holds that position. 

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:SATURDAY, SUNDAY
// b) Verify and explain: My answer was incorrect because the toUpperCase method can only be applied to a string. A possible solution for the correct output to be displayed with ["SATURDAY, SUNDAY"] would require a function to be created to split the array into a string and apply the toUpperCase method then and re-join it to convert it back into an array. 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: The correct answer is number because by requesting the length of the datatype it would give you the number of values within the array which is 4. Which would then output the datatype of the value of 4 which would be number. 
