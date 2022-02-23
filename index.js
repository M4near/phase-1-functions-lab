// Code your solution in this file!
function distanceFromHqInBlocks(customer){
    return Math.abs(customer - 42)
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(x){
    let block = distanceFromHqInBlocks(x);
    return block * 264
}

function distanceTravelledInFeet(start,destination){
    return Math.abs((destination - start) * 264)
}

function calculatesFarePrice(start,destination){
    let feet = distanceTravelledInFeet(start,destination);

    if  (feet > 2500){
        return 'cannot travel that far'
    } else if (feet < 400){
        return 0
    }

    let newFeet = feet-400

    if (feet > 2000) {
        return 25
    } else {
        return newFeet * .02
    }
}