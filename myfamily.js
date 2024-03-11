const a = {
    name: "Faiyaz",
    class: "completed",
    isBoy: true
}
const b = {
    name: "Farhana",
    class: "completed",
    isBoy: false
}
const c = {
    name: "Abuzar",
    class: "10th",
    isBoy: true
}
const d = {
    name: "Zikra",
    class: "8th",
    isBoy: false
}
const e = {
    name: "Mawiya",
    class: "3rd",
    isBoy: true
}
function func(varNum) {
    if (varNum === 1) {
        console.log(a)
    } else if (varNum === 2) {
        console.log(b);
    } else if (varNum === 3) {
        console.log(c);
    } else if (varNum === 4) {
        console.log(d);
    } else if (varNum === 5) {
        console.log(e);
    } else {
        console.log("Invalid Input");
    }
}

var x = parseInt(prompt("Enter(1-4):"));
func(x);
