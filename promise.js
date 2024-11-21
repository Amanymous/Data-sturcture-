/**
 * @Example_1
 */

// let p = new Promise((resolve,reject)=>{
//     let a  = 1+1;
//     if(a == 2){
//         resolve("Success!");
//     }else{
//         reject("Error: " + a);
//     }
// })
// p.then((message)=>{

//     console.log("This is then " + message);
    
// }).catch((message)=>{
//     console.log("This is catch"+ message);
// })

/**
 * @Example_2
 */

// const userLeft = false;
// const userWatchingCateMeme = true;

// function watchTutorialCallback(callback,errorCallback) {
//     if(userLeft){
//         errorCallback({
//             name: 'User Left',
//             message: ':('
//         })
//     } else if(userWatchingCateMeme){
//         errorCallback({
//             name: 'User Watching Cat Meme',
//             message: 'WebDevSimplified < cat'
//         })
//     }else{
//         callback('Thumbs up and subscribe')
//     }
// }

// watchTutorialCallback((message)=>{
//     console.log("Success:"+ message);
// },(error)=>{
//     console.log(error.name + ' ' + error.message);
// })

/**
 * @Example_3
 */


// const userLeft = false;
// const userWatchingCateMeme = true;

// function watchTutorialPromise(){
//     return new Promise((resolve,reject)=>{
//         if(userLeft){
//             reject({
//                 name: 'User Left',
//                 message: ':('
//             })
//         }else if(userWatchingCateMeme){
//             reject({
//                 name: 'User Watching Cate Meme',
//                 message: 'WebDevSimplified < cat'
//             })
//         }else{
//             resolve('Thumbs Up and Subscribe')
//         }

//     })
// }
// watchTutorialPromise().then((message) => {
//     console.log("Watching for changes..."+ message);
// }).catch((error) => {
//     console.log(error.name+ " Failed message " + error.message);
// })


/**
 * @Example_4
 */

const add = new Promise((resolve, reject) => {
    let a = 1+1
    resolve('Add:'+a)
})

const sub = new Promise((resolve, reject) => {
    let a = 3-1
    resolve('Subtract:'+a)
})

const mult = new Promise((resolve, reject) => {
    let a = 3*4
    
    if(a > 9){
        reject('Multiplay must  be greater than 9')
    }else{
        resolve('Multiplay:'+a)
    }
})

Promise.all([
    add,sub,mult
]).then((message)=>{
    console.log("Success"+message);
}).catch((error)=>{
    console.log("Error: " + error);
})

// promise.race ma jo sab sy phely ay ga wohi run hoga
// Promise.race([
//     add,sub,mult
// ]).then((message)=>{
//     console.log("Success"+message);
// }).catch((error)=>{
//     console.log("Error: " + error);
// })