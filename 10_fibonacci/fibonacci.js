const fibonacci = function(n) {
    if (n <0) {return "OOPS"}
    else if (typeof(n)== "string") {n=parseInt(n)}

    // initalvalue(1) + initialvalue(1) +1
    // if (n=1) {return 1}
    // else if (n=2) {return [1, 1]}
let array = [1,1]
    for (i = 2; i<n; i++) {
    array.push((array[array.length-2] + array[array.length-1]))
}
    if (n==0) { 
        return 0}
    let result = array[n-1]
    return result

};

// Do not edit below this line
module.exports = fibonacci;
