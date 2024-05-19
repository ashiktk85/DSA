function isPower(n) {
    if(n < 1) {
        return false;
    }
    while(n > 1) {
        if(n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }
    return true;
}
console.log(isPower(2));
console.log(isPower(16));
console.log(isPower(10));

// Big O = O(logn) , in each iteration the input value divides by half , the input is not prportionate .



// BIT WISE to get constant complexity
function ispoweBit(n) {
    if(n < 1) {
        return false;
    }
    return (n & (n - 1)) === 0 
}

console.log(ispoweBit(2));
console.log(ispoweBit(16));
console.log(ispoweBit(10));

// Big o is O(1) , constant , here we use AND opearation 
// eg ; if n = 3 ; bit of n = 100 , n -1 (2) = 10 
// 100 AND 10 = 1 // 1 AND 1 = 1 , rest cases are 0 
