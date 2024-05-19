function bubbleSort(nums)  {
    let endSearch;

    do {
      endSearch = false;
      for(let i = 1; i < nums.length - 1; i++) {
        if(nums[i] > nums[i + 1]) {
          let temp = nums [i];
          nums[i] = nums[i + 1];
          nums[i + 1] = temp;
          endSearch = true;
        }
      }
    } while(endSearch);

    return nums
    
}

console.log(bubbleSort([1,-2,44,9,0,-10,99,1000,1]))