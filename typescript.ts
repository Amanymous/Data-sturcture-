// For Number
const palindromeNumber = (x:string)=>{
    x = x.toString();
    return x == x.split('').reverse().join('');
    
}
console.log(palindromeNumber('12'));
// For String
function Palindrome(x:string){

    let strReverse = x.split("").reverse().join("");

    if (x === strReverse) {
        return "is true"
    } else {
        return "false"
    }
}
console.log(Palindrome('man'))