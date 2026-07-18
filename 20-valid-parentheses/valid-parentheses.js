/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let pairs ={
        "}":"{",
        "]":"[",
        ")":"("
    }
    let stack=[]
    for(i=0;i<s.length;i++){
        if(pairs[s[i]]) {
            if(stack.length > 0 && pairs[s[i]] === stack[stack.length-1]){
                stack.pop(s[i])
            } else {
                return false
            }
        } else {
            stack.push(s[i])
        }
    }
    if (stack.length===0) return true
    else return false
};