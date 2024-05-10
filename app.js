const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
console.log(area); //78.53

let minPlantSpace = 0.8;
let initialPlantAmount = 20;
let plantsDouble = initialPlantAmount * 2;
let doubleUp = initialPlantAmount * 2
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


    let weekTwo = 40 * 2;
    console.log(weekTwo)

    let growingRate = 0.8 * weekTwo;
    console.log(growingRate)

    let areaForWeekTwo = 78.53 % growingRate;
    console.log(areaForWeekTwo)

  if( growingRate > .50 || .80){
    console.log("Plants are growing at an acceptable rate.")
  }else{
    console.log("Plants are growing to fast!")
  }



//planted - is there room to plant more plants

let weekThree = 20 * 6;
console.log(weekThree)

let areaWeekThree = weekThree * 0.8;
console.log(areaWeekThree)

if (areaWeekThree < .50){
console.log("There is eniugh room to plant")
}else{
    console.log("There isnt eough room to plant")
}