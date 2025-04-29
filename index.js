// Write a function named `convertToCelsius` which takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.

const convertToCelsius = (fahrenheit)=>{
    const result = (fahrenheit - 30)/2
    return result
}

const convertedTemp = convertToCelsius(80)

//Write a function named `describeTemperature` which takes a temperature in Fahrenheit and returns a description according to this table:

//| Temperature (°C) | Description |
//| ---------------- | ----------- |
//| < 0              | very cold   |
//| < 20             | cold        |
//| < 30             | warm        |
//| < 40             | hot         |
//| >= 40            | very hot    |

function describeTemperature (tempInCel){
    console.log(tempInCel)
    let description
    if (tempInCel<0){
        description = "very cold"
    }else if (tempInCel<20){
        description = "cold"
    }else if (tempInCel<30){
        description = "warm"
    }else if (tempInCel<40){
        description = "hot"
    }else if (tempInCel>=40){
        description = "very hot"
    }
    return `It's ${description}!`
}

console.log(describeTemperature(convertedTemp))
//Prompt the user to provide a temperature in Fahrenheit. 
const userInput = prompt("Please provide the Temperature in Fahrenheit.")


// Then, alert them with a message that tells them the equivalent temperature in Celsius alongside a description of what that temperature would feel like.

if (typeof Number(userInput) !== "number"){
    alert(`Please enter as a number!"`)
}else {
    const convertedTemp=convertToCelsius(userInput)
    const finalAnswer = describeTemperature(convertedTemp)
    alert(finalAnswer)

}