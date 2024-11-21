/**
 * @Rotate_an_array_k_times
 * @param {number} k = 3
 * @return {void} Do not return anything, modify num in-place instead.
 */


// var rotate = function(nums,k){
//     reverse = (nums,start,end)=>{
    
//         while(start<end){
//             let temp = nums[start]
//                 nums[start] = nums[end]
//                 nums[end] = temp
//             start++;
//             end--;
//         }
//     }
//     k = k % nums.length;
//     reverse(nums, 0, nums.length - 1)
//     reverse(nums, 0, k-1)
//     reverse(nums, k, nums.length -1)
// }
// // let nums=[1,2,3,4,5,6,7],k=3
// console.log(rotate([1,2,3,4,5,6,7],3))

// var rotate = function (arr, numberOfShifts) {
//     let tmp = 0;
//     const leng = arr.length;
//     numberOfShifts = numberOfShifts % leng;
//     for (let i = 0; i < numberOfShifts; i++) {
//        tmp = arr.pop();
//        console.log(tmp)
//        arr.unshift(tmp);
//     }
//    return arr;
//   };
//   console.log(rotate([1,2,3,4,5],3))
//   console.log(rotate([1,2,3,4],3))

const rotate_alphbate = (arr,numberOfShifts) => {
    // let temp = 0;
    // const len = arr.length;
    // numberOfShifts = numberOfShifts % len;
    console.log("numberOfShifts",numberOfShifts)
    for (let i = 0; i < numberOfShifts; i++)  {
        
        let temp = arr.pop()
        console.log(temp)
        arr.unshift(temp)
    }
    return arr
}
console.log(rotate_alphbate(['a','b','c','d','x','y','z'],2))





