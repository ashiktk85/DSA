function selectionSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        let min = i;

        for(let j = i + 1;j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        [arr[i] , arr[min]] = [arr[min], arr[i]]
    }
    return arr;
}

console.log(selectionSort([9,4,5,6,3,7,2,1]))










            