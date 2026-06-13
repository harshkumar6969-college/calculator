let myArray1 = [];
let myArray2 = [];
const answer = document.querySelector(".answer");
const number = document.querySelector(".number")

function yo(){
    console.log("you clicked this button")
    myArray1.push("1")
    const no = document.querySelector(".number")
    no.textContent = `${myArray1.join("")}`
}
function yo0(){
    myArray1.push("0")
    const no = document.querySelector(".number")
    no.textContent = `${myArray1.join("")}`
}
function yo2(){
    console.log("you clicked this button")
    myArray1.push("2")
    const no = document.querySelector(".number")
    no.textContent = `${myArray1.join("")}`
    
}
function yo3(){
    console.log("you clicked this button")
    myArray1.push("3")
    const no = document.querySelector(".number")
    no.textContent = `${myArray1.join("")}`
}
function yo4(){
    console.log("you clicked this button")
    myArray1.push("4")
    const no = document.querySelector(".number")
    no.textContent = `${myArray1.join("")}`
}
function yo5(){
    console.log("you clicked this button")
    myArray1.push("5")
    const no = document.querySelector(".number")
    no.textContent = `${myArray1.join("")}`
}
function yo6(){
    console.log("you clicked this button")
    myArray1.push("6")
    const no = document.querySelector(".number")
    no.textContent = `${myArray1.join("")}`
}
function yo7(){
    console.log("you clicked this button")
    myArray1.push("7")
    const no = document.querySelector(".number")
    no.textContent = `${myArray1.join("")}`
}
function yo8(){
    console.log("you clicked this button")
    myArray1.push("8")
    const no = document.querySelector(".number")
    no.textContent = `${myArray1.join("")}`
}
function yo9(){
    console.log("you clicked this button")
    myArray1.push("9")
    const no = document.querySelector(".number")
    no.textContent = `${myArray1.join("")}`
}
function submit1(){
    const array1 = Number(myArray1.join(""))
    const array2 = Number(myArray2.join(""))
    const sum = array1 + array2;
    console.log(sum)
    number.textContent = sum
}
function submit2() {
    myArray2 = myArray1.splice(0)
    console.log(myArray2);
}
function submit3(){
    const array1 = Number(myArray1.join(""))
    const array2 = Number(myArray2.join(""))
    const sum = array1 * array2;
    console.log(sum)
    number.textContent = sum
}
function submit4(){
    const array1 = Number(myArray1.join(""))
    const array2 = Number(myArray2.join(""))
    const sum = array2 / array1;
    console.log(sum)
    number.textContent = sum
}

function dela(){
    myArray1.pop();
    const no = document.querySelector(".number")
    no.textContent = `${myArray1.join("")}`
    console.log("1 word delted")
}

function reset() {
    myArray1.length = 0;
    const no = document.querySelector(".number")
    no.textContent = `0`
}