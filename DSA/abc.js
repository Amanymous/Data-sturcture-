// const arr = [1,2,3,4,5]
// const res = arr.reduce((accum,curr,index,array)=>{
//     let total = accum += curr
//     debugger
//     // const len = array.length-1
//     // console.log("len",len);
//     if(index ===  array.length-1){
//         return total/array.length
//     }
//     return total
// })
// // const a =arr.length -3
// console.log(arr.indexOf(4,-2));

// let strangerThings = [{
//     name: 'Dustin',
//     age: 13,class:10
//   }, {
//     name: 'Mike',
//     age: 12,class:10
//   },
//   {
//     name: 'Eleven',
//     age: 11,class:10
//   }];
  
//   let characters = strangerThings.map(data => ({
//     name: data.name,
//     main: data.age,
//     // base: data.class
//   }));
// // let data = strangerThings.map((x)=>{ return x })
// console.log(characters);

// let arr = [1,2,3,4,5]

// function square(...args){
//   for(const i=0; i<=args.length; i+=1){
//     console.log(args[i]*args[i]);
//     return args[i]*args[i]
//   }
//   // return args[1]*args[2]
// }
// let newArr = arr.map((x,i)=>{
//   console.log("x:",x,"i:",i);
//   return square(x,i)
// })
// console.log({newArr});

// let arr = [1,2,3,4,5]

// function square(...args){
//   for(const i of args){
//     return i*i
//   }
//   // return args[1]*args[2]
// }
// let newArr = arr.map((x,i,arr)=>{
//   console.log("x:",x,"i:",i,"arr:",arr);
//   return square(x,i)
// })
// console.log({newArr});

// const arr = [1,2,3,4,5]
// const newArr = []
// arr.forEach((item)=>{
//   newArr.push(item+1)
// })
// console.log(newArr);

// arr.forEach(item=>newArr.push(item+10))

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(item => {
//     if(item == 3) {
//         arr.shift();
//     }
//     console.log(item);
// });

// const object1 = {};
// object1.property1 = 42;
// console.log(object1);
// console.log(object1.hasOwnProperty('property'));

// let things = [{
//   name: 'Dustin',
//   age: 13
// }, {
//   name: 'Mike',
//   age: 12
//   },
//   {
//     name: 'Eleven',
//     age: 11
//   }];
// for(const name in things){
//   if(things.hasOwnProperty(name)){
//     console.log(things[name]);
//   }
// }

// let arr = [
//   {enrollnumber: 18, name: 'Shree'}, 
//   {enrollnumber: 21, name: 'Krunal'},
//   {enrollnumber: 22, name: 'Rushikesh'}
// ];
// let mappedArrayObj = arr.map(obj=>({
//   e:obj.enrollnumber,
//   n:obj.name

// }))
// console.log(mappedArrayObj);

  
//   let characters = strangerThings.map(data => ({
//     name: data.name,
//     main: data.age,
//     // base: data.class
//   }));

// const cart = {
//   userId:2135,
//   item:[
//     {
//       productId:12,
//       productPrice:12
//     },
//     {
//       productId:122,
//       productPrice:122
//     },

//   ],
//   totalPrice:123
// }
// console.log(JSON.parse(JSON.stringify(cart)));
// const winner = ['a','v','a','c']
// const res = new Set(winner)
// console.log(res);

// const cache = {}

// async function fetchData(url){
//   console.log("dkjj");
//   const data = await fetch(url).then((res)=>res.json())
//   console.log("data:",data);
//   cache[url] = data
//   return data
// }

// const res = (async function(){
//   await fetchData('https://jsonplaceholder.typicode.com/comments/1')
//   await fetchData('https://jsonplaceholder.typicode.com/comments/2')
//   await fetchData('https://jsonplaceholder.typicode.com/comments/3')
// })
// const res1  =  fetchData()
// console.log("res:",res,"fetchData:", res1);

// const srcObject = {
//   name:"aman",
//   title:"Kingsman",
// }
// let map = new Map(Object.entries(srcObject))
// console.log(map.get(name));

// const aboutAuthor = new WeakMap()
// const currentAge = {}
// const currentCity = {}

// aboutAuthor.set(currentAge,30)
// aboutAuthor.set(currentCity,"Karachi")
// console.log(aboutAuthor.has(currentAge));
// let star = ""
// for(let i = 0; i<=10; i++){
//   for(let j = 0; j <= i; j++){
//     console.log("*");
//   }
//   console.log("*");
// }

function add(...num){
  let total = 0
  num.map((n)=>{
    total += n + " "
    console.log(total);
    return total || {}
  })

  return total
}
console.log(add(1,2,2));