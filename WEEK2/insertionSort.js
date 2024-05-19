function insertionSort(nums) {
    for(let i = 1; i < nums.length; i++) {
        let temp = nums[i];
        let j = i - 1;
        while(j >= 0 && nums[j] > temp){
            nums[j + 1] = nums[j];
            j = j - 1;
        }
        nums[j + 1] = temp;
    }
    return nums;
}

console.log(insertionSort([1,3,5,6,-3,100,3]))
