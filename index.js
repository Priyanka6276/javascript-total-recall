//============================NOTE===================================
//    I indented all the answers. Hopefully it makes it easier to read.


/*
====================I.VARIABLES AND DATATYPES======================================

A. Q + A

1. How do we assign a value to a variable?
    --> let x = 5

2. How do we change the value of a variable?

    --> let x = 10
        x = 20

3. How do we assign an existing variable to a new variable?

    --> let x = 10
    let y = x

4. Remind me, what are declare, assign, and define?

    --> Declare is to state a variable with let, const, or var. It means it has come into existence.  
    --> Assign is to give the variable a value with a equal sign.
    --> Define is what the variable is with the value. 

5. What is pseudocoding and why should you do it?

    --> It is an informal way of wiritng code to plan the actual code and allows other people to understand your code. 

6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

    --> 50%

*/



// B. Strings


// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable

// Assign it the value of the string "Hello World"

// Change the value of this variable to some number

// Store the value of firstVariablein a new variable called secondVariable

// Change the value of secondVariableto any string.



    // let firstVariable = 'Hello World'

    // firstVariable = 20

    // let secondVariable = firstVariable

    // secondVariable = 'Dogs are cute'

    // console.log(firstVariable)



// What is the value of firstVariable?
    // --> the value of firstVariable is 20

// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.


    // let yourName = 'Priyanka'
    // console.log('Hello, my name is ' + yourName)


// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console

    // const a = 4;
    // const b = 53;
    // const c = 57;
    // const d = 16;
    // const e = 'Kevin';

    // console.log(a !== b);
    // console.log(c !== d);
    // console.log('Name'=== 'Name');
    // // FOR THE NEXT TWO, USE ONLY && OR ||
    // console.log(true || false);
    // console.log(false && false && false && false && false || true);
    // console.log(false === false)
    // console.log(e === 'Kevin');
    // console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
    // console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
    // console.log(48 !== '48');



// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if  it is equal to cow
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
// Commit

    // let animal = 'horse'

    // if (animal === 'cow') {
    //     console.log ('moooooo')
    // } else {
    //     console.log("Hey! You're not a cow.")
    // }



// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

    // let age = 14

    // if (age >= 16) {
    //     console.log("Here are the keys!")
    // } else {
    //     console.log("Sorry you're too young")
    // }

// ============================II. LOOPS==================================

// Remember: USE let when you initialize your for loops!

// This is GOOD: for(let i = 0; i < 100; i++)

// This is NO GOOD: for(i = 0; i < 100; i++)

// A. The basics

// Write a loop that will print out all the numbers from 0 to 10, inclusive


    // for (let i = 0; i<= 10; i++ ) {
    //     console.log(i)
    // }

// Write a loop that will print out all the numbers from 10 up to and including 400

    // for (let j = 10; j <= 400; j++){ 
    //     console.log(j)
    // }

// Write a loop that will print out every third number starting with 12 and going no higher than 4000

    // for (let k = 12; k < 4000; k += 3) {
    //     console.log(k)
    // }

// B. Get even

// Print out the numbers that are within the range of 1 - 100

    // for (let i = 1; i <= 10; i++) {
    //     console.log(i)
    // }

// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

    // for (let i = 1; i <= 10; i++) {
    //     if (i % 2 === 0) {
    //         console.log(i + " <--- is an even number")
    //     } else {
    //         console.log (i)
    //     }
    // }

// C. Give me Five

// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five

    // for (let i = 0; i <= 10; i++) {
    //     if (i % 5 ===0 && i !== 0) {
    //         console.log (i + " I found a number. High five!")
    //     }
    // }

// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three

    // for (let i = 0; i <= 10; i++) {
    //     if (i % 5 ===0 && i !== 0) {
    //         console.log (i + " I found a number. High five!")
    //     } else if (i % 3 === 0 && i !== 0) {
    //         console.log(i + ' I found a number. Three is a crowd')
    //     }
    // }

//For numbers divisible by both three and five, be sure your code prints both messages

    // for (let i = 0; i <= 30; i++) {
    //     if (i % 3 === 0 && i % 5 === 0 && i !== 0) {
    //         console.log(i + " High five! Three is a crowd")
    //     } else if (i % 5 ===0 && i !== 0) {
    //         console.log (i + " I found a number. High five!")
    //     }  else if (i % 3 === 0 && i !== 0) {
    //         console.log(i + ' I found a number. Three is a crowd')
    //     }
    // }


// D. Savings account

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.

    // let bank_account = 0

    // for (let num = 0 ; num <= 20; num++) {
    //     bank_account += num
    // }
    // console.log (bank_account)

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

    // let bank_account2 = 0

    // for (let num = 0 ; num <= 100; num++) {
    //     bank_account2 += 2*num
    // }
    // console.log (bank_account2)



// ======================III. ARRAYS & CONTROL FLOW ===========================

