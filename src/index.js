module.exports = function check(str, bracketsConfig) {
  let OPEN_BRACKETS = [];
  let BRACKETS_PAIR = new Map();
  let stack = [];
  
  for (i = 0; i < bracketsConfig.length; i += 1) {
    OPEN_BRACKETS.push(bracketsConfig[i][0]);
    BRACKETS_PAIR.set(bracketsConfig[i][1], bracketsConfig[i][0]);
  }
  
  for (i = 0; i < str.length; i += 1) {
    let currentSymbol = str[i];
    
    if (OPEN_BRACKETS.includes(currentSymbol)) {
      stack.push(currentSymbol); 
    } else {
      if (stack.length == 0) {
        return false;
      }
    }
    console.log(i, stack);
    
    let topElement = stack[stack.length - 1];
    
    if (BRACKETS_PAIR.get(currentSymbol) == topElement && BRACKETS_PAIR.get(currentSymbol) != currentSymbol) {
      stack.pop();
    } else if (BRACKETS_PAIR.get(currentSymbol) == currentSymbol) {
      if (stack.length > 1) {
        if (stack[stack.length - 2] == currentSymbol) {
        stack.pop();
        stack.pop();
        } 
      }
    } 
    console.log(i, stack);
  }
  return stack.length == 0;
}
