
let arr1 = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	},{
		color: "orange",
		value: "#000"
	},
    {
		color: "white",
		value: "#000"
	},
    // {
	// 	color: "grey",
	// 	value: "#000"
	// }
]

// let newArr = []
// for(let i = 0; i < arr.length; i++){
//     newArr.push(
//         arr[i],arr[i+1],arr[i+2]
//     )
// }
// console.log("===",newArr);

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

// for(let i = 0; i<arr1.length; i+=3){
//     arr.push(
//         [
//             arr1[i]
//         ,arr1[i+1]
//         ,arr1[i+2]
//     ]
//     )
// }
// console.log(arr);

// const colors = [	{ color: "red", value: "#f00" },	{ color: "green", value: "#0f0" },	{ color: "blue", value: "#00f" },	{ color: "cyan", value: "#0ff" },	{ color: "magenta", value: "#f0f" },	{ color: "yellow", value: "#ff0" },	{ color: "black", value: "#000" },	{ color: "orange", value: "#000" },	{ color: "white", value: "#000" }];

// const chunks = [];
// for (let i = 0; i < colors.length; i += 3) {
//   chunks.push(colors.slice(i, i + 3));
// }

// console.log(chunks);


// const colors = [
//     { color: "red", value: "#f00" },
//     { color: "green", value: "#0f0" },
//     { color: "blue", value: "#00f" },
//     { color: "cyan", value: "#0ff" },
//     { color: "magenta", value: "#f0f" },
//     { color: "yellow", value: "#ff0" },
//     { color: "black", value: "#000" },
//     { color: "orange", value: "#000" },
//     { color: "white", value: "#000" }
//   ];
  
//   const chunks = Array.from(
//     { length: Math.ceil(colors.length / 3) },
//     (_, i) => colors.slice(i * 3, i * 3 + 3)
//   );
  
//   console.log(chunks);
  
// const colors = [  { color: "red", value: "#f00" },  { color: "green", value: "#0f0" },  { color: "blue", value: "#00f" },  { color: "cyan", value: "#0ff" },  { color: "magenta", value: "#f0f" },  { color: "yellow", value: "#ff0" },  { color: "black", value: "#000" },  { color: "orange", value: "#000" },  { color: "white", value: "#000" }];

// const chunks = colors.map((_, i, arr) => i % 3 === 0 ? arr.slice(i, i + 3) : null)
//                       .filter(chunk => chunk);

// console.log(chunks);

const colors = [  { color: "red", value: "#f00" },  { color: "green", value: "#0f0" },  { color: "blue", value: "#00f" },  { color: "cyan", value: "#0ff" },  { color: "magenta", value: "#f0f" },  { color: "yellow", value: "#ff0" },  { color: "black", value: "#000" },  { color: "orange", value: "#000" },  { color: "white", value: "#000" }];

// const chunkSize = 3;
// const chunks = colors.reduce((acc, color, i) => {
//   const chunkIndex = Math.floor(i / chunkSize);
//   if (!acc[chunkIndex]) {
//     acc[chunkIndex] = [];
//   }
//   acc[chunkIndex].push(color);
//   return acc;
// }, []);

// console.log(chunks);

// const colors = [  { color: "red", value: "#f00" },  { color: "green", value: "#0f0" },  { color: "blue", value: "#00f" },  { color: "cyan", value: "#0ff" },  { color: "magenta", value: "#f0f" },  { color: "yellow", value: "#ff0" },  { color: "black", value: "#000" },  { color: "orange", value: "#000" },  { color: "white", value: "#000" }];

// const chunkSize = 3;
// const chunks = [];
// let i = 0;

// while (i < colors.length) {
//   chunks.push(colors.slice(i, i + chunkSize));
//   i += chunkSize;
// }

// console.log(chunks);

// const colors = [
//     { color: "red", value: "#f00" },
//     { color: "green", value: "#0f0" },
//     { color: "blue", value: "#00f" },
//     { color: "cyan", value: "#0ff" },
//     { color: "magenta", value: "#f0f" },
//     { color: "yellow", value: "#ff0" },
//     { color: "black", value: "#000" },
//     { color: "orange", value: "#000" },
//     { color: "white", value: "#000" }
//   ];
  
//   const chunkSize = 3;
//   const chunks = colors.reduce((acc, color, i) => {
//     const index = Math.floor(i / chunkSize);
//     return acc.set(index, [...(acc.get(index) || []), color]);
//   }, new Map()).getValues().map(chunk => chunk);
  
//   console.log(chunks);

// const colors = [  { color: "red", value: "#f00" },  { color: "green", value: "#0f0" },  { color: "blue", value: "#00f" },  { color: "cyan", value: "#0ff" },  { color: "magenta", value: "#f0f" },  { color: "yellow", value: "#ff0" },  { color: "black", value: "#000" },  { color: "orange", value: "#000" },  { color: "white", value: "#000" }];

// const chunkSize = 3;
// const chunks = [];
// let chunkIndex = 0;

// colors.forEach((color, i) => {
//   if (i % chunkSize === 0) {
//     chunks[chunkIndex] = [];
//   }
//   chunks[chunkIndex].push(color);
//   if (chunks[chunkIndex].length === chunkSize) {
//     chunkIndex++;
//   }
// });

// console.log(chunks);

// const colors = [
//     { color: "red", value: "#f00" },
//     { color: "green", value: "#0f0" },
//     { color: "blue", value: "#00f" },
//     { color: "cyan", value: "#0ff" },
//     { color: "magenta", value: "#f0f" },
//     { color: "yellow", value: "#ff0" },
//     { color: "black", value: "#000" },
//     { color: "orange", value: "#000" },
//     { color: "white", value: "#000" }
//   ];
  
//   const chunkSize = 3;
//   const chunks = colors.filter((color, i) => {
//     return i % chunkSize === 0;
//   }).map((_, i) => {
//     return colors.slice(i * chunkSize, i * chunkSize + chunkSize);
//   });
  
//   console.log(chunks);
  
  
// const chunks = colors.filter((color, i) => {
//     return i % chunkSize === 0;
//   }).map((unused, i) => {
//     return colors.slice(i * chunkSize, i * chunkSize + chunkSize);
//   });
  
// const chunkArray = (array, chunkSize) => {
//     return new Promise((resolve, reject) => {
//       if (!Array.isArray(array)) {
//         reject(new Error('First argument must be an array'));
//       }
  
//       const result = [];
//       for (let i = 0; i < array.length; i += chunkSize) {
//         result.push(array.slice(i, i + chunkSize));
//       }
//       resolve(result);
//     });
//   };
  
//   const colors = [
//     { color: "red", value: "#f00" },
//     { color: "green", value: "#0f0" },
//     { color: "blue", value: "#00f" },
//     { color: "cyan", value: "#0ff" },
//     { color: "magenta", value: "#f0f" },
//     { color: "yellow", value: "#ff0" },
//     { color: "black", value: "#000" },
//     { color: "orange", value: "#000" },
//     { color: "white", value: "#000" }
//   ];
  
//   const chunkSize = 3;
  
//   chunkArray(colors, chunkSize)
//     .then(result => console.log(result))
//     .catch(error => console.error(error));
  