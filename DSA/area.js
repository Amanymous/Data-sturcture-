/**
 * Your are given array of positive integers
 * where each integer repersents the height
 * of a veritcal line on a chart.Find two
 * lines which together with the x-axis
 * forms a container that would hold the 
 * greatest amount of water.Return the area of 
 * water it would hold.
 * =============Test Cases=============
 * 
 * 
 * 
 * ---------------------------------
 * area = l*w
 * for Example Array = [7,1,2,3,9]
 * Here 7 will be length and 9 will be height
 * area = min(a,b) * (bi - ai)
 * Dry run:
 * 1)
 * For Index 0 Value 7 
 * maxArea = 0
 * min(7,1) * (1-0) = 1 // here 7 is array 1st value 
 * and 1 is the min value in the array and after * (1-0)
 * repersent the indice number mean index position
 * 7 repersent to 0 index and 1 repersents to 1 index
 * 
 * 2)
 * maxArea = 1
 * min(7,2) * (2-0) = 4
 * 
 * 3)
 * maxArea = 4
 * min(7,3) * (3-0) = 9
 * 
 * 4)
 * maxArea = 9
 * min(7,9) * (4-0) = 28
 * maxArea = 28
 * 
 * For Index 1 Value 1
 * 1)
 * maxArea = 28
 * min(1,2) * (2-1) = 1
 * 
 * 2)
 * maxArea = 28
 * min(1,3) * (3-1) = 2
 * 
 * 3)
 * maxArea = 28
 * min(1,9) * (4-1) = 3
 * 
 * For Index 2 Value 2
 * 1)
 * maxArea = 28
 * min(2,3) * (3-2) = 1
 * 
 * 2)
 * maxArea = 28
 * min(2,9) * (4-2) = 4
 * 
 * For Index 2 Value 2
 * 1)
 * maxArea = 28
 * min(2,3) * (3-2) = 2
 * 
 * 2)
 * maxArea = 28
 * min(2,9) * (4-2) = 4
 * 
 * For Index 3 Value 3
 * maxArea = 28
 * min(3,9) * (4-3) = 3
 * 
 */

const getMaxWater = (heights) =>{
    let maxArea = 0
    for(let p1=0; p1<heights.length; p1++){
        for(let p2=p1+1; p2 < heights.length; p2++){
            const height = Math.min(heights[p1],heights[p2])
            console.log(Math.max(heights[p1],heights[p2]));
            console.log(Math.max(heights[p1],maxArea));
            const width = p2-p1
            const area = height * width
            maxArea = Math.max(maxArea,area)
            // if(heights[p1] && heights[p2]) return [(heights[p1]) , heights[p2]]
        }
    }
    return maxArea
}
console.log(getMaxWater([7,1,2,3,9]))

// function area(){
//     // var arr = [7,1,2,3,9] 
//     // console.log(arr.reduce((e,m)=>e > m ? e : m,0));

//     let arr = [4, 5, 6, 7, 8, 9, 10];
// temp = 0;

// arr.forEach((element) => {
//   if (temp < element) {
//      temp = element
//   }
// });

// console.log(`The largest number in the array: ${temp}`);
// }

// area()