/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let result = []
    let start = 0;end = numbers.length-1
    while(start<=end){
        if(numbers[end]+numbers[start]=== target) return [start+1,end+1]
        else if(numbers[end]+numbers[start] >= target) end--
        else if(numbers[end]+numbers[start] <= target) start++
    }
};