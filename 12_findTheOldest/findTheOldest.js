const findTheOldest = function(people) {
    let ages = people.map(person => {
        if (typeof(person.yearOfDeath) !== "number") {
            return new Date().getFullYear() -person.yearOfBirth}
            else {return person.yearOfDeath - person.yearOfBirth}})
    
        let oldestIndex = ages.reduce((oldestIdx, currentAge, index)=>{
            if (currentAge > ages[oldestIdx]) {
                return index}
            else if (ages[oldestIdx] > currentAge){
                return oldestIdx }
            
            else { return oldestIdx}},0)
    return people[oldestIndex]
        }
        
    
// Do not edit below this line
module.exports = findTheOldest;
