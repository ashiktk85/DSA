function fibonacciRecrsive(m) {
    if(m < 2) {
        return m;
    }
    return fibonacciRecrsive(m - 1) + fibonacciRecrsive(m - 2)
}

console.log(fibonacciRecrsive(0))
console.log(fibonacciRecrsive(3))
console.log(fibonacciRecrsive(6))

// BIG O =  O(2^n) - recursive;


function fib(m) {
    if(m  < 2) {
        return m;
    }
    return fib(m-1) + fib(m -2)
}



//********************************************************************************************************************************************** */


// recursive factorial

function factorial(n) {
   if(n === 0) {
    return 1;  // 0! == 1
   }
    return n * factorial(n -1); // n = n * (n-1)!
}

console.log(factorial(0));
console.log(factorial(3));
console.log(factorial(5));

// big o = O(n) - linear
// if n = 1 , function calls 1 time, n=2 function calls 2 times and so on...


function substr(m) {
    if(m.length == 0) {
        return m
    } else {
        return substr(s.substr(1) + s.CharAt(0))
    }
}