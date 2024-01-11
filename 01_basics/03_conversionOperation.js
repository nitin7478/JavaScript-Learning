let score = "33"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

let a = "11aadddf"
let b = Number(a) // No ok with a
// console.log(typeof b) // Number
// console.log(b) // Nan value

// "33" => 33
// "33abc" =>  NaN

isLoggedIn = 1
let booleanLoggedIn = Boolean(isLoggedIn)
// console.log(booleanLoggedIn)


isLoggedIn1 = 0
let booleanLoggedIn1 = Boolean(isLoggedIn1)
// console.log(booleanLoggedIn1)

isLoggedIn2 = "Nitin"
let booleanLoggedIn2 = Boolean(isLoggedIn2)
// console.log(booleanLoggedIn2)

isLoggedIn3 = ""
let booleanLoggedIn3 = Boolean(isLoggedIn3)
// console.log(booleanLoggedIn3)

// 1=> true , 0=> false
// "" => false
// "nitin" => true


let c = 33
let stringNumber = String(c)
// console.log(typeof stringNumber)



// ************************** Operations ********************************
let value = 3
let negValue = -value
console.log(negValue);


let str1 = "hello"
let str2  = "nitin"
let str3 = str1 + str2
console.log(str3)


console.log("1" + 2)
console.log(1 + "2")
console.log("1"+"2")
console.log("1"+2+2)
console.log(1+2+"2")

console.log(true)
console.log(+true)

let counter = 100
++counter
console.log(counter)
