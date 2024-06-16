let limit=10;
const fibonacciSeries=(limit)=>{
    let a=0, b=1,c;
    for ( let i=0 ; i<limit ; i++){
        console.log(a);
        c=b;
        b=a+b;
        a=c;
    }
}
// fibonacciSeries(limit)

// nth fibonacciSeries number
const fibonacciSeriesNthNumber=(num)=>{
    let a=0,b=1,c;
    for(let i=1 ; i<=num ; i++){
        c=b;
        b=a+b;
        a=c;
    }
    return a
}
// console.log(fibonacciSeriesNthNumber(3)); 

function fibonacciRecc(n) {
    if (n <= 1) return n;
    return fibonacciRecc(n - 1) + fibonacciRecc(n - 2); /*recurtion method*/
}

console.log(fibonacciRecc(11))