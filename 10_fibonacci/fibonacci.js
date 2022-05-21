const fibonacci = function(index) {
    if(index <= 0){
        return "OOPS";
    }
    if(typeof index !== "number"){
        index = parseInt(index);
    }
    const fibbo = [];
    let fibboValue = 1;
    let prevValue = 0;
    let aux = 0;
    for(i = 1; i <= index; i++){
        fibbo.push(fibboValue)
        aux = fibboValue;
        fibboValue += prevValue;
        prevValue = aux;
    }
    console.log(fibbo);
    return fibbo[index-1];
};

// Do not edit below this line
module.exports = fibonacci;
