const findTheOldest = function(people) {
    let maxAge = 0;
    let person = {};
    people.forEach(element => {
        if(!element.yearOfDeath){
            currentYear = new Date().getFullYear();
            if(currentYear - element.yearOfBirth > maxAge){
                maxAge = currentYear - element.yearOfBirth;
                person = element;
            }
        }else{
            if(element.yearOfDeath - element.yearOfBirth > maxAge){
                maxAge = element.yearOfDeath - element.yearOfBirth;
                person = element;
            }
        }
    })
    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
