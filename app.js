const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
console.log(area); //78.53

let minPlantSpace = 0.8;
let initialPlantAmount = 20;
let plantsDouble = initialPlantAmount * 2;

let doubleUp = 20 * 2
console.log(doubleUp)



//predict the plant growth after a specific number of weeks
let weekOne = doubleUp * 0.8
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
    let weekTwo = 20 * 4;
    console.log(weekTwo)

    let growingRate = 0.8 * weekTwo;
    console.log(growingRate)

    let areaForWeekTwo = 78.53 % growingRate;
    console.log(areaForWeekTwo)

  if(num1 > .50 || .80){
    console.log("Plants are growing at an acceptable rate.")
  }else{
    console.log("Plants are growing to fast!")
  }
}
monitored(64)


//planted - is there room to plant more plants

let weekThree = 20 * 6;
console.log(weekThree)

let areaWeekThree = weekThree * 0.8;
console.log(areaWeekThree)

