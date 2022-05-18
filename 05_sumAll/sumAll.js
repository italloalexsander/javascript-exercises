const sumAll = function(floor, ceiling) {
    sum = 0;
    if(floor > ceiling){
        aux = ceiling;
        ceiling = floor;
        floor = aux;
    }
    if((floor < 0) || (ceiling < 0)){
        return "ERROR"
    }
    if((typeof floor != "number") || (typeof ceiling != "number")){
        return "ERROR"
    }
    for(i = floor; i <= ceiling; i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
