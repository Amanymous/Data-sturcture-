/**
 * The second difference between these array methods 
 * is the fact that map() is chainable. This means 
 * that you can attach reduce(), sort(), filter() 
 * and so on after performing a map() method on an array.
 */

// const arr  = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// arr.map((a,i)=>{
//     return console.log("a:",a*a,"i:",i*i);
// })
// console.log(arr);


// const products = [
//     { name: 'shirt', price: 100, quantity:{ max: 111, min:0}},
//     { name: 'trouser', price: 350, quantity:{max:31, min:11}},
//     { name: 'Pen', price: 500 , quantity:{ max: 18, min:1}},
//     { name: 'watch', price: 200 , quantity:{ max: 25, min:2}},
// ]

// const fil = products.filter(product => product.price > 100).map(
//     product =>product.quantity.max && product.quantity.min).sort()
// console.table(fil)


// const nums = [25, 125, 75, 200];

// function atLeast100(num) {
//   return num >= 100;
// }

// nums.filter(atLeast100);

// const check = nums.filter(atLeast100);
// console.log(check);

// const products = [
//     { name: 'T-Shirt', price: 25 },
//     { name: 'Headphones', price: 125 },
//     { name: 'Keyboard', price: 75 },
//     { name: 'Monitor', price: 200 }
//   ];
  
//   // Gets the number of products whose price is at least 100.
// const result = products.map(product => product.price ).filter(atLeast100).length;
// console.log(result);

// const orders = [
//     { quantity: 2, item: { name: 'T-Shirt', price: 25 } },
//     { quantity: 1, item: { name: 'Keyboard', price: 75 } },
//     // Maybe there was a bug and a order with a null `item` ended up in the database!
//     { quantity: 2, item: null }
//   ];

// const fil = orders.filter(order => order.item !== null).map(order => order.item)
// console.table(fil);

const items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
  
  // sort by value
const values = items.sort(function (a, b) {
    return a.value - b.value;
});
console.table(values)
  // sort by name
const names = items.sort(function (a, b) {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        console.log("-1 nameA: " + nameA + ", nameB: " + nameB)
        return -1;
    }
    if (nameA > nameB) {
        console.log("1 nameA: " + nameA + ", nameB: " + nameB)
        return 1;
    }
  
    // names must be equal
    return 0;
});
console.table(names)