// A. Talk about it:

// What are the things in an array called?

    // --> Array elements

// Do Arrays guarantee those things will be in order?

    // --> yes

// What real-life thing could you model with an array?

    //  --> Game scores


// B. Easy Does It

// Create an array that contains three quotes and store it in a variable called quotes



    // let quotes = ['To be or not to be', 'Live long and prosper', 'It is a truth universally acknowledged']



// // C. Accessing elements

// // Given the following array 
// // How do you access the 1st element in the array?

    // const randomThings = [1, 10, "Hello", true]


    // console.log(randomThings[2])

// // Change the value of "Hello" to "World"

    // randomThings[2] = 'World'

    // console.log(randomThings[2])

// // Check the value of the array to make sure it updated the array. How? Why, yes! console.log()

    // console.log(randomThings)



// // D. Change values

// // Given the following array 
// // What would you write to access the 3rd element of the array?

    // const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]


    // console.log(ourClass[2])


// // Change the value of "Github" to "Octocat"

    // ourClass[4] = 'Octocat'
    // console.log(ourClass)

// // Add a new element, "Cloud City" to the array

    // ourClass.push('Cloud City')
    // console.log(ourClass)




// // E. Mix It Up


// // Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// // Given the following array:

    // const myArray = [5, 10, 500, 20]

// // Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.

    // myArray.push('Aegon', 'Targaryen' )
    // console.log(myArray)

// // Remove the 5from the beginning of the array.

    // myArray.shift()
    // console.log(myArray)

// // Add the string "Bob Marley"to the beginning of the array.

    // myArray.unshift('Bob Marley')
    // console.log(myArray)

// // Remove the string of your choice from the end of the array.

    // myArray.pop()
    // console.log(myArray)

// // Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

    // myArray.reverse()
    // console.log(myArray)

    // // --> The array was mutated which means it changed from the starting array. The .reverse() method returned the mutated array with the order of the elements backwards. The reverse method by itself does not return anything without console.log.



// // F. Biggie Smalls

// // Create a variable that contains an integer.

//     let x = 100

// // Write an if ... elsestatement that:

// // console.log()s "little number" if the number  entered is less than 100
// // console.log()s big numberif the number is greater than or equal to 100.

    // if (x < 100) {
    //     console.log('little number')
    // } else {
    //     console.log ('big number')
    // }


// // G. Monkey in the Middle

// // Write an if ... else if ... elsestatement:

// // console.log() little numberif the number entered is less than 5.
// // If the number entered is more than 10, log big number.
// // Otherwise, log "monkey".

    // let num = 7

    // if (num < 5) {
    //     console.log('little number')
    // } else if (num > 10) {
    //     console.log('big number')
    // } else {
    //     console.log ('monkey')
    // }


// // H. What's in Your Closet?

    // const kristynsCloset = [
    //     "left shoe",
    //     "cowboy boots",
    //     "right sock",
    //     "GA hoodie",
    //     "green pants",
    //     "yellow knit hat",
    //     "marshmallow peeps"
    //   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
    //   const thomsCloset = [
    //     [
    //       // These are Thom's shirts
    //       "grey button-up",
    //       "dark grey button-up",
    //       "light blue button-up",
    //       "blue button-up",
    //     ],[
    //       // These are Thom's pants
    //       "grey jeans",
    //       "jeans",
    //       "PJs"
    //     ],[
    //       // Thom's accessories
    //       "wool mittens",
    //       "wool scarf",
    //       "raybans"
    //     ]
    //   ];

// //What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

    //     console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)


// // Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".

    //     kristynsCloset.splice(6, 0, "raybans")
    //     console.log(kristynsCloset)

// // Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.

    // kristynsCloset[5] = 'stained knit hat'
    // console.log(kristynsCloset)

// // Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
  
    // console.log(thomsCloset[0][0])

// // In the same way, access one item from Thom's pants array.

    // console.log(thomsCloset[1][0])

// //Access one item from Thom's accessories array.

    // console.log(thomsCloset[2][1])

// //Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

    // console.log(`Thom lives wearing his ${thomsCloset[0][0]}, ${thomsCloset[1][0]}, and ${thomsCloset[2][1]} together! `)

// //Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

    // thomsCloset[1][2] = 'footie pajamas'
    // console.log(thomsCloset[1])


// ========================== IV FUNCTIONS ===================================

// A. printGreeting

// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?

// Like so?

// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!

// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.


// // B. printCool

// // Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.

    // function printCool (name) {
    //     return `${name} is cool!`
    // }

    // console.log(printCool("Captain Reynolds"));



// C. calculateCube

// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.


    // const calculateCube = function (num) {
    //     return num ** 3
    // }

    // console.log(calculateCube(5))

// D. isVowel

// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

    // function isVowel (charac) {
    //     let vowel = ['a', 'e', 'i', 'o', 'u']
    //     for (i = 0; i <=vowel.length; i++) {
    //     if (charac.lowercase === vowel[i]) {
    //         return true
    //     }
    //     }
    //     return false
    // }

    // console.log(isVowel("I"))

// E. getTwoLengths

// Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

    // const getTwoLengths = function (str1, str2) {
    //     return [str1.length, str2.length]
    // }

    // console.log(getTwoLengths("Hank", "Hippopopalous"))


// F. getMultipleLengths

// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

    // function getMultipleLengths (array) {
    //     let arr = []
    //     array.forEach(element => {
    //         arr.push(element.length)
    //     })
    //     return arr
    // }
    
    // console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))



// // G. maxOfThree

// //Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

    //     const maxOfThree = function (num1, num2, num3) {
    //         if (num1 >= num2 && num1 >= num3) {
    //             return num1
    //         } else if (num2 >= num3 && num2 >= num1) {
    //             return num2
    //         }else if (num3 >= num1 && num3 >= num2) {
    //             return num3
    //         }
    //     }    
        
    //     console.log(maxOfThree(10, 20, 100));


//  H. printLongestWord

// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

    // function printLongestWord (arrayStr) {
    //     let str = ''
    //     arrayStr.forEach(element => {
    //         if(element.length > str.length){
    //             str = element
    //         }
    //     })
    //     return str
    // }
    // console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]))

//======================================OBJECTS================================================

//A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.

    // const user = {
    //     name : "Tony Stark",
    //     email : "tonystark@avengers.com",
    //     age : 48,
    //     purchased: []
    // }

// B. Update the user
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++

    // user.email = "tonystark@starkindustries.com"

    // user.age++

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.

// Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).

    // user.location = "Manhattan"

// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.

    // user.purchased.push('carbohydrates')


// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.

    // user.purchased.push('peace of mind')



// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.

    // user.purchased.push('Merino jodhpurs')


// Console.log just the "Merino jodhpurs" from the purchasedarray.

    //console.log (user.purchased[2])

// E. Object-within-object

// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)

    // user.friend = {
    //     name: "Steve Rogers",
    //     age : 28,
    //     location: "Queens",
    //     purchased : [],
    // }

// Console.log just the friend's name

    //console.log(user.friend.name)


// Console.log just the friend's location

    //console.log(user.friend.location)

// CHANGE the friend's age to 55

    // user.friend.age = 55


// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.

    // user.friend.purchased.push("The One Ring")

// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.

    // user.friend.purchased.push("A latte")

// Console.log just "A latte" from the friend's purchasedarray.

    //console.log (user.friend.purchased[1])


// F. Loops
// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.

    // for(let i=0; i < user.purchased.length; i++) {
    //     console.log(user.purchased[i])
    // }

// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.

    // for(let i=0; i < user.friend.purchased.length; i++) {
    //     console.log(user.friend.purchased[i])
    // }


// G. Functions can operate on objects
// Write a single function updateUserthat takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a returnstatement, it will merely modify the user object.

    // function updateUser (){
    //     user.age++  
    //     user.name = user.name.toUpperCase()
    // }
    // updateUser(user)
    // console.log(user)

    
// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.

    // const oldAndLoud = function(person){
    //    person.name = person.name.toUpperCase()
    //    person.age++
    // }

    // oldAndLoud(user)
    // console.log(user)

// =========================== CAT COMBINATOR ==============================
// 1. Mama cat
// Define an object called cat1that contains the following properties:

// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed

    // const cat1 = {
    //     name: "Luna",
    //     breed: "Bombay",
    //     age: 4,
    // }

    // console.log(cat1.age, cat1.breed)


// 2. Papa cat
// Define an object called cat2that also contains the properties:

// name
// breed
// age (a number)

    // const cat2 = {
    //     name: 'Artemis',
    //     breed: 'Persian',
    //     age: 3,
    // }


// 3. Combine Cats!
// The cats are multiplying!

// Write a function combineCatsthat has two parameters mama, and papa. The function will take two arguments -- each a cat object.

// Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.


    // function combineCats (mama,papa){
    //     console.log(mama)
    //     console.log(papa)
    // }

    // combineCats(cat1,cat2)


// Make it so the combineCats function will return a combination of the two incoming cats

// The result should be an object wherein the

// name is a concatenation of the parents' names
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between

    // function combineCats(mama,papa){
    //     const baby ={
    //         name: mama.name + papa.name,
    //         age: 1,
    //         breed: mama.breed + "-" + papa.breed,
    //     }
    //     return baby
    // }

    // console.log(combineCats(cat1, cat2))

    // console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))) 

    // console.log(
    //     combineCats(
    //         combineCats(combineCats(cat1, cat2),combineCats(cat1, cat2)),
    //         combineCats(combineCats(cat1, cat2),combineCats(cat1, cat2))
    //     )
    // )




