/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let result = [];
    let map =new Map()
    for(i=0;i<nums.length;i++){
        if(map.get(nums[i])) map.set(nums[i],map.get(nums[i])+1) 
        else map.set(nums[i],1)
    }
    let sorted = Array.from(map.entries()).sort((a,b)=>b[1]-a[1])
    return sorted.slice(0,k).map((i)=>i[0])
};