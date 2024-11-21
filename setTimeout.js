// function a(){
//     for (var i=0; i<=3; i++) {
//         setTimeout(function(){
//             console.log(i);
//         },i*2000)
//     }
// }
// console.log(a());
function a(){
    for(var i = 0; i < 3; i++) {
        function timer(){ // create a unique function (scope) each time
           var k = i; // save i to the variable k which
           setTimeout(()=>{
              console.log(k);
           },k*2000);
        }
        timer();
     }
}
a()