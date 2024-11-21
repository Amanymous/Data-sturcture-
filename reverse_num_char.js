// const reverse = n => (n < 0 ? -1 : 1) * +("" + Math.abs(n)).split``.reverse().join``;
// console.log(reverse(123))

/**
 * @param {number} x
 * @return {number}
 */

// var reverse = function(x) {
//     let rev = 0
//     let pop;
//     while(x!=0){

//     pop = x%10
//     x = x/10
//     x = parseInt(x)
//     rev = rev *10 + pop
//     }
//     if(rev > 0x7FFFFFFF) {
//         return 0
//     }
//     if(rev < -0x7FFFFFFF) {
//         return 0
//     }
//     return rev
// };
// reverse(123)

// console.log("reverse integer",reverse(-123))

// const reverse = (num) =>{
//     let myRevnum = num.toString().split('').reverse().join("")
//     if(myRevnum.endsWith("-")){
//         myRevnum = "-" + myRevnum
//         return parseInt(myRevnum)
//     }
//     else{
//         return parseInt(myRevnum)
//     }
// }
// console.log("reverse integer",reverse(-123))

const reverse = (x) =>{
    const  limit = 2147483648
    const negativeTest = x < 0 ? -1 : 1
    x = x.toString()
    let result = ""
    for(let i of x){
        result = i + result
        result = parseInt(result)
        return  result > limit ? 0 : result * negativeTest
    }
}
console.log("reverse integer",reverse(123))