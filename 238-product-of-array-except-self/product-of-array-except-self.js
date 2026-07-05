/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = [];
    result[0]=1 
    for(let i=1; i< nums.length;i++){
        result[i] = nums[i-1]*result[i-1]
    }
    suf=1
    for(let i=nums.length; i>0; i--){
        result[i-1] = suf*result[i-1]
        suf *= nums[i-1]  
    }
    return result;
};