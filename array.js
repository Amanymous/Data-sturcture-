// flatten the array

// let arr = [
//     [1,2],
//     [3,4],
//     [5,6,[7,8],9],
// ]
// let flattened = [].concat(...arr)
// console.log(flattened);
// console.log("flat function",arr.flat(2))

// let arr1 = [
//     [1,2],
//     [3,4],
//     [5,6,[7,8],9,10],
// ]

// function customFlatten(arr1,depth=1){
//     let result = []
//     arr1.forEach((ar)=>{

//         if(Array.isArray(ar) && depth > 0){
//             result.push(...customFlatten(ar,depth-1))
//         }else result.push(ar)
//     })
//     return result
// }
// console.log(customFlatten((arr1)));

const items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];

// const filteredItems = items.filter((item)=>{
//     return item.value >= 10
// })
// console.table(filteredItems)

// console.log("map()");
// console.table(items.map((item)=>{   return item.name; }))

// console.log("forEach()");
// items.forEach((item)=>{
//     console.table(item.name)
   
// })

// console.log("find()");
// console.table(items.find((item)=>{  return item.name == 'And'; }))

// console.log("some()");
// console.table(items.some((item)=>{  return item.value < 100; }))

// console.log("every()");
// console.table(items.every((item)=>{  return item.value > -13 }))

// console.table(filteredItems.sort(function(a,b){
//     console.log(a.value,b.value);
//     return a.value < b.value ? -1 : 1;  
// }))

// console.log("reduce()");
// const total = items.reduce((currentTotal,item)=>{
//     console.log(item.value , currentTotal);
//     return item.value + currentTotal
// },1)
// console.log(total);


// console.log("includes()");
// let arr = [1,2,3,4,5,6,7,8,9];
// const total = arr.includes(1)
// console.log(total);

let alpha = ['a', 'b', 'c', 'd']
let name = 'a'
if(alpha.includes(name)){
    console.log("great");
}
else{
    console.log("ok");
}