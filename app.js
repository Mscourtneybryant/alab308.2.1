//--------------------------------PART ONE------------------------------//


const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius; //78.53
const initialPlantAmount = 20;
const minPlantSpace = 0.8;
let maxSpace = area / minPlantSpace;


// predict the plant growth after a specific number of weeks
// calculate when it is time for plants to be pruned
// calculate if the plants are growing at an acceptable rate

function weeklyCheck(currentWeek){

  const plantCount = initialPlantAmount * Math.pow(2, currentWeek);

  if (plantCount > maxSpace * 0.8){
    console.log("Its time to prune the plants!!")
  } else if(plantCount >= maxSpace * 0.5 && plantCount <= maxSpace * 0.8){
    console.log("Monitor the plants!")
  }else{
    console.log("Time to plant more plants!")
  }

}

weeklyCheck(1); //week one growth
weeklyCheck(2); //week two growth
weeklyCheck(3); //week three growth






//------------------------------PART TWO-------------------------------//

let newPlantAmount = 100;
let newPlantArea = newPlantAmount * PI ;
console.log(newPlantArea)

let unprunedRadius = newPlantArea * (10 * 2);
console.log(unprunedRadius)


//------------------------------PART THREE------------------------------//

let multiplyRadiusAndPI = radius * PI;

try {
  100 * area === minPlantSpace
}
catch(err) {
  plantArea * weekOne === multiplyRadiusAndPI
}
throw "There isnt enough space for the plants!";