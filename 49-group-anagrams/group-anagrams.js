/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map(), res=[];
    for(let i=0;i<strs.length;i++) {
        let s = strs[i].split('').sort().join('')
        if(!map.get(s)) map.set(s,[strs[i]])
        else if(map.get(s)) map.get(s).push(strs[i])
        // console.log(map)
    }
    for(let [key,val] of map){
        res.push(val)
    }
    return res
};