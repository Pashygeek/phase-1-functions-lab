function distanceFromHqInBlocks(blockNumber) {
 let hq = 42;
 if(blockNumber> hq){
    return blockNumber-hq;
 }else{
    return hq - blockNumber;
 }
}


function distanceFromHqInFeet(blockNumber) {
   let distance = distanceFromHqInBlocks(blockNumber); 
   const feet = 264;
    return distance * feet;
}

function distanceTravelledInFeet(b1, b2) {
    if (b1<=b2){
        return (b2-b1)*264;
    }else{
        return (b1-b2)*264;
    }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400){
        return 0;
    }else if(distance >400 && distance <=2000){
        return  (distance - 400)*0.02;
    }else if(distance >2000 && distance <2500){
        return 25;
    }else if(distance >2500){
        return 'cannot travel that far';
    }   
}