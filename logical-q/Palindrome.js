let palindromeCheck=(str)=>{
    const rev = str.toLowerCase().split('').reverse().join('')
    return rev === str.toLowerCase() ? true : false
}
console.log(palindromeCheck("vyshnav"));
console.log(palindromeCheck("Malayalam"));