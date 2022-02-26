arr = [1,2,1]
//[1,3,5,1]
rt = arr.join('').split(',');

console.log(rt.toString())
console.log(arr.reverse().join('').split(',').toString())
console.log(rt.toString() === arr.reverse().join('').split(',').toString())

// if(rt.toString() === arr.reverse().join('').split(',').toString()){
//     console.log('polindram')
// }else{
//     console.log("not a polindram")
// }

rt.toString() === arr.reverse().join('').split(',').toString() ? document.write('polindrame') : document.write('not a polidrame')