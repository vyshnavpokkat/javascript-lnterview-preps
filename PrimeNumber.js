// Find All Prime Numbers Up to a Given Number
const PrimeFilter = (limit) => {
    for (let i = 2; i < limit; i++) {
        let isPrime=true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) { 
                isPrime = false 
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}
PrimeFilter(10)