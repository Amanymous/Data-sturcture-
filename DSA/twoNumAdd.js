/**
 * Given an array of integers, return the indicies
 * of the two numbers that add up to a given target.
 * ====Test Cases========
 * 1)All the numbers are positive
 * 2)Are there Duplicate Numbers in the array
 * 3)All Values must be unique and poisitve integer
 * 4)Return Null if no solution
 * 5)Only 1 pair of number will be add up to the target
 * Example:-target=11 a)[1,3,7,9,2] here 9+2 makes 11
 *                    b)[1,3,7,9,2,4] here 7+4 and 9+2 makes 11
 *                    So we have to follow a) option strategy    
 */
const findTwoSum = function(nums,target){
    for(let p1=0; p1<nums.length; p1++){
        console.log({ p1, value: nums[p1]});
        const findNum = target-nums[p1]
        console.log({ findNum })
        for(let p2 = p1+1; p2<nums.length; p2++){
            console.log({ p2, value: nums[p2] })
            if(nums[p2] === findNum){
                return [p1,p2]
            }
        }
    }
    return null;
}

console.log(findTwoSum([1,3,7,10,1],11))

// const findTwoSum = function(nums,target){
//     const numsMap = {};
//     for(let p1 = 0; p1 < nums.length; p1++){
//         const currentValue = numsMap[nums[p1]];
//         if(currentValue >= 0){
//             return [currentValue,p1]
//         }
//         else{
//             const findNum = target - nums[p1]
//             numsMap[findNum] = p1
//         }
//  }
//     return null;
// }
// console.log(findTwoSum([1,3,7,9,1],11))