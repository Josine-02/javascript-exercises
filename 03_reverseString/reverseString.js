const reverseString = function(string) {
stringArray = string.split("")
reverseStringArray =[]

for (i=0; i<string.length;i++){
    reverseStringArray.splice(0, 0, stringArray[i])
}

return reverseStringArray.join("")
};

// Do not edit below this line
module.exports = reverseString;
