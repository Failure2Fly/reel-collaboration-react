
export const multiplyBoth = (a, b) => {
  return a*b;
}

  
export const mumbling = (s) => {
  var newArray = [];
    for (var i = 0; i < s.length; i++){
      newArray.push(s[i].toUpperCase());
      for( var j=0; j < i; j++){
        newArray.push(s[i].toLowerCase());
      }
      newArray.push("-");
    }
  newArray.pop();
  return newArray.join('');
}

// export {
//     multiplyBoth,
//     mumbling
// }

