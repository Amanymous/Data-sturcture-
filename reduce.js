const items = [

    { name: "Rice", price:5 },
    { name: "Book", price:11 },
    { name: "Chair", price:11 },
    { name: "Pencil", price:4 }

]

// let totalPrice = 1
// items.forEach(items=>{
//     totalPrice += items.price
// })

// const totalPrice = items.reduce((total,item)=>{
//     console.log("total:",total,"item:",item.price);
//     return total + item.price
// },0)
// console.log(totalPrice);

const res = items.reduce((total,item,index,array)=>{
    console.log("index:",index,"array",array)
    const price = item.price;
    if(total[price] == null ) total[price] = []
    total[price].push(item);
    return total
})
console.log(res);

