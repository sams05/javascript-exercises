const findTheOldest = function(people) {
    const oldestAge = people.reduce((oldestAge, person) => {
        // Using || operator
        // const endYear = person.yearOfDeath || (new Date()).getFullYear();
        const endYear = ('yearOfDeath' in person) ? person.yearOfDeath : (new Date()).getFullYear();
        age = endYear - person.yearOfBirth;
        if(age > oldestAge) {
            oldestAge = age;
        }
        return oldestAge;
    }, 0);

    const oldestAgeIdx = people.findIndex(person => {
        const endYear = ('yearOfDeath' in person) ? person.yearOfDeath : (new Date()).getFullYear();
        return endYear - person.yearOfBirth === oldestAge
    });

    return people[oldestAgeIdx];
};

// Do not edit below this line
module.exports = findTheOldest;
