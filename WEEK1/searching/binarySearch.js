// finding target element


function binarySearch(arr , target) {
let leftIndex = 0;
let rightIndex = arr.length - 1;

while(leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2) ;
    if(arr[middleIndex] === target) {
        return middleIndex;
    } 
    if(target > arr[middleIndex]) {
        leftIndex = middleIndex + 1;
    } else {
        rightIndex = middleIndex - 1;
    }
}
return -1;

}

console.log(binarySearch([1,2,3,4,5,6,7,8], 7));