const palindromes = function (string) {
    string = string.split(',').join('');
    string = string.split('.').join('');
    string = string.split(' ').join('');
    string = string.split('!').join('');
    auxString = string;
    tamString = string.length;

    
    for(i = 0; i < tamString; i++){
        if(string[i].toLowerCase() !== auxString[(tamString - i) - 1].toLowerCase()){
            console.log(auxString + "\n" + string);
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
