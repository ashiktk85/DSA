function isPrime(n) {
    if(n < 2) {
        return false;
    } 
    for(let i = 2 ; i < Math.sqrt(n); i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(5))
console.log(isPrime(7))
console.log(isPrime(0))

// Big O = O(n) - linear complexity
// if a number is composite its common factor in divisible , so we can only itrearate upto square root of that number ,
// ie : 24 = 4 * 6, 4 and 6 are divisble  no need to check all iteration.
// n = 1000 , only check upto 100 , sqrt of 1000 = 100; 
// so , the Big O = O(sqrt (n))