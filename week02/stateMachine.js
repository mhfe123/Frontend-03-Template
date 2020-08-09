// function findPosition(string, target) {
//   if (!string && !target) return -1; // 没值
//   return String(string).indexOf(String(target));
// }
// let position = findPosition('fdgfsgabcabcdefs0', 'abcdef');
// console.log(position);

// function findPosition(string, target) {
//   const targetArr = target.split('');
//   const stringArr = string.split('');
//   let j = 0, position = 0;
//   for (let i = 0; i < stringArr.length; i++) {
//     if (stringArr[i] === targetArr[j]) {
//       position = position ? position : i;
//       if ((i - position) === 1 || (i - position) === 0) {
//         position = i;
//         j++;
//       } else {
//         position = 0;
//         j = 0;
//       }
//     } else {
//       position = 0;
//       j = 0;
//       if (stringArr[i] === targetArr[0]) {
//         position = i;
//         j++;
//       }
//     }
//     if (stringArr.length - i < targetArr.length || j === targetArr.length)
//       break;
//   }
//   return !!j;
// }

// let position = findPosition('fdgfsgabcabcdefs0', 'abcdef');
// console.log(position);

// abcabx

// function match(string) {
//   let state = start;
//   for (let s of string) {
//     state = state(s);
//   }
//   return state === end;
// }

// function start(s) {
//   if (s === 'a') {
//     return foundB1;
//   } else {
//     return start;
//   }
// }

// function end(s) {
//   return end;
// }

// function foundB1(s) {
//   if (s === 'b') {
//     return foundC;
//   } else {
//     return start(s);
//   }
// }

// function foundC(s) {
//   if (s === 'c') {
//     return foundA;
//   } else {
//     return start(s);
//   }
// }

// function foundA(s) {
//   if (s === 'a') {
//     return foundB2;
//   } else {
//     return start(s);
//   }
// }

// function foundB2(s) {
//   if (s === 'b') {
//     return foundX;
//   } else {
//     return start(s);
//   }
// }

// function foundX(s) {
//   if (s === 'x') {
//     return end;
//   } else {
//     return foundB1(s);
//   }
// }

// let r1 = match('asdsfdgvcbxcb');
// let r2 = match('aabcabxsdsfdgvcbxcb');
// console.log(r1);
// console.log(r2);


// abababx

// function match(string) {
//   let state = start;
//   for (let s of string) {
//     state = state(s);
//   }
//   return state === end;
// }

// function start(s) {
//   if (s === 'a') {
//     return foundB;
//   } else {
//     return start;
//   }
// }

// function end(s) {
//   return end;
// }

// function foundB(s) {
//   if (s === 'b') {
//     return foundA2;
//   } else {
//     return start(s);
//   }
// }

// function foundA2(s) {
//   if (s === 'a') {
//     return foundB2;
//   } else {
//     return start(s);
//   }
// }

// function foundB2(s) {
//   if (s === 'b') {
//     return foundA3;
//   } else {
//     return foundB(s);
//   }
// }

// function foundA3(s) {
//   if (s === 'a') {
//     return foundB3;
//   } else {
//     return foundA2(s);
//   }
// }

// function foundB3(s) {
//   if (s === 'b') {
//     return foundX;
//   } else {
//     return foundB2(s);
//   }
// }

// function foundX(s) {
//   if (s === 'x') {
//     return end;
//   } else {
//     return foundB3(s);
//   }
// }

// let r1 = match('asdsfdabababxgvcbxcb');
// let r2 = match('ababababababx');
// console.log(r1);
// console.log(r2);

// function match(string, target) {

// }