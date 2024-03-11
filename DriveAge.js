let a = prompt("Enter Your Age: ")
// let b = alert("Hey") 
a = Number.parseInt(a) //Converting String to number
// console.log(typeof a)  
if(a < 9) {
    alert("You cannot even think of driving!")
}
else if(a > 9 && a < 18) {
    alert("You can drive after 18")
}
else {
    alert("You can drive. Best of luck!")
}
