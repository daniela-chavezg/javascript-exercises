const findTheOldest = function(people) {
    const oldest = people.reduce((result, current) => {
        const currYear = (new Date()).getFullYear();
        
        //separate function for finding age of person
        const currAge = current.yearOfDeath == undefined ? currYear - current.yearOfBirth : 
        current.yearOfDeath - current.yearOfBirth;   
        
        const resultAge = result.yearOfDeath == undefined ? currYear - result.yearOfBirth : 
        result.yearOfDeath - result.yearOfBirth;   
        
        return currAge > resultAge ? current : result;
        
    });

    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
