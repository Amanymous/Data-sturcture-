// let arraOfObject = [
//   { id: 1, name: "Anas" },
//   { id: 1, name: "Anas" },
//   { id: 1, name: "Anas" },
//   { id: 1, name: "Anas" },
//   { id: 1, name: "Anas" },
//   { id: 1, name: "Anas" },
//   { id: 1, name: "Anas" },
//   { id: 2, name: "Anasqq" },
//   { id: 1, name: "Anas" },
// ];

// let newArr = arraOfObject.map((obj) => {
//   if (obj.id === 2) {
//     return {
//       ...obj,
//       id: 1,
//     };
//   }
//   return obj
// });
// console.log(newArr);

// var arraOfObject = [
//   { id: 1, name: "Anas" },
//   { id: 2, name: "Hussain" },
//   { id: 3, name: "Ali" },
//   { id: 4, name: "Sara" },
//   { id: 5, name: "Ayesha" },
//   { id: 6, name: "Fatima" },
//   { id: 7, name: "Khadija" },
//   { id: 8, name: "Zainab" },
//   { id: 9, name: "Maryam" },
// ];

// var arr = [];

// for(let i = 0; i<arraOfObject.length; i+=3){
//     arr.push(
//         [
//             arraOfObject[i]
//         // ,arraOfObject[i+1]
//         // ,arraOfObject[i+2]
//     ]
//     )
// }
// console.log(arr);

const arrayOfObjects = [
    {id: 1, name: "Anas"},
    {id: 1, name: "Anas"},
    {id: 1, name: "Anas"},
    {id: 1, name: "Anas"},
    {id: 1, name: "Anas"},
    {id: 1, name: "Anas"},
    {id: 1, name: "Anas"},
    {id: 1, name: "Anas"},
    {id: 1, name: "Anas"},
  ];
  
  const result = [];
  let currentArray = [];
  
  arrayOfObjects.forEach((obj, index) => {
    if (index % 3 === 0) {
      currentArray = [obj];
      result.push(currentArray);
    } else {
      const lastArray = Math.floor(index / 3);
      result[lastArray] = result[lastArray].concat(obj);
    }
  });
  
  console.log(result);
  
