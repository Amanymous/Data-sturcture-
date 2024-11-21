const palindrome = (x)=>{
    x = x.toString();
    return x == x.split('').reverse().join('');
    
}
console.log(palindrome(mama));