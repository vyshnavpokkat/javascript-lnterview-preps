const LargestNumber = (arr) => {
    let a=arr[0];
    for (let i=1;i<=arr.length;i++)  {
        if (arr[i]>a){
            a=arr[i]
        }
    } 
    return a
}

const LargestNumber2 = (arr) => {
    const res=Math.max(...arr)
    return res
}

console.log(LargestNumber2([2,3,4,5,3,23,3,4,444,79,22]));
