/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let exp;
    let stack = []
    for(let i=0;i<tokens.length;i++){
        if(isNaN(tokens[i])){
            let a = stack.pop()
            let b = stack.pop()
            let curr;
            // console.log(token[i],a,b)
            if(tokens[i] === "+") curr = b+a 
            else if(tokens[i] === "-") curr = b-a
            else if(tokens[i] === "*") curr = b*a
            else if(tokens[i] === "/") curr = Math.trunc(b/a)
            console.log(curr)
            stack.push(curr)
        } else {
            stack.push(Number(tokens[i]))
        }
    }
    return stack[0];
};