const accountId = 126716
let accountEmail = "nitin7478@google.in"
var accountPassword = "12345"
accountCity = "Pune"
let accountState


// accountId = 2 // Not Ok

accountEmail =  "abcd@hhd.com"
accountPassword  = "new_12345"
accountCity = "Mumbai"
console.log(accountId)

/*
Prefer using let 
because of issue in block scope  and function scope in var keyword
*/
console.table([accountId , accountEmail , accountPassword , accountCity, accountState])