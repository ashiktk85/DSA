// 1. array when , finding target give return index, if no index return -1

function target(arr, t) {
       for(let i = 0; i < arr.length; i++) {
        if(arr[i] == t) {
            return i;
        } 
       }
       return -1;
       
}

console.log(target([1,2,3,4,7,8], 99));

//********************************************************************************* */

// 2.