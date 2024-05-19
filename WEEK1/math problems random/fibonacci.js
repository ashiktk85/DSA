function fibonacci(n) {
    let arr = [0, 1];
    for(let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
}

console.log(fibonacci(10));

//  Big O = O(n) - Linear as it contain only single loop.