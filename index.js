/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let convertValue = ""
const btnEl = document.getElementById("btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

function render() {
    convertValue = document.getElementById("input").value
    if (convertValue) {
        lengthEl.textContent = `
        ${convertValue} meters = ${(convertValue * 3.281).toFixed(2)} feet |
        ${convertValue} feet = ${(convertValue / 3.281).toFixed(2)} meters
        `
        volumeEl.textContent = `
        ${convertValue} liters = ${(convertValue * 0.264).toFixed(2)} gallons |
        ${convertValue} gallons = ${(convertValue / 0.264).toFixed(2)} liters
        ` 
        massEl.textContent = `
        ${convertValue} kilos = ${(convertValue * 2.204).toFixed(2)} pounds |
        ${convertValue} pounds = ${(convertValue / 2.204).toFixed(2)} kilos
        `
    }
}

btnEl.addEventListener("click", render)


//need to (on button click) get value from input field, and store it in a variable.
//then, use that variable (multiplied with conversion factors) to calculate
//conversions. update .textcontent of the 3 boxes accordingly.

//need to read the value in the input field, and if it is >= 0, rendering can occur.
//if not, the default state of "-" will appear in the <p>