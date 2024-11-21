// const findTwoSum = function(nums,target){
//     for(let p1=0; p1<nums.length; p1++){
//         console.log({ p1, value: nums[p1]});
//         const findNum = target-nums[p1]
//         console.log({ findNum })
//         for(let p2 = p1+1; p2<nums.length; p2++){
//             console.log({ p2, value: nums[p2] })
//             if(nums[p2] === findNum){
//                 return [[p1] , [p2]]
//             }
//         }
//     }
//     return null;
// }

// console.log(findTwoSum([1,3,7,10,1],11))

const sum = (nums,target)=>{
    const numMap={}
    for(let i = 0; i<nums.length; i++){
        console.log("nums:",nums[i]);
        const currentValue = numMap[nums[i]]
        console.log("Current value",{currentValue})
        if(currentValue >=0){
            // console.log("currentValue:",currentValue,"i:",i)
            return [currentValue,i]
        }
        else{
            const findNum = target - nums[i]
            numMap[findNum] = i
            console.log("NumMap:",{ numMap });
        }
    }
    return null
}

console.log(sum([1,3,7,10,1],11))