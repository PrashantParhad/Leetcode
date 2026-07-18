/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    for(let i=0;i<tokens.length;i++){
        if(isNaN(tokens[i])){
            let a = stack.pop()
            let b = stack.pop()
            if(tokens[i] === "+") stack.push(b+a) 
            else if(tokens[i] === "-")  stack.push(b-a)
            else if(tokens[i] === "*")  stack.push(b*a)
            else if(tokens[i] === "/") stack.push(Math.trunc(b/a))
        } else {
            stack.push(Number(tokens[i]))
        }
    }
    return stack.pop();
};