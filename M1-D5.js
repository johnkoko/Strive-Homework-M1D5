/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/
const writeHeader = function(title) {
    console.log(`\n\n>----------==[ ${title.toUpperCase()} ]==----------<`)
}


/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
writeHeader("EXERCISE 1")

const area = (l1, l2) => l1 * l2
const Result = area(7, 5)
console.log(Result)

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
writeHeader("EXERCISE 2")

function crazySum (a, b) {
    if (a === b) {
        return (a + b) * 3;
      } else {
        return a + b;
      }
}
console.log(crazySum(2, 2));

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/
writeHeader("EXERCISE 3")
function crazyDiff(c) {
    if (c > 19) {
      return Math.abs(c - 19) * 3;
    } else {
      return Math.abs(c - 19);
    }
  }
  console.log(crazyDiff(3))
/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/
writeHeader("EXERCISE 4")
function boundary(n) {
    if ((n > 20 && n <= 100) || n === 400) {
      return true;
    } else {
      return false;
    }
  }
  console.log(boundary(101));
/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
writeHeader("EXERCISE 5")
function strivify(str) {
    if (str.startsWith("Strive")) {
      return str;
    } else {
      return "Strive " + str;
    }
  }
  console.log(strivify("Strivers"));
/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/
writeHeader("EXERCISE 6")
function check3and7(d) {
    if (d >= 0 && (d % 3 === 0 || d % 7 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  console.log(check3and7(7));
/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
writeHeader("EXERCISE 7")
function reverseString(str) {
    return str.split("").reverse("").join("");
}
    console.log(reverseString("Strive"));
/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/
writeHeader("EXERCISE 8")
function upperFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  console.log(upperFirst("superman"));

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/
writeHeader("EXERCISE 9")
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
writeHeader("EXERCISE 10")
/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/