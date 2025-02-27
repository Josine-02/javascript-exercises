const sumAll = function(start, end) {
    if (start <0 || end <0 || (start*10)%10 !==0 ||(end*10)%10 !==0 || typeof(start) !== 'number' || typeof(end) !== 'number'){
        return 'ERROR'
    }

    let sum = start
    let i = start +1
    iterationEnd=end

    if (start > end) {
        sum = end
        i = end +1
        iterationEnd=start
    }

while (i<=iterationEnd){
    sum += i;
    i++;
}
return sum
};

// Do not edit below this line
module.exports = sumAll;
