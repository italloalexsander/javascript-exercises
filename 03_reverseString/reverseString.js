const reverseString = function(string) {
    tamanhoString = string.length;
    j = tamanhoString - 1;
    stringReversa = []
    while(j >= 0){
        stringReversa.push(string[j])
        j--;
    }
    return stringReversa.join("");
};

// Do not edit below this line
module.exports = reverseString;
