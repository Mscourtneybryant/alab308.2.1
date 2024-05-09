const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
console.log(area); //78.53

let minPlantSpace = 0.8;
let initialPlantAmount = 20;
let plantsDouble = initialPlantAmount * 2;

let doubleUp = 0.8 * 2
console.log(doubleUp)



//predict the plant growth after a specific number of weeks
let weekOne = doubleUp * 20
console.log(weekOne) 


//pruned - to stop from exceeding capacity of garden

let pruned = area % minPlantSpace;
console.log(pruned)

if (pruned > .80){
    console.log("Its time to prune")
}else {
    console.log("Its not time to prune")
}

//monitored - growing at an acceptable rate

function monitored (num1){
    let weekTwo = 32 * 2;
    console.log(weekTwo)

    let growingRate = 64 
  if(num1 > .50 || .80){
    console.log("Plants are growing at an acceptable rate.")
  }else{
    console.log("Plants are growing to fast!")
  }
}
monitored(64)