let alphabet = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  
const palindromes = function (string) {
        lowerCase =string.toLowerCase()
        let array =lowerCase.split("");
        let filteredArray = array.filter(item => alphabet.includes(item))
        let filteredString = filteredArray.join("")

        let reversedArray = []
        for (i=1; i<=filteredArray.length; i++) {
                reversedArray.push(filteredArray[filteredArray.length -i])
        }

        reversedString= reversedArray.join("");

        if (reversedString == filteredString) {return true}
        else {return false}
};



// Do not edit below this line
module.exports = palindromes;
